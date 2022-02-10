import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button className="m-5 nav bg-light">
            <Link to= "/books" className="nav-link">
              Manage Book List
            </Link>
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;