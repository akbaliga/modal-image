const img = document.getElementById("myImg");
const closeIcon = document.getElementById("close");
const modal = document.querySelector(".modal-container");

img.addEventListener("click", openModal);
closeIcon.addEventListener("click", closeModal);

function openModal() {
  const img = document.querySelector("#modal-img");
  const imgUrl = "./img_snow.jpg";
  img.setAttribute("src", imgUrl);
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
