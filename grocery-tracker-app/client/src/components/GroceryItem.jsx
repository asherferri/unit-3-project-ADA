import React from 'react';

const GroceryItem = (props) => {
    return (
        <div className="grocery-item-container">
            <div className="grocery-item">
                <h3>{props.grocery.name}</h3>
                <p>Last Purchased: {props.grocery.lastPurchasedDate}</p>
                <p>Shopping Recurrance: {props.grocery.recurrence} days</p>
                <p>Expected Re-Purchase: 09/04/2020</p>
                <p>UserId: {props.grocery.user_id}</p>
            </div>
            <div className="item-button">
                <span>Info / Update</span>
            </div>
        </div>
    )
}

export default GroceryItem;