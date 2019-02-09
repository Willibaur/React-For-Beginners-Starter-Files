import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();

    // 2. get the text from that input
    const storeName = this.myInput.current.value;

    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>

        <input defaultValue={getFunName()} placeholder="Store Name" ref={this.myInput} required type="text" />

        <button type="submit">Visit Store =></button>
      </form>
    );
  }
}

export default StorePicker;
