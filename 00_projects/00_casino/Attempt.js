class Attempt extends React.Component {
  render() {

    const fruits = ["🍒", "🍌", "🍉"];
    const answersList = this.props.answersList;
    let result = false;

    if (answersList[0] === answersList[1] &&
        answersList[1] === answersList[2]) {
      result = true;
    }

    return (
      <div>
        <p>{fruits[ answersList[0] ]} {fruits[ answersList[1] ]} {fruits[ answersList[2] ]}</p>
        <p><b>{result ? "You win! :D":"You loose :("}</b></p>
      </div>
    )
  }
}
