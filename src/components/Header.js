import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contacts from "../pages/Contacts.js";
import Blog from "./../pages/Blog.js";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              React site
            </Navbar.Brand>
            <Navbar.Toggle arai-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-between"
              id="responsive-navbar-nav"
            >
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about" className="navText">
                  {" "}
                  About us{" "}
                </Nav.Link>
                <Nav.Link href="/contacts" className="navText">
                  {" "}
                  Contacts{" "}
                </Nav.Link>
                <Nav.Link href="/blog" className="navText">
                  {" "}
                  Blog{" "}
                </Nav.Link>
              </Nav>
              <Form inline className="d-flex ">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contacts" element={<Contacts/>} />
            <Route exact path="/blog" element={<Blog/>} />
          </Routes>
        </Router>
      </>
    );
  }
}
