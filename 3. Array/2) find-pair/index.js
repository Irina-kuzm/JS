function findPair(arr) {
    let g = 0;

    arr = arr.filter( (e, i) => arr.includes(e, arr.indexOf(e) === i? i + 1 : 0) );
    g = arr[0];
    if (g == undefined)  {
        g = null;
    }
    return g;
}
window.findPair = findPair;

export default findPair;
