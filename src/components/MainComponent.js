import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Workouts from './WorkoutComponent';
import Contact from './ContactComponent';
import { HOMECAROUSEL } from '../shared/homecarousel';
import { UPPERBODYWORKOUT } from '../shared/upperbody';
import { LOWERBODYWORKOUT } from '../shared/lowerbody';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //homecarousel: HOMECAROUSEL,
            upperbody: UPPERBODYWORKOUT, 
            lowerbody: LOWERBODYWORKOUT

        };
    }
    render() {

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
                            upperworkouts={this.state.upperbody} 
                            lowerworkouts={this.state.lowerbody}
                        />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;

