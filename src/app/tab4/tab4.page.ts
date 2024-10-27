import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  raiz1: number | null = 0;
  raiz2: number | null = 0;

  constructor() {}

  calcularRaices() {
    const discriminante = this.b ** 2 - 4 * this.a * this.c;
    
    if (discriminante > 0) {
      this.raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
    } else if (discriminante === 0) {
      this.raiz1 = this.raiz2 = -this.b / (2 * this.a);
    } else {
      this.raiz1 = this.raiz2 = null;
    }
    console.log('raiz 1',this.raiz1)
    console.log('raiz 2',this.raiz2)
  }
}