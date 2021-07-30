fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => userList(json))

function userList(users) {
 const getUser = users.map(user => {
  const userName = user.username;
  const userEmail = user.email;
  return [userEmail, userName];
 });
 const ol = document.getElementById("user-container");
 for (var i = 0; i < getUser.length; i++) {
  const email = getUser[i][0];
  const name = getUser[i][1];
  const li = document.createElement("li");
  li.innerText = `User Name: ${name}.
  Email: ${email}`;
  ol.appendChild(li);
 }
}