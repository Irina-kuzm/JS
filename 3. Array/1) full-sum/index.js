function fullSum(...args) {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'number') {
            result += arguments[i];
        }
        else {
            throw "Wrong arguments type";
            break;
        }
    }

    return result;
}

window.fullSum = fullSum;

export default fullSum;
