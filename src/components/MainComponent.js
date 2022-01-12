import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Workouts from './WorkoutComponent';
import About from './AboutComponent';
import { UPPERBODYWORKOUT } from '../shared/upperbody';
import { LOWERBODYWORKOUT } from '../shared/lowerbody';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Main (props) {

    const [upperbody, setUpperBody] = React.useState(UPPERBODYWORKOUT);
    const [lowerbody, setLowerBody] = React.useState(LOWERBODYWORKOUT);

    const HomePage = () => {
        return (
            <Home />
        );
    };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/workouts' render={() => 
                        <Workouts 
                            upperworkouts={upperbody} 
                            lowerworkouts={lowerbody}
                        />} />
                    <Route exact path='/about' component={About} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
}


