import React from 'react';
function Welcome(props) {
    return <h1>Today, {props.name}</h1>;
  }
  
  function Application() {
    return (
      <div>
        <Welcome name="Todays date 10/03/2017" />
        <Welcome name="Its colombus day" />
        <Welcome name="There is a sale" />
      </div>
    );
  }
  
 
  export default Application;