import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {

  static propTypes = {
    match: PropTypes.object
  }

  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.restaurant_id);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.restaurant_id}/burgers`, {
      context: this,
      state: "burgers",
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(
      params.restaurant_id,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    const burgers = { ...this.state.burgers };
    burgers[`burger${Date.now()}`] = burger;
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  updateBurger = (key, updatedBurger) => {
    const burgers = {...this.state.burgers}
    burgers[key] = updatedBurger
    this.setState({burgers})
  }

  deleteBurger = (key) => {
    const burgers = {...this.state.burgers}
    burgers[key] = null
    this.setState({burgers})
  }

  deleteFromOrder = (key) => {
    const order = {...this.state.order}
    delete order[key]
    this.setState({order})
  }

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title='Hot Burgers' />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map((key) => {
              return (
                <Burger
                  key={key}
                  index={key}
                  details={this.state.burgers[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order deleteFromOrder={this.deleteFromOrder} burgers={this.state.burgers} order={this.state.order} />
        <MenuAdmin
          loadSampleBurgers={this.loadSampleBurgers}
          addBurger={this.addBurger}
          burgers={this.state.burgers}
          updateBurger={this.updateBurger}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}

export default App;
