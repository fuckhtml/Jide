class Hello extends React.Component {
  render() {
    console.log(typeof this.props);
    console.log(this.props);

    const bool = this.props.bool;
    const num = this.props.num;
    const str = this.props.str;
    const list = this.props.list;
    const obj = this.props.obj;
    const img = this.props.img;

    console.log(bool);
    console.log(num);
    console.log(str);
    console.log(list);
    console.log(obj);
    console.log(img);

    return (
      <div>
        <h1>Data Types { "!".repeat(num) }</h1>
        <p>Look at what is happening in the console</p>
        <img src={img} />
      </div>
    )
  }
}
