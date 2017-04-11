import React, { Component } from 'react';
import { Table, Progress, Row, Col, Container, Card, CardTitle, CardText, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './raspberry.svg';
import './App.css';
import request from 'superagent';
import callback from 'superagent';

var Dropzone = require('react-dropzone');

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onDrop(acceptedFiles, rejectedFiles) {
      var req = request.post('/react/backend/upload.php');
        acceptedFiles.forEach((file)=> {
            req.attach(file.name, file);
        });
        req.then(function(res){ console.log(res.text); })
    }
  render() {
    const array = ["cpu","ram","uptime"];
    const array2 = [25,36,47];
    const array11 = ["cpu","ram","uptime"];
    const array22 = [25,36,47];
    const array33 = [25,36,47];
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
          <a class="navbar-brand" rel="home" href="#" title="Rasptopus">
            <img id ="headlogo" class="headlogo"  src={logo}/>
          </a>
          Rasptopus
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <center>
                <Row>
                  <Col xs="6">
                        <HardwareCard array={array} array2={array2}/><br/>
                       <Card block inverse color="info">
                          <CardTitle>Fast Actions</CardTitle>
                            <CardText>
                            <Button color="secondary">Button</Button>
                            <Button color="secondary">Button</Button>
                            <Button color="secondary">Button</Button>
                            <Button color="secondary">Button</Button>
                            </CardText>

                       </Card>
                  </Col>
                  <Col xs="6">
                    <ServerCard array={array11} array2={array22} array3={array33}/><br/>
                      <Card block inverse color="info">
                      <CardTitle>Login</CardTitle>
                      <CardText>
                                <Dropzone accept="image/*" multiple="false" onDrop={this.onDrop}>{({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
    if (isDragActive) {
      return "This file is authorized";
    }
    if (isDragReject) {
      return "This file is not authorized";
    }
    return acceptedFiles.length || rejectedFiles.length
      ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
      : "Try dropping some files";
  }}<div>Drop key to login</div></Dropzone>
                        
                      </CardText>
                    </Card>
                  </Col>
                </Row>
            </center>
          </Col>
        </Row>
      </Container>
    </div>

    );
  }
}
class HardwareCard extends React.Component {
   constructor(props) {
    super(props);
  }
  render() {
    const bars = this.props.array.map((item, index)=>
    <div>{item}<Progress animated value={this.props.array2[index]}>{this.props.array2[index]}%</Progress></div>
    );
    return (
                        <Card block inverse color="info">
                          <CardTitle>Hardware Info</CardTitle>
                            <CardText>
                            {bars}
                            </CardText>
                            <Button color="secondary">Button</Button>
                       </Card>
    );
  }
}
class ServerCard extends React.Component {
   constructor(props) {
    super(props);
  }
  render() {
    const content = this.props.array.map((item, index)=>
    <tr><td>{item}</td><td>{this.props.array2[index]}</td><td>{this.props.array3[index]}</td></tr>
    );
    return (
                    <Card block inverse color="info">
                      <CardTitle>Servers</CardTitle>
                      <CardText>
                        <Table size="sm" hover>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Status</th>
                              <th>Uptime</th>
                           </tr>
                          </thead>
                          <tbody>
                          {content}
                          </tbody>
                        </Table>
                      </CardText>
                    </Card>
    );
  }
}
export default App;
