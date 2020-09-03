import React from 'react';
import SuggestedRecipe from './SuggestedRecipe';
import GroceryForm from './GroceryForm';
import GroceryItem from './GroceryItem';

class FeatureWindow extends React.Component {

    /* Function that handles submit for POST, PUT, DELETE */
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

        this.props.clear();
    }

    /* Function to determine what to shows in the FeatureWindow */
    renderFeatureWindow() {
        switch(this.props.viewType) {
            case 'view':
                return (
                    <>
                        <GroceryItem key={this.props.grocery.id} grocery={this.props.grocery} handleFormSubmit={this.handleFormSubmit} getGrocery={this.props.getGrocery} /> 
                        <SuggestedRecipe grocery={this.props.grocery} />
                    </>)
            case 'edit':
                return <GroceryForm handleFormSubmit={this.handleFormSubmit} isAdd={false} grocery={this.props.grocery} />
            default:
                return <GroceryForm handleFormSubmit={this.handleFormSubmit} isAdd={true} />
        }
    }

    render() {
        return (
          <div className="feature-window">
            <nav className="feature-nav">
                    <ul>
                        <li onClick={() => this.props.clear()}>Add Groceries</li>
                    </ul>
                </nav>
                <section className="feature-section">
                    { this.renderFeatureWindow() }
                </section>
          </div>
        );
    }
}

export default FeatureWindow;