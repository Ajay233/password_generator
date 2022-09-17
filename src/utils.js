export const generatePassword = (numOfChars, chars) => {
  let numsArr = [];
	let password = "";
  let counter = 0;

	for(let x = 1; x <= Object.entries(chars).length; x++){
		numsArr.push(x);
	}

	let arrSize = numsArr.length

	while (counter < numOfChars) {
		let numIndex = Math.floor(Math.random() * numsArr.length)
		let index = numsArr[Math.floor(Math.random() * numsArr.length)]
		numsArr.splice(numIndex, 1)
		arrSize--
		password += chars[index]
		counter++;
	}

	console.log(password)

  return password
}
