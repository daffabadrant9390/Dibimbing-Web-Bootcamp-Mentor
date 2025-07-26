/**
 * 3. Encapsulation & Abstraction
 * - Buatlah sebuah class bernama "BankAccount" yang menerima property berikut:
 *  - accountNumber (private)
 *  - accountHolder (private)
 *  - balance (private)
 *  - pin (private)
 * 
 * - Buatlah getter method untuk mendapatkan informasi akun:
 *  1. get getBalance() -> mengembalikan balance
 *  2. get getPin() -> mengembalikan pin
 *  3. get getAccountNumber() -> mengembalikan accountNumber
 * 
 * # ABSTRACTION PART
 * - Buatlah method untuk melakukan
 *   - login dengan parameter pin, jika pin benar maka user dapat melakukan transaksi (withdraw, deposit)
 *      method ini hidden dari visibility user dan selalu digunakan sebelum melakukan transaksi
 *   - menghitung apakah balance cukup untuk melakukan withdraw
 * 
 * - Buatlah method untuk melakukan deposit dan withdraw:
 *  1. deposit(amount) -> menambahkan amount ke balance
 *  2. withdraw(amount, pin) -> mengurangi balance dengan amount jika pin benar
 *  3. transfer(amount, targetAccount, pin) -> 
 *    -> mengurangi balance dengan amount jika pin benar dan menambahkan amount ke targetAccount
 *    -> Check dulu balance cukup untuk melakukan transfer
 */
class BankAccount {
  #accountNumber;
  #accountHolder;
  #balance;
  #pin;

  constructor(accountNumber, accountHolder, balance, pin) {
    this.#accountNumber = accountNumber;
    this.#accountHolder = accountHolder;
    this.#balance = balance;
    this.#pin = pin;
  }

  get getBalance() {
    return this.#balance;
  }

  get getPin() {
    return this.#pin;
  }

  get getAccountNumber() {
    return this.#accountNumber;
  }

  login(pin) {
    return this.#pin === pin;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return "Deposit Successful";
    }
    return "Deposit Failed (Please enter a valid amount > Rp. 0)";
  }

  //* Method untuk menarik uang dengan validasi pin
  //* dan memastikan saldo cukup
  withdraw(amount, pin) {
    if (this.login(pin) && amount <= this.#balance) {
      if(amount > 0) {
        this.#balance -= amount;
        return "Withdrawal Successful";
      }
      return "Withdrawal Failed (Please enter a valid amount > Rp. 0)";
    }
    return "Withdrawal Failed (Invalid PIN or Insufficient Balance)";
  }

  //* Method untuk transfer uang ke akun lain
  //* dengan validasi pin dan memastikan saldo cukup
  transfer(amount, targetAccount, pin) {
    if (this.login(pin) && amount <= this.#balance) {
      if(amount > 0) {
        this.#balance -= amount;
        return 'Transfer Successful to ' + targetAccount;
      }
      return "Transfer Failed (Please enter a valid amount > Rp. 0)";
    }
    return "Transfer Failed (Invalid PIN or Insufficient Balance)";
  }
}

const account1 = new BankAccount("123456789", "Alice", 1000000, 1234);
const account2 = new BankAccount("987654321", "Bob", 500000, 5678);
const jumlahSaldoAccount1 = account1.getBalance;
console.log("Saldo Account 1: " + jumlahSaldoAccount1);
console.log(account1.deposit(200000)); // Deposit Successful
console.log("Saldo Account 1 setelah deposit: " + account1.getBalance);
console.log(account1.withdraw(300000, 1234)); // Withdrawal Successful
console.log("Saldo Account 1 setelah penarikan: " + account1.getBalance);
console.log(account1.transfer(200000, account2.getAccountNumber, 1234));
console.log("Saldo Account 1 setelah transfer: " + account1.getBalance);