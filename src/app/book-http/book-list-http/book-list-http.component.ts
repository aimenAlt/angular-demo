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

  newBook: Book = {
    id: 0, 
    bookTitle: "", 
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImage: "",
    bookRemoved: false 
  }

  constructor(private bookHttpService: BookHttpService, 
              private router: Router) {

   }

  ngOnInit(): void {
    this.bookHttpService.getAllBooksService().subscribe(
      (response)=> {
        console.log(response);
        this.allBooks = response;
      },
      (error)=>{
        console.log(error);
      }
    );

    //
    console.log("after calling getAllBookSService()");
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
