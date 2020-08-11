class Hello extends React.Component {
  render() {
    console.log(this.props);

    const to = this.props.to;
    const from = this.props.from;

    return (
      //<h1>Hello to {this.props.to} from {this.props.from}</h1>
      <h1>Hello to {to} from {from}</h1>
    )
  }
}
