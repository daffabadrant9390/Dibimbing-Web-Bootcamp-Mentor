/**
 * 1. Warm Up Session
 * 
 * Buatlah sebuah class bernama Book dengan property
 * - title
 * - author
 * - yearPublished
 * - genre
 * 
 * Kemudian buatlah sebuah method bernama getBookSummary, dimana mengembalikan string sebagai berikut:
 * "Title: [title], Author: [author], Year: [yearPublished], Genre: [genre]"
 * 
 * 
 * Buatlah 2 buah instance berbeda dari class book dengan data yang berbeda sebagai berikut:
 * - Book 1:
 *  - title: "To Kill a Mockingbird"
 *  - author: "Harper Lee"
 *  - yearPublished: 1960
 *  - genre: "Fiction"
 *
 * - Book 2:
 *  - title: "1984"
 *  - author: "George Orwell"
 *  - yearPublished: 1949
 *  - genre: "Dystopian"
 * 
 * 
 * Kemudian tambahkan satu method "markAsRead", dimana itu akan menampilkan pesan 
 * "Anda telah membaca [title] oleh [author]."
 */

class Book {
  constructor({
    title,
    author,
    yearPublished,
    genre
  }) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genre = genre;
  }

  getBookSummary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.yearPublished}, Genre: ${this.genre}`
  }

  markAsRead() {
    return `Anda telah membaca ${this.title} oleh ${this.author}`;
  }
}

// Membuat instance dari Book
const book1 = new Book({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
  genre: "Fiction"
});

const book2 = new Book({
  title: "1984",
  author: "George Orwell",
  yearPublished: 1940,
  genre: "Dystopian"
});

// Menggunakan method
console.log("Book 1 summary:", book1.getBookSummary());
console.log("Book 2 summary:", book2.getBookSummary());
console.log("\n============\n");
console.log(book1.markAsRead());
console.log(book2.markAsRead());