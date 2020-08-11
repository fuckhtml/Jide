class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          bool = {true}
          num = {5}
          str = {"Jide"}
          list = {[1,2,3,4,5]}
          obj = { {a: 1, b: 2, c: 3,} }
          img = { "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
