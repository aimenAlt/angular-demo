import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/book-http/book.model';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input()
  bookData: Book = {
    id: 0, 
    bookTitle: "", 
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImage: "",
    bookRemoved: false 
  };

  @Output()
  deleteEmitter: EventEmitter<number> = new EventEmitter();

  @Output()
  editEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goToEditComponent(bookId: number){
    this.editEmitter.emit(bookId);
  }

  removeBook(bookId: number){
    console.log("book id:" + bookId);
    // here we should not provide the logic to remove the book
    // because the child should propagate the event to the parent
    // and the parent should remove it
    this.deleteEmitter.emit(bookId);
  }
}
