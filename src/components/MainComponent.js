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
    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode(prevMode => ! prevMode)
    }

    const HomePage = () => {
        return (
            <Home
                darkMode={darkMode}
            />
        );
    };
        return (
            <div>
                <Header
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/workouts' render={() => 
                        <Workouts 
                            upperworkouts={upperbody} 
                            lowerworkouts={lowerbody}
                            darkMode={darkMode}
                        />} 
                    />
                    <Route exact path='/about' render={() =>
                        <About darkMode={darkMode}/>
                    }/>
                    <Redirect to='/home' />
                </Switch>
                <Footer darkMode={darkMode}/>
            </div>
        );
}


