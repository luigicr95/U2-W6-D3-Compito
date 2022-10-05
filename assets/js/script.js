function addImage() {
  let newImage = document.createElement("div");

  document.querySelector(".container").innerHTML = "";
  newImage.classList.add("row");

  let actualImage = document.createElement("img");
  actualImage.src =
    "https://i.kym-cdn.com/photos/images/newsfeed/002/413/242/66f.gif";
  actualImage.classList.add("col");
  //actualImage.classList.add("col-md-6");
  newImage.appendChild(actualImage);

  document.querySelector(".container").appendChild(newImage);
}

function addBackground() {
  document.querySelector("body").classList.add("background-body-image");
}
