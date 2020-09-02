import React from 'react';
import GroceryForm from './GroceryForm';
import GroceryItem from './GroceryItem';

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

    renderFeatureWindow() {
        if (this.props.viewingId != null) {
            return this.props.allGroceries.map(grocery => {
                if (grocery.id === this.props.viewingId) {
                    return <GroceryItem key={grocery.id} grocery={grocery} handleFormSubmit={this.handleFormSubmit} />
                }
            })
        }
        else {
            return <GroceryForm handleFormSubmit={this.handleFormSubmit} isAdd={true} />
        }
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
                    { this.renderFeatureWindow() }
                </section>
            </div>
        )
    }
}

export default FeatureWindow;