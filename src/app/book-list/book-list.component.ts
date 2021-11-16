import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  flag = false;

  newBook = {
    id: 0, 
    bookTitle: "", 
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImage: "",
    bookRemoved: false 
  }

  allBooks = [
    {
    	id: 1, 
        bookTitle: "Harry Potter and the Order of Phoenix", 
        bookAuthor: "J.K.Rowling",
        bookGenre: "Fiction",
        bookCost: 20,
        bookImage: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
        bookRemoved: false 
      },
      { 
    	id: 2, 
        bookTitle: "Harry Potter and the Prizoner of Azkaban", 
        bookAuthor: "J.K.Rowling",
        bookGenre: "Fiction",
        bookCost: 25,
        bookImage: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        bookRemoved: false 
      },
      { 
    	id: 3, 
        bookTitle: "Harry Potter and the Deathly Hallows", 
        bookAuthor: "J.K.Rowling",
        bookGenre: "Fiction",
        bookCost: 10,
        bookImage: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        bookRemoved: false 
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

  removeBook(bookId: number){
    console.log(bookId);
    this.allBooks.forEach((value, index) => {
      if(this.allBooks[index].id == bookId){
        this.allBooks.splice(index, 1);
      }
    });
  }

  addBook(){
    var myBook = {
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
}
