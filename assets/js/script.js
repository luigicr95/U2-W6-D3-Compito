function addImage() {
  let newImage = document.createElement("div");

  document.querySelector(".container").innerHTML = "";
  newImage.classList.add("row");

  let actualImage = document.createElement("img");
  actualImage.src =
    "https://www.asiaticafilmmediale.it/wp-content/uploads/2022/07/La-scena-Soldier-BoyHomelander-del-finale-della-terza-stagione-di.jpg";
  actualImage.classList.add("col");
  //actualImage.classList.add("col-md-6");
  newImage.appendChild(actualImage);

  document.querySelector(".container").appendChild(newImage);
}

function addBackground() {
  document.querySelector("body").classList.add("background-body-image");
}
