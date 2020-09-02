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
            currentlyEditing: null,
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

    // setEditing = (id) => {
    //     this.setState({
    //         currentlyEditing: id,
    //     })
    // }
    
    // renderFeatureWindow() {
    //     if (this.state.currentlyEditing != null) {
    //         this.state.allGroceries.map(grocery => {
    //             if (grocery.id === this.state.currentlyEditing) {
    //                 return <GroceryForm key={grocery.id} grocery={grocery} isAdd={false} />
    //             }
    //         })
    //     }
    // }

    render() {
        return (
            <div className="controller-container">
                <GroceryList allGroceries={this.state.allGroceries} /*setEditing={this.setEditing} */ />
                <FeatureWindow getAllGroceries={this.getAllGroceries}/>
                {/* {this.renderFeatureWindow()} */}
            </div>
        )
    }
}

export default GroceryController;