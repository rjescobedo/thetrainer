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
    Media
 } from 'reactstrap';
 import { Control, LocalForm, Errors} from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);

export default function Workouts(props) {

    function handleSubmit(values) {
        console.log(`Contact Form State: ${JSON.stringify(values)}`);
        alert(`Contact Form State: ${JSON.stringify(values)}`);
        props.addComment(props.exerciseId, values.exerciseName, values.type, values.sets, values.reps, values.description, values.video)
    }

       
    const upperbodyWorkout = props.exercises.filter(upperWorkout => upperWorkout.type === 'upperbody').map(filteredUpperWorkout => {
        return (
            <div className="col" key={filteredUpperWorkout.id}>
                <RenderUpperWorkout filteredUpperWorkout={filteredUpperWorkout} />
            </div>
        );
    })


    const lowerbodyWorkout = props.exercises.filter(lowerWorkout => lowerWorkout.type === 'lowerbody').map(filteredLowerWorkout => {
        return (
            <div className="col" key={filteredLowerWorkout.id}>
                <RenderLowerWorkout filteredLowerWorkout={filteredLowerWorkout} />
            </div>
        );   
    });

    const exercises = props.exercises.map(exercise => {
        return (
            <div key={exercise.id}>
                <RenderExercises
                    exercise={exercise}
                    addExercise={props.addExercise}
                    exerciseId={props.exerciseId}
                />
            </div>  
        );   
    });

        return ( 
            <div className={props.darkMode ? 'dark-background' : ''}>
                <div className="container pt-4">
                    {props.loginData.member === 'trainer' ? <h1 className="text-center custom-font workout-heading">Custom Exercise Form</h1> : ''}
                    <div className="row">
                        <div className="col-md-12">
                            {props.loginData.member === 'trainer' ? <LocalForm onSubmit={values => handleSubmit(values)}>
                                <Row className="form-group">
                                <Label htmlFor="exerciseName" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Exercise Name</Label>
                                    <Col md={10}>
                                        <Control.text 
                                            model=".exerciseName" 
                                            id="exerciseName" 
                                            name="exerciseName"
                                            placeholder="Exercise Name"
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
                                <Label htmlFor="type" md={2} className={props.darkMode ? 'dark-mode-text' : ''}>Type</Label>
                                    <Col md={10}>
                                        <Input
                                            type="select"
                                            model=".type" 
                                            id="type" 
                                            name="type"
                                            className="form-control">
                                                <option value="">-- Select Exercise Type --</option>
                                                <option value="upperbody">Upper Body</option>
                                                <option value="lowerbody">Lower Body</option>
                                                <option value="cardio">Cardio</option>
                                        </Input>
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
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="secondary">Submit Exercise</Button>
                                    </Col>
                                </Row>
                            </LocalForm> : ''}
                        </div>
                    </div>
                    {props.loginData.member === 'trainer' ? <hr/> : ''}
                    <h1 className="text-center custom-font workout-heading">Workouts</h1>
                    <div className="row">
                        <div className="col-12 col-lg-6 p-3">
                            <h4 className={props.darkMode ? 'dark-mode-text text-center pb-2' : 'text-center custom-font pb-2'}>Upper Body Workout</h4>
                            {upperbodyWorkout}
                            <Button className="m-3" type="submit" color="secondary">Workout Complete</Button>
                        </div>
                        <div className="col-12 col-lg-6 p-3">
                            <h4 className={props.darkMode ? 'dark-mode-text text-center pb-2' : 'text-center custom-font pb-2'}>Lower Body Workout</h4>
                            {lowerbodyWorkout}
                            <Button className="m-3" type="submit" color="secondary">Workout Complete</Button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col p-3 overflow-hidden">
                            <h1 className="text-center custom-font workout-heading">Exercises</h1>
                                {exercises}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

function RenderExercises({exercise, addExercise, exerciseId}) {
    const [isModalOpen, setModalOpen] = React.useState(false);

    function toggleExerciseModal() {
        setModalOpen(prevMode => !prevMode);
    }

    return(
        <React.Fragment>
            <div className="list-group" onClick={toggleExerciseModal}>
                <a id="chestPressButton" class="custom-workout-font list-group-item d-flex justify-content-between list-group-item-action">
                  {exercise.exercise}
                  {addExercise.exerciseName}
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{exercise.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                        {exercise.video ?<iframe
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                src={exercise.video}
                                alt={exercise.exercise}
                                width="100%"
                                height="300"
                            /> : <Media 
                                    src="https://i0.wp.com/urbanpolicyplatform.org/wp-content/uploads/2020/10/video-comingsoon.jpg?ssl=1" 
                                    alt="Video Coming Soon"
                                    width="100%" />}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="custom-font pt-3">Description</h4>
                            {exercise.description}
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}


function RenderUpperWorkout({filteredUpperWorkout}) {

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
                  {filteredUpperWorkout.exercise}
                  <span class="text-secondary ml-auto">{filteredUpperWorkout.sets} sets / {filteredUpperWorkout.reps} reps</span>
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{filteredUpperWorkout.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                <Row>
                        <Col>
                        {filteredUpperWorkout.video ?<iframe
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                src={filteredUpperWorkout.video}
                                alt={filteredUpperWorkout.exercise}
                                width="100%"
                                height="300"
                            /> : <Media 
                                    src="https://i0.wp.com/urbanpolicyplatform.org/wp-content/uploads/2020/10/video-comingsoon.jpg?ssl=1" 
                                    alt="Video Coming Soon"
                                    width="100%" />}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="custom-font pt-3">Description</h4>
                            {filteredUpperWorkout.description}
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                        <Label htmlFor="sets" className="custom-font"><strong>Sets</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="sets" 
                                        name="sets"
                                        placeholder={filteredUpperWorkout.sets}
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
                                        placeholder={filteredUpperWorkout.reps}
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
                        <Button type="submit" color="secondary">Submit Exercise</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

function RenderLowerWorkout({filteredLowerWorkout}) {
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
                  {filteredLowerWorkout.exercise}
                  <span class="text-secondary ml-auto">{filteredLowerWorkout.sets} sets / {filteredLowerWorkout.reps} reps</span>
                  <i class="fas fa-chevron-right m-1"></i>
                </a>
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleExerciseModal}>
                <ModalHeader toggle={toggleExerciseModal} className="custom-font bg-light">
                    <h3>{filteredLowerWorkout.exercise}</h3>
                </ModalHeader>
                <ModalBody>
                <Row>
                        <Col>
                        {filteredLowerWorkout.video ?<iframe
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                src={filteredLowerWorkout.video}
                                alt={filteredLowerWorkout.exercise}
                                width="100%"
                                height="300"
                            /> : <Media 
                                    src="https://i0.wp.com/urbanpolicyplatform.org/wp-content/uploads/2020/10/video-comingsoon.jpg?ssl=1" 
                                    alt="Video Coming Soon"
                                    width="100%" />}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="custom-font pt-3">Description</h4>
                            {filteredLowerWorkout.description}
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                        <Label htmlFor="sets" className="custom-font"><strong>Sets</strong></Label>
                                    <Input 
                                        type="text" 
                                        id="sets" 
                                        name="sets"
                                        placeholder={filteredLowerWorkout.sets}
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
                                        placeholder={filteredLowerWorkout.reps}
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
                        <Button type="submit" color="secondary">Submit Exercise</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

