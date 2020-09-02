import React from 'react'
import GroceryUnit from './GroceryUnit';

class GroceryList extends React.Component {
    render() {
        return (
            <div className="grocery-list">
                {this.props.allGroceries.map(grocery => {
                    return <GroceryUnit key={grocery.id} grocery={grocery} getGrocery={this.props.getGrocery} />
                })}
            </div>
        )
    }
}

export default GroceryList;