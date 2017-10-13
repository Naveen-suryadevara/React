import react from './react';
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="black">
        <h1 className="Dialog-title">
          Hello
        </h1>
        <p className="Dialog-message">
          How are you Doing!
        </p>
      </FancyBorder>
    );
  }
  
  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
  );
export default WelcomeDialog;
