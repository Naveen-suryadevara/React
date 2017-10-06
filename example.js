import React from 'react';

function Welcome(props) {
    return <h1 > Hello, { props.name } { props.age } < /h1>;
}

//const element = <Welcome name="" age='  45'/>;
export default Welcome;