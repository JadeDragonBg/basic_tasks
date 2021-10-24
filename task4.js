function getGrade(score) {
	if (score < 6) {
		return 'F';
	}

	if (score < 11) {
		return 'E';
	}

	if (score < 16) {
		return 'D';
	}

	if (score < 21) {
		return 'C';
	}

	if (score < 26) {
		return 'B';
	}

	if (score > 25) {
		return 'A';
	}

	return 'Error';
}

// let grade = getGrade(14);
// console.log(grade);
