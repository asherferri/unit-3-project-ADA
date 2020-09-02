import React from 'react';
import GroceryList from './GroceryList';
import FeatureWindow from './FeatureWindow';
import GroceryForm from'./GroceryForm';

class GroceryController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataLoaded: false,
            allGroceries: [],
            auth: props.auth,
            currentlyViewing: null,
        }
        this.getAllGroceries = this.getAllGroceries.bind(this)
    }

    componentDidMount() {
        console.log(this)
        this.getAllGroceries();
    }

    getAllGroceries() {
        fetch(`/api/groceries` , { credentials: 'include' })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                allGroceries: res.data.groceries,
                dataLoaded: true,
            })
        })
        .catch(err => console.log(err))
    }

    setViewing = (id) => {
        this.setState({
            currentlyViewing: id,
        })
        console.log(this.state.currentlyViewing)
    }

    render() {
        return (
            <div className="controller-container">
                <GroceryList allGroceries={this.state.allGroceries} setViewing={this.setViewing}  />
                <FeatureWindow getAllGroceries={this.getAllGroceries} allGroceries={this.state.allGroceries} viewingId={this.state.currentlyViewing}/>
            </div>
        )
    }
}

export default GroceryController;