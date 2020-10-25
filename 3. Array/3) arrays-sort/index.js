function arraysSort(arr) {
//    return arr.sort((a,b) => a[1] - b[1]);

    let arr2 = arr.slice();
    arr2.sort(function (i, ii) {
        if (i[1] > ii[1]) {

            return 1;
        }
        else if (i[1] < ii[1])
            return -1;
        else
            return 0;
    }); 
        return arr2.sort(function (i, ii) {
        if (i[1] === 0)  {
        	if (ii[1] > i[1])  {
        		return -1;
        	}
        	else  {
        		return 1;
        	}
        }
    }); 
    //return arr2.sort(function(a, b){return a - b});




};

window.arraysSort = arraysSort;

export default arraysSort;
