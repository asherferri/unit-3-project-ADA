import React from 'react';
import Moment from 'moment';

class GroceryForm extends React.Component {
    /* If a grocery is sent to the grocery form, populate state with grocery data to edit, if not then leave state blank for adding new grocery */
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.grocery ? this.props.grocery.name : '',
            recurrence: this.props.grocery ? this.props.grocery.recurrence : '',
            last_purchased_date: this.props.grocery ? this.props.grocery.last_purchased_date : '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        if (this.props.grocery != null) {
            const newDate = new Date(Moment(this.state.last_purchased_date,"dddd, MMMM Do, YYYY").format('ddd MMM DD YYYY h:mm:ss')).toISOString().substring(0, 10)
            this.setState({
                last_purchased_date: newDate,
            })
        }
    }

    /* Used to set state of changes in the webform to each input field */
    handleChange(evt) {
        const { name, value } = evt.target
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="grocery-form">
                {/* If the isAdd props is true, send back form data to create new grocery item in db, else update existing grocery item, sends info back up to FeatureWindow */}
                <form onSubmit={this.props.isAdd === true 
                        ? (evt) => this.props.handleFormSubmit('POST', evt, this.state)
                        : (evt) => this.props.handleFormSubmit('PUT', evt, this.state, this.props.grocery.id)} >
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

// import React from 'react';
// import Moment from 'moment';

// class GroceryForm extends React.Component {
//     /* If a grocery is sent to the grocery form, populate state with grocery data to edit, if not then leave state blank for adding new grocery */
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: this.props.grocery ? this.props.grocery.name : '',
//             recurrence: this.props.grocery ? this.props.grocery.recurrence : '',
//             last_purchased_date: this.props.grocery ? this.props.grocery.last_purchased_date : '',
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     componentDidMount() {
//         if (this.props.grocery != null) {
//             const newDate = new Date(Moment(this.state.last_purchased_date,"dddd, MMMM Do, YYYY").format('ddd MMM DD YYYY h:mm:ss')).toISOString().substring(0, 10)
//             this.setState({
//                 last_purchased_date: newDate,
//             })
//         }
//     }

//     /* Used to set state of changes in the webform to each input field */
//     handleChange(evt) {
//         const { name, value } = evt.target
//         this.setState({
//             [name]: value,
//         })
//     }

//     clearForm(evt) {
//         this.setState({
//             name: '',
//             recurrence: '',
//             last_purchased_date: '',
//         })
//     }

//     render() {
//         return (
//             <div className="recipe-container">
//             <div className="grocery-form">
//                 {/* If the isAdd props is true, send back form data to create new grocery item in db, else update existing grocery item, sends info back up to FeatureWindow */}
//                 <form onSubmit={this.props.isAdd === true 
//                         ? (evt) => this.props.handleFormSubmit('POST', evt, this.state) & this.clearForm(evt)
//                         : (evt) => this.props.handleFormSubmit('PUT', evt, this.state, this.props.grocery.id)} >
//                     <div className="item-g-form">
//                         <label>Grocery Item Name:</label>
//                         <input type="text" name="name" placeholder="grocery item" value={this.state.name} onChange={this.handleChange} />
//                     </div>
//                     <div className="item-g-form">
//                         <label>Shopping Recurrence:</label>
//                         <input type="number" name="recurrence" value={this.state.recurrence} onChange={this.handleChange} />
//                     </div>
//                     <div className="item-g-form">
//                         <label>Last Purchased Date:</label>
//                         <input type="date" name="last_purchased_date" value={this.state.last_purchased_date} onChange={this.handleChange} />
//                     </div>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//             </div>
//         )
//     }
// }

// export default GroceryForm;