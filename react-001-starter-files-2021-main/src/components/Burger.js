import React from "react";

class Burger extends React.Component {
  render() {
    const { name, image, desc, price, status } = this.props.details;
    const isAvailable = status == 'available'
    const index = this.props.index

    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} />
        </div>
        <div className="burger-details">
          <h3 className="burger-name">
            {name}
            <span className="price">{price}₽</span>
          </h3>
          <p>{desc}</p>
          <button onClick={() => this.props.addToOrder(index)} className="buttonOrder" disabled={!isAvailable}>
            {isAvailable ? "Заказать" : "Временно нет"}
          </button>
        </div>
      </li>
    );
  }
}

export default Burger;
