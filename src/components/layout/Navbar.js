import React, { Component, Fragment, } from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class TopMenu extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    tag={() => (
                                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                    )}
                                />
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag={() => (
                                        <Link to="/" className="nav-link">Shopping List</Link>
                                    )}
                                />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopMenu;