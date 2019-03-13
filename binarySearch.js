var arrTest = [2,3,4,5,6,7,8,10,12,44,54,102,200] ; 

const search = (arr, val) => {
    
    //First Element of array
    let left = 0; 

    //Last element of array
    let right = arr.length - 1;
    
    //The middle array of the array
    let middle = Math.floor((left + right)/2) ; 
    let element = arr[middle]; 
    
    //While the "right part" of the array is greater than the "left part"
    while(left <= right){ 

        //"Divide and conquer"
        if(element > val){ 
            left = middle + 1; 
        }
        else if(element < val){
            right = middle - 1; 
        }

        else if(element === val){
            return "Index: " + middle-1; 
        }
    }
}


console.log(search(arrTest, 4));