import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoApp }  from './app.component';
import { TodoStore } from './services/store';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ TodoApp ],
  providers:    [ TodoStore ],
  bootstrap:    [ TodoApp ]
})
export class AppModule { }
