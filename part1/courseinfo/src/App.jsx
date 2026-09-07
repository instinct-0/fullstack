import React from 'react';


const Header = (props) => {
    return <h1>{props.course}</h1>
}


const Part = (props) => {
    return <p>{props.exercisePart['name']} {props.exercisePart['exercises']}</p>
}

const Content = (props) => {
    return (
    <>
        <Part exercisePart={props.parts[0]}/>
        <Part exercisePart={props.parts[1]}/>
        <Part exercisePart={props.parts[2]}/>
    </>
    );
}

const Total = (props) => {
    const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return (
        <p>Number of exercises {sum}</p>
    );
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
        
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };

    return (
    <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
    )
}

export default App;
