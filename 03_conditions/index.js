function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {

    const num = getNum();
  
    return(
      <div>
        <h1>My number is: {num}</h1>
        <p>{num === 7 ? "Got Lucky" : "Unlucky"}</p>
        {
          num === 7 && <img src="https://media.giphy.com/media/DffShiJ47fPqM/giphy.gif" />
        }
      </div>
    )
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
