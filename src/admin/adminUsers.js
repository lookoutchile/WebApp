import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import DefaultTable from './tableDefault'
import ConfirmUser from './confirmUser'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import FormUser from './formUser'

class TableAdminUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            requests: [],
            offers: [],
            showEdit: false,
            editValues: null,
        }
        this.show.bind(this)
        this.accept.bind(this)
        this.reject.bind(this)
    }

    show(data) {
        console.log(data)
    }

    accept(data) {
          
        this.props.store.collection("users").doc(data.id).set(
            { 'status': "Activo" },
            { merge: true }
        ).then(()=>{
            confirmAlert({
                title: 'Usuario Activado',
                buttons: [
                  {
                    label: "Entendido",
                    onClick: () => {
                        return;
                    }
                }]
            })},()=>{
                confirmAlert({
                    title: 'Error! Usuario no Activado',
                    buttons: [
                      {
                        label: "Entendido",
                        onClick: () => {
                            return;
                        }
                    }]
                })

            } )
        }
    


    reject(data) {
        this.props.store.collection("users").doc(data.id).set(
            { 'status': "Inactivo" },
            { merge: true }
        ).then(()=>{
            confirmAlert({
                title: 'Usuario Desactivado',
                buttons: [
                  {
                    label: "Entendido",
                    onClick: () => {
                        return;
                    }
                }]
            })},()=>{
                confirmAlert({
                    title: 'Error! Usuario no Desactivado',
                    buttons: [
                      {
                        label: "Entendido",
                        onClick: () => {
                            return;
                        }
                    }]
                })

            } )
        }
    
    edit(data){

        const value = !this.state.showEdit;
    
        if (this.state.showEdit){
            confirmAlert({
                title: 'Edición en proceso',
                message: "Usted ya se encuentra editando un usuario.",
                buttons: [
                {
                    label: "Entendido",
                    onClick: () => {
                        window.scrollTo(0, 0)
                    }
                }]})

        }
        else{
            confirmAlert({
                title: 'Editar Usuario',
                message: "Desea editar este perfil?",
                buttons: [
                {
                    label: "Editar",
                    onClick: () => {
                        
                        this.setState({showEdit:value,editValues:data})
                        window.scrollTo(0, 0)
                    }
                },{
                    label: "Volver",
                    onClick: () => {
                        return;
                    }
                }]})
        }
        

        
        
    }

    delete(data) {

        
        this.props.deleteUser(data.id)
        confirmAlert({
            title: 'Eliminar Usuario',
            message: <ConfirmUser data={{
                ...data,
              }} />,
            buttons: [
              {
                label: "Eliminar",
                onClick: () => {
                    this.props.store.collection("users").doc(data.id).delete()
                    .then(()=>{
                        
                        confirmAlert({
                            title: 'Usuario Eliminado',
                            buttons: [
                            {
                                label: "Entendido",
                                onClick: () => {
                                    return;
                                }
                            }]
                        })},()=>{
                            confirmAlert({
                                title: 'Error! Usuario no Eliminado',
                                buttons: [
                                {
                                    label: "Entendido",
                                    onClick: () => {
                                        return;
                                    }
                                }]
                            })
            
                        } )
                    }
                },{
                    label: "Cancelar",
                    onClick: () => {
                    return;
                        }
                    }]})
    }

    changeClicked(this_link){
        this.props.changeClicked(this_link)
    }
        
    undoEdit(){
        if(this.state.showEdit){
            this.setState({showEdit:false})
        }
        
    }
    componentWillMount() {
        this.props.store.collection("users")
            .onSnapshot(
                (docs) => {
                    this.setState({ users: [] })
                    docs.forEach((item) => {
                        const data = item.data()
                        const newItem = {
                            ...data,
                            fullName: data.name + " " + data.lastName,
                            type: data.typeUser,
                            status: data.status,
                            id: item.id
                        }
                        if (newItem.status === "Inactivo"){
                            newItem.btn = (<Button onClick={() => { this.accept(newItem) }}  >&nbsp;&nbsp;Activar&nbsp;&nbsp;&nbsp; </Button>)
                        }
                        else {
                            newItem.btn = (<Button onClick={() => { this.reject(newItem) }}  >Desactivar</Button>)
                        }
                        
                        newItem.btn2 = (<Button onClick={() => { this.edit(newItem) }}  >Editar</Button>)
                        newItem.btn3 = (<Button onClick={() => { this.delete(newItem) }}  >Eliminar</Button>)
                        
                        this.setState({ users: [...this.state.users, newItem] })
                    })

                }
            )
    }
    render() {
        return (
            <div>
                <Row bsclass="box-table row">

                        {this.state.showEdit? (
                            
                            <div>
                                <FormUser user={this.props.user} title="Editar usuario" beforeValues={this.state.editValues} showEdit={this.state.showEdit} cancelEdit={()=>{this.undoEdit()}} goto={(this_link)=>this.changeClicked(this_link)} store={this.props.store} createUser={this.props.createUser} />

                            </div>
                            ) : null}

                    <Col md={12} sm={12} xs={12} key="1">
                        <DefaultTable title="Usuarios" products={this.state.users} columns={colusers} />
                    </Col>
                </Row>
               
            </div>
        )
    }
}
export default TableAdminUser

const colusers = [{
    dataField: 'firstName',
    text: 'Nombre',
    sort: true
},{
    dataField: 'lastName',
    text: 'Apellidos',
    sort: true
}, {
    dataField: 'email',
    text: 'Mail',
    sort: true
}, {
    dataField: 'status',
    text: 'Estado',
    sort: true
}, {
    dataField: 'typeUser',
    text: 'Tipo de usuario',
    sort: true
}, {
    dataField: 'role',
    text: 'Cargo',
    sort: true
}, {
    dataField: 'institution',
    text: 'Institución',
    sort: true
}, {
    dataField: 'btn',
    text: ''
}, {
    dataField: 'btn2',
    text: ''
}, {
    dataField: 'btn3',
    text: ''
}
];
