const arr = [50, 7, 5, 20, 8, 23, 17, 19];

function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    } 
    return false;
}

  console.log(linearSearch(arr, 17)); 
  console.log(linearSearch(arr, 97));