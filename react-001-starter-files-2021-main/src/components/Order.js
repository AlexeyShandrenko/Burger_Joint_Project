import React from "react";
import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === "available";
    if (!burger) {
      return null;
    }
    if (!isAvailable) {
      return (
        <CSSTransition
          classNames="order"
          key={key}
          timeout={{ enter: 5000, exit: 5000 }}
        >
          <li className="unavailable" key={key}>
            {burger ? burger.name : "Бургер"} временно недоступен.
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 5000, exit: 5000 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup className="count" component="span">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 5000, exit: 5000 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            шт. {burger.name}
            <span> {burger.price * count}₽</span>
            <button
              onClick={() => this.props.deleteFromOrder(key)}
              className="cancelItem"
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const ordersId = Object.keys(this.props.order);
    const total = ordersId.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];
      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Ваш заказ</h2>
        <TransitionGroup component="ul" className="order">
          {ordersId.map(this.renderOrder)}
        </TransitionGroup>
        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className="NothingSelected">
            Выберите блюдо и добавьте к заказу
          </div>
        )}
      </div>
    );
  }
}

export default Order;
