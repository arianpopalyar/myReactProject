import React, {Component} from 'react';
import st from'./Person.css';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

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
        if (this.props.position === 0){
            this.inputElement.focus();
        }
      } 

render(){
    console.log('[Person Js] inside the render method');
        return (
            <Aux classes={st.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name}, I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                ref={(inp)=>{ this.inputElement = inp}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
        </Aux>);
    }
}

Person.propTypes={
    click: PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};
export default withClass(Person, st.Person);