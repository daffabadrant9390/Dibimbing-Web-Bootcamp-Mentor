/**
 * Refactor Callback Hell to Promises
 * 
 * - Terdapat nested callback yang sudah mulai sulit dibaca dan dimaintain
 * - Callbacks tersebut sudah menjadi Callback Hell, dan perlu direfactor
 * menjadi sebuah Promise
 * 
 * Buatlah sebuah callback hell dimana terdapat 4 NESTED SET TIMEOUT untuk
 * menampilkan pesan step memasak indomie berikut:
 * - Rebus air hingga mendidih (timeout 1000ms)
 * - Masukkan indomie dan bumbu (timeout 2000ms)
 * - Masak selama 3 detik (timeout 3000ms)
 * - Angkat dan sajikan (timeout 1000ms)
 * 
 * Buatlah callback hell tersebut, kemudian refactor menjadi Promise
 */


//* Callback Hell Example
// setTimeout(() => {
//   console.log("Rebus air hingga mendidih!");

//   setTimeout(() => {
//     console.log("Masukkan indomie dan bumbu!");

//     setTimeout(() => {
//       console.log("Masak selama 3 detik!");

//       setTimeout(() => {
//         console.log("Angkat dan sajikan!");
//       }, 1000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// //* Transform to Promises
function memasakAir(isSukses=true) {
  return new Promise((resolve, reject) => {
    if(!isSukses) {
      reject("Gagal merebus air!");
    } else {
      setTimeout(() => {
        resolve("Rebus air hingga mendidih!");
      }, 1000);
    }
  })
}

function masukkanIndomieDanBumbu(isSukses=true) {
  return new Promise((resolve, reject) => {
    if(!isSukses) {
      reject("Gagal memasukkan indomie dan bumbu!");
    } else {
      setTimeout(() => {
        resolve("Masukkan indomie dan bumbu!");
      }, 2000);
    }
  })
}

function masakIndomie(isSukses=true) {
  return new Promise((resolve, reject) => {
    if(!isSukses) {
      reject("Gagal memasak indomie!");
    } else {
      setTimeout(() => {
        resolve("Masak selama 3 detik!");
      }, 3000);
    }
  })
}

function angkatDanSajikan(isSukses=true) {
  return new Promise((resolve, reject) => {
    if(!isSukses) {
      reject("Gagal mengangkat dan menyajikan!");
    } else {
      setTimeout(() => {
        resolve("Angkat dan sajikan!");
      }, 1000);
    }
  })
}

// Cara satu promise chaining
memasakAir()
  .then((result) => {
    console.log(result);
    return masukkanIndomieDanBumbu();
  })
  .then((result) => {
    console.log("Masukkan indomie dan bumbu:", result);
    return masakIndomie();
  })
  .then((result) => {
    console.log("Masak Indomie:", result);
    return angkatDanSajikan();
  })
  .then((result) => {
    console.log("Angkat dan Sajikan:", result);
  })
  .catch((error) => {
    console.log("Error masukkan indomie dan bumbu:", error);
  })
  .catch((error) => {
    console.log("Error Memasak Air:", error);
  })

// Cara kedua dengan async function
async function memasakIndomieAsync() {
  try {
    const air = await memasakAir();
    console.log(air);
    
    const indomie = await masukkanIndomieDanBumbu();
    console.log("Masukkan indomie dan bumbu:", indomie);
    
    const masak = await masakIndomie();
    console.log("Masak Indomie:", masak);
    
    const sajikan = await angkatDanSajikan();
    console.log("Angkat dan Sajikan:", sajikan);
  } catch (error) {
    console.error("Error:", error);
  }
}
memasakIndomieAsync();