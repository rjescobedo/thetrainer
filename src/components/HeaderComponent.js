import React, { Component } from 'react';
import { 
    Nav, 
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    Collapse, 
    NavItem, 
    Jumbotron,
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Input, 
    Label, 
 } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            inModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`
            Member: ${this.member.value}
            Username: ${this.username.value} 
            Password: ${this.password.value} 
            Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

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

                <Navbar light className="navbar navbar-dark" sticky="top" expand="md">
                <div className="container-fluid">
                    <NavbarBrand href="/"><i className="fas fa-dumbbell" /> The Trainer</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg"/> Home
                                </NavLink>
                            </NavItem>
                                <NavLink className="nav-link" to="/workouts">
                                    <i className="fas fa-dumbbell fa-lg"/> Workouts
                                </NavLink>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fas fa-mobile-alt fa-lg"/> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text ml-auto">
                            <Button color="primary" onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                            </Button>
                        </span>
                    </Collapse>
                </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                                <FormGroup check>
                                    <Input 
                                        type="radio" 
                                        id="trainer" 
                                        name="member"
                                        value="trainer"
                                        //checked={this.state.trainer === "trainer"}
                                        innerRef={input => this.member = input} 
                                    />
                                    <Label htmlFor="trainer" check>Personal Trainer</Label>
                                </FormGroup>
                                <FormGroup check>
                                <Input 
                                        type="radio" 
                                        id="client" 
                                        name="member"
                                        value="client"
                                        //checked={this.state.client === "client"}
                                        innerRef={input => this.member = input} 
                                    />
                                    <Label htmlFor="client" check>Client</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username" check>Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                            innerRef={input => this.remember = input} /> Remember Me
                                    </Label>
                                </FormGroup>
                                <Button className="my-2" type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;