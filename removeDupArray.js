var arr = ["january", "february", "january",  "march", "february", "february"]; 

function removeDuplicates(arr) {
    return arr.filter( (item, index, arr) => arr.indexOf(item) === index);
}

removeDuplicates(arr) //  ['january', 'february', 'march']
