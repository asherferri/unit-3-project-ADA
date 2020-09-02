import React from 'react';
import GroceryList from './GroceryList';
import FeatureWindow from './FeatureWindow';

class GroceryController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataLoaded: false,
            allGroceries: [],
            auth: props.auth,
        }
        this.getAllGroceries = this.getAllGroceries.bind(this)
    }

    componentDidMount() {
        console.log(this.auth)
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
    
    render() {
        return (
            <div className="controller-container">
                <GroceryList allGroceries={this.state.allGroceries} />
                <FeatureWindow getAllGroceries={this.getAllGroceries}/>
            </div>
        )
    }
}

export default GroceryController;