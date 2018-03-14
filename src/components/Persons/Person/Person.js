import React, {Component} from 'react';
import st from'./Person.css';
import WithClass from '../../hoc/WithClass';

class Person extends Component {
    constructor(props){
        super (props);
        console.log('[Person Js] Inside Constructor', props);
      }
    
      componentWillMount(){
        console.log('[Person Js] Inside Component Will mount');
      } 
    
      componentDidMount(){
        console.log('[Person Js] Inside Component Did mount');
      } 

render(){
    console.log('[Person Js] inside the render method');
        return (
            <WithClass classes={st.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name}, I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
        </WithClass>);
    }
}

export default Person;