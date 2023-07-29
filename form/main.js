/** @format */

var userName = document.getElementById('userName');
var userAge = document.getElementById('userAge');
var userGender = document.querySelectorAll("#userGender input[type='radio']");
var favColor = document.querySelector('#favColor');
var submit = document.getElementById('submit');

submit.onclick = function (e) {
	e.preventDefault();
	var gender;
	for (var i = 0; i < userGender.length; i++) {
		if (userGender[i].checked) {
			gender = userGender[i].value;
			break;
		}
	}

	var user = {
		userName: userName.value,
		userAge: userAge.value,
		userGender: gender,
		favColor: favColor.value,
	};

	var userVisiting = (parseInt(getCookie('userVisiting')) || 0) + 1;

	setCookie('userName', user.userName);
	setCookie('userVisiting', userVisiting);
	setCookie('userAge', user.userAge);
	setCookie('favColor', user.favColor);
	setCookie('userGender', user.userGender);

	window.open('./wellcome.html', '_self');
};
function getCookie(name) {
	var cookies = document.cookie.split(';').map((cookie) => cookie.trim());
	console.log('cookies', cookies);
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].split('=');
		if (cookie[0] === name) {
			return cookie[1];
		}
	}
	return null;
}

function setCookie(name, value) {
	document.cookie = name + '=' + value + ';';
}
