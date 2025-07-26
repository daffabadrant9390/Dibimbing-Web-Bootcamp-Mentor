/**
 * 2. Inheritance and Polymorphism
 * 
 * Buatlah sebuah class yang bernama User, dengan property berikut
 * - name -> private
 * - username -> private
 * - email -> private
 * - password -> private
 * 
 * Kemudian buatlah sebuah method berikut
 * - getUserInfo -> mengembalikan string sebagai berikut:
 *   "Name: [name], Username: [username], Email: [email]"
 * - login -> menerima parameter email dan password, jika benar maka
 *    - mengembalikan string "User Login successful" dan jika salah maka
 *    - mengembalikan string "User Login failed"
 * 
 * # INHERITANCE PART
 * - Buatlah 2 class turunan yaitu Admin dan Customer yang mewarisi class User menggunakan Extends.
 * 
 * # POLYMORPHISM PART
 * - Pada kedua child class, buat kembali sebuah method "login", dengan requirement berikut
 *   - menerima parameter email dan password
 *   - jika email dan password benar, maka
 *    a. Admin mengembalikan string "Admin Login successful"
 *    b. Customer mengembalikan string "Customer Login successful"
 *   - jika salah, maka
 *    a. Admin mengembalikan string "Admin Login failed"
 *    b. Customer mengembalikan string "Customer Login failed"
 * 
 * Buatlah 2 instance berbeda dari class Admin dan Customer dengan data yang berbeda sebagai berikut:
 * - Admin 1:
 *  - name: "Alice"
 *  - username: "alice_admin"
 *  - email: "alice_admin@example.com"
 *  - password: "admin123"
 *
 * - Customer 1:
 *  - name: "Bob"
 *  - username: "bob_customer"
 *  - email: "bob_customer@example.com"
 *  - password: "customer123"
 */

class User {
  // #nama;
  // #username;
  // #email;
  // #password;

  constructor({nama, username, email, password}) {
    this.nama = nama;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  getUserInfo() {
    return `Name: ${this.nama}, Username: ${this.username}, Email: ${this.email}`
  }

  login(email, password) {
    if(this.email === email && this.password === password) {
      return "User Login Successful";
    } else {
      return "User Login Failed";
    }
  }
}

class Admin extends User {
  constructor({ nama, username, email, password }) {
    super({ nama, username, email, password });
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      return "Admin Login Successful";
    } else {
      return "Admin Login Failed";
    }
  }
}

class Customer extends User {
  constructor({ nama, username, email, password }) {
    super({ nama, username, email, password });
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      return "Customer Login Successful";
    } else {
      return "Customer Login Failed";
    }
  }
}

const user1 = new User({
  nama: "John Doe",
  username: "john_doe",
  email: "john_doe@example.com",
  password: "user123"
});

const admin1 = new Admin({
  nama: "Alice",
  username: "alice_admin",
  email: "alice_admin@example.com",
  password: "admin123"
});

const customer1 = new Customer({
  nama: "Bob",
  username: "bob_customer",
  email: "bob_customer@example.com",
  password: "customer123"
});

//* Testing login
const hasilLoginUser = user1.login("john_doe@example.com", "user123");
console.log("\nHasil Login User:", hasilLoginUser);

const hasilLoginAdmin = admin1.login("alice_admin@example.com", "admin123");
console.log("\nHasil Login Admin:", hasilLoginAdmin);

const hasilLoginCustomer = customer1.login("bob_customer@example.com", "customer324");
console.log("\nHasil Login Customer:", hasilLoginCustomer);