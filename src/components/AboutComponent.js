import React from 'react';
import { 
    Button, 
    Label,  
    Col,
    Row } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


export default function About(props) {

    function handleSubmit(values) {
        console.log(`Contact Form State: ${JSON.stringify(values)}`);
        alert(`Contact Form State: ${JSON.stringify(values)}`);
    }

        return (
            <div className={props.darkMode ? 'dark-background dark-mode-text' : ''}>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col">
                            <h2>About Us</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row row-content align-items-center">
                        <div className="col">
                            <p className="aboutus-text"><strong className="custom-font">The Trainer</strong> is an innovative application to connect personal trainers and clients. Trainers will be able to create exercises and workouts for their clients with a detailed description, plus include videos and photos of every exercise. If the client has any questions about any of the workouts or upcoming appointments, this can be also communicated through <strong className="custom-font">The Trainer!</strong></p>
                            <p className="aboutus-text">Have any questions or need to reach out to us? Please complete the form below.</p>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h2>Reach out to us!</h2>
                            <hr />
                        </div>
                        <div className="col-md-12">
                            <LocalForm onSubmit={values => handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".firstName" 
                                            id="firstName" 
                                            name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} 
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".lastName" 
                                            id="lastName" 
                                            name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phone" md={2}>Phone Number</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".phone" 
                                            id="phone" 
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phone"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }} 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".email" 
                                            id="email" 
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }} 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 4, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox 
                                                    model=".agree" 
                                                    id="agree" 
                                                    name="agree"
                                                    className="form-check-input"
                                                    /> {' '}
                                                    <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comments" md={2}>Comments</Label>
                                    <Col md={10}>
                                        <Control.textarea
                                            model=".comments"
                                            id="comments"
                                            name="comments"
                                            rows="12"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group text-center">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button className="btn-custom" type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );

}

