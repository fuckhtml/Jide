class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Jide" from="Alex"/>
        <Hello to="Anna" from="Alex's father"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
