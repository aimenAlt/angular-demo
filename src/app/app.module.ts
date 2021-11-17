import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { LoginComponent } from './login/login.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookListHttpComponent } from './book-http/book-list-http/book-list-http.component';
import { BookEditHttpComponent } from './book-http/book-edit-http/book-edit-http.component';

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

