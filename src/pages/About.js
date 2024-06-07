import React, { Component } from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import "../App.css"

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id ='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Desigh</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Prog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frame</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libr</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col cm={9}>
              <Tab.Content className="tabContent">
                <Tab.Pane eventKey='first'>
                  <img src="https://static16.tgcnt.ru/posts/_0/76/76e0101e4175e84c6e653c8012495d7b.jpg"/>
                  <p>Lorem LOrem lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src="https://sun9-26.userapi.com/impg/_1bnU5G-Q0GiapyEXsjYYd7IemBDIZH8RnY1gA/2x5-FXvzw8I.jpg?size=1280x720&quality=96&sign=fcefe67b14fe21a2402a1851a806909c&type=album"/>
                  <p>Lorem LOrem lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src="https://i.ytimg.com/vi/mcSn0Ch7OeI/maxresdefault.jpg"/>
                  <p>Lorem LOrem lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img src="https://onaircode.com/wp-content/uploads/2018/03/10-Best-JavaScript-Frameworks.jpg"/>
                  <p>Lorem LOrem lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img src="https://i.ytimg.com/vi/glXiVI-9shE/maxresdefault.jpg"/>
                  <p>Lorem LOrem lorem</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
