import React, {Component} from "react";
import { Navbar, NavbarBrand} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class AppNavbar extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <Navbar className="navbar-dark bg-dark px-5">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            </Navbar>
        )
    }
}

export default AppNavbar;