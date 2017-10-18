import React from 'react';
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function Note(props) {
    return (
      <div style={{color:'green', padding: '8px 8px', border: '8px solid'}}>
        <h1 style={{margin: 0, font_family: 'sans-serif'}}>
        </h1>
        <p style={{color:'black'}}>
          {props.title}
        </p>
        <p style={{color:'black'}}>
          {props.message}
        </p>
        {props.children}
        </div>
    );
  }
  
  class SignUpNote extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
        <Note title="Welcome to the Enterprise"
                message="How can i help you">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign in please!
          </button>
        </Note>
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`You got a message, ${this.state.login}!`);
    }
  }
  
  ReactDOM.render(
    <SignUpNote />,
    document.getElementById('root')
  );
  export default SignupNote;