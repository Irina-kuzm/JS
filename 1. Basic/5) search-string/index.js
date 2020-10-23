
function searchString(obj) {

    let counter = 0;
    let k = '?';
    let size = Object.keys(obj).length;

        for (let key in obj) {
            if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
                delete obj[key];
            }
            else {
                k = k + key + '=' + obj[key]+'&';
            }
        }
        return k.substring(0, k.length - 1);
}
window.searchString = searchString;

export default searchString;
