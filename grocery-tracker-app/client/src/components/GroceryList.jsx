import React from 'react'
import GroceryItem from './GroceryItem'

class GroceryList extends React.Component {
    render() {
        return (
            <div className="grocery-list">
                <GroceryItem />
                <GroceryItem />
                <GroceryItem />
                <GroceryItem />
            </div>
        )
    }
}

export default GroceryList;