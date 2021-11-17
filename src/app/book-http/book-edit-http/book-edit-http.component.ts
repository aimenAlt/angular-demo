import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-edit-http',
  templateUrl: './book-edit-http.component.html',
  styleUrls: ['./book-edit-http.component.css']
})
export class BookEditHttpComponent implements OnInit {

  updateBook: Book = {
    id: 0, 
    bookTitle: "", 
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImage: "",
    bookRemoved: false 
  }
  constructor(private bookService: BookHttpService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    var receivedBookId: any = this.activatedRoute.snapshot.paramMap.get("sentBookId");
    console.log(receivedBookId);
    this.updateBook = this.bookService.getABookService(receivedBookId);
  }

  editBook(){
    this.bookService.updateBookService(this.updateBook);
    this.router.navigate(['book-info-http']);

  }
}
