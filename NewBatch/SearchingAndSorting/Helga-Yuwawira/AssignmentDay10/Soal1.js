function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}
const data = [50, 7, 5, 20, 8, 23, 17, 19];
console.log("Cari 17:", linearSearch(data, 17)); 
console.log("Cari 77:", linearSearch(data, 77)); 