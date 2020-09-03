import React from 'react'
import GroceryUnit from './GroceryUnit';

class GroceryList extends React.Component {
    render() {
        return (
            <div className="grocery-list">
                {/* Looping through groceries to generate list of each item (using GroceryUnit) belonging to user */}
                {this.props.allGroceries.map(grocery => {
                    return <GroceryUnit key={grocery.id} grocery={grocery} getGrocery={this.props.getGrocery} />
                })}
            </div>
        )
    }
}

export default GroceryList;