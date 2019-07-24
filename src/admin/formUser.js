import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import InputText from "../inputs/inputText"
import InputIndustry from "../inputs/inputIndustry"
import InputTypeUser from "../inputs/inputTypeUser"
import InputRut from "../inputs/inputRut"
import InputPass from "../inputs/inputPass"
import InputBank from "../inputs/inputBank"
import Ocurrences from '../functions/ocurrency'
import ConfirmUser from './confirmUser'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


class FormUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'Tipo de Usuario': 'Cliente',
      'Nombre': '',
      'Apellido': '',
      'Contraseña': '',
      'Nombre Empresa': '',
      'Correo Empresa': '',
      'Rut Empresa': '',
      'Rubro': 'Educación',
      'Numero de Cuenta': '',
      'Tipo de Cuenta': '',
      'Banco': '',
      'uid': '',
      message: {},
    }
  }

  changeRoute()
    {
      this.props.goto("Administrar Usuarios")
    }

  updateInputValues() {

    const data = {
      'Nombre': '',
      'Apellido': '',
      'Contraseña': '',
      'Nombre Empresa': '',
      'Correo Empresa': '',
      'Rut Empresa': '',
      'Rubro': 'Educación',
      'Tipo de Usuario': 'Cliente',
      'Tipo de Cuenta': '',
      'Numero de Cuenta': '',
      'Banco': '',
      'uid': '',
    }

    this.setState(data);
    this.refs.inputName.setState({ inputValue: "" })
    this.refs.inputlastName.setState({ inputValue: "" })
    this.refs.inputPassword.setState({ inputValue: "" })
    this.refs.inputCompany.setState({ inputValue: "" })
    this.refs.inputMail.setState({ inputValue: "" })
    this.refs.inputRut.setState({ inputValue: "" })
    this.refs.inputTipoCuenta.setState({ inputValue: "" })
    this.refs.inputNumeroCuenta.setState({ inputValue: "" })
  }

  fillEdit(datos){

        var data = {
      ...datos,
      'Nombre': datos.name,
      'Apellido': datos.lastName,
      'Contraseña': datos.password,
      'Nombre Empresa': datos.company,
      'Correo Empresa': datos.mail,
      'Rut Empresa': datos.rut,
      'Tipo de Usuario': datos.typeUser,

    }

    this.refs.inputName.setState({ inputValue: data["Nombre"] })
    this.refs.inputlastName.setState({ inputValue: data["Apellido"] })
    this.refs.inputPassword.setState({ inputValue: data["Contraseña"] })
    this.refs.inputCompany.setState({ inputValue: data["Nombre Empresa"]})
    this.refs.inputMail.setState({ inputValue: data["Correo Empresa"] })
    this.refs.inputRut.setState({ inputValue: data["Rut Empresa"]})
    this.refs.inputTypeUser.setState({ inputValue : data["Tipo de Usuario"]})

    if (datos.typeUser === "Cliente"){
        data = {...data,
          'Rubro': datos.typeIndustryName,
          'Tipo de Cuenta': datos.typeBankAccount,
          'Numero de Cuenta': data.bankAccount,
          'Banco': datos.bank}

          this.refs.inputTipoCuenta.setState({ inputValue: data["Tipo de Cuenta"] })
          this.refs.inputNumeroCuenta.setState({ inputValue: data["Numero de Cuenta"] })
          this.refs.inputIndustry.setState({ inputValue: data["Rubro"] })
          this.refs.inputBank.setState({ inputValue: data["Banco"] })

    }
    this.setState(data);

  }

  isRutValid(rut){

    rut = rut.replace(".","")
    rut = rut.replace(".","")
    rut = rut.replace("-","")
    // si, 3 veces wn.

    if(rut.length === 9){

      
      var DV = rut[8]
      rut = rut.substring(0,9)

      var factors = [3,2,7,6,5,4,3,2]
      var DV_2 = 0
      var i = 0
      
      factors.forEach((factor) => {
        DV_2 = DV_2 + factor*parseInt(rut[i]);
        i++;
        
      })
      DV_2 = (11-(DV_2%11))+""

      DV_2 = (DV_2 === "11"? "0" : ( DV === "10"? "k" : DV_2))

      if(DV === DV_2){
        return true
      }
    return false   
    }
  }

  validate(inputs){

    var isValid = true
    ///////////////////////////////////////
    // validaciones
    /////////////////////////

    var message = {}

    if (inputs['Nombre'].length < 3) {
      message.inputName = "Ingrese un nombre válido.\n"
      isValid = false;
    }
    if (inputs['Apellido'].length < 3) {
      message.inputlastName = "Ingrese un nombre apellido válido.\n"
      isValid = false;
    }
    if (inputs['Nombre Empresa'].length < 3) {
      message.inputCompany = "Ingrese un nombre de empresa válido.\n"
      isValid = false;
    }
    if (inputs['Correo Empresa'].length < 6 || Ocurrences(inputs['Correo Empresa'], "@") !== 1 || Ocurrences(inputs['Correo Empresa'], ".") < 1) {
      message.inputMail = "Formato de correo invalido.\n"
      isValid = false;
    }
    if (!this.isRutValid(inputs['Rut Empresa'])) {
      message.inputRut = "Formato de rut invalido.\n"
      isValid = false;
    }
    if (inputs['Contraseña'].length < 6) {
      message.inputPassword = "Ingrese una contraseña válida.\n"
      isValid = false;
    }

    if (inputs["Tipo de Usuario"] === "Cliente"){
      if (inputs['Numero de Cuenta'] === undefined) {
        message.inputNumeroCuenta = "Ingrese un numero de cuenta válido.\n"
        isValid = false;
      }
      if (inputs['Tipo de Cuenta'] === undefined) {
        message.inputTipoCuenta = "Ingrese una tipo de cuenta válido.\n"
        isValid = false;
      }
  
    }

    return [isValid,message]
    

  }


  submit(e) {

    e.preventDefault()
    const inputs = this.state

    const datos = {
      name: inputs['Nombre'],
      lastName: inputs['Apellido'],
      password: inputs['Contraseña'],
      company: inputs['Nombre Empresa'],
      mail: inputs['Correo Empresa'],
      rut: inputs['Rut Empresa'],
      typeUser: inputs['Tipo de Usuario'],
      status: "Inactivo",
      uid: '',
    }
  
    if (inputs['Tipo de Usuario'] === "Cliente"){
      
      datos = {...datos,
        typeIndustryName: inputs['Rubro'],
        typeBankAccount: inputs['Tipo de Cuenta'],
        bank : inputs['Banco'],
        bankAccount : inputs['Numero de Cuenta']
      }

    }
    
    const [isValid, message] = this.validate(inputs);
    
    this.setState({ message: message })

    if (isValid) {

      confirmAlert({

        title: 'Confirma la edición del usuario!',
        message: <ConfirmUser data={{
          ...datos,
        }} />,
        buttons: [

          {
            label: 'Enviar',
            onClick: () => {

              this.props.createUser.auth().createUserWithEmailAndPassword(datos.mail, datos.password).then(
                () => {
                  let user = this.props.createUser.auth().currentUser;
                  
                  this.props.store.collection("users").doc(user.uid).set({ ...datos, uid: user.uid }).then(
                    confirmAlert({
                      title: "Usuario creado",
                      message:  "Usted acaba de crear el perfil usuario para la compañía " + datos.company + "\n" +
                      "en la plataforma BRF\n",
                      buttons: [
                        {
                          label: "Entendido",
                          onClick: () => {
                            this.undoEdit();
                            return;
                          }
                            }]
                        }),
                    
                        confirmAlert({

                            title: 'Error! Usuario no creado.',
                            buttons: [
                              {
                                label: 'Entendido',
                                onClick: () => {return;}
                              }]
                            })
                            
                      )
                }
              )
                .catch(e => console.log(e))
              this.updateInputValues()

            }

          },
          {
            label: 'Volver a editar',
            onClick: () => { return; }
          }
        ]
      })
    }
    else {
      return;
    }
  }

