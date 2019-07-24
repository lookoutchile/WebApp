import React, { PureComponent } from 'react';
import { SplitButton, Row, Col, Dropdown,} from 'react-bootstrap';
import {Container, Button} from 'react-bootstrap';
import {
  Card,
  CardBody,
  Table
} from 'reactstrap';

export default class Stats extends PureComponent {
  
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
                <Row style={{fontSize:"14px",paddingBottom:"3%"}} >
                    <Col sm={12} >  
                      <Card>
                          <CardBody>
                              <div className="table-responsive">
                              <Table className="table table-hover"> 
                                  <thead>
                                      <tr className="border-0">
                                         <th className="border-0">Ranking alerta</th>
                                          <th className="border-0">Alerta</th>
                                          <th className="border-0">Cantidad total</th>
                                          <th className="border-0">Status</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Idas a emergencias</h5></div>
                                              </div>
                                          </td>
                                          <td>10</td>
                                          <td>
                                              <i className="fa fa-circle text-success" id="tlp1"></i>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>2</td>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Citaciones a apoderado</h5></div>
                                              </div>
                                          </td>
                                          <td>25</td>
                                          <td>
                                              <i className="fa fa-circle text-success" id="tlp1"></i>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>3</td>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Citaciones a inspectoría</h5></div>
                                              </div>
                                          </td>
                                          <td>100</td>
                                          <td>
                                              <i className="fa fa-circle text-warning" id="tlp1"></i>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>4</td>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Evaluaciones rojas</h5></div>
                                              </div>
                                          </td>
                                          <td>320</td>
                                          <td>
                                              <i className="fa fa-circle text-warning" id="tlp1"></i>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>5</td>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Inasistencias</h5></div>
                                              </div>
                                          </td>
                                          <td>585</td>
                                          <td>
                                              <i className="fa fa-circle text-danger" id="tlp1"></i>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>6</td>
                                          <td>
                                              <div className="d-flex no-block align-items-center">
                                                  <div className="">
                                                      <h5 className="mb-0 font-16 font-medium">Anotaciones negativas</h5></div>
                                              </div>
                                          </td>
                                          <td>823</td>
                                          <td>
                                              <i className="fa fa-circle text-danger" id="tlp1"></i>
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