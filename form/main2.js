var wellcomeDiv = document.getElementById("wellcomeDiv");
var userParagraph = document.getElementById("userParagraph");
var timesOfViste = document.querySelector("#wellcomeDiv p .times");
function wellcomeUser() {
  var user = getUserObjectFromCookies();

  if (user.userGenderValue == "male") {
    userImage.src = "./images/male.jpg";
  } else {
    userImage.src = "./images/female.jpg";
  }

  userParagraph.innerHTML = user.userNameValue;
  userParagraph.style.color = user.favColorValue;

 
}
wellcomeUser();

 
function getUserObjectFromCookies() {
  const cookies = document.cookie.split("; ");
  let user = {
    userVisiting: 0,
    userNameValue: "",
    userAgeValue: "",
    userGenderValue: "",
    favColorValue: "",
  };

  cookies.forEach((cookie) => {
    const [name, value] = cookie.split("=");

    switch (name) {
      case "userVisiting":
        user.userVisiting = parseInt(value);
        break;
      case "userNameValue":
        user.userNameValue = value;
        break;
      case "userAgeValue":
        user.userAgeValue = value;
        break;
      case "userGenderValue":
        user.userGenderValue = value;
        break;
      case "favColorValue":
        user.favColorValue = value;
        break;
      default:
        break;
    }
  });

  return user;
}
