const usrAction = document.getElementsByTagName("input");
usrAction[2].addEventListener("click", function () {
 const name = usrAction[0].value;
 const email = usrAction[1].value;
 const post = {name : name, email : email};
 postToServer(post);
})

function postToServer(post) {
 fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: JSON.stringify(post),
   headers: {
    'Content-type': 'application/json; charset=UTF-8',
   },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}