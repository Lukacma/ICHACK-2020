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
  Button,
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
    state = 
    {
        users: [
            {
                firstname: "Daniel",
                surname: "Smith",
                bio: "Hey",
                photoURL: "https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg"
            },
            {
                firstname: "Daniel",
                surname: "Smith",
                bio: "Hey",
                photoURL: "https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg"
            }
        ]
    }
    user = {
        firstname: "Daniel",
        surname: "Smith",
        bio: "Hey",
        photoURL: "https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg"
      }

    getUsers() {
        // send request for json file
        let buffer = [
        {
            firstname: "Daniel",
            surname: "Smith",
            bio: "Hey",
            photoURL: "https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg"
        },
        {
            firstname: "Daniel",
            surname: "Smith",
            bio: "Hey",
            photoURL: "https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg"
        }];

        let output = [];

        buffer.map((user) => (
            output.push(
                <Col lg="4" md="6" sm="6">
                    <Card className="card-user">
                        <div className="image">
                        <img
                            alt="..."
                            src={user.photoURL}
                        />
                        </div>
                        <CardBody>
                        <div className="author">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="avatar border-gray"
                                src={user.photoURL}
                            />
                            <h5 className="title">{user.firstname} {user.surname}</h5>
                            </a>
                            <p className="description">@chetfaker</p>
                        </div>
                        <p className="description text-center">
                            {user.bio}
                        </p>
                        </CardBody>
                        <CardFooter>
                        <hr />
                        <div className="button-container">
                            <Row>
                            <Col className="ml-auto" lg="5" md="6" xs="6">
                            <Button
                                block
                                color="primary"
                                onClick={() => this.notify("tl")}
                                >
                                    Like
                                </Button>
                            </Col>
                            
                            <Col className="mr-auto" lg="5">
                            <Button
                                block
                                color="primary"
                                onClick={() => this.notify("tl")}
                                >
                                Dislike
                                </Button>
                            </Col>
                            </Row>
                        </div>
                        </CardFooter>
                    </Card>
                </Col>
            )
        ))
        return (
            output
        )
    }


  render() {
      
    return (

      <>
        <div className="content">
          <Row>
                { this.getUsers().map((element) => (element)) }
          </Row>
          
          
        </div>
      </>
    );
  }
}



export default Dashboard;
