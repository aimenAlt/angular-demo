import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  updateBook = {
    id: 0, 
    bookTitle: "", 
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImage: "",
    bookRemoved: false 
  }
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    var receivedBookId = this.activatedRoute.snapshot.paramMap.get("sentBookId");
    this.updateBook = this.bookService.getABookService(receivedBookId);
  }

  editBook(){
    this.bookService.updateBookService(this.updateBook);
    this.router.navigate(['book-info']);

  }
}
