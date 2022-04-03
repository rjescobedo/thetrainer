import React from 'react';
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
import DarkModeToggle from 'react-dark-mode-toggle';

export default function Header(props) {

    const [isNavOpen, setIsNavOpen] = React.useState(false);
    
    
    function toggleNav() {
        setIsNavOpen(prevNav => !prevNav)
    }


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
                    <NavbarToggler onClick={toggleNav}/>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <i className="fa fa-home fa-lg"/> Home
                                </NavLink>
                            </NavItem>
                                <NavLink className="nav-link" to="/workouts">
                                    <i className="fas fa-dumbbell fa-lg"/> Workouts
                                </NavLink>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fas fa-mobile-alt fa-lg"/> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                </NavLink>
                            </NavItem>
                            <NavItem>
                               
                            </NavItem>
                        </Nav>
                        <DarkModeToggle
                            className="nav-link"
                            onChange={props.toggleDarkMode}
                            checked={props.darkMode}
                            size={55}
                        />
                        <span className="navbar-text ml-auto">
                            {props.loginData.member === '' ? <Button outline className="btn-custom" onClick={props.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                            </Button> : <Button outline className="btn-custom" onClick={props.handleLogout}>
                                <i className="fa fa-sign-out fa-lg" /> Logout
                            </Button>}
                        </span>
                    </Collapse>
                </div>
                </Navbar>

                <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
                    <ModalHeader className="bg-light custom-font" toggle={props.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={props.handleLogin}>
                                <FormGroup check>
                                    <Input 
                                        type="radio" 
                                        id="trainer" 
                                        name="member"
                                        value="trainer"
                                        checked={props.loginData.member === "trainer"}
                                        onChange={props.handleChange}
                                    />
                                    <Label htmlFor="trainer" check>Personal Trainer</Label>
                                </FormGroup>
                                <FormGroup check>
                                <Input 
                                        type="radio" 
                                        id="client" 
                                        name="member"
                                        value="client"
                                        checked={props.loginData.member === "client"}
                                        onChange={props.handleChange}
                                    />
                                    <Label htmlFor="client" check>Client</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username" check>Username</Label>
                                    <Input 
                                        type="text" 
                                        id="username" 
                                        name="username"
                                        onChange={props.handleChange}
                                        value={props.loginData.username}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input 
                                        type="password" 
                                        id="password" 
                                        name="password"
                                        onChange={props.handleChange}
                                        value={props.loginData.password}
                                    />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input 
                                            type="checkbox" 
                                            name="remember"
                                            id="remember"
                                            checked={props.loginData.remember}
                                            onChange={props.handleChange}
                                        /> Remember Me
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Button className="btn-custom mt-3" type="submit" value="submit">Login</Button>
                                </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
}
