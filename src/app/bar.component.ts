import { Component } from '@angular/core';
import { BaseClass } from './base-class';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent extends BaseClass {
  constructor() {
    super();
    this.lifecycle$.subscribe((e) => console.log('BarComponent', e));
  }
}
