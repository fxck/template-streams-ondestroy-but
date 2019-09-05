import { Component } from '@angular/core';
import { BaseClass } from '../base-class';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html'
})
export class OneComponent extends BaseClass {
  constructor() {
    super();
    this.lifecycle$.subscribe((e) => console.log('OneComponent', e));
  }
}
