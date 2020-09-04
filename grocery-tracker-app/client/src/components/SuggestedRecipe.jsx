import React, { Component } from "react"
// import GroceryForm from './GroceryForm'

class SuggestedRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ingredients: [],
      instructions: [],
      imageUrl: "",
      searchResults: [],
      currentRecipeIndex: 0,
      previousRecipeIndex: ''
    }

    this.getNextRecipe = this.getNextRecipe.bind(this);
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
    else if (this.state.currentRecipeIndex !== this.state.previousRecipeIndex) {
        console.log("showing the next recipe");      
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
            title: resultsWithSections[this.state.currentRecipeIndex].name,
            ingredients:
              resultsWithSections[this.state.currentRecipeIndex].sections[0]
                .components,
            instructions:
              resultsWithSections[this.state.currentRecipeIndex].instructions,
            imageUrl:
              resultsWithSections[this.state.currentRecipeIndex].thumbnail_url,
            searchResults: resultsWithSections,
            currentRecipeIndex: 1
          });
        })
        .catch((err) => console.log(err));
  }

  getNextRecipe() {
    this.setState({
      currentRecipeIndex: this.state.currentRecipeIndex + 1,
      title: this.state.searchResults[this.state.currentRecipeIndex].name,
      ingredients: this.state.searchResults[this.state.currentRecipeIndex]
        .sections[0].components,
      instructions: this.state.searchResults[this.state.currentRecipeIndex]
        .instructions,
      imageUrl: this.state.searchResults[this.state.currentRecipeIndex]
        .thumbnail_url
    });
  }

  render() {
    return (
      <div className="">
        <div className="recipe-container">
          <button>Previous Recipe</button>
          <button onClick={this.getNextRecipe}>Next Recipe</button>
          <div className="recipe-title">{this.state.title}</div>
          <div>
            <img
              className="recipe-image"
              src={this.state.imageUrl}
              alt="food"
            />
          </div>
        </div>
        <div className="recipe-container">
          <div className="ingredients">
            {" "}
            <h3>Ingredients:</h3>
            {this.state.ingredients.map((ingredient, i) => (
              <div key={i}>{`• ${ingredient.raw_text}`}</div>
            ))}
          </div>
        </div>
        <div className="recipe-container">
          <div className="instructions">
            {" "}
            <h3>Preparation:</h3>
            {this.state.instructions.map((instructions, i) => (
              <div key={i}>{`${i + 1}. ${instructions.display_text}`}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedRecipe;