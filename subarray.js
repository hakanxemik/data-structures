 
// -------------------------------- //
//Exercise one: Array sequences --> Finding the biggest sum of num long subarray 
//e.g. [5,5,4,5,2,3] --> Biggest sum of num = 3 would be 14 (first three elements)
const sumArray = (arr, num) => {
    var max = 0;
    //Check if the subarray is longer than the actual array
    if(num > arr.length - 1){
        return false; 
    }

//O(n^2)
    for(let i = 0 ; i < arr.length - num + 1; i++){
          temp = 0; 
          for(let j = 0 ; j < num; j++){ 
              temp += arr[i+j];  
          }

          if(temp > max){ 
              max = temp;  
          }
    }
    return max;  
}

console.log(sumArray([1,1,2,2,3,5,6,8], 3));

// -------------------------------- //

