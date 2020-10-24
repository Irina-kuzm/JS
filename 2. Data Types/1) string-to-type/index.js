function stringToType(str) {

	let k = isNaN(str);

	if (k === false) {

		if (str == "")  {
			return str;
		}
		else {
			return str = +str;
		}
	}

	switch (str) {
		case 'false':
			str = false;
			break;
		case 'true':
			str = true;
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
