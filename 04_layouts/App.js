class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Greetings!</h1>
        <Hello />
        <Goodbye />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
