function isEqual(a, b) {


	for (let value in a)  {
		if (a.value === undefined)  {
			a.value = 'undefined';
		}
	}
	for (let value in b)  {
		if (b.value === undefined)  {
			b.value = 'undefined';
		}
	}


	return JSON.stringify(a) == JSON.stringify(b); 

	



	

	



}

export default isEqual;
