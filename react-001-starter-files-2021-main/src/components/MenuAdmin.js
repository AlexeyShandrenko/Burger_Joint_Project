import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from "prop-types";

const MenuAdmin = (props) => {
  return (
    <div className="menu-admin">
      <h2>Управление Меню</h2>
      {Object.keys(props.burgers).map((key) => {
        return (
          <EditBurgerForm
            deleteBurger={props.deleteBurger}
            updateBurger={props.updateBurger}
            key={key}
            index={key}
            burger={props.burgers[key]}
          />
        );
      })}
      <AddBurgerForm addBurger={props.addBurger} />
      <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
    </div>
  );
};

MenuAdmin.propTypes = {
  loadSampleBurgers: PropTypes.func,
  addBurger: PropTypes.func,
  updateBurger: PropTypes.func,
  deleteBurger: PropTypes.func,
  burgers: PropTypes.object,
};

export default MenuAdmin;
