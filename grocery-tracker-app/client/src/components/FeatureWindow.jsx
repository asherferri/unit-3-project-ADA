import React from 'react';
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
                    </ul>
                </nav>
                <section className="feature-section">
                    Features here
                    <GroceryForm handleFormSubmit={this.handleFormSubmit} />
                </section>
            </div>
        )
    }
}

export default FeatureWindow;