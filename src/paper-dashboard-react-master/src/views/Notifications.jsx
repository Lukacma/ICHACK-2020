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
/*eslint-disable*/
import React from "react";
import axios from 'axios';
// react plugin for creating notifications over the dashboard
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

class Notifications extends React.Component {
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
		this.state = { bio: '', fn: "Jane", ln: "Doe", uni:'', cid: null, email:'', lang:'', git:'', link:'', pron:''}
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

		axios.post('https://awesomeapp.localtunnel.me/Sunny/newUser', {
			bio: this.state.bio,
			firstname: this.state.fn,
			surname: this.state.ln,
			photoURL: this.state.link
		})
		//console.log(this.state)
	}

  render() {
    return (
      <>
        <div className="content">
          <Row>
            
            <Col md="12">
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

export default Notifications;
