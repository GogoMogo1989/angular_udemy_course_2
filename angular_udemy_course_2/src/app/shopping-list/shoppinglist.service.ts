import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";


export class ShoppingListService{
    IngredientsChanges = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[] = [
        new Ingredients('apples', 5),
        new Ingredients('tomatoes', 10),
    ]; 

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient)
        this.IngredientsChanges.emit(this.ingredients.slice())
    }
}