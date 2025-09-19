import {
  Component,
  OnInit,
  OnDestroy,
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
export class ShoppingEditComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editedItemIndex: number;
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

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (Object.values(newIngredient).every(val => val)) {
      console.log('Hereeee', value, newIngredient)
      if (!!this.editedItem) {
        this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
        this.slService.addIngredient(newIngredient);
      }
      form.reset();
    }
  }

  onClear() {
    if (this.editedItem) {
      this.slForm?.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    } else {
      this.slForm.reset();
    }
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClose() {
    this.onCloseClicked.emit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
