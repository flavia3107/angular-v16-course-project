import { Ingredient } from '../shared/ingredient.model';
import { BehaviorSubject } from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientsChanged = new BehaviorSubject<Ingredient[]>(this.ingredients);

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    const itm = this.ingredients.find(ing => ing.name === ingredient.name);
    if (!itm) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(newIngredient: Ingredient) {
    const ingredient = this.ingredients.find(ing => ing.name === newIngredient.name);
    if (ingredient)
      ingredient.amount = newIngredient.amount
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
