// Hands on 2
import {
  filterArrayDataByDataType,
  getRataRataSebuahArray,
  getTotalArrayData,
  PHI_VALUE
} from "./helpers.js";

/**
 * 2. Filter, Merge and count the Total of array
 * Buatlah sebuah function yang menerima 2 parameter
 * - parameter 1 -> array of string dan number
 * - parameter 2 -> rest parameter (string, number, array)
 *
 * TUGAS:
 * Filter lah kedua array tersebut hingga hanya tersisa number. Lalu
 * Merge kedua array tersebut dan hitung total dari array tersebut!.
 *
 * CHALLENGE
 * - Buatlah sebuah function yang dapat digunakan berkali kali
 */

const totalArrayData = (arrayData, ...arrayAngkaTambahan) => {
    //* Step 1. Filter array data hanya terdiri dari angka
    // const filteredArrayData = filterArrayDataByDataType(arrayData);
    // console.log("filteredArrayData: ", filteredArrayData);
    
    //* Step 2. Filter rest parameter hanya terdiri dari angka
    // const filteredArrayAngkaTambahan = 
    //   filterArrayDataByDataType(arrayAngkaTambahan);
    // console.log("filteredArrayAngkaTambahan: ", filteredArrayAngkaTambahan);
  
    //* Step 3. Gabungkan kedua array yang telah di filter
    // const gabunganArrayData = [
    //   ...filteredArrayData,
    //   ...filteredArrayAngkaTambahan
    // ]
    // console.log("gabunganArrayData: ", gabunganArrayData);

    //* SHORTCUT (SKIP STEP 1-3)
    const gabunganSeluruhArray = [...arrayData, ...arrayAngkaTambahan];
    console.log("gabunganSeluruhArray: ", gabunganSeluruhArray);
    const filteredGabunganSeluruhArray = filterArrayDataByDataType(gabunganSeluruhArray);
    console.log("filteredGabunganSeluruhArray: ", filteredGabunganSeluruhArray);
  
    //* Step 4. Hitung total dari kedua array tersebut setelah digabungkan
    const totalArrayData = getTotalArrayData(filteredGabunganSeluruhArray);
    return totalArrayData;
  }
  
  const arrayData = [80, 50, 'hello world'];
  const hasilTotalArray1 = totalArrayData(arrayData, 'pisang', 10, 15, true, false);
  console.log("\nhasilTotalArray1: ", hasilTotalArray1, "\n");

  console.log("PHI_VALUE: ", PHI_VALUE);