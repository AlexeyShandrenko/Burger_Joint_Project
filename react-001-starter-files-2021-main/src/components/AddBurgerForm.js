import React from "react";
import PropTypes from "prop-types";

const AddBurgerForm = (props) => {

  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createBurger = (event) => {
    event.preventDefault();
    const burger = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value || 0),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    props.addBurger(burger);
    // event.currentTraget.reset();
  };

  return (
    <form className="burger-edit" onSubmit={createBurger}>
      <input
        ref={nameRef}
        name="name"
        type="text"
        placeholder="Name"
        autoComplete="off"
      />
      <input
        ref={priceRef}
        name="price"
        type="text"
        placeholder="Price"
        autoComplete="off"
      />
      <select ref={statusRef} name="status" className="status">
        <option value="available">Доступно</option>
        <option value="unavailable">Убрать из меню</option>
      </select>
      <textarea ref={descRef} name="desc" placeholder="" />
      <input
        ref={imageRef}
        name="image"
        type="text"
        placeholder="Image"
        autoComplete="off"
      />
      <button type="submit">+Добавить в меню</button>
    </form>
  );
};

AddBurgerForm.propTypes = {
  addBurger: PropTypes.func,
};

export default AddBurgerForm;
