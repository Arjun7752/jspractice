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

function findMiniMax(arr){ 
    let mini = arr[0];
    let maxi = arr[0];

    for(let i=0; i < arr.length; i++){
        if(arr[i] < mini){
            mini = arr[i];
        } else if(arr[i] > maxi){
            maxi = arr[i];
        }
    }

    let ans = {
        "mini": mini,
        "max": maxi
    }

    return ans;
    
}
//findMiniMax([9,7,1,0,4,2]);
//ouput: {mini: 0, max: 9}
var obj = [

    {
        id: 1,
        address: {
            country: "US"
        }
    },
    {
        id: 1,
        address: {
            country: "US"
        }
    },
    {
        id: 1,
        address: {
            country: "US"
        }
    },
    {
        id: 1,
        address: {
            country: "India"
        }
    }
];
undefined
obj.filter( (item) => {
    return item.address.country === "US"
}).length; //output: 3
