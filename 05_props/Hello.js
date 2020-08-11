class Hello extends React.Component {
  render() {
    console.log(this.props);

    const to = this.props.to;
    const from = this.props.from;

    //this.props.to = "Ned Stark";

    return (
      <h1>Hello to {to} from {from}</h1>
    )
  }
}
