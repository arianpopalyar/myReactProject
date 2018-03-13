import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super (props);
        console.log('[Persons JS] Inside Constructor', props);
      }
    
      componentWillMount(){
        console.log('[Persons JS] Inside Component Will mount');
      } 
    
      componentDidMount(){
        console.log('[Persons JS] Inside Component Did mount');
      } 

      componentWillReceiveProps(props){
          console.log('[Update Persons.js] inside the componentWill RecieveProps', props);
      }

    //   shouldComponentUpdate(nextProps, nextState){
    //       console.log('[Update Persons.js] inside should componenUpdate',nextProps, nextState);
    //       return nextProps.persons !== this.props.persons ||
    //       nextProps.clicked !== this.props.clicked ||
    //       nextProps.changed !== this.props.changed;
    //   }
componentsWillUpdate(nextProps, nextState){
    console.log('[Update Persons.js] inside component will Update',nextProps, nextState);
}
componentsDidUpdate(){
    console.log('[Update Persons.js] component DID Update');
}
render(){
    console.log('[Persons JS] inside the render method');
    return this.props.persons.map((person, index) =>{
        return <Person 
        click={() =>this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
      });
    }
}   
export default Persons;