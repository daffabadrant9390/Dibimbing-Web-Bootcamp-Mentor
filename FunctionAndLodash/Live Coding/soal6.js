import _ from 'lodash';

/**
 * 6. Menggunakan Lodash
 * Kamu sedang mengunjungi perpustakaan yang menyediakan berbagai macam buku.
 * Masing masing buku tersebut direpresentasikan menggunakan array of object, dimana setiap object 
 * memiliki property sebagai berikut:
 * - judul
 * - pengarang
 * - tahun
 * - genre
 * - rating
 * 
 * Lakukan hal berikut menggunakan lodash
 * 1. Remove buku yang duplikat
 * 2. Sort buku tersbut berdasarkan tahun terbit
 * 3. Filter buku yang memiliki rating diatas 4.5
 * 4. Hitung jumlah buku yang memiliki genre tertentu
 * 5. Bonus : Group buku tersebut sesuai genre
 */

const functionMenyusunBuku = function(arrayBuku) {
  // Remove duplicate
  const removeDuplicateAndSort = _.uniqBy(arrayBuku, 'title').sort((a, b) => a.releasedYear - b.releasedYear);
  const filteredRating = _.filter(removeDuplicateAndSort, (book) => book.rating > 4.5);
  
  const grouppedBook = _.groupBy(filteredRating, 'genre');
  const mappedGrouppedBook = _.mapValues(grouppedBook, (value) => {
    return {
      total: value.length,
      books: value
    }
  })
  return mappedGrouppedBook;
}

const popularBooks = [
  {
      author: 'J.K. Rowling',
      title: 'Harry Potter and the Sorcerer\'s Stone',
      genre: 'Fantasy',
      releasedYear: 1997,
      rating: 4.9
  },
  {
      author: 'George Orwell',
      title: '1984',
      genre: 'Dystopian',
      releasedYear: 1949,
      rating: 4.7
  },
  {
      author: 'J.R.R. Tolkien',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      genre: 'Fantasy',
      releasedYear: 1954,
      rating: 4.8
  },
  {
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    genre: 'Fantasy',
    releasedYear: 1997,
    rating: 4.9
  },
  {
      author: 'Harper Lee',
      title: 'To Kill a Mockingbird',
      genre: 'Fiction',
      releasedYear: 1960,
      rating: 4.8
  },
  {
      author: 'F. Scott Fitzgerald',
      title: 'The Great Gatsby',
      genre: 'Classic',
      releasedYear: 1925,
      rating: 4.3
  },
  {
      author: 'Jane Austen',
      title: 'Pride and Prejudice',
      genre: 'Romance',
      releasedYear: 1813,
      rating: 4.6
  },
  {
      author: 'Stephen King',
      title: 'The Shining',
      genre: 'Horror',
      releasedYear: 1977,
      rating: 4.7
  },
  {
      author: 'Agatha Christie',
      title: 'Murder on the Orient Express',
      genre: 'Mystery',
      releasedYear: 1934,
      rating: 4.6
  },
  {
      author: 'Margaret Atwood',
      title: 'The Handmaid\'s Tale',
      genre: 'Dystopian',
      releasedYear: 1985,
      rating: 4.5
  },
  {
      author: 'Dante Alighieri',
      title: 'Divine Comedy',
      genre: 'Epic Poetry',
      releasedYear: 1320,
      rating: 4.2
  }
];

const hasilMenyusunBuku = functionMenyusunBuku(popularBooks);
console.log(JSON.stringify(hasilMenyusunBuku, null, 2)) //* Use JSON.stringify untuk memaksure jangan ada [Object]