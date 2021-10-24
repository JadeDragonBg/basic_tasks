function createRectangle(width, height) {
	return {
		width,
		height,
		area: width * height,
		parimeter: 2*width + 2*height,
	};
}

console.log(createRectangle(2,1));
