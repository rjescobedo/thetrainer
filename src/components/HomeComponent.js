import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Example from './CarouselComponent'


export default function Home(props) {

    return (
        <div className={props.darkMode ? 'dark-background' : ''}>
            <div className="container">
                <div className="row row-content">
                    <div className={props.darkMode ? 'dark-mode-text col-12 text-center' : 'col-12 custom-font text-center'}>
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
                    <Card className={props.darkMode ? 'dark-mode-card' : 'bg-light'}>
                        <CardBody>
                            <CardTitle className={props.darkMode ? 'text-center dark-mode-card' : 'text-center card-title'}><strong>Custom Workouts</strong></CardTitle>
                            <CardText className="p-2 text-center">Ready to workout? Click here to view some custom workouts!</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-sm-6 col-xl-5 offset-xl-2">
                    <Card className={props.darkMode ? 'dark-mode-card' : 'bg-light'}>
                        <CardBody>
                            <CardTitle className={props.darkMode ? 'text-center dark-mode-card' : 'text-center card-title'}><strong>Message Trainer</strong></CardTitle>
                            <CardText className="p-2 text-center">Need to reach out to your personal trainer? Click here to chat with them!</CardText>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
