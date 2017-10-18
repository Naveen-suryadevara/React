import react from './react';
// .FancyBorder {
//   padding: 10px 10px;
//   border: 10px solid;
// }

// .FancyBorder-blue {
//   border-color: blue;
// }

// .Note-title {
//   margin: 0;
//   font-family: sans-serif;
// }

// .Note-message {
//   font-size: larger;
// }
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeNote() {
    return (
      <div style={{color:'green', padding: '8px 8px', border: '8px solid'}}>
        <h1 style={{color:'black',margin: 0, font_family: 'sans-serif'}}>
          Hi
        </h1>
        <p style={{color:'black',font_size: 'medium'}}>
          How are you doing!
        </p>
      </div>
    );
  }
  export default WelcomeNote;