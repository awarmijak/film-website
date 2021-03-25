import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainViewComponent} from './main-view/main-view.component';
import {Routes} from '@angular/router';


const root: Routes = [{
  path: 'main',
  component: MainViewComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
