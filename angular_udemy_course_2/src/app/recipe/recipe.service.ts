import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe-model";
import { Ingredients } from "../shared/ingredients.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          ' This is a simpe test',
          'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg',
          [
            new Ingredients('meat', 1),
            new Ingredients('nyenye', 5)
          ]
        ),
        new Recipe(
          'A Test Recipe',
          ' This is a simpe test',
          'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg',
          [
            new Ingredients('dwdw', 1123),
            new Ingredients('nyvv', 5312)
          ]
        ),
      ];

      getRecipes(){
        return this.recipes.slice();
      }

}