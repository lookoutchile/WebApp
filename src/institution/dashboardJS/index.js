import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
    Card,
    CardBody,
} from 'reactstrap';

import ChartDash1 from './chartdash1';
import ChartDash2 from './chartdash2';
import ChartDash3 from './chartdash3';
import Stats from './statscursos';
import picture_icon from './img/picture_icon.png';
import A_icon from './img/A_icon.png';
import cute_student_icon from './img/cute_student_icon.png';
import icon_user from './img/icon_user.png';
import icon_course from './img/icon_course.png';

class Dashboard extends Component {

    render() {
       
        return (
              <Container style={{paddingTop:"2%"}}> 
                <Row>
                  <Col sm={3}>
                    <Card style={{backgroundColor: "white"}}>
                      <CardBody>
                        <div>
                          <h1 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "left"}}>Colegio <p/>Los Nogales</h1>
                          
                          <span className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Última actualización: 14-07-2019</span>
                          <div className="mr-2"><img src={picture_icon} width="206" /></div> 
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={2}>
                    <Card style={{backgroundColor: "white"}}>
                      <CardBody>
                        <div>
                          <h3 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "left"}}>Datos colegio</h3>
                          <div>;&nbsp;</div>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Dirección: Av. Concha y Toro # 345</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Dato importante 2</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Dato importante 3</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Dato importante 4</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Dato importante 5</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "left"}}>Dato importante 6</h4>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={6}>
                    <Stats/>
                  </Col>
                </Row>
                <Row style={{paddingTop:"1%"}}>
                  <Col sm="3">
                    <Card>
                      <CardBody>
                        <div className="mr-2"><img src={icon_user} alt="user" className="img-circular" width="45"/></div>
                        <div className="">
                          <h5 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "right"}}>Usuarios registrados</h5>
                          <h1 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "right"}}>12</h1>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", fontWeight: "bold", textAlign: "right"}}>Total histórico</h4>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="3">
                    <Card>
                      <CardBody>
                        <div className="mr-2"><img src={icon_course} alt="user" className="img-circular" width="45" /></div>
                        <div className="">
                          <h5 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "right"}}>Cursos supervisados</h5>
                          <h1 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "right"}}>26</h1>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", fontWeight: "bold", textAlign: "right"}}>Total histórico</h4>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="3">
                    <Card>
                      <CardBody>
                        <div className="mr-2"><img src={cute_student_icon} alt="user" className="img-circular" width="45"></img></div>
                        <div className="">
                          <h5 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "right"}}>Alumnos supervisados</h5>
                          <h1 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "right"}}>1040</h1>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", fontWeight: "bold", textAlign: "right"}}>Total histórico</h4>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="3">
                    <Card>
                      <CardBody>
                        <div className="mr-2"><img src={A_icon} alt="user" className="img-circular" width="45" /></div>
                        <div className="">
                          <h5 className="mb-0 font-16 font-medium" style={{color:"#777", textAlign: "right"}}>Alertas generadas</h5>
                          <h1 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "right"}}>3215</h1>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#777", fontWeight: "bold", textAlign: "right"}}>Total histórico</h4>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <div>;&nbsp;</div>
                <Row>
                  <Col sm="4">
                    <Card style={{backgroundColor: "#ffbe28"}}>
                      <CardBody>
                        <div>
                          <ChartDash1/>
                           </div>
                      </CardBody>
                    </Card>
                    <Card style={{backgroundColor: "#white"}}>
                      <CardBody>
                        <div>
                          <h2 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "left"}}>Días de mayor inasistencia</h2>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#f44336"}}>Lunes y Viernes</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#4caf50"}}>Miércoles</h4>
                        </div>
                      </CardBody>
                    </Card>

                  </Col>
                  <Col sm="4">
                    <Card style={{backgroundColor: "#5faab2"}}>
                      <CardBody>
                        <div>
                          <ChartDash2/>
                          </div>
                      </CardBody>
                    </Card>
                    <Card style={{backgroundColor: "#white"}}>
                    <CardBody>
                        <div>
                          <h2 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "left"}}>Alertas acumuladas por curso</h2>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#f44336"}}>8° mayor cantidad</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#4caf50"}}>1° menor cantidad</h4>
                        </div>
                      </CardBody>
                    </Card>

                  </Col>
                  <Col sm="4">
                    <Card style={{backgroundColor: "#fe8339"}}>
                      <CardBody>
                        <div>
                          <ChartDash3/>
                           </div>
                      </CardBody>
                    </Card>
                    <Card style={{backgroundColor: "#white"}}>
                      <CardBody>
                        <div>
                          <h2 className="mb-0 font-16 font-medium" style={{color:"#3C4858", textAlign: "left"}}>Alertas supervisadas</h2>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#f44336"}}>7° menos supervisado</h4>
                          <h4 className="mb-0 font-16 font-medium" style={{color:"#4caf50"}}>4° más supervisado</h4>
                        </div>
                      </CardBody>
                    </Card>

                  </Col>
                </Row>
                <div>;&nbsp;</div>
              </Container>
        )
    }
}
export default Dashboard;