const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(setNumbers(hours));

function setNumbers(num) {
	let result = 0;
	/*
	if (num < 10) result = '0' + num;
	else result = num;
  */
	// 조건식 ? true일때 실행할 구문 : false일때 실행할 구문
	// 삼항연산자 구문안에는 대입연산자가 들어올 수 없기 떄문에 괄호로 묶어서 표현식으로 변경
	num < 10 ? (result = '0' + num) : (result = num);
	return result;
}

/*
let newHr = 0;

if (hours > 12) {
	newHr = hours - 12;
	if (newHr < 10) {
		newHr = '0' + newHr + 'PM';
	} else {
		newHr = newHr + 'PM';
	}
} else {
	newHr = hours;
	if (newHr < 10) {
		newHr = '0' + newHr + 'AM';
	} else {
		newHr = newHr + 'AM';
	}
}
*/
