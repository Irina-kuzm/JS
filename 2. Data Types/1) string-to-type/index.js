function stringToType(str) {

	let k = isNaN(str);

	if (k==false) {
		if (str == '') {
			return str;
		}
		else {
			return str = Number(str);
		}
		
	}
	
	switch (str) {
		case 'true':
			str = true;
			break;
		case 'false':
			str = false;
			break;
		case 'null':
			str = null;
			break;
		case 'undefined':
			str = undefined;
			break;
	}
	return str;

	};

window.stringToType = stringToType;

export default stringToType;
