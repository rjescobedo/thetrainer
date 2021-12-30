import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">The Trainer</NavbarBrand>
                </div>
            </Navbar>
        );
    };
}

export default Main;