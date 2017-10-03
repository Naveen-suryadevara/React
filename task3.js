// set time
function tick() {
    const element = ( <
        div >
        <
        h1 > Hi everyone < /h1>  <
        h2 > It is { new Date().toLocaleTimeString() }. <
        /h2>  <
        /div>
    );
}
setInterval(tick, 1000);
///using props
function Welcome(props) {
    return <h1 > Hello, { props.name } < /h1>;
}

const element = < Welcome name = "vijay" / > ;
ReactDOM.render(
    element,
    document.getElementById('root')
);
////