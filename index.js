//Maximum consecutive 1's in a binary array

function getMaxLength3(arr){
    let count = 0;
    let result = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] == 0){
            count = 0;
        } else {
            count++;
            result = Math.max(result, count);
        }
    }
    return result; 
}

//console.log([1, 1,1,1,1,1,1,1,1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]);
//output : 9
