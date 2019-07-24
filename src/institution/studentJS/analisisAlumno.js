import React, { PureComponent } from 'react';
import {Row,Col} from 'react-bootstrap';
import SampleChart from './sampleChart.js';
import Contenedor from './Contenedor.js';
import TablaAlumno from './tablaAlumno.js';



export default class AnalisisAlumno extends PureComponent {
  
    constructor(props) {
        super(props);
        this.state = {
          idStudent:"",
        }
      }

  render() {
    return (
        <div>
            

          <TablaAlumno dataAlumno=""/>

          <Row style={{backgroundColor:"#8ed4e0"}}>
            <Col sm={6}>
              <div style={{paddingTop:"2%"}}>
                  <Row style={{backgroundColor:"#E8F5FB",width:"55%",height:"35px",
                      borderTopRightRadius:"1em", borderBottomRightRadius:"1em",
                      color:"black",fontSize:"80%",textAlign:"rigth"}}>

                      <p style={{paddingLeft:"60px",paddingTop:"5px",fontSize:"15px", fontWeight: "bold"}}>TENDENCIA EMOCIONAL</p>
                    
                  </Row>
              </div>
            </Col>
          </Row>

          <Row style={{backgroundColor:"#8ed4e0"}}>
            <Col sm={7}>
              <div >
                <SampleChart/>  
              </div> 
            </Col>
            <Col sm={5} style={{paddingTop:"1%"}}>
              <Contenedor></Contenedor>
            </Col>
          </Row>

        </div>
    );
  }
}
