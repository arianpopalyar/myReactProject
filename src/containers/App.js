import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super (props);
    console.log('[App JS] Inside Constructor', props);
  }

  componentWillMount(){
    console.log('[App JS] Inside Component Will mount');
  } 

  componentDidMount(){
    console.log('[App JS] Inside Component Did mount');
  } 
//   shouldComponentUpdate(nextProps, nextState){
//     console.log('[shouldUpdate App.js] inside should componenUpdate',nextProps, nextState);
//     return nextState.persons !== this.state.persons ||
//     nextState.showPersons !== this.state.persons;
    
// }
componentsWillUpdate(nextProps, nextState){
console.log('[willUpdate App.js] inside component will Update',nextProps, nextState);
}
componentsDidUpdate(){
console.log('[did App.js] component DID Update');
}
  state = {
   persons  :[
     {id:'a0',name: 'Arian', age :30},
     {id:'a1',name: 'Haider', age: 32},
     {id:'a2',name: 'Jasmine', age:6}
   ],
   showPerson : false
  }

  switchHandler = (nName) =>{
    this.setState ({
      persons  :[
        {name: nName, age :30},
        {name: 'Haider', age: 32},
        {name: 'Jasmine', age:4}
      ]
    })
  }

  deletePerson = (personIndex) => {
   // const persons = this.state.persons.slice();
   const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState ({persons:persons})
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
 
    const person = {...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState ({persons  :persons})
  }
  togglePersonHandler =() => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
 
  render() {
    console.log('[App JS] inside the render method');
    let persons =null;
   
    if(this.state.showPerson){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangedHandler} />
   }



   return (

      <div className={classes.App}>
      <button onClick={()=>{this.setState({showPersons: true}) }}>Show Person</button>
       <Cockpit 
       appTitle={this.props.title}
       showPersons={this.state.showPersons}
       persons={this.state.persons}
       clicked={this.togglePersonHandler}/>
     {persons}
      </div>
 
   );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi its me'));
  }
}

export default App;
