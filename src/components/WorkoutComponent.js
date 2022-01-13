import React from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Input, 
    Label,
    Row,
    Col
 } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import Image1 from '../images/video-placeholder.jpeg';

// const item = [
//     {
//         src: Image1,
//         altText: 'Placeholder'
//     }
// ];

export default function Workouts(props) {

    const upperbodyWorkout = props.upperworkouts.map(workout => {
        return (
            <div className="col" key={workout.id}>
                <RenderUpperWorkout workout={workout} />
            </div>
        );
    });

    const lowerbodyWorkout = props.lowerworkouts.map(workout => {
        return (
            <div className="col" key={workout.id}>
                <RenderLowerWorkout workout={workout} />
            </div>
        );
    });
        return ( 
            <div className={props.darkMode ? 'dark-background' : ''}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 p-3">
                            <h2 className={props.darkMode ? 'dark-mode-text text-center pb-2' : 'text-center custom-font pb-2'}>Upper Body Workout</h2>
                            {upperbodyWorkout}
                        </div>
                        <div className="col-12 col-lg-6 p-3">
                            <h2 className={props.darkMode ? 'dark-mode-text text-center pb-2' : 'text-center custom-font pb-2'}>Lower Body Workout</h2>
                            {lowerbodyWorkout}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

function RenderUpperWorkout({workout}) {

    const [isModalOpen, setModalOpen] = React.useState(false);
    const [workoutData, setWorkoutData] = React.useState({
        sets: '',
        reps: '',
        weight: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        alert(`
            Sets: ${workoutData.sets}
            Reps: ${workoutData.reps} 
            Weight: ${workoutData.weight} `)
        toggleExerciseModal();
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setWorkoutData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function toggleExerciseModal() {
        setModalOpen(prevMode => !prevMode);
    }
    return (
        <React.Fragment>
            <div className="list-group" onClick={toggleExerciseModal}>
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {workout.exercise}
                  <span class="text-secondary ml-auto">{workout.sets} sets / {workout.reps} reps</span>
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{workout.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                    {/* <div>
                        <img src={item.src} alt={item.altText}/>
                    </div> */}
                    <Row>
                        <Col>
                            <h5 className="custom-font">Description</h5>
                            {workout.description}
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                        <Label htmlFor="sets" className="custom-font"><strong>Sets</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="sets" 
                                        name="sets"
                                        placeholder={workout.sets}
                                        value={workoutData.sets}
                                        onChange={handleChange}
                                    />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="reps" className="custom-font"><strong>Reps</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="reps" 
                                        name="reps"
                                        placeholder={workout.reps}
                                        value={workoutData.reps}
                                        onChange={handleChange}
                                    />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="weight" className="custom-font"><strong>Weight</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="weight" 
                                        name="weight"
                                        placeholder="lbs"
                                        value={workoutData.weight}
                                        onChange={handleChange}
                                    />
                        </FormGroup>
                        <Button type="submit" color="primary">Submit Exercise</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

function RenderLowerWorkout({workout}) {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [workoutData, setWorkoutData] = React.useState({
        sets: '',
        reps: '',
        weight: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        alert(`
            Sets: ${workoutData.sets}
            Reps: ${workoutData.reps} 
            Weight: ${workoutData.weight} `)
        toggleExerciseModal();
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setWorkoutData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function toggleExerciseModal() {
        setModalOpen(prevMode => !prevMode);
    }
    return (
        <React.Fragment>
            <div className="list-group" onClick={toggleExerciseModal}>
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {workout.exercise}
                  <span class="text-secondary ml-auto">{workout.sets} sets / {workout.reps} reps</span>
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{workout.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                    {/* <div>
                        <img src={videoPlaceholder.src} alt={videoPlaceholder.altText}/>
                    </div> */}
                    <Row>
                        <Col>
                            <h5 className="custom-font">Description</h5>
                            {workout.description}
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                        <Label htmlFor="sets" className="custom-font"><strong>Sets</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="sets" 
                                        name="sets"
                                        placeholder={workout.sets}
                                        value={workoutData.sets}
                                        onChange={handleChange}
                                    />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="reps" className="custom-font"><strong>Reps</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="reps" 
                                        name="reps"
                                        placeholder={workout.reps}
                                        value={workoutData.reps}
                                        onChange={handleChange}
                                    />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="weight" className="custom-font"><strong>Weight</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="weight" 
                                        name="weight"
                                        placeholder="lbs"
                                        value={workoutData.weight}
                                        onChange={handleChange}
                                    />
                        </FormGroup>
                        <Button type="submit" color="primary">Submit Exercise</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}
