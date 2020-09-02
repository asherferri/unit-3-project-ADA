import React from 'react';
import Moment from 'moment';

const GroceryItem = (props) => {
    return (
        <div className="grocery-item-container">
            <div className="grocery-item">
                <h3>{props.grocery.name}</h3>
                <p>Last Purchased: {Moment(props.grocery.last_purchase_date).format("MM/DD/YYYY")}</p>
                <p>Shopping Recurrance: {props.grocery.recurrence} days</p>
                <p>Expected Re-Purchase: {Moment(props.grocery.last_purchase_date).add(props.grocery.recurrence, 'days').format("MM/DD/YYYY")}</p>
                <p>UserId: {props.grocery.user_id}</p>
            </div>
            <div className="item-button">
                <span onClick={() => props.setEditing(props.grocery.id)}>Info / Update</span>
            </div>
        </div>
    )
}

export default GroceryItem;