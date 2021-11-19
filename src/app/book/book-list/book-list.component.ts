import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';

import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  flag: boolean = false;

  allBooks: Book[] = [];
  //java syntax
  //BookService bookService;

  //typescript syntax
  // commented out this line since i used private
  // while injecting BookService
  //bookService: BookService;

  newBook: Book = {
    id: 0, 
    bookTitle: "", 
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImage: "",
    bookRemoved: false 
  }

  //dependency injection of BookService
  constructor(private bookService: BookService, 
              private router: Router) {
    //with dependency injection, we dont have to do this.
    // we can tell the framework to inject the dependency for us
    //this.bookService = new BookService();

    // commented out this line since i used private
        // while injecting BookService
    //this.bookService = bookService;
   }

  ngOnInit(): void {
    this.allBooks = this.bookService.getAllBooksService();
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

  removeParent(bookId: any){
    console.log("parent : " + bookId);
    this.bookService.removeBookService(bookId);    
  }

  addBook(){
    var myBook: Book = {
      id: this.allBooks[this.allBooks.length-1].id + 1 ,
      bookTitle: this.newBook.bookTitle, 
      bookAuthor: this.newBook.bookAuthor,
      bookGenre: this.newBook.bookGenre,
      bookCost: this.newBook.bookCost,
      bookImage: this.newBook.bookImage,
      bookRemoved: false 
    }
       
    this.allBooks.push(myBook);
  }

  goToEditParent(bookId: any){
    console.log("logged: " + bookId);
    this.router.navigate(['book-update', bookId])
  }
}
