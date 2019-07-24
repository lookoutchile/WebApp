import React, { Component } from "react";
import { Row, Col, Button, FormGroup, FormControl,}  from "react-bootstrap";
import {ControlLabel} from "react-bootstrap/lib"
import "./Login.css";
import logo from "./logo_transparente.png"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        isResetingPass: false,
      };
    }
  
    getLoginValidation() {
      
      
      if (this.getEmailValidationState() === 'success' &&
          this.getPassValidationState() === 'success')
          {
            return true;
          }
      else return false;
    }
  
    getEmailValidationState() {
      const length = this.state.email.length;
      if (length > 8 && 
        this.state.email.includes("@") &&
        this.state.email.includes(".") ) 
        {return 'success';}
      else if (this.state.email.includes("@")) return 'warning';
      else if (length > 0) return 'error'

    }

    getPassValidationState() {
      const length = this.state.password.length;
      if (length > 7) {return 'success';}
      else if (length > 4) return 'warning';
      else if (length > 0) return 'error'
      return null;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
    }

    passwordAlert(){

      confirmAlert({
        title: "Constraseña invalida",
        buttons: [
          {
            label: "Volver",
            onClick: () => {
                return;
            }
        }]
    })

    } 

    userAlert(){
      confirmAlert({
        title: "Usuario no registrado",
        buttons: [
          {
            label: "Volver",
            onClick: () => {
                return;
            }
        }]
    })

    }

    handleClick(){
      
      this.props.submit(this.state.email, this.state.password);
      
    }
    
    handleClick2(){
      
      this.props.resetPass(this.state.email);
      
    }


    render() {
      return (
             
        <div className="Login" >

          
          <Row className="justify-content-md-center" style={{padding:"3%"}}>
                <Col xs={4}>
                <center><img alt="Imagen no disponible" style={{width:"30%"}} src={logo}/></center>
                  
                </Col>
            </Row>


          { !this.state.isResetingPass? (

            //////// login request  ///////////
              <div>
                <Row className="justify-content-md-center" style={{paddingBottom:"1%"}} >
                  <Col className="text-center" xs={3} >
                    <h2 style={{fontSize:"140%"}} >Iniciar sesión</h2> 
                  </Col>
                </Row>

                <form onSubmit={this.handleSubmit}>

                <Row className="justify-content-md-center" style={{paddingBottom:"4%"}}>
                  <Col xs={11}>

                  <FormGroup  controlId="email" validationstate={this.getEmailValidationState()}> 
                    <ControlLabel id="login">Correo</ControlLabel>
                    <FormControl
                      autoFocus
                      size="lg"
                      type="mail"
                      value={this.state.email}
                      onChange={this.handleChange}
                      style={{fontSize:"16px"}}
                    />
                    <FormControl.Feedback />

                    </FormGroup>
                    <FormGroup controlId="password" validationstate={this.getPassValidationState()}>
                      <ControlLabel>Contraseña</ControlLabel>
                      <FormControl
                        size="lg"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        style={{fontSize:"16px"}}
                      />
                      <FormControl.Feedback />
                    </FormGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col xs={6} >
                    <Button
      
                      block
                      size="lg"
                      type="submit"
                      disabled={!this.getLoginValidation()}
                      onClick={()=>this.handleClick()}
                    >
                    <strong>Ingresar</strong>
                      
                    </Button>
                    </Col>
          </Row>
          </form> 
          
          <Row className="justify-content-md-center">
            <Col className="text-center" xs={4}>
              <br></br>
                  <a className="link-label" position="textcenter" href="#login" onClick={()=>{this.setState({isResetingPass:true})}} ><b>Recuperar contraseña</b></a>&nbsp;|&nbsp;
                  <a className="link-label" position="textcenter" href="http://3.14.85.100/registro/" target="_blank"><b>Registrar cuenta</b></a>
            </Col>
            </Row> </div>)
        :(
          //////// reset password request  ///////////
          <div>
            <Row className="justify-content-md-center" style={{paddingBottom:"1%"}} >
                  <Col className="text-center" xs={3} >
                    <h2 style={{fontSize:"140%"}} >Recuperación de</h2> 
                    <h2 style={{fontSize:"140%"}} >contraseña </h2> 
                  </Col>
                </Row>

                <form onSubmit={this.handleSubmit}>
                  <Row className="justify-content-md-center" style={{paddingBottom:"4%"}}>
                    <Col xs={11}>

                    <FormGroup  controlId="email" validationstate={this.getEmailValidationState()}> 
                      <ControlLabel id="recovery">Correo</ControlLabel>
                      <FormControl
                        autoFocus
                        size="lg"
                        
                        type="mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{fontSize:"16px"}}
                      />
                      <FormControl.Feedback />
                      </FormGroup>

                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col xs={8}>
                      <Button
                        width="100%"
                        block
                        size="lg"
                        type="submit"
                        disabled={!(this.getEmailValidationState()==="success")}
                        onClick={()=>this.handleClick2()}
                      >
                        <strong>Recuperar contraseña</strong>
                      </Button>
                      </Col>
                  </Row>
                  </form> 
          
                <Row className="justify-content-md-center">
                  <Col className="text-center" xs={3} >
                  <br></br>
                  <a className="link-label" position="textcenter" href="#recovery" onClick={()=>{this.setState({isResetingPass:false})}}><b>volver a Iniciar sesión</b></a>            
                  </Col>
              
                </Row>  
          </div>

        )}



        </div>
      );
    }
  }
  export default Login;