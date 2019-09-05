import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OneComponent } from './routes/one.component';
import { TwoComponent } from './routes/two.component';

export const routes = [
  {
    path: '',
    component: OneComponent,
  },
  {
    path: 'two',
    component: TwoComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
