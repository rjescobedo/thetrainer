import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Workouts from './WorkoutComponent';
import About from './AboutComponent';
//import { EXERCISES } from '../shared/exercises';
//import { EXERCISES } from '../shared/exercises';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        exercises: state.exercises
    }
};
    function Main (props) {
    //const [exercises] = React.useState(EXERCISES);
    const [darkMode, setDarkMode] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [loginData, setLoginData] = React.useState({
        member: '',
        username: '',
        password: '',
        remember: true
    });

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
        console.log(`Login Data State: ${JSON.stringify(loginData)}`)
        alert(`
        You are logged in, ${loginData.username}!`);
        toggleModal();
    }

    function handleLogout() {
        setLoginData(() => ({
            member: '',
            username: '',
            password: '',
            remember: true
        }));
        alert(`
        You are logged out!`);
    }

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
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    loginData={loginData}
                    handleChange={handleChange}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                />
                <TransitionGroup>
                    <CSSTransition key={darkMode} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/workouts' render={() => 
                                <Workouts 
                                    exercises={props.exercises}
                                    darkMode={darkMode}
                                    loginData={loginData}
                                />} 
                            />
                            <Route exact path='/about' render={() =>
                                <About darkMode={darkMode}/>
                            }/>
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer darkMode={darkMode}/>
            </div>
        );
}

export default withRouter(connect(mapStateToProps)(Main));


