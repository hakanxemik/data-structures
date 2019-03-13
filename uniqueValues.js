//Counting the unique Values in a array. Doing this with 
// with multiple pointers 


//e.g countUniqueValues([1,1,1,2,2,3,3,3]) => 3 Unique values 


var countUniqueValues = (arr) => { 

    var i = 0 

    if(arr.length === 0 ){ 
        return 0; 
    }
    
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){ 
            i++; 
            arr[i] = arr[j]; 
        }
    }
    return i+1; 
}

console.log("uniqueValues result is = " + countUniqueValues([1,1,2,2,3,3,]));


