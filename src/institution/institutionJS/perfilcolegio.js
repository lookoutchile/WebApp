import React, { Component } from 'react';
import ChartDash1 from './chartdash1';
import A_icon from './studentJS/img/A_icon.png';
import cute_student_icon from './studentJS/img/cute_student_icon.png';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Table
} from 'reactstrap';

import { Row, Col, Container, Button } from 'react-bootstrap';

class PerfilCurso extends Component {
 
    
    render() {
       
        return (
            <div>
                <Container>

                    <Row style={{paddingTop:"2%"}}>
                        <Col>
                        <Card>
                        <CardBody>
                            <div className="d-flex align-items-center" style={{color: "black"}}>
                                <div>
                                    <CardTitle><h2>Datos Colegio</h2></CardTitle>
                                    <CardSubtitle><h1>Colegio Los Nogales</h1></CardSubtitle>
                                </div>
                            </div>
                            <div className="table-responsive">
                            <Table className="table table-hover"> 
                                <thead>
                                    <tr className="border-0">
                                        <th className="border-0">Curso</th>
                                        <th className="border-0">Profesor/a jefe a cargo</th>

                                        <th className="border-0">Alumnos curso</th>
                                        <th className="border-0">Alumnos supervisados</th>
                                        <th className="border-0">Última actualización</th>
                                        <th className="border-0">Ver detalle curso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1°</td>
                                        <td>Gabriela Pérez</td>
                                        <td>35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">34</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>2°</td>
                                        <td>Felipe Aguilar</td>
                                        <td>35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>3°</td>
                                        <td>Mónica López</td>
                                        <td>35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">34</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>4°</td>
                                        <td>Viviana Gómez</td>
                                        <td>36</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">36</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>5°</td>
                                        <td>Catalina Cortés</td>
                                        <td>37</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">36</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>6°</td>
                                        <td>César Ramírez</td>
                                        <td>35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>7°</td>
                                        <td>Francisco Gutiérrez</td>
                                        <td>35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">35</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
                                    </tr>
                                    <tr>
                                        <td>8°</td>
                                        <td>Magdalena Hidalgo</td>
                                        <td>36</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">34</td>
                                        <td className="blue-grey-text  text-darken-4 font-medium">14-07-2019</td>
                                        <td>Lista curso</td>
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
export default PerfilCurso;