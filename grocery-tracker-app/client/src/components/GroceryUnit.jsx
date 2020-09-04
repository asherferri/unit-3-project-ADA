import React from 'react';
import Moment from 'moment';

const GroceryUnit = (props) => {
    return (
        // {/* Sending ID back up to GroceryController to lookup single grocery to show in FeatureWindow */}
        // making sure the active area is the whole container so no buttons needed
        <div className="grocery-item-container" onClick={() => props.getGrocery(props.grocery.id, 'view')}>
            <div className="grocery-item-lst" >
                <h3 className="list-name">{props.grocery.name}</h3>
            </div>
            <div>
                <h4 className="list-date">{Moment(props.grocery.last_purchased_date, "dddd, MMMM Do, YYYY").add(props.grocery.recurrence, 'days').format("M/D/YYYY")}</h4>
            </div>
        </div>
    )
}

export default GroceryUnit;