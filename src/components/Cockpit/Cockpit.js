import React from'react';
import classes from './Cockpit.css'

const cockpit =(props) => {
    // const assignedClasses=[];
    let assclasses = [];
    let btnClass =null;
    if (props.showPersons){
        btnClass = classes.Red;
    }
    
   
    if (props.persons.length <=2){
      assclasses.push(classes.red);
    }

    if(props.persons.length<=1){
      assclasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assclasses.join(' ')}>This is working!**</p>
        <button className={btnClass}
        onClick={props.clicked}>Switch Name</button>
        </div>
    );
};
export default cockpit