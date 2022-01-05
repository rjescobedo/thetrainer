import React, {useState} from 'react';
import {UPPERBODYWORKOUT } from '../shared/upperbody'

function Workouts() {

    const [upperbody, setUpperbody] = useState(UPPERBODYWORKOUT)

    console.log(upperbody);
        return ( 
            <div className="container">
                <h1>Workouts</h1>
            </div>
        )
    
}

export default Workouts;
