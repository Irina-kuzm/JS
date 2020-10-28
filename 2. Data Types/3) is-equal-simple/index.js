function isEqual(a, b) {


var p;

    if (isNaN(a) && isNaN(b) && typeof a === 'number' && typeof b === 'number') {
         return true;
    }
    if (a === b) {
        return true;
    }
    if ((typeof a === 'function' && typeof b === 'function') ||
       (a instanceof Date && b instanceof Date) ||
       (a instanceof RegExp && b instanceof RegExp) ||
       (a instanceof String && b instanceof String) ||
       (a instanceof Number && b instanceof Number)) {
        return a.toString() === b.toString();
    }

    // At last checking prototypes as good as we can
    if (!(a instanceof Object && b instanceof Object)) {
        return false;
    }

    if (a.isPrototypeOf(b) || b.isPrototypeOf(a)) {
        return false;
    }

    if (a.constructor !== b.constructor) {
        return false;
    }

    if (a.prototype !== b.prototype) {
        return false;
    }

    for (p in b) {
        if (b.hasOwnProperty(p) !== a.hasOwnProperty(p)) {
            return false;
        }
        else if (typeof b[p] !== typeof a[p]) {
            return false;
        }
    }

    for (p in a) {
        if (b.hasOwnProperty(p) !== a.hasOwnProperty(p)) {
            return false;
        }
        else if (typeof b[p] !== typeof a[p]) {
            return false;
        }

       
    }

    return true;


}

export default isEqual;
