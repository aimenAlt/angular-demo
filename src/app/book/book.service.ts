import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

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

  getAllBooksService(){
    return this.allBooks;
  }

  addBookService(newBook: any){
    this.allBooks.push(newBook);
  }  

  removeBookService(bookId: any){
    this.allBooks.forEach((value, index) => {
      if(this.allBooks[index].id == bookId){
        this.allBooks.splice(index, 1);
      }
    });
  }

  getABookService(bookId: any){
    var sendBook = {
        id: 0, 
          bookTitle: "", 
          bookAuthor: "",
          bookGenre: "",
          bookCost: 0,
          bookImage: "",
          bookRemoved: false
    };
    this.allBooks.forEach((value, index) => {
      if(this.allBooks[index].id == bookId){
        sendBook = this.allBooks[index];
      }
    });
    return sendBook;
  }

  updateBookService(updateBook: any){
    this.allBooks.forEach((value, index) => {
      if(this.allBooks[index].id == updateBook.id){
         this.allBooks[index] = updateBook;
      }
    });
  }
}
