import React from 'react';

const GroceryUnit = (props) => {
    return (
        <div className="grocery-item-container">
            <div className="grocery-item">
                <h3>{props.grocery.name}</h3>
            </div>
            <div className="item-button">
                <span onClick={() => props.getGrocery(props.grocery.id, 'view')}>Info / Update</span>
            </div>
        </div>
    )
}

export default GroceryUnit;