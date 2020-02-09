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
import axios from "axios";
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
    state = {
        users: []
    }
    user = {
        firstname: "Daniel",
        surname: "Smith",
        bio: "Hey",
        photoURL: "https://alexstudio.ch/wp-content/uploads/2019/01/business.portrait.cv_.resume.geneva.30.jpg"
      }


    fetchUsers = (localID) => {
        axios.get("https://awesomeapp.localtunnel.me/gro/list", {params: {myID: localID}})
        .then((response) => {
            this.setState({users: response.data.filter((item) => {return item._id != localID})})
        });
        
    }
    pressLike(localID, remoteID, channel) {
        axios.get("https://awesomeapp.localtunnel.me/gro/match", 
        {params: {myID: localID, theirID: remoteID}});
        this.componentDidMount();
    }  
    componentDidMount(){
        this.fetchUsers(this.props.userID);
        console.log(this.props.userID)
    }
    getSingleUser(arr){
        var out = "";
        for (var i = 0; i < arr.length; i++){
            if (i < arr.length - 1){
                out+= arr[i].firstname;
                out += " "
                out += arr[i].surname;
                out += ", "
            }
            else {
                out+= arr[i].firstname;
                out += " "
                out += arr[i].surname;
            }
        }
        return out;
    }

    getUsers() {
        // send request for json file
        

        let output = [];

        this.state.users.map((user) => (
            output.push(
                <Col lg="4" md="6" sm="6">
                    <Card className="card-user">
                        <div className="image">
                        <img
                            alt="..."
                            src={user.userID[0].photoURL}
                        />
                        </div>
                        <CardBody>
                        <div className="author">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="avatar border-gray"
                                src={user.userID[0].photoURL}
                            />
                            <h5 className="title">{this.getSingleUser(user.userID)}</h5>
                            </a>
                            <p className="description">@chetfaker</p>
                        </div>
                        <p className="description text-center">
                            {user.userID[0].bio}
                        </p>
                        </CardBody>
                        <CardFooter>
                        <hr />
                        <div align = "center">
                        <div className="button-container">
                            <Row>
                            
                            <Col className="mr-auto" lg="12" md="0" xs="0">
                            <Button
                                block
                                color="primary"
                                onClick={() => this.pressLike(this.props.userID, user._id, this.props.channel)}
                                >
                                    Like
                                </Button>
                            </Col>
                            
                            
                            </Row>
                        </div>
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


  render = () => {
    
    
    if(this.getUsers().length!=1){
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
    else {
        this.getUsers()
        console.log(this.state.users)
        if (this.state.users.length === 0){
            return (<div></div>)
        }
        
        return (
            <>
            <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={"https://lh3.googleusercontent.com/proxy/PARmQFgLK3QjqO6Nahq2l4vYpbrGJxFJuJfkREV9LI-cdVyUfijxIJE1V8agL32INxQJtmaoi5i3ZPnhRiAnO56HnLxxJyLlo5ZMfym9iVXf0fo_jgYLOg"}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={this.state.users[0].userID[0].photoURL}
                      />
                      <h5 className="title">{
                          this.state.users[0].userID[0].firstname + " " + this.state.users[0].userID[0].surname
                      }</h5>
                    </a>
                    <p className="description">{this.state.users[0].userID[0].firstname + "." + this.state.users[0].userID[0].surname + "18@imperial.ac.uk"}</p>
                  </div>
                  <p className="description text-center">
                    {this.state.users[0].userID[0].bio}
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                           <br />
                          <small></small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2:1 <br />
                          <small>Expected</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                           <br />
                          <small></small>
                        </h5>
                      </Col>
                    </Row>
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
}



export default Dashboard;
