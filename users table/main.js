var btnGetUsers = document.getElementById("users");

function getUsers(handleResponse) {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
      var myResponse = JSON.parse(this.responseText);
      handleResponse(undefined, myResponse);
    } else if (this.status === 200) {
      handleResponse("myRequest.error", undefined);
    }
  });
  myRequest.open("get", "https://jsonplaceholder.typicode.com/users");
  myRequest.send();
}

btnGetUsers.addEventListener("click", function () {
  getUsers(function handleResponse(error, response) {
    var tableBody = document.getElementById("tBody");

    if (error) {
      console.log(error);
    } else {
      for (var i = 0; i < response.length; i++) {
        var userId = response[i].id;
        var userName = response[i].name;
        var userEmail = response[i].email;
        var userAddress = response[i].address.street;
        var userWebsite = response[i].website;
        var userPhone = response[i].phone;
        var userCompany = response[i].company.name;

        var tRow = document.createElement("tr");

        tRow.innerHTML += `
        <td>${userId}</td>
        <td>${userName}</td>
        <td>${userEmail}</td>
        <td>${userAddress}</td>
        <td>${userWebsite}</td>
        <td>${userPhone}</td>
        <td>${userCompany}</td>
        `;
        tableBody.appendChild(tRow);
      }
    }
  });
});
