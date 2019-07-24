import React, { Component } from 'react';
import { Col } from "react-bootstrap"
import LeftMenu from './leftmenu'
import Content from './content'
import firebase from 'firebase/app'
import logo from "./studentJS/img/logo_transparente.png"
import Login from './containers/login'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import './App.css';
import { Persist } from 'react-persist'
import LoadingScreen from 'react-loading-screen';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


const config = {
  apiKey: "AIzaSyBkywiu14CJW80O5RVK2a4LtnKeZJsyIb4",
    authDomain: "lookout-app-78ac6.firebaseapp.com",
    databaseURL: "https://lookout-app-78ac6.firebaseio.com",
    projectId: "lookout-app-78ac6",
    storageBucket: "lookout-app-78ac6.appspot.com",
    messagingSenderId: "104902258150",
    appId: "1:104902258150:web:f025fd646dbf0f48"
};

firebase.initializeApp(config);
const secondaryApp = firebase.initializeApp(config, "Secondary");


const db = firebase.firestore()
const storage  = firebase.storage()

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      clicked:"Dashboard",
      user: false,
      loadingState: false,
      contentLoadingState: false
    }
   
    this.login = this.login.bind(this)
    this.clkButton = this.clkButton.bind(this)
  }

  clkButton(value){
    this.setState({clicked:value})

  }

  componentWillMount(){
    if (firebase.auth().currentUser){
      this.createUser(firebase.auth().currentUser)
    }
    console.log("componentWillMount: app")
  }

  componentDidMount(){
    this.setState({loadingState:false,clicked:"Dashboard"})
    console.log("componentDidMount: app")
    console.log(this.state.loadingState)
  }

  login(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      () => {
        this.setState({loadingState:true})
        console.log("login: app.js")
        console.log(this.state.loadingState)},
      (error) => {
        
        switch(error.code) {
            case 'auth/invalid-email':
                this.refs.login.userAlert()
                break;
            case 'auth/wrong-password':
                this.refs.login.passwordAlert()
                break;
            case 'auth/user-not-found':
                this.refs.login.userAlert()
                break;
            default :
              this.refs.login.userAlert()
              break;
       }})

    firebase.auth().onAuthStateChanged((user) => {
        this.createUser(user)
        });
  }

  resetPassword(emailAddress){

    firebase.auth()  
    .sendPasswordResetEmail(emailAddress).then((response)=>{
      
      confirmAlert({
        title: 'Cambio de contraseña',
        message:  'Se ha enviado a su correo un enlace para proceder al cambio de contraseña.',
        buttons: [
          {
            label: "Entendido",
            onClick: () => {
                return;
            }
        }]
    })
    },(error)=>{
      
      if (error.code === "auth/user-not-found"){
        confirmAlert({
          title: 'Cambio de contraseña',
          message:  'Este correo no se encuentra registrado en la plataforma BRF.',
          buttons: [
            {
              label: "Volver",
              onClick: () => {
                  return;
              }
          }]
      })}  
      console.log("error:",error)
    }
          
    )
        
  }

  removeUser(){
    firebase.auth().signOut()
    this.setState({user:null,clicked:"Perfil Institución (Example)"})
  }

  deleteUser(id){
    console.log(id)
  }

  createUser(user){
    if (user) {
      db.collection("users").doc("" + user.uid).get().then(us => {
        if (us) {
          this.setState({ user: { ...us.data(), uid: us.id } })
        }
      })
    }
  }

  goTo(link){
    this.setState({clicked:link})
  }

  render() {
    return (
      <div className="App">
      
      <Persist 
          name="brf-state" 
          data={this.state} 
          debounce={500} 
          onMount={data => this.setState(data)}
        />
      <LoadingScreen
        loading={this.state.loadingState}
        bgColor='#243853'
        spinnerColor='#ffbe28'
        textColor='#8ed4e0'
        logoSrc={logo}
        
        text='Cargando'
        >
        
        {
          !this.state.user ? 
          (
            <div>
              <Col md={12}>
              <Login ref="login" submit={(email, password) => { this.login(email, password) }}
                                      resetPass={(email) => { this.resetPassword(email)}} />
              </Col>             
            </div>

          ) : (
          <div > 
            <Col md={2} bsclass="col">
              <LeftMenu  user={this.state.user}  
                          click={this.clkButton}
                          loader={(v)=>this.setState({loadingState:v})}
                          logout={() => this.removeUser()} />
            </Col>
            <Col md={10} bsclass="white content col" style={{backgroundColor:"white",height:"100%"}}>
              <Content  goto={(e)=>this.goTo(e)} deleteUser={(e)=>this.deleteUser(e)} link={this.state.clicked} store={db} user={this.state.user} storage={storage} createUser={secondaryApp} />
            </Col>
          </div>
          )
        }        
        </LoadingScreen>    
        
      </div>
    );
  }
}

export default App;

