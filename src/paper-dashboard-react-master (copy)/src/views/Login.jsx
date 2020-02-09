/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            
            <Col md="12">
              <Card className="card-user">
                <CardHeader>
                    <div align = "center">
                  <CardTitle tag="h5">Login</CardTitle>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                  <div align = "center">
                    <Row>
                        
                        <Col className="pr-1" md="4">
                        
                        </Col>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <Input style = {{  
                            textAlign: 'center'
                            }  }
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Input style = {{  
                            textAlign: 'center'
                            }  }
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                        
                      </Col>
                      
                    </Row></div>
                    
                    
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Log In
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Login;
