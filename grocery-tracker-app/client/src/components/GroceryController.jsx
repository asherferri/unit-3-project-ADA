import React from 'react';
import GroceryList from './GroceryList';
import FeatureWindow from './FeatureWindow';

class GroceryController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allGroceries: [],
            auth: props.auth,
            currentGrocery: null,
            dataLoaded: false,
            viewType: '',
        }
        this.getAllGroceries = this.getAllGroceries.bind(this)
        this.getGrocery = this.getGrocery.bind(this)
        this.clearData = this.clearData.bind(this)
    }
    /* Loads groceries when page loads by calling getAllGroceries function */
    componentDidMount() {
        // console.log(this)
        this.getAllGroceries();
    }

    /* Function to lookup all groceries, includes credentials for user authentication */
    getAllGroceries() {
        fetch(`/api/groceries` , { credentials: 'include' })
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            this.setState({
                allGroceries: res.data.groceries,
                dataLoaded: true,
            })
        })
        .catch(err => console.log(err))
    }

    /* Function to lookup individual grocery item, includes credentials for user authentication */
    getGrocery(id, view) {
        fetch(`/api/groceries/${id}` , { credentials: 'include' })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({
                currentGrocery: res.data.grocery,
                viewType: view,
            })
        })
        .catch(err => console.log(err))
    }

    clearData() {
        this.setState({
            currentGrocery: null,
            viewType: '',
        })
    }

    render() {
        return (
            <div className="controller-container">
                <GroceryList allGroceries={this.state.allGroceries} getGrocery={this.getGrocery}  />
                <FeatureWindow getAllGroceries={this.getAllGroceries} allGroceries={this.state.allGroceries} viewType={this.state.viewType} grocery={this.state.currentGrocery} getGrocery={this.getGrocery} clear={this.clearData} />
            </div>
        )
    }
}

export default GroceryController;