function rowZero(str) {
  let n = str.length;
  let k = 0;
  let m = 0;


  for (let i=0;i<n;i++)  {
  	if (str[i] == '0')  {
  		k++;
  		if (str[i+1] !== '0')  {
  			if (k>m)  {
  				m = k;
  				k = 0;
  			}
  			else {
  				k=0;
  			}
  		}
  	}
  }

  return m;
}

window.rowZero = rowZero;

export default rowZero;
