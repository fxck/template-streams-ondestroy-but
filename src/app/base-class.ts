import { OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class BaseClass implements OnInit, OnDestroy {
  lifecycle$ = new Subject<'OnInit' | 'OnDestroy'>();

  ngOnInit() {
    this.lifecycle$.next('OnInit');
  }

  ngOnDestroy() {
    this.lifecycle$.next('OnDestroy');
    this.lifecycle$.complete();
  }
}
