import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list-http',
  templateUrl: './book-list-http.component.html',
  styleUrls: ['./book-list-http.component.css']
})
export class BookListHttpComponent implements OnInit {

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
  constructor(private bookHttpService: BookHttpService, 
              private router: Router) {
    //with dependency injection, we dont have to do this.
    // we can tell the framework to inject the dependency for us
    //this.bookService = new BookService();

    // commented out this line since i used private
        // while injecting BookService
    //this.bookService = bookService;
   }

  ngOnInit(): void {
    this.allBooks = this.bookHttpService.getAllBooksService();
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

  removeBook(bookId: number){
    this.bookHttpService.removeBookService(bookId);    
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

  goToEditComponent(bookId: any){
    console.log("logged: " + bookId);
    this.router.navigate(['book-update-http', bookId])
  }
}
