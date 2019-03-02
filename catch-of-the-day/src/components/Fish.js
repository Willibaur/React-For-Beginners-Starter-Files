import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

export default class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      desc: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
  };

  render() {
    const { desc, image, name, price, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />

        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>

        <p>{desc}</p>

        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
        >
          {isAvailable ? "Add To Oder" : "Sold Out!"}
        </button>
      </li>
    );
  }
}
