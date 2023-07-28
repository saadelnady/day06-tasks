var userName = document.getElementById("userName");
var userAge = document.getElementById("userAge");
var userGenders = document.querySelectorAll("#userGender input[type='radio']");
var favColor = document.querySelector("#favColor");
var submit = document.getElementById("submit");

submit.onclick = function (e) {
  e.preventDefault();
  var gender;
  for (var i = 0; i < userGenders.length; i++) {
    if (userGenders[i].checked) {
      gender = userGenders[i].value;
    }
  }

  var user = {
    userVisiting: 0,
    userNameValue: userName.value,
    userAgeValue: userAge.value,
    userGenderValue: gender,
    favColorValue: favColor.value,
  };
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  document.cookie = `userVisiting=${
    user.userVisiting
  }; expires=${expires.toUTCString()}`;

  document.cookie = `userNameValue=${
    user.userNameValue
  }; expires=${expires.toUTCString()}`;

  document.cookie = `userAgeValue=${
    user.userAgeValue
  }; expires=${expires.toUTCString()}`;

  document.cookie = `userGenderValue=${
    user.userGenderValue
  }; expires=${expires.toUTCString()}`;

  document.cookie = `favColorValue=${
    user.favColorValue
  }; expires=${expires.toUTCString()}`;

  window.open("./wellcome.html", "_self");
};
