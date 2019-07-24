import React, { PureComponent } from 'react';
import perfil from './img/school_guy.png';
import {Row,Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


export default class TablaAlumno extends PureComponent {
  
    constructor(props) {
        super(props);
        this.state = {
          dataStudent: this.props.dataAlumno,
        }
      }

  render() {
    return (
        <div >
            <Row style={{backgroundColor:"white",color:"black",padding:"2%", }}>
                <Col xs={2} style={{paddingLeft:"2%",}}>
                    <img src={perfil} alt="Imagen no disponible" style={{width:"85%"}}/>
                    <p style={{color:"black", fontSize:"14px"}}>Juan Pereira Gómez</p>
                </Col>
                <Col >    
                    <center>
                    <div className="card" >
                        <table style={{width:"100%"}}>
                        <thead>
                        <tr>
                            <td className="table-bordered" colSpan="2" style={{backgroundColor:"#8ed4e0",color:"white",paddingLeft:"4%",height:"30px"}}><b>DATOS ALUMNO</b></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr >
                            <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}} scope="row">&nbsp; DOMICILIO</th>
                            <td className="table-bordered">&nbsp;San Francisco 265 </td>
                            </tr>
                        <tr>
                            <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}} scope="row">&nbsp;  COMUNA</th>
                            <td className="table-bordered">&nbsp;Santiago Centro</td>
                        </tr>
                        <tr>
                            <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}} scope="row">&nbsp; APODERADO</th>
                            <td className="table-bordered">&nbsp;Diego Díaz</td>
                        </tr>
                        <tr>
                            <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}} scope="row">&nbsp; PROF.JEFE</th>
                            <td className="table-bordered">&nbsp;Valentina Masilla</td>
                        </tr>
                        <tr >
                            <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}} scope="row">&nbsp; TELÉFONO</th>
                            <td className="table-bordered">&nbsp;945891236</td>
                        </tr>
                        <tr>
                            <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}} scope="row">&nbsp; GÉNERO DECLARADO</th>
                            <td className="table-bordered">&nbsp;Masculino </td>
                        </tr>                
                        </tbody>                
                    </table>
                    </div>
                    </center>
                </Col>
                <Col >           
                    <div className="card" >
                    <table style={{width:"100%"}}>
                    <thead>
                    <tr>
                        <td className="table-bordered" colSpan="2" style={{backgroundColor:"#8ed4e0",color:"white",paddingLeft:"4%",height:"30px"}}><b>RENDIMIENTO ACADÉMICO</b></td>
                    </tr>
                    </thead>
                    <tbody style={{color:"black"}}>
                    <tr>
                        <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}}  scope="row">&nbsp; PROMEDIO PERIODO ANTERIOR</th>
                        <td className="table-bordered" ><center>&nbsp;5.8&nbsp;&nbsp;</center></td>
                    </tr>
                    <tr>
                        <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}}  scope="row">&nbsp; PROMEDIO PARCIAL ACTUAL</th>
                        <td className="table-bordered" ><center>&nbsp;4.5&nbsp;</center></td>
                    </tr>
                    <tr>
                        <th className="table-bordered" style={{borderRight: "1px solid #8ed4e0"}}  scope="row">&nbsp; N° DE EVALUACIONES DEFICIENTES</th>
                        <td className="table-bordered" ><center>&nbsp;5.0&nbsp;</center></td>
                    </tr>
                    <tr>                   
                        <td className="table-bordered" style={{paddingTop:"2%",paddingBottom:"2%",}} colSpan="3">
                        <center>
                            <button type="button" className="btn btn-primary btn-sm" style={{backgroundColor:"#8ed4e0",borderColor:"#8ed4e0",width:"80px"}}>DETALLES</button>
                            </center>
                        </td>
                    </tr>                   
                    </tbody>                
                    </table>
                    
                    </div>
                </Col>
                <Col >
                    <center>
                    <div className="card">
                        <table style={{width:"100%"}}>
                        <thead>
                        <tr>
                            <td className="table-bordered" colSpan="3" style={{backgroundColor:"#8ed4e0",color:"white",paddingLeft:"4%",height:"30px"}}><b>ANTECEDENTES PSICOLÓGICOS</b> </td>
                            </tr>
                        </thead>
                        <tbody style={{color:"black"}}>
                            <tr>
                            <th className="table-bordered"  colSpan="2" scope="row">&nbsp; CITAS AL PSICÓLOGO</th>
                            <td className="table-bordered" colSpan="1"><center>&nbsp;2</center></td>
                            </tr>
                            <tr>
                            <th className="table-bordered"  colSpan="2" scope="row">&nbsp; TEST REALIZADOS</th>
                            <td className="table-bordered">
                            <table style={{width:"100%",height:"100%"}}>
                                <tbody>
                                <tr ><td>My bullying</td></tr>
                                <tr><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver resultados</a></mark></td></tr>
                                                
                                <tr ><td>Test de Lúscher</td></tr>
                                <tr ><td><mark style={{backgroundColor:"#8ed4e0"}}><a href="http://www.africau.edu/images/default/sample.pdf" style={{color:"black"}}>ver resultados</a></mark></td></tr>
                                </tbody>
                            </table>
                                
                            </td>
                            </tr>
                            <tr></tr>
                            <tr>
                            <td className="table-bordered" colSpan="3" style={{paddingTop:"2%",paddingBottom:"2%"}}>
                                <center>
                                <Button className="btn btn-primary btn-sm" style={{backgroundColor:"#8ed4e0",borderColor:"#8ed4e0",width:"80px"}}>DETALLES</Button>
                                </center></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </center>
                </Col>
            </Row>
          
        </div>
    );
  }
}




