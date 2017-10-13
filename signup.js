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
      <FancyBorder color="black">
        <h1 className="Note-title">
          {props.title}
        </h1>
        <p className="Note-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
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