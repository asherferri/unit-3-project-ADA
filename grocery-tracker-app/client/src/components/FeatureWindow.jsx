import React from 'react';
import SuggestedRecipe from './SuggestedRecipe';
import GroceryForm from './GroceryForm';

class FeatureWindow extends React.Component {

    handleFormSubmit = (method, evt, data, id) => {
        evt.preventDefault();

        fetch(`/api/groceries/${id || ''}`, {
            method: method,
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.props.getAllGroceries();
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
          <div className="feature-window">
            <nav className="feature-nav">
                    <ul>
                        <li>Add Groceries</li>
                        <li>Check Deals!</li>
                        <li>Find Recipes!</li>
                    </ul>
                </nav>
                <section className="feature-section">
                    Features here
                    <GroceryForm handleFormSubmit={this.handleFormSubmit} />
                </section>
            <div>render() in GroveryController.jsx</div>
            <div><SuggestedRecipe /></div>
          </div>
        );
    }
}

export default FeatureWindow;