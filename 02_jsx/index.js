function getMood() {
  var moodList = [
    "happy😊",
    "funny😂",
    "angry😠",
    "okay🙃",
  ];
  return moodList[ Math.floor(Math.random() * moodList.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Coronavirus!</h1>
        <img src="https://images.unsplash.com/photo-1594392175506-29798601d67e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="300" alt="Image is not available" />

        <h2>JavaScript Calculations. 2 * 3 is { 2 * 3 } </h2>

        <h2>My mood is: {getMood()}</h2>

        <h2>My number is...</h2>
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
