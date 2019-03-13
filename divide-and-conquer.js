//Divide and Conquer --> Useful for binary tree searches 

var testArr = [1,2,4,5,7,8,9,13,16];
var num = 13; // Searching this number

const search = (arr, num) => {
    let min = 0; 
    let max = arr.length -1; 

    //Divide and Conquer --> Middle of the array
    while(max => min){
    let middle = arr[Math.floor(max - min)];
    
    
        if(arr[middle] < num){
            min = middle + 1; 
        }

        else if(arr[middle] > num){ 
            max = middle - 1; 
        }

        else { return arr.indexOf(middle); }
        }

    return -1;
}

console.log("Binary search result= " + search(testArr, num)); 