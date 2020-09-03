import React from 'react';

const GroceryUnit = (props) => {
    return (
        <div className="grocery-item-container">
            <div className="grocery-item">
                <h3>{props.grocery.name}</h3>
            </div>
            <div className="item-button">
                {/* Sending ID back up to GroceryController to lookup single grocery to show in FeatureWindow */}
                <span onClick={() => props.getGrocery(props.grocery.id, 'view')}>Info / Update</span>
            </div>
        </div>
    )
}

export default GroceryUnit;