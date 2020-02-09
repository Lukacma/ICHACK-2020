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
import axios from 'axios';
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
  Col
} from "reactstrap";

class User extends React.Component {
	constructor(props) {
		super(props)
		this.bioInput = React.createRef()
		this.fnInp = React.createRef()
		this.lnInp = React.createRef()
		this.uniInp = React.createRef()
		this.cidInp = React.createRef()
		this.emailInp = React.createRef()
		this.langInp = React.createRef()
		this.gitInp = React.createRef()
		this.linkInp = React.createRef()
		this.pronInp = React.createRef()
		this.handleClick = this.handleClick.bind(this)
		this.loadState = this.loadState.bind(this)
		this.state = { bio: '', fn: '', ln: '', uni:'', cid: null, email:'', lang:'', git:'', link:'', pron:''}
		axios.get('https://awesomeapp.localtunnel.me/gro/4df6539ae90592692ccc9940/update_bio').then(res=>{
			this.loadState(res)
			//this.state = { bio: res.data[0].bio, fn: res.data[0].firstname, ln: res.data[0].lastname, uni:'', cid: null, email:'', lang:'', git:'', link:'', pron:''}
			//this.handleClick = this.handleClick.bind(this)
		})
		//this.state = { bio: '', fn: '', ln: '', uni:'', cid: null, email:'', lang:'', git:'', link:'', pron:''}
	}

	async loadState(res) {
		await this.setState({ bio: res.data.bio, fn: res.data.firstname, ln: res.data.surname, uni:'', cid: null, email:'', lang:'', git:'', link:'', pron:''})
	}

	async handleClick(event) {
		console.log("Clicked button")
		event.preventDefault()
		//console.log(this.bioInput.current.value)
		await this.setState({
			bio: this.bioInput.current.value,
			fn: this.fnInp.current.value,
			ln: this.lnInp.current.value,
			uni: this.uniInp.current.value,
			cid: this.cidInp.current.value,
			email: this.emailInp.current.value,
			lang: this.langInp.current.value,
			git: this.gitInp.current.value,
			link: this.linkInp.current.value,
			pron: this.pronInp.current.value
		})
		
		axios.post('https://awesomeapp.localtunnel.me/gro/4df6539ae90592692ccc9940/update_bio', {
			bio: this.state.bio,
			firstname: this.state.fn,
			surname: this.state.ln,
			_id: "4df6539ae90592692ccc9940",
			photoURL: this.state.link
		})
		//console.log(this.state)
	}

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
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
                        src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}
                      />
                      <h5 className="title">{this.state.fn} {this.state.ln}</h5>
                    </a>
                    <p className="description">@{this.state.cid}</p>
                  </div>
                  <p className="description text-center">
                    { this.state.bio }
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Teams</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          4/5 <br />
                          <small>Completed</small>
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
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Teams You're Part Of</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          ICHACK2020 <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/joe-gardner-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          Creative Tim <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Flume <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Profile</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>University</label>
                          <Input
														innerRef={this.uniInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>CID</label>
                          <Input
                            innerRef={this.cidInp}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input innerRef={this.emailInp} type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            innerRef={this.fnInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            innerRef={this.lnInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>(Programming) Languages</label>
                          <Input
                            innerRef={this.langInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Github</label>
                          <Input
                            innerRef={this.gitInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>LinkedIn (optional)</label>
                          <Input
                            innerRef={this.linkInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Pronouns</label>
                          <Input innerRef={this.pronInp} type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
														innerRef={this.bioInput}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
													onClick={this.handleClick}
                        >
                          Update Profile
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

export default User;
