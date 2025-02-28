import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { LoginComponent } from './users/login/login.component';  
import { BookListComponent } from './book/book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookListHttpComponent } from './book-http/book-list-http/book-list-http.component';
import { BookEditHttpComponent } from './book-http/book-edit-http/book-edit-http.component';
import { BookItemComponent } from './book/book-list/book-item/book-item.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    CopyTextComponent,
    LoginComponent,
    BookListComponent,
    HeaderComponent,
    BookEditComponent,
    BookListHttpComponent,
    BookEditHttpComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

