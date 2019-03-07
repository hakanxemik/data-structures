 

const sumArray = (arr, num) => {
    var max = 0;
    if(num > arr.length - 1){
        return false; 
    }

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


