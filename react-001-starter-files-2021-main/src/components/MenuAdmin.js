import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

class MenuAdmin extends React.Component {
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
