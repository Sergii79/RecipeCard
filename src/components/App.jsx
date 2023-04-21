import { Component } from "react";
import { RecipeList } from "./RecipeList/RecipeList";
import initialRecipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";


export class App extends Component {
  state = {
    recipes: initialRecipes,
    selectedImg: null,
  };

  deleteRecipe = recipeId => {
    console.log(recipeId);
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }))
  };

  setSelectedImage = imgUrl => {
    console.log(imgUrl);
    this.setState({
      selectedImg: imgUrl,
    })
  };

  render() {
    return (
    <Layout>
        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}
          onSelect={this.setSelectedImage}
        />
      {this.state.selectedImg && (
        <div>
          Image modal
          <p>{this.state.selectedImg}</p>
        </div>          
      )} 
      <GlobalStyle />
    </Layout>
  );
  }
};


