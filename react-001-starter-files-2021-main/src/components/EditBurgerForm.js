import React from "react"

class EditBurgerForm extends React.Component {

    handleChange = (event) => {
        const updatedBurger = {
            ...this.props.burger,
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateBurger(this.props.index, updatedBurger)
    }

    render() {
        const {name, price, status, desc, image} = this.props.burger
        return(
            <div className="burger-edit">
                <input onChange={this.handleChange} name="name" type='text' value={name}/>
                <input onChange={this.handleChange} name="price" type='text' value={price}/>
                <select onChange={this.handleChange} name="status" className="status" value={status}>
                    <option value="available">Доступно</option>
                    <option value="unavailable">Не доступно</option>
                </select>
                <textarea onChange={this.handleChange} name="desc" value={desc}/>
                <input onChange={this.handleChange} name="image" type='text' value={image}/>
                <button onClick={() => this.props.deleteBurger(this.props.index)}>Удалить из меню</button>
            </div>
        )
    }
}

export default EditBurgerForm