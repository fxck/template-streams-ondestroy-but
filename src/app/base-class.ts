import {  OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export const isOnInit = () => filter((l) => l === 'OnInit');
export const isOnDestroy = () => filter((l) => l === 'OnDestroy');

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
