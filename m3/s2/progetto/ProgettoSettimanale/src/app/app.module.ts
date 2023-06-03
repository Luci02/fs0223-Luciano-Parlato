import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { EditTodoComponent } from './pages/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
