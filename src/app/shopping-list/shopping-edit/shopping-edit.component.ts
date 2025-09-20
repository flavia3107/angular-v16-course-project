import {
  Component,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnChanges {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  @Input() editedItem: Ingredient;
  @Output() onCloseClicked: EventEmitter<void> = new EventEmitter();

  constructor(private slService: ShoppingListService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.slForm?.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    }
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (!!this.editedItem) {
      this.slService.updateIngredient({ name: this.editedItem.name, amount: value.amount });
    } else {
      this.slService.addIngredient(newIngredient);
      this.slForm.reset();
    }
    this.onClose();
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItem);
    this.onClose();
  }

  onClose() {
    this.onCloseClicked.emit();
  }
}
