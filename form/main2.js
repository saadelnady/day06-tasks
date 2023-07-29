/** @format */

window.onload = function () {
	welcomeUser();
};

function welcomeUser() {
	var user = {
		visiting: parseInt(getCookie('userVisiting')) || 0,
		userName: getCookie('userName'),
		userAge: getCookie('userAge'),
		favColor: getCookie('favColor'),
		userGender: getCookie('userGender'),
	};
	console.log(user);
	var userImage = document.getElementById('userImage');
	userImage.src =
		user.userGender === 'male' ? './images/male.jpg' : './images/female.jpg';

	var userParagraph = document.getElementById('userParagraph');
	userParagraph.innerHTML = user.userName;
	userParagraph.style.color = user.favColor;

	var timesOfVisit = document.querySelector('#wellcomeDiv p .times');
	timesOfVisit.innerHTML = user.visiting + 1;
}

function getCookie(name) {
	var cookies = document.cookie.split(';').map((cookie) => cookie.trim());
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
