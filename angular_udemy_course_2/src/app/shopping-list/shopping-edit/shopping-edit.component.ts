import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amuntInputRef?: ElementRef;

  constructor(private shoppingListService: ShoppingListService){}
  
  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amuntInputRef?.nativeElement.value;
    const newIngredients = new Ingredients(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredients)
  }
}
