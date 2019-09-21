import { Component, OnInit } from '@angular/core';
import { Calculator } from 'src/app/interfaces/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public formValues: Calculator = {totalPrice: 0, change: 0};
  public priceFood: number;

  constructor() { }

  ngOnInit() {
  }

  // Calculator
  public calculator() {
    if (this.formValues.cantOrderFood > 0) {
      if (this.formValues.cantSoda === 0 || this.formValues.cantSoda === undefined) {
        this.formValues.totalPrice = this.priceFood * this.formValues.cantOrderFood;
      } else if (this.formValues.cantSoda > 0) {
        const priceTotalSoda = 5 * this.formValues.cantSoda;

        this.formValues.totalPrice = (this.priceFood * this.formValues.cantOrderFood) + priceTotalSoda;
      }
    }
  }

  // change
  public change(e) {
    this.formValues.change = e.target.value - this.formValues.totalPrice;
  }

  // clear form
  public clear() {
    this.formValues = {change: 0};
    this.formValues.totalPrice = 0;

    console.log(this.formValues);
  }

  public savePriceFood(e) {
    this.priceFood = e.target.value;
    this.saveTotalPrice();
  }

  public saveCantOrderFood(e) {
    this.formValues.cantOrderFood = e.target.value;
    this.saveTotalPrice();
  }

  public saveCantSoda(e) {
    this.formValues.cantSoda = e.target.value;
    this.saveTotalPrice();
  }

  public saveTotalPrice() {
    if (this.formValues.cantOrderFood > 0) {
      if (this.formValues.cantSoda === 0 || this.formValues.cantSoda === undefined) {
        this.formValues.totalPrice = this.priceFood * this.formValues.cantOrderFood;
      } else if (this.formValues.cantSoda > 0) {
        const priceTotalSoda = 5 * this.formValues.cantSoda;

        this.formValues.totalPrice = (this.priceFood * this.formValues.cantOrderFood) + priceTotalSoda;
      }
    }
  }

}
