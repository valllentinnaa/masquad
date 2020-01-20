import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container,
    Media
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <Navbar color="primary" dark expand="md" className="shadow">
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                        <img src="../../assets/images/masquad.jpg" alt="LOGO"/>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/"
                            activeClassName="active">
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/favorite"
                            activeClassName="active">
                            Articles
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact 
                            to="/gallery"
                            activeClassName="active">
                            Testimonials
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact
                            to="/gallery"
                            activeClassName="active">
                            Schedule a call
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    }
}

export default MenuBar;