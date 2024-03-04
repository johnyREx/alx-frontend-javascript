export default function taskBlock(trueOrFalse) {
	let task = false; // useing let instead of var
	let task2 = true; // use let instead of var

	if (trueOrFalse) {
		task = true; // Assign the value directly w/o redclaring
		task2 = false; // Assign the value directly w/o redclaring
	}

	return [task, task2];
}
