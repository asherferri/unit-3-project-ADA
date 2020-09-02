import React, { Component } from "react"
// import GroceryForm from './GroceryForm'

class SuggestedRecipe extends Component {
     constructor(){
         super()
         this.state = {
             videoTitle: '',
         }
     }
    
    componentDidMount() {
        console.log('Componend mounted!')

        fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&q=spinach&from=0&sizes=20`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_TASTY_API_KEY
            },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.results[0].name)
            console.log(res)
            this.setState({
                videoTitle: res.results[0].name
            })
            console.log(this.state.videoTitle);

        })
        .catch(err => console.log(err))
    }
  
    render() {
    return (
      <div className="feature-window">
        <div>render() in SuggestedRecipe.jsx</div>
        <div>Recipe suggestions</div>
        <div>{this.state.videoTitle}</div>
      </div>
    );
  }
}

export default SuggestedRecipe;