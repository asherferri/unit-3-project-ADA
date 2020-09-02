import React from 'react'
import GroceryUnit from './GroceryUnit';

class GroceryList extends React.Component {
    render() {
        return (
            <div className="grocery-list">
                {this.props.allGroceries.map(grocery => {
                    return <GroceryUnit key={grocery.id} grocery={grocery} setViewing={this.props.setViewing} />
                })}
            </div>
        )
    }
}

export default GroceryList;