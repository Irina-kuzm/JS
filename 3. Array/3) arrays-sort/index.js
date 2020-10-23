function arraysSort(arr) {
//    return arr.sort((a,b) => a[1] - b[1]);

    let arr2 = arr.slice();
    return  arr2.sort(function (i, ii) {
        if (i[1] > ii[1])
            return 1;
        else if (i[1] < ii[1])
            return -1;
        else
            return 0;
    });

};

window.arraysSort = arraysSort;

export default arraysSort;
