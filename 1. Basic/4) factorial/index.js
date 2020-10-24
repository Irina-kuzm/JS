function factorial(n) {
  var k=1;
  for (var i=1;i<=n;i++) {
    k=k*i;
  }
  return n=k;
}

window.factorial = factorial;

export default factorial;
