import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

import { Row, Col, Container } from 'react-bootstrap';

class PerfilColegio extends Component {
    render() {
        return (
            <div>
                <Container>
                
                <Row style={{paddingTop:"2%"}}>                        
                        <Col sm={12}>
                        <Card>
                        <CardBody>
                            <div>
                            <Row>
                                <Col sm={5}>
                                    <div className="d-flex align-items-bottom" style={{color: "black"}}>
                                        <div>
                                            <CardTitle><h2>Colegio Los Nogales</h2></CardTitle>
                                            <CardSubtitle><h1>Curso: 1° básico</h1></CardSubtitle>
                                            <CardSubtitle><h2>Profesor/a jefe: Gabriela Pérez</h2></CardSubtitle>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
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
                                <Col sm={3}>
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
                                    <p/>
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
                            </div>
                            <div className="table-responsive" style={{paddingTop:"2%"}}>
                            <Table className="table table-hover table-striped"> 
                                <thead>
                                    <tr className="border-0">
                                        <th className="border-0">N° de lista</th>
                                        <th className="border-0">Nombre alumno/a</th>
                                        <th className="border-0">Última actualización</th>
                                        <th className="border-0">Ver perfil alumno</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Gabriela Aguilar</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Quinn Bierman</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Karla Godley</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Nora Laverriere</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Floria Rudman</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Albertha Gaiser</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Hosea Labrador</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Zulma Childress</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Angelina Wilkinson</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Hosea Labrador</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Avery Petrick</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Hedwig Feliciano</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Lili Mustard</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Hildred Webster</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Dacia Martin</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>Rita Juares</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>Allyson Toothaker</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>Thi Younts</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>Rosaline Denner</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>Rosia Sotelo</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>21</td>
                                        <td>Fritz Nardone</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>22</td>
                                        <td>Abdul Staggers</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>23</td>
                                        <td>Junita Helmers</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td>Soo Thompson</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>Nancy Kuether</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>26</td>
                                        <td>Trudi Huntley</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>27</td>
                                        <td>Tamra Camden</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>28</td>
                                        <td>Devona Zehner</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>29</td>
                                        <td>Freddy Mellin</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>30</td>
                                        <td>Felice Dehart</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>31</td>
                                        <td>Camila González</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>Lorenzo Sepúlveda</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>33</td>
                                        <td>Cristóbal Gutiérrez</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>34</td>
                                        <td>Amelia Santibañez</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>35</td>
                                        <td>Emilio Gatica</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td>Francisca Otelo</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td><Button  className="btn btn-secondary btn-xs">Ver perfil</Button></td>
                                    </tr>
                                    <tr>
                                        <td>37</td>
                                        <td>Antonio Mendez</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>
                                            <Button  className="btn btn-secondary btn-xs">Ver perfil</Button>
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
        )
    }
}
export default PerfilColegio;