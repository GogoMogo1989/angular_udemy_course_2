import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amuntInputRef?: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredients>();

  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amuntInputRef?.nativeElement.value;
    const newIngredients = new Ingredients(ingName, ingAmount);
    this.IngredientAdded.emit(newIngredients);
  }
}
