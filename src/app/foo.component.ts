import { Component } from '@angular/core';
import { BaseClass } from './base-class';
import { Observable } from 'rxjs';
import { ObservableEvent } from '@typebytes/ngx-template-streams';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html'
})
export class FooComponent extends BaseClass {
  @ObservableEvent()
  click$: Observable<void>;

  constructor() {
    super();
    this.lifecycle$.subscribe((e) => console.log('FooComponent', e));
  }
}
