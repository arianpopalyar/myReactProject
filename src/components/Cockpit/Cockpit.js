import React from'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'
const cockpit =(props) => {
    // const assignedClasses=[];
    let assclasses = [];
    let btnClass =classes.Button;
    if (props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
   
    if (props.persons.length <=2){
      assclasses.push(classes.red);
    }

    if(props.persons.length<=1){
      assclasses.push(classes.bold);
    }
    return(
   <Aux>
        <h1>{props.appTitle}</h1>
        <p className={assclasses.join(' ')}>This is working!**</p>
        <button className={btnClass}
        onClick={props.clicked}>Switch Name</button>
</Aux>
    );
};
export default cockpit