import React, { PureComponent } from 'react';
import { SplitButton, Row, Col, Dropdown,} from 'react-bootstrap';
import {Container, Button} from 'react-bootstrap';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table
} from 'reactstrap';
import Ca_icon from './img/Ca_icon.png';
import Ci_icon from './img/Ci_icon.png';
import E_icon from './img/E_icon.png';
import I_icon from './img/I_icon.png';
import R_icon from './img/R_icon.png';
import N_icon from './img/N_icon.png';

export default class Contenedor extends PureComponent {
  
    constructor(props) {
        super(props);
        this.state = {
          periodSelected: "Mes",
          periodSelectedyear: "Año",
        }
      }

  render() {
    return (
        <div>
            <Container style={{background: "#E8F5FB",
                    height: "90%", color: "black",fontSize:"14px", borderRadius:"1em",paddingTop:"4%",paddingLeft:"6%"}}>

                <Row style={{paddingBottom:"3%"}}>
                  <Col sm={6} style={{textAlign:"left"}}><b>Selecciona mes y año:</b></Col>
                  <Col sm={2}>
                    <SplitButton
                        title={this.state.periodSelectedyear}
                        variant="secondary"
                        >
                        <Dropdown.Item onClick={()=>{this.setState({periodSelectedyear:"2019"})}}>2019</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelectedyear:"2018"})}}>2018</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelectedyear:"2017"})}}>2017</Dropdown.Item>
                        </SplitButton>
                  </Col>
                  <Col sm={2}>
                    <SplitButton
                        title={this.state.periodSelected}
                        variant="primary"
                        >
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Todos"})}}>Todos</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Enero"})}}>Enero</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Febrero"})}}>Febrero</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Marzo"})}}>Marzo</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Abril"})}}>Abril</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Mayo"})}}>Mayo</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Junio"})}}>Junio</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Julio"})}}>Julio</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Agosto"})}}>Agosto</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Septiembre"})}}>Septiembre</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Octubre"})}}>Octubre</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Noviembre"})}}>Noviembre</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{this.setState({periodSelected:"Diciembre"})}}>Diciembre</Dropdown.Item>
                        </SplitButton>
                  </Col>
                </Row>
                <Row>
                  <Col sm={3}></Col>
                  <Col sm={6}>
                        <Button className="btn btn-light btn-xs" 
                          >Ver gráfico y alertas</Button>
                  </Col>
                </Row>
                  
                <Row style={{paddingBottom:"2%"}}><Col sm={3}><b>Alertas</b></Col></Row>
                <Row style={{fontSize:"14px",paddingBottom:"3%"}} >
                    <Col sm={12} >  
                      <Card>
                          <CardBody>
                              <div className="table-responsive">
                              <Table className="table table-hover"> 
                                  <thead>
                                      <tr className="border-0">
                                          <th className="border-0">Alerta</th>
                                          <th className="border-0">N° de veces</th>

                                          <th className="border-0">Status</th>
                                          <th className="border-0">Ver detalle</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="mr-2"><img src={I_icon} alt="user" className="rounded-circle" width="25" /></div>
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Inasistencias</h5></div>
                                              </div>
                                          </td>
                                          <td>4</td>

                                          <td>
                                              <i className="fa fa-circle text-danger" id="tlp1"></i>
                                              
                                          </td>
                                          <td>
                                          <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver detalle</a></mark></td></tr>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="mr-2"><img src={N_icon} alt="user" className="rounded-circle" width="25" /></div>
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Anotaciones negativas</h5></div>
                                              </div>
                                          </td>
                                          <td>3</td>

                                          <td>
                                              <i className="fa fa-circle text-danger" id="tlp1"></i>
                                              
                                          </td>
                                          <td>
                                            <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver detalle</a></mark></td></tr>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="mr-2"><img src={E_icon} alt="user" className="rounded-circle" width="25" /></div>
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Idas a emergencias</h5></div>
                                              </div>
                                          </td>
                                          <td>0</td>

                                          <td>
                                              <i className="fa fa-circle text-success" id="tlp1"></i>
                                              
                                          </td>
                                          <td>
                                            <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver detalle</a></mark></td></tr>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="mr-2"><img src={R_icon} alt="user" className="rounded-circle" width="25" /></div>
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Evaluaciones rojas</h5></div>
                                              </div>
                                          </td>
                                          <td>2</td>

                                          <td>
                                              <i className="fa fa-circle text-warning" id="tlp2"></i>
                                              
                                          </td>
                                          <td>
                                            <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver detalle</a></mark></td></tr>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="mr-2"><img src={Ca_icon} alt="user" className="rounded-circle" width="25" /></div>
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Citaciones a apoderado</h5></div>
                                              </div>
                                          </td>
                                          <td>1</td>

                                          <td>
                                              <i className="fa fa-circle text-warning" id="tlp3"></i>
                                              
                                          </td>
                                          <td>
                                            <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver detalle</a></mark></td></tr>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="mr-2"><img src={Ci_icon} alt="user" className="rounded-circle" width="25" /></div>
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Citaciones a inspectoría</h5></div>
                                              </div>
                                          </td>
                                          <td>0</td>

                                          <td>
                                              <i className="fa fa-circle text-success" id="tlp4"></i>
                                              
                                          </td>
                                          <td>
                                            <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver detalle</a></mark></td></tr>
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                              </div>
                          </CardBody>
                      </Card>
                    </Col>
                </Row>
                     
              </Container>
        </div>
    );
  }
}