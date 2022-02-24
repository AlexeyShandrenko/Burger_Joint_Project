import React from "react";
import PropTypes from "prop-types";
import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Order = (props) => {
  const renderOrder = (key) => {
    const burger = props.burgers[key];
    const count = props.order[key];
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
              onClick={() => props.deleteFromOrder(key)}
              className="cancelItem"
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  const ordersId = Object.keys(props.order);
  const total = ordersId.reduce((prevTotal, key) => {
    const burger = props.burgers[key];
    const count = props.order[key];
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
        {ordersId.map(renderOrder)}
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
};

Order.propTypes = {
  deleteFromOrder: PropTypes.func,
  burgers: PropTypes.object,
  order: PropTypes.object,
};

export default Order;
