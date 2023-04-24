import { Component } from "react";
import initialRecipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { RecipeForm } from "./RecipeForm/RecipeForm";
import { RecipeList } from "./RecipeList/RecipeList";


export class App extends Component {
  state = {
    recipes: initialRecipes,    
  };

  addRecipe = newRecipe => {
    console.log(newRecipe);
    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
    }));
  };

  deleteRecipe = recipeId => {
    console.log(recipeId);
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }))
  };
 
  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe}/>
        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}          
        />
      {/* {this.state.selectedImg && (
        <div>
          Image modal
          <p>{this.state.selectedImg}</p>
        </div>          
      )}  */}
      <GlobalStyle />
    </Layout>
  );
  }
};


