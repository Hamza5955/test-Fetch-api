console.log("ciao mondo");

document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => {
      //console.log("data");
      let author = data.results;
      console.log(author);
    });
}
