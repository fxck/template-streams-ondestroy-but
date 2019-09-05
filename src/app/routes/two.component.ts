import { Component } from '@angular/core';
import { BaseClass } from '../base-class';
import { ObservableEvent } from '@typebytes/ngx-template-streams';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html'
})
export class TwoComponent extends BaseClass {
  @ObservableEvent()
  clicks$: Observable<any>;

  constructor() {
    super();
    this.clicks$.subscribe(() => console.log('clicked'));
    this.lifecycle$.subscribe((e) => console.log('TwoComponent', e));
  }
}
