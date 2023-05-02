function test(arr) {
    var b = {};
    var max=""; var maxi = 0;
    for(let k of arr) {
        if(b[k]) {
            b[k]++;
        } else {
            b[k] = 1;
        }
        if(maxi < b[k]) { max = k; maxi = b[k]}
    }

    console.log(`Item ${max} -- Repeated count: ${maxi}`)
}

/////////////////////////////

function mode(arr)  {
    return arr.sort( (a, b) => arr.filter(v => v === a).length - arr.filter( v => v ===b).length).pop()
}
