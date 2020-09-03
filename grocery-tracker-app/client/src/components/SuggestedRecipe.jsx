import React, { Component } from "react"
// import GroceryForm from './GroceryForm'

class SuggestedRecipe extends Component {
     constructor(){
         super()
         this.state = {
             videoTitle: '',
             ingredients: [],
             instructions: [],
             imageUrl: ''
         }
     }
    
    componentDidMount() {
        console.log('Componend mounted!')

        fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&q=chicken&from=0&sizes=20`, {
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
            console.log(res.results[0].thumbnail_url);
            console.log('res')
            console.log(res)
            this.setState({
              videoTitle: res.results[0].name,
              ingredients: res.results[0].sections[0].components,
              instructions: res.results[0].instructions,
              imageUrl: res.results[0].thumbnail_url
            })
            console.log(this.state.videoTitle);
        })
        .catch(err => console.log(err))

       
    }
  
    render() {
        return (
          <div className="feature-window">
            <div>render() in SuggestedRecipe.jsx</div>

            <div>{this.state.videoTitle}</div>
            <div><img src={this.state.imageUrl} alt='food' /></div>
            <div className="ingredients">
              {this.state.ingredients.map((ingredient, i) => (
                <div key={i}>{`• ${ingredient.raw_text}`}</div>
              ))}
            </div>
            <div className="instructions">
              {this.state.instructions.map((instructions, i) => (
                <div key={i}>{`${i+1}. ${instructions.display_text}`}</div>
              ))}
            </div>
          </div>
        );
  }
}

export default SuggestedRecipe;