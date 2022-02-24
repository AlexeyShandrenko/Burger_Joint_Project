import React from "react";
import PropTypes from "prop-types";

const Shipment = (props) => {
  const { total } = props;
  const shipping = total < 500 ? 350 : 99;
  const shippingNeon =
    shipping === 99 ? (
      <span className="font-effect-neon total_wrap-cheap">{shipping}₽</span>
    ) : (
      <span>{shipping}₽</span>
    );

  return (
    <div className="total">
      <div className="total_wrap">
        <div>
          <div>Доставка: {shippingNeon}</div>
          <div className="total_wrap-free">
            {total < 500
              ? `Закажите еще на ${500 - total}₽ для доставки за 99₽`
              : null}
          </div>
        </div>
        <div className="total_wrap-final">Итого: {total} ₽</div>
      </div>
    </div>
  );
};

Shipment.propTypes = {
  total: PropTypes.number,
};

export default Shipment;
