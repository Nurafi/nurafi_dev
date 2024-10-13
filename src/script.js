const modal = document.getElementById("myModal");

const modalImg = document.getElementById("modal_img");
const captionText = document.getElementById("modal_caption");

const images = document.querySelectorAll(".clickable_img");

images.forEach((img) => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      }
});

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}