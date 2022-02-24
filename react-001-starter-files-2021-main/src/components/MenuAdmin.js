import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from "prop-types";

class MenuAdmin extends React.Component {
  static propTypes = {
    loadSampleBurgers: PropTypes.func,
    addBurger: PropTypes.func,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func,
    burgers: PropTypes.object
  }

  render() {
    return (
      <div className="menu-admin">
        <h2>Управление Меню</h2>
        {Object.keys(this.props.burgers).map(key => {
          return <EditBurgerForm deleteBurger={this.props.deleteBurger} updateBurger={this.props.updateBurger} key={key} index={key} burger={this.props.burgers[key]} />
        })}
        <AddBurgerForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}>Загрузить бургеры</button>
      </div>
    );
  }
}

export default MenuAdmin;
