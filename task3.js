function printStaircase(num) {
	let lines = [];
	for (let i = 0; i < num; i++) {
		lines.push(new Array(i+1).fill('#').join(""));
	}

	return lines.join("\n");
}

console.log(printStaircase(5));
