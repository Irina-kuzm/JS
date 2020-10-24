function isEqual(a, b) {

	for (let key in a)  {
		if (a.key == undefined)  {
			a.key = 'undefined';
		}
	}
	for (let key in b)  {
		if (b.key == undefined)  {
			b.key = 'undefined';
		}
	}
	return JSON.stringify(a) === JSON.stringify(b);

	



	

	



}

export default isEqual;
