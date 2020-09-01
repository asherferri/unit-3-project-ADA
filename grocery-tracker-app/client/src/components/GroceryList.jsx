import React from 'react'
import GroceryItem from './GroceryItem'

class GroceryList extends React.Component {
    render() {
        return (
            <div className="grocery-list">
                {this.props.allGroceries.map(grocery => {
                    return <GroceryItem key={grocery.id} grocery={grocery} />
                })}
            </div>
        )
    }
}

export default GroceryList;