/*
특정 시간을 주기로 코드를 반복할 때
setInterval(반복실행할 함수, 반복시간간격시간(ms))
*/
const [hr, m, s] = document.querySelectorAll('h1 span');
setInterval(setTime, 1000);

function setTime() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);
}

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}
