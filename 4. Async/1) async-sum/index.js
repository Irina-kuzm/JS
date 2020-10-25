function asyncSum(a, b) {


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    if(typeof(a) == 'number' && typeof(b) == 'number') {
      resolve(a+b);
    } else {
      reject(new Error('error'));
  }
  }, 1000);

});
return promise;
}

window.asyncSum = asyncSum;

export default asyncSum;
