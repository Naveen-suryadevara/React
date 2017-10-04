/////using clock
function Clock(props) {
    return ( < div >
        <
        h1 > Hello < /h1>  <
        h2 > The local time in texas { props.date.toLocaleTimeString() }. < /h2>  <
        /div>
    );
}

setInterval(tick, 4000);