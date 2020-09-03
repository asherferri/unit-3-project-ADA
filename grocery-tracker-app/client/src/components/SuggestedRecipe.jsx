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
            videoTitle: resultsWithSections[0].name,
            ingredients: resultsWithSections[0].sections[0].components,
            instructions: resultsWithSections[0].instructions,
            imageUrl: resultsWithSections[0].thumbnail_url,
          });
        })


        .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="feature-window">
        <div>render() in SuggestedRecipe.jsx</div>

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