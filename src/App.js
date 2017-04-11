import React, { Component } from 'react';
import { Table, Progress, Row, Col, Container, Card, CardTitle, CardText, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './raspberry.svg';
import './App.css';


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
  render() {
    const array = ["cpu","ram","uptime"];
    const array2 = [25,36,47];
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
          <a class="navbar-brand" rel="home" href="#" title="Rasptopus">
            <img id ="headlogo" class="headlogo"  src={logo}/>
          </a>
          RaspGod
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
                            <tr>
                              <th>SSH</th>
                              <td>ok</td>
                              <td>3s</td>
                            </tr>
                            <tr>
                              <th>FTP</th>
                              <td>dead</td>
                              <td>05:06:07</td>
                            </tr>
                            <tr>
                              <th>Apache2</th>
                              <td>error</td>
                              <td>08:09:10</td>
                            </tr>

                          </tbody>
                        </Table>
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
export default App;
