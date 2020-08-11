class App extends React.Component {
  render() {

    let attemptsList = [];

    for (let i = 0; i < 3; i++) {
      let answersList = []

      for (let j = 0; j < 3; j++ ) {
        answersList.push( Math.floor(Math.random() * 3) )
      }

      attemptsList.push( answersList );
    }

    console.log(attemptsList);

    return (
      <div>
        <h1>App</h1>

        <Attempt answersList={attemptsList[0]} />
        <Attempt answersList={attemptsList[1]} />
        <Attempt answersList={attemptsList[2]} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
