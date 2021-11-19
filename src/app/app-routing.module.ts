import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditHttpComponent } from './book-http/book-edit-http/book-edit-http.component';
import { BookListHttpComponent } from './book-http/book-list-http/book-list-http.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { CounterComponent } from './counter/counter.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'hello', component: HelloComponent },
  { path:'counter', component: CounterComponent },
  { path:'copy-the-text', component: CopyTextComponent },
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path:'book-info', component:  BookListComponent},
  { path:'book-update/:sentBookId', component:  BookEditComponent},
  { path:'book-info-http', component:  BookListHttpComponent},
  { path:'book-update-http/:sentBookId', component:  BookEditHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