edit(e) {

  
    e.preventDefault()
    const inputs = this.state

    console.log(inputs)

    var datos = {
      name: inputs['Nombre'],
      lastName: inputs['Apellido'],
      password: inputs['Contraseña'],
      company: inputs['Nombre Empresa'],
      mail: inputs['Correo Empresa'],
      rut: inputs['Rut Empresa'],
      typeUser: inputs['Tipo de Usuario'],
      status: "Inactivo",
      uid: '',
    }
  
    if (inputs['Tipo de Usuario'] === "Cliente"){
      console.log("cliente adding")
      datos = {...datos,
        typeIndustryName: inputs['Rubro'],
        typeBankAccount: inputs['Tipo de Cuenta'],
        bank : inputs['Banco'],
        bankAccount : inputs['Numero de Cuenta']
      }

    }
    
    const [isValid, message] = this.validate(inputs);
    
    this.setState({ message: message })

    if (isValid) {

      confirmAlert({

        title: 'Confirma la edición del usuario!',
        message: <ConfirmUser data={{
          ...datos,
        }} />,
        buttons: [

          {
            label: 'Enviar',
            onClick: () => {

              this.props.createUser.auth()
                .signInWithEmailAndPassword('cthernandez@uc.cl2', 'cesar4815')
                .then(  (userCredential) => 
                {
                    userCredential.user.updateEmail('wincshark@gmail.com').then(

                        confirmAlert({
                              title: 'Usuario Actualizado',
                              buttons: [
                                {
                                  label: 'Entendido',
                                  onClick: () => {return;}
                                }]
                              })
                        ,
                        confirmAlert({
                            title: 'Error! Usuario no Actualizado',
                            buttons: [
                              {
                                label: 'Entendido',
                                onClick: () => {return;}
                              }]
                            })
                    )
                }              
                
                , () => {

                    confirmAlert({

                      title: 'Error! Usuario no Actualizado',
                      buttons: [
                        {
                          label: 'Entendido',
                          onClick: () => {return;}
                        }]
                      })

                    })
              }
          },
          {
            label: 'Volver a editar',
            onClick: () => { return; }
          }
        ]
      })
    }
    else {
      return;
    }
  }

  undoEdit(){
    console.log("state: ",this.state)
    //this.props.cancelEdit()
  }

  componentDidMount(){
    if (this.props.showEdit){
      this.fillEdit(this.props.beforeValues)
    }
  }

  changeValue(value, data) {
    this.setState({ [value]: data })
    console.log(value,data)
  }

  render() {
    return (
      <div>
        
        <Row >
            <Col md={6}>
            <h3 style={{ marginLeft: "10px", color: "black", paddingTop: "10px"}} >{this.props.title}: {this.state["Tipo de Usuario"]}</h3>
            <hr />

            <div>
              <form className="form-horizontal form-label-left" autoComplete="off" style={{color: "#1e1e1e"}}>
                <InputTypeUser ref="inputTypeUser" name="Tipo de Usuario" change={(v, i) => { this.changeValue(v, i) }} />
                <InputText ref="inputName" error={this.state.message.inputName || ''} name="Nombre" placeholder="Juan" change={(v, i) => { this.changeValue(v, i) }} />
                <InputText ref="inputlastName" error={this.state.message.inputlastName || ''} name="Apellido" placeholder="Ramírez" change={(v, i) => { this.changeValue(v, i) }} />
                <InputText ref="inputMail" error={this.state.message.inputMail || ''} name="Correo Empresa" placeholder="juan@colegiolosnogales.cl" change={(v, i) => { this.changeValue(v, i) }} />
                <InputPass ref="inputPassword" error={this.state.message.inputPassword || ''} name="Contraseña" placeholder="clavesecreta23" change={(v, i) => { this.changeValue(v, i) }} />
                <InputText ref="inputCompany" error={this.state.message.inputCompany || ''} name="Nombre Empresa" placeholder="Fundación Los Nogales" change={(v, i) => { this.changeValue(v, i) }} />
                <InputRut ref="inputRut" error={this.state.message.inputRut || ''} name="Rut Empresa" placeholder="782536367" change={(v, i) => { this.changeValue(v, i) }} />
              </form>   
            </div>

          </Col> 
          <Col md={6}>
          
              {(this.state["Tipo de Usuario"] === "Cliente" )?
                
                <div>
                  <h3 style={{ marginLeft: "10px" }} >&nbsp;</h3>
                 <hr />
                  <form className="form-horizontal form-label-left" autoComplete="off" style={{color: "#1e1e1e"}}>
                    <InputIndustry ref="inputIndustry" name="Rubro" placeholder="Construcción" change={(v, i) => { this.changeValue(v, i) }} />
                    <InputBank ref="inputBank" name="Banco" change={(v, i) => { this.changeValue(v, i) }} />
                    <InputText ref="inputTipoCuenta"  error={this.state.message.inputTipoCuenta || ''} name="Tipo de Cuenta"  change={(v, i) => { this.changeValue(v, i) }} />
                    <InputText ref="inputNumeroCuenta"  error={this.state.message.inputNumeroCuenta || ''} name="Numero de Cuenta"  change={(v, i) => { this.changeValue(v, i) }} />
                  </form>
                </div>
                
                :null}
          </Col>
          
          
          <div className="col-xs-12 text-center">
              <Row bsclass="box-form row"> 
                  <Col md={this.state["Tipo de Usuario"] === "Cliente" ? 5:1}>
                    </Col>
                  
                  <Col md={1}>
                  {this.props.showEdit?
                    <button className="buttonNext btn btn-success" onClick={(e) => { this.edit(e) }}>{"Editar"}</button>
                  :  <button className="buttonNext btn btn-success" onClick={(e) => { this.submit(e) }}>{"Enviar"}</button>
                  }
                  </Col>
                  <Col md={1}>
                  {this.props.showEdit?
                    <button className="buttonNext btn btn-success"  onClick={(e) => { this.undoEdit() }}>{"Cancelar"}</button>
                    :null
                  }
                  </Col>
                  <Col md={this.state["Tipo de Usuario"] === "Cliente" ? 5:9}>
                    </Col>
              </Row>
              </div>
        </Row>
      </div>
    )
  }
}

export default FormUser