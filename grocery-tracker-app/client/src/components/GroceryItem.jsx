import React from 'react';

const GroceryItem = () => {
    return (
        <div className="grocery-item-container">
            <div className="grocery-item">
                <h3>Avocado</h3>
                <p>Purchased: 08/28/2020</p>
                <p>Shopping Recurrance: 7 days</p>
                <p>Expected Re-Purchase: 09/04/2020</p>
            </div>
            <div className="item-button">
                <span>Info / Update</span>
            </div>
        </div>
    )
}

export default GroceryItem;