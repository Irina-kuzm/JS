function findPair(arr) {
    let n = arr.length;
    let i = 0;
    let k = 0;
    let g = 0;


    for (let m = 0; m<=n;m++)  {
        if (arr[i] === arr[k])  {
            g=arr[k];
        }
        else {
            k++;
        }
        i++;
    }
    return g;
}

window.findPair = findPair;

export default findPair;
