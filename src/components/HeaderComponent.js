import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="mb-0 d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="display-1 text-center">The Trainer</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar className="navbar bg-light" sticky="top">
                <div className="container">
                    <NavbarBrand className="custom-font" href="/">The Trainer</NavbarBrand>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;