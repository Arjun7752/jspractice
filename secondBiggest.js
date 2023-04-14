function nextBiggestVal(arr) {
    let maxValue = 0; let resultVal = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxValue){
            resultVal = maxValue;
            maxValue = arr[i];
        } else if(arr[i] < maxValue && arr[i] > resultVal) {
            resultVal = arr[i];
        }
    }

    return resultVal;
}
undefined
Test([2,1,4,5,8,9,3,7])
8
