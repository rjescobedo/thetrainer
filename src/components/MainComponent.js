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
    const [upperbody] = React.useState(UPPERBODYWORKOUT);
    const [lowerbody] = React.useState(LOWERBODYWORKOUT);
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
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/workouts' render={() => 
                        <Workouts 
                            upperworkouts={upperbody} 
                            lowerworkouts={lowerbody}
                            darkMode={darkMode}
                            loginData={loginData}
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


