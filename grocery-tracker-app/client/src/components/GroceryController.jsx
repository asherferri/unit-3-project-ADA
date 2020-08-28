import React from 'react';
import GroceryList from './GroceryList';
import FeatureWindow from './FeatureWindow';

class GroceryController extends React.Component {
    render() {
        return (
            <div className="controller-container">
                <GroceryList />
                <FeatureWindow />
            </div>
        )
    }
}

export default GroceryController;