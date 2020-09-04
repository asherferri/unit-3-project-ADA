import React, { Component } from "react"
// import GroceryForm from './GroceryForm'

class SuggestedRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoTitle: "",
      ingredients: [],
      instructions: [],
      imageUrl: "",
      searchResults: [],
      currentRecipeIndex: 0
    };
  }

  componentDidMount() {
    console.log("Componend mounted!");
    this.renderRecipe()
  }

  componentDidUpdate(prevProps) {
    console.log("Component update attempted!");
    
    console.log("prevProps.grocery.name");
    console.log(prevProps.grocery.name)

    console.log("this.props.grocery.name");
    console.log(this.props.grocery.name);

    if (this.props.grocery.name !== prevProps.grocery.name) {
        console.log("they're different, I will reload")
        this.renderRecipe();
        console.log("Component updated!");
    }
    else {
        console.log("they're the same, I will NOT reload");
    }
  }

  renderRecipe() {
      fetch(
        `https://tasty.p.rapidapi.com/recipes/list?q=${this.props.grocery.name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_TASTY_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("res");
          console.log(res);

          const resultsWithSections = res.results.filter(el => 'sections' in el)
          
          this.setState({
            videoTitle: resultsWithSections[this.state.currentRecipeIndex].name,
            ingredients:
              resultsWithSections[this.state.currentRecipeIndex].sections[0]
                .components,
            instructions:
              resultsWithSections[this.state.currentRecipeIndex].instructions,
            imageUrl:
              resultsWithSections[this.state.currentRecipeIndex].thumbnail_url,
            searchResults: resultsWithSections,
            currentRecipeIndex: 
          });
        })
        .catch((err) => console.log(err));
  }

  getNextRecipe() {
    this.setState({
      currentRecipeIndex: 1
    })

  }

  render() {
    return (
      <div className="feature-window">
        <button>Previous Recipe</button>
        <button onClick={this.getNextRecipe}>Next Recipe</button>
        <div>{this.state.videoTitle}</div>
        <div>
          <img src={this.state.imageUrl} alt="food" />
        </div>
        <div className="ingredients">
          {this.state.ingredients.map((ingredient, i) => (
            <div key={i}>{`• ${ingredient.raw_text}`}</div>
          ))}
        </div>
        <div className="instructions">
          {this.state.instructions.map((instructions, i) => (
            <div key={i}>{`${i + 1}. ${instructions.display_text}`}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default SuggestedRecipe;