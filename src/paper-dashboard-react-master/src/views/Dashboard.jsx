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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="4" md="6" sm="6">
                <Card className="card-user">
                    <div className="image">
                    <img
                        alt="..."
                        src={require("assets/img/damir-bosnjak.jpg")}
                    />
                    </div>
                    <CardBody>
                    <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="avatar border-gray"
                            src={require("assets/img/mike.jpg")}
                        />
                        <h5 className="title">Chet Faker</h5>
                        </a>
                        <p className="description">@chetfaker</p>
                    </div>
                    <p className="description text-center">
                        "I like the way you work it <br />
                        No diggity <br />I wanna bag it up"
                    </p>
                    </CardBody>
                    <CardFooter>
                    <hr />
                    <div className="button-container">
                        <Row>
                        <Col className="ml-auto" lg="3" md="6" xs="6">
                            <h5>
                            12 <br />
                            <small>Files</small>
                            </h5>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                            <h5>
                            2GB <br />
                            <small>Used</small>
                            </h5>
                        </Col>
                        <Col className="mr-auto" lg="3">
                            <h5>
                            24,6$ <br />
                            <small>Spent</small>
                            </h5>
                        </Col>
                        </Row>
                    </div>
                    </CardFooter>
                </Card>
              
            </Col>
            <Col lg="4" md="6" sm="6">
                <Card className="card-user">
                    <div className="image">
                    <img
                        alt="..."
                        src={require("assets/img/damir-bosnjak.jpg")}
                    />
                    </div>
                    <CardBody>
                    <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="avatar border-gray"
                            src={require("assets/img/mike.jpg")}
                        />
                        <h5 className="title">Chet Faker</h5>
                        </a>
                        <p className="description">@chetfaker</p>
                    </div>
                    <p className="description text-center">
                         <span></span>
                    </p>
                    </CardBody>
                    <CardFooter>
                    <hr />
                    <div className="button-container">
                        <Row>
                        <Col className="ml-auto" lg="3" md="6" xs="6">
                            <h5>
                            12 <br />
                            <small>Files</small>
                            </h5>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                            <h5>
                            2GB <br />
                            <small>Used</small>
                            </h5>
                        </Col>
                        <Col className="mr-auto" lg="3">
                            <h5>
                            24,6$ <br />
                            <small>Spent</small>
                            </h5>
                        </Col>
                        </Row>
                    </div>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="4" md="6" sm="6">
            <Card className="card-user">
                    <div className="image">
                    <img
                        alt="..."
                        src={require("assets/img/damir-bosnjak.jpg")}
                    />
                    </div>
                    <CardBody>
                    <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="avatar border-gray"
                            src={require("assets/img/mike.jpg")}
                        />
                        <h5 className="title">Chet Faker</h5>
                        </a>
                        <p className="description">@chetfaker</p>
                    </div>
                    <p className="description text-center">
                        "I like the way you work it <br />
                        No diggity <br />I wanna bag it up"
                    </p>
                    </CardBody>
                    <CardFooter>
                    <hr />
                    <div className="button-container">
                        <Row>
                        <Col className="ml-auto" lg="3" md="6" xs="6">
                            <h5>
                            12 <br />
                            <small>Files</small>
                            </h5>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                            <h5>
                            2GB <br />
                            <small>Used</small>
                            </h5>
                        </Col>
                        <Col className="mr-auto" lg="3">
                            <h5>
                            24,6$ <br />
                            <small>Spent</small>
                            </h5>
                        </Col>
                        </Row>
                    </div>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          
          
        </div>
      </>
    );
  }
}

export default Dashboard;
