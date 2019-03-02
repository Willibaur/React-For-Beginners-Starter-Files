import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddFishForm extends Component {
  descRef = React.createRef();
  imageRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = event => {
    // 1. stop the form from submitting
    event.preventDefault();

    const fish = {
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value,
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
    };

    this.props.addFish(fish);

    // refresh the from
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />

        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />

        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="Desc"
        />

        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />

        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
