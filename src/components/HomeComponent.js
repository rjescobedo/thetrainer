import React from 'react';
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
                    </div>
                </div>
            </div>
        </div>
    );
}
