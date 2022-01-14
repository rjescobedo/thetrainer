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
    Col,
    CustomFileInput,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
 } from 'reactstrap';
 import { Control, LocalForm, Errors} from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);

export default function Workouts(props) {

    const [workoutFormData, setWorkoutFormData] = React.useState({
        exerciseName: '',
        sets: '',
        reps: '',
        description: '',
        video: '',
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setWorkoutFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        alert(`
            Exercise Name: ${workoutFormData.exerciseName}
            Sets: ${workoutFormData.sets}
            Reps: ${workoutFormData.reps}
            Description: ${workoutFormData.description}
            Video: ${workoutFormData.video}
            `)
    }

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

    const upperbodyExercises = props.upperworkouts.map(upperExercise => {
        return (
            <div key={upperExercise.id}>
                <RenderUpperbodyExercise upperExercise={upperExercise} />
            </div>  
        );   
    });

    const lowerbodyExercises = props.lowerworkouts.map(lowerExercise => {
        return (
            <div key={lowerExercise.id}>
                <RenderLowerbodyExercise lowerExercise={lowerExercise} />
            </div>  
        );   
    });

    // Scrolling Exercises
    // const divStyle={
    //     overflowY: 'scroll',
    //     border:'2px solid #4f07d4',
    //     width:'600px',
    //     float: 'left',
    //     height:'300px',
    //     position:'relative'
    //   };
        return ( 
            <div className={props.darkMode ? 'dark-background' : ''}>
                <div className="container pt-4">
                    <h1 className="text-center custom-font workout-heading">Custom Exercise Form</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <LocalForm onSubmit={handleSubmit}>
                                <Row className="form-group">
                                <Label htmlFor="exerciseName" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Exercise Name</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".exerciseName" 
                                            id="exerciseName" 
                                            name="exerciseName"
                                            placeholder="Exercise Name"
                                            onChange={handleChange}
                                            value={workoutFormData.firstName}
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".exerciseName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} 
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="sets" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Sets</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".sets" 
                                            id="sets" 
                                            name="sets"
                                            placeholder="# of Sets"
                                            onChange={handleChange}
                                            value={workoutFormData.sets}
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(1),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".sets"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 1 character',
                                                maxLength: 'Must be 15 characters or less',
                                                isNumber: 'Must be a number'
                                            }} 
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="reps" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Reps</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".reps" 
                                            id="reps" 
                                            name="reps"
                                            placeholder="# of Reps"
                                            onChange={handleChange}
                                            value={workoutFormData.reps}
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(1),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".reps"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 1 character',
                                                maxLength: 'Must be 15 characters or less',
                                                isNumber: 'Must be a number'
                                            }} 
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="description" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Description</Label>
                                    <Col md={10}>
                                        <Control.textarea 
                                            model=".description" 
                                            id="description" 
                                            name="description"
                                            placeholder="Describe your exercise..."
                                            rows={5}
                                            onChange={handleChange}
                                            value={workoutFormData.description}
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".description"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 character'
                                            }} 
                                            />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="video" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Upload Video</Label>
                                    <Col md={10}>
                                        <CustomFileInput
                                            model=".video" 
                                            id="video" 
                                            name="video"
                                            onChange={handleChange}
                                            value={workoutFormData.video}
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">Submit Exercise</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                    <hr/>
                    <h1 className="text-center custom-font workout-heading">Workouts</h1>
                    <div className="row">
                        <div className="col-12 col-lg-6 p-3">
                            <h4 className={props.darkMode ? 'dark-mode-text text-center pb-2' : 'text-center custom-font pb-2'}>Upper Body Workout</h4>
                            {upperbodyWorkout}
                            <Button className="m-3" type="submit" color="primary">Workout Complete</Button>
                        </div>
                        <div className="col-12 col-lg-6 p-3">
                            <h4 className={props.darkMode ? 'dark-mode-text text-center pb-2' : 'text-center custom-font pb-2'}>Lower Body Workout</h4>
                            {lowerbodyWorkout}
                            <Button className="m-3" type="submit" color="primary">Workout Complete</Button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col p-3 overflow-hidden">
                            <h1 className="text-center custom-font workout-heading">Exercises</h1>
                                {upperbodyExercises}
                                {lowerbodyExercises}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

function RenderUpperbodyExercise({upperExercise}) {
    const [isModalOpen, setModalOpen] = React.useState(false);

    function toggleExerciseModal() {
        setModalOpen(prevMode => !prevMode);
    }

    return(
        <React.Fragment>
            <div className="list-group" onClick={toggleExerciseModal}>
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {upperExercise.exercise}
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{upperExercise.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <h5 className="custom-font">Description</h5>
                            {upperExercise.description}
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

function RenderLowerbodyExercise({lowerExercise}) {
    const [isModalOpen, setModalOpen] = React.useState(false);

    function toggleExerciseModal() {
        setModalOpen(prevMode => !prevMode);
    }

    return(
        <React.Fragment>
            <div className="list-group" onClick={toggleExerciseModal}>
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {lowerExercise.exercise}
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{lowerExercise.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <h5 className="custom-font">Description</h5>
                            {lowerExercise.description}
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
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

