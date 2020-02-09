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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
	FormGroup,
	Form,
	Input,
	Button
} from "reactstrap";

class Tables extends React.Component {
	constructor(props) {
		super(props)
		this.nameInp = React.createRef()
		//this.memnoInp = React.createRef()
		this.handleClick = this.handleClick.bind(this)
		this.state = { chanName:null, memNum:null }
	}

	async handleClick(event) {
		console.log("Clicked Button")
		event.preventDefault()
		await this.setState({
			chanName: this.nameInp.current.value,
			//memNum: this.memnoInp.current.value
		})
		axios.post('https://awesomeapp.localtunnel.me/channel/create/'+this.state.chanName, { })
	}

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
							<Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Create Channel</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Channel Name</label>
                          <Input
														innerRef={this.nameInp}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label>Number of Teammates</label>
                          <Input
                            //innerRef={this.memnoInp}
                            type="number"
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
                          Create
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

export default Tables;
