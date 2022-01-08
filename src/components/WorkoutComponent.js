import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderUpperWorkout({workout}) {
    return (
        <React.Fragment>
            <div className="list-group">
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {workout.exercise}
                  <span class="text-secondary ml-auto">{workout.sets} sets / {workout.reps} reps</span>
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>
        </React.Fragment>
    );
}

function RenderLowerWorkout({workout}) {
    return (
        <React.Fragment>
            <div className="list-group">
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {workout.exercise}
                  <span class="text-secondary ml-auto">{workout.sets} sets / {workout.reps} reps</span>
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>
        </React.Fragment>
    );
}

function Workouts(props) {

    const upperbodyWorkout = props.upperworkouts.map(workout => {
        return (
            // Task 3
            <div className="col" key={workout.id}>
                <RenderUpperWorkout workout={workout} />
            </div>
        );
    });
    const lowerbodyWorkout = props.lowerworkouts.map(workout => {
        return (
            // Task 3
            <div className="col" key={workout.id}>
                <RenderLowerWorkout workout={workout} />
            </div>
        );
    });
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 p-3">
                        <h2 className="text-center custom-font pb-2">Upper Body Workout</h2>
                        {upperbodyWorkout}
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <h2 className="text-center custom-font pb-2">Lower Body Workout</h2>
                        {lowerbodyWorkout}
                    </div>
                </div>
            </div>
        )
    
}

export default Workouts;
