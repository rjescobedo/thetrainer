import React from 'react';
import { Card, CardText, CardBody, CardTitle, NavItem } from 'reactstrap';

// function RenderCard(props) {
//     return (
//         <Card>
//             <CardBody>
//                 <CardTitle>{props.title}Custom Workouts</CardTitle>
//                 <CardText>{props.description}Ready to workout? Click here to view some custom workouts!</CardText>
//             </CardBody>
//         </Card>
//     );

// }

function Home(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 text-center custom-font">
                    <h1 className="display-3">Welcome!</h1>
                    <i className="fas fa-dumbbell fa-5x"></i>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6 col-xl-5">
                <Card className="bg-light">
                    <CardBody>
                        <CardTitle className="custom-font text-center"><strong>Custom Workouts</strong></CardTitle>
                        <CardText className="p-2">Ready to workout? Click here to view some custom workouts!</CardText>
                        <button to="/workout" className="btn btn-primary">Workouts</button>
                    </CardBody>
                </Card>
                </div>
                <div className="col-sm-6 col-xl-5">
                <Card className="bg-light">
                    <CardBody>
                        <CardTitle className="custom-font text-center"><strong>Message Trainer</strong></CardTitle>
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