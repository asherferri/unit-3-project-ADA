import React from 'react';

class GroceryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            recurrence: '',
            last_purchased_date: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        const { name, value } = evt.target
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="grocery-form">
                <form onSubmit={(evt) => this.props.handleFormSubmit('POST', evt, this.state)} >
                    <div>
                        <label>Grocery Item Name:</label>
                        <input type="text" name="name" placeholder="grocery item" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Shopping Recurrence:</label>
                        <input type="number" name="recurrence" value={this.state.recurrence} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Last Purchased Date:</label>
                        <input type="date" name="last_purchased_date" value={this.state.last_purchased_date} onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default GroceryForm;