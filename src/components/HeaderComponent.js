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

    const [loginData, setLoginData] = React.useState({
        member: '',
        username: '',
        password: '',
        remember: true
    });
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    
    
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    function toggleNav() {
        setIsNavOpen(prevNav => !prevNav)
    }

    function toggleModal() {
        setIsModalOpen(prevModal => !prevModal)
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setLoginData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleLogin(event) {
        event.preventDefault();
        alert(`
            Member: ${loginData.member}
            Username: ${loginData.username} 
            Password: ${loginData.password} 
            Remember: ${loginData.remember}`);
        toggleModal();
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
                                <NavLink className="nav-link" to="/home">
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
                            <Button color="secondary" onClick={toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                            </Button>
                        </span>
                    </Collapse>
                </div>
                </Navbar>

                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleLogin}>
                                <FormGroup check>
                                    <Input 
                                        type="radio" 
                                        id="trainer" 
                                        name="member"
                                        value="trainer"
                                        checked={loginData.member === "trainer"}
                                        onChange={handleChange}
                                    />
                                    <Label htmlFor="trainer" check>Personal Trainer</Label>
                                </FormGroup>
                                <FormGroup check>
                                <Input 
                                        type="radio" 
                                        id="client" 
                                        name="member"
                                        value="client"
                                        checked={loginData.member === "client"}
                                        onChange={handleChange}
                                    />
                                    <Label htmlFor="client" check>Client</Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="username" check>Username</Label>
                                    <Input 
                                        type="text" 
                                        id="username" 
                                        name="username"
                                        onChange={handleChange}
                                        value={loginData.username}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input 
                                        type="password" 
                                        id="password" 
                                        name="password"
                                        onChange={handleChange}
                                        value={loginData.password}
                                    />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input 
                                            type="checkbox" 
                                            name="remember"
                                            id="remember"
                                            checked={loginData.remember}
                                            onChange={handleChange}
                                        /> Remember Me
                                    </Label>
                                </FormGroup>
                                <Button className="my-2" type="submit" value="submit" color="secondary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
}
