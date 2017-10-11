import React from "react";
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);