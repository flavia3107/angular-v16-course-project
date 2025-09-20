import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Observable<Ingredient[]>;
  editMode = false;
  activeIndex = null;

  constructor(private slService: ShoppingListService) {
    this.ingredients = this.slService.ingredientsChanged;
  }

  onEditItem(index: number) {
    this.editMode = true;
    this.activeIndex = index;
  }

  closeEditMode() {
    this.editMode = false;
    this.activeIndex = -1;
  }
}
