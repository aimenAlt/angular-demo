import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { CopyTextComponent } from './copy-text/copy-text.component';
import { CounterComponent } from './counter/counter.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'hello', component: HelloComponent },
  { path:'counter', component: CounterComponent },
  { path:'copy-the-text', component: CopyTextComponent },
  { path:'login', component: LoginComponent },
  { path:'book-info', component:  BookListComponent},
  { path:'book-update', component:  BookEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
