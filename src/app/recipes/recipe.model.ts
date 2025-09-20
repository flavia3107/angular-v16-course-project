import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

export const RECIPES: Recipe[] = [
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
    'Grilled Chicken Sandwich',
    'Loaded Grilled Chicken Sandwiches – Made with seasoned grilled chicken, crisp bacon, vibrant veggie slices, savory Swiss cheese, and a creamy ranch mayo all sandwiched between toasted burger buns. It’s the ultimate sandwich! These grilled chicken sandwiches are a classic recipe you’ll turn to again and again! Here they are made California club style making them absolutely crave-worthy.',
    'https://www.cookingclassy.com/wp-content/uploads/2025/09/grilled-chicken-sandwich-11-730x1095.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Chicken breasts', 2),
      new Ingredient('Mayonnaise', 1),
      new Ingredient('Cheese slices:', 2),
      new Ingredient('Cooked bacon:', 4),
      new Ingredient('Lettuce:', 1),
      new Ingredient('Red onion:', 1),
    ]
  )
];