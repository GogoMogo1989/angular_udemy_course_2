import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          ' This is a simpe test',
          'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg'
        ),
        new Recipe(
          'A Test Recipe',
          ' This is a simpe test',
          'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg'
        ),
      ];

      getRecipes(){
        return this.recipes.slice();
      }

}