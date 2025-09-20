import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Creamy One Pot Pasta with Zucchini',
      'This creamy one-pot pasta with zucchini is a simple yet flavorful dish that comes together with minimal effort and maximum comfort. Tender pasta is simmered directly in a rich, velvety sauce that clings to every bite, while fresh zucchini adds a light, wholesome touch. Everything cooks in one pot, making cleanup a breeze and ensuring the flavors meld beautifully. Perfect for busy weeknights or a cozy dinner at home, this dish balances creamy indulgence with the freshness of seasonal vegetables for a meal that feels both hearty and satisfying.',
      'https://static01.nyt.com/images/2025/07/03/multimedia/DT-Summer-Pasta-with-Zucchini-and-Basil-mblv/DT-Summer-Pasta-with-Zucchini-and-Basil-mblv-mediumSquareAt3X.jpg',
      [
        new Ingredient('Zucchini', 3),
        new Ingredient('Rigatoni', 1),
        new Ingredient('Lemon', 1),
        new Ingredient('Olive Oil', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Walnuts', 4),
        new Ingredient('Water', 4)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
