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

  errorMsg: string = '';

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
    //this.errorMsg = '';
    this.loadBooks();

    //
    console.log("after calling getAllBookSService()");
  }

  loadBooks(){
    this.bookHttpService.getAllBooksService().subscribe(
      (response)=> {
        console.log(response);
        this.allBooks = response;
      },
      (error)=>{
        console.log(error);
        this.errorMsg = 'There was some internal error! Please try again later!';
        console.log(this.errorMsg);
      }
    );
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

  removeBook(bookId: number){
    this.bookHttpService.removeBookService(bookId).subscribe(
      (response) => {
        console.log(response);
        this.loadBooks();
      },
      (error) => console.log(error)
    )   
  }

  addBook(){
    this.bookHttpService.addBookService(this.newBook).subscribe(
      (response) => {
        console.log(response);
        this.loadBooks();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  goToEditComponent(bookId: any){
    console.log("logged: " + bookId);
    this.router.navigate(['book-update-http', bookId])
  }
}
