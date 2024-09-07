export function getRandom(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}


export function ObjectEqual(obj1, obj2) {
	for (const prop in obj1) {
		if (!Object.is(obj1[prop], obj2[prop])) {
			return false
		}
	}
	return true
}