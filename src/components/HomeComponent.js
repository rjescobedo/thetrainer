import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Example from './CarouselComponent'


function Home(props) {


    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 custom-font text-center">
                    <h1 className="display-1">Welcome!</h1>
                    <i className="fas fa-dumbbell fa-5x"></i>
                    <hr />
                </div>
                <div className="col text-center">
                    <Example />
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6 col-xl-5 pb-5">
                <Card className="bg-light">
                    <CardBody>
                        <CardTitle className="text-center card-title"><strong>Custom Workouts</strong></CardTitle>
                        <CardText className="p-2">Ready to workout? Click here to view some custom workouts!</CardText>
                        <button to="/" className="btn btn-primary">Workouts</button>
                    </CardBody>
                </Card>
                </div>
                <div className="col-sm-6 col-xl-5 offset-xl-2">
                <Card className="bg-light">
                    <CardBody>
                        <CardTitle className="text-center card-title"><strong>Message Trainer</strong></CardTitle>
                        <CardText className="p-2">Need to reach out to your personal trainer? Click ehre to chat with them!</CardText>
                        <button to="/" className="btn btn-primary">Messenger</button>
                    </CardBody>
                </Card>
                </div>
            </div>
        </div>
    );
}


export default Home;