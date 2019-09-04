import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar.component';


const routes: Routes = [
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'foo',
    component: FooComponent
  },
  {
    path: '**',
    redirectTo: 'bar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
