import React from 'react';
import Moment from 'moment';

const GroceryItem = (props) => {
    return (
        <div className="grocery-item-container">
            <div className="grocery-item">
                <h3>{props.grocery.name}</h3>
                {/* Using moment to format date */}
                <p>Last Purchased: {Moment(props.grocery.last_purchased_date, "dddd, MMMM Do, YYYY").format("MM/DD/YYYY")}</p> 
                <p>Shopping Recurrance: {props.grocery.recurrence} days</p>
                {/* Using moment to format date and add recurrence */}
                <p>Expected Re-Purchase: {Moment(props.grocery.last_purchased_date, "dddd, MMMM Do, YYYY").add(props.grocery.recurrence, 'days').format("MM/DD/YYYY")}</p>
                <p>UserId: {props.grocery.user_id}</p>
            </div>
            <div className="item-button">
                {/* Sending ID back up to GroceryController to lookup single grocery to make edits */}
                <span className="update-show-item" onClick={() => props.getGrocery(props.grocery.id, 'edit')}>Update</span>
                {/* Sending ID back up to FeatureWindow to handle deleting grocery from db */}
                <span className="delete-show-item" onClick={(evt) => props.handleFormSubmit('DELETE', evt, props.grocery, props.grocery.id)} >Delete</span>
            </div>
        </div>
    )
}

export default GroceryItem;