import { Component, OnInit } from '@angular/core';
import { Calculator } from 'src/app/interfaces/calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public formValues: Calculator = {totalPrice: 0, change: 0}; // valores del formulario
  public priceFood: number; // precio de la comida
  public statusDarkMode = 'false';

  constructor() { }

  ngOnInit() {
    this.stateDarkMode();
  }

  /**
   * Change
   * @description calcula el cambio
   * @param e input del formulario
   */
  public change(e) {
    this.formValues.change = e.target.value - this.formValues.totalPrice;
  }

  /**
   * Clear
   * @description limpia el formulario menos el precio de la comida
   */
  public clear() {
    this.formValues = {change: 0};
    this.formValues.totalPrice = 0;
  }

  /**
   * SavePriceFood
   * @description guarda el precio de la comida
   * @param e input del ofrmulario
   */
  public savePriceFood(e) {
    this.priceFood = e.target.value;
    this.saveTotalPrice();
  }

  /**
   * saveCantOrderFood
   * @description guarda la cantidad de comidas
   * @param e input del ofrmulario
   */
  public saveCantOrderFood(e) {
    this.formValues.cantOrderFood = e.target.value;
    this.saveTotalPrice();
  }

  /**
   * saveCantSoda
   * @description guarda la cantidad de refrescos
   * @param e input del ofrmulario
   */
  public saveCantSoda(e) {
    this.formValues.cantSoda = e.target.value;
    console.log(this.formValues.cantSoda);
    this.saveTotalPrice();
  }

  /**
   * saveTotalPrice
   * @description calcula el precio totol
   */
  public saveTotalPrice() {
    if (this.formValues.cantOrderFood > 0) {

      if (this.formValues.cantSoda <= 0 || this.formValues.cantSoda === undefined) {

        console.log('78');
        this.formValues.totalPrice = this.priceFood * this.formValues.cantOrderFood;

      } else if (this.formValues.cantSoda > 0) {

        const priceTotalSoda = 5 * this.formValues.cantSoda;

        this.formValues.totalPrice = (this.priceFood * this.formValues.cantOrderFood) + priceTotalSoda;

      }

    }
  }

  /**
   * getDarkMode
   * @description saver si el dark mode esta activado
   */
  public stateDarkMode() {
    const storageDarkMode = localStorage.getItem('statusDarkMode');

    if (storageDarkMode !== null) {
      this.statusDarkMode = storageDarkMode;
    }

    console.log(this.statusDarkMode);
  }

  /**
   * darkMode
   * @description activiar y desactivar el modo oscuro
   */
  public darkMode() {
    if (this.statusDarkMode === 'false') {
      this.statusDarkMode = 'true';
      localStorage.setItem('statusDarkMode', 'true');
      this.stateDarkMode();
    } else {
      this.statusDarkMode = 'false';
      localStorage.setItem('statusDarkMode', 'false');
      this.stateDarkMode();
    }

    console.log(this.statusDarkMode);
  }
}
