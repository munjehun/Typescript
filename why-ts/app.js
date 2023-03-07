// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios.get(url).then((response) => {
    console.log(response);
    user = response.data;

    username.innerHTML = user.name;
    email.innerHTML = user.email;
    address.innerHTML = user.address;
  });
}

startApp();
