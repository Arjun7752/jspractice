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

///////////////////
function getMaxOccurrence(a) {
    var o = {}, mC = 0, mV, m;
    for (var i=0, iL=a.length; i<iL; i++) {
        m = a[i];
        o.hasOwnProperty(m)? ++o[m] : o[m] = 1;
        if (o[m] > mC) mC = o[m], mV = m;
    }
    return mV;
}
//////////////////////
 const frequence = (array) =>
      array.reduce(
        (acc, item) =>
          array.filter((v) => v === acc).length >=
          array.filter((v) => v === item).length
            ? acc
            : item,
        null
      );
