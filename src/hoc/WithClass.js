import React from 'react';
const withClass = (props) => {
    <div class={props.classes}>
        {props.children}
    </div>
}
export default withClass;
