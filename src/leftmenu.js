import React, { Component } from 'react';
import { Row, Image, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import logo from "./studentJS/img/logo_transparente.png"


const menuClientUser = ["Dashboard","Perfil Colegio"] 
const menuClientAdmin = ["Dashboard","Perfil Colegio","Registrar Usuarios"] 
const menuAdmin = ["Dashboard","Perfil Clientes","Administrar Usuarios"]


class LeftMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "John Snow",
            institution: "Wavern",
            active: -1,
            links: [],
        }
        this.clkLink = this.clkLink.bind(this);
    }

    componentDidMount(){
        
            this.props.loader(false);
          }

    render(){

        const { firstName, lastName, typeUser, institution , role} = this.props.user
        
        var links = []

        if(this.props.user !== undefined){
            
            if(typeUser==="Cliente-Admin"){
                links = menuClientAdmin
            }
            else if(typeUser==="Cliente-User"){
                links = menuClientUser
            }
            else if(typeUser==="Administrador"){
                links = menuAdmin
            }
        }
        return (
            <div className="LeftMenu">
            <Row>
                <Col xs={6} md={12} style={{paddingTop:"5%", paddingBottom:"7%"}}>
                <img src={logo} width="100%" alt="imagen no disponible"/>
                </Col>
                <Col xs={6} md={12} >
                    
                    <b>Bienvenido/a:</b>
                    <p>{firstName + " " + lastName}</p>
                    { typeUser==="Client"?
                        (<div><b>Establecimiento:</b><p>{institution}</p></div>)
                        :
                        (<div><b>Empresa:</b><p>{institution}</p></div>)
                    }
                    <b>Cargo: </b>
                    <p>{role}</p>

                    <a className="link-label" href="#login"><b onClick={()=>(this.props.logout())}> LogOut</b></a>
                </Col>
            </Row>
        
                <br/>
                <ListGroup className="NoMargin">
                    {
                        links.map((link, index) => (
                            <ListGroupItem key={index} id={index === this.state.active ? "button-active":"b" + index} className="link-button" onClick={()=>this.clkLink(index, link)} >
                                {link}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
                
        )
    }
    
    clkLink(index, name){
        this.setState({active:index})
        this.props.click(name)
    }
}
export default LeftMenu;