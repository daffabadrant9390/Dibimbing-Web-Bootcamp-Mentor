// Galeri, zoom, wishlist, dan accordion untuk halaman dengan data hardcode (product-1.html, product-3.html).
// Halaman API (index.html) memakai script.js. Gambar dan thumbnail sudah ditulis di HTML.
const $ = (selector) => document.querySelector(selector);
const thumbnails = [...document.querySelectorAll(".thumbnail")];
const productImages = thumbnails.map((thumbnail) => thumbnail.dataset.src);
const heroImage = $("#hero-image");
const zoomDialog = $("#image-zoom");
const zoomImage = $("#zoom-image");
const zoomThumbnailList = $("#zoom-thumbnails");
let activeImageIndex = 0;

function setImage(index) {
  activeImageIndex = index;
  document.querySelectorAll(".thumbnail, .zoom-thumbnail").forEach((item) => {
    const isActive = Number(item.dataset.index) === index;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  heroImage.src = productImages[index];
  zoomImage.src = productImages[index];
  zoomImage.alt = heroImage.alt;
  const position = String(index + 1).padStart(2, "0") + " / " + String(productImages.length).padStart(2, "0");
  $("#image-index").textContent = position;
  $("#zoom-position").textContent = position;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.dataset.index = index;
  thumbnail.addEventListener("click", () => setImage(index));
  const zoomThumbnail = document.createElement("button");
  zoomThumbnail.className = "zoom-thumbnail";
  zoomThumbnail.type = "button";
  zoomThumbnail.dataset.index = index;
  zoomThumbnail.setAttribute("aria-label", "Tampilkan gambar " + (index + 1));
  const imageElement = document.createElement("img");
  imageElement.src = productImages[index];
  imageElement.alt = "";
  zoomThumbnail.append(imageElement);
  zoomThumbnail.addEventListener("click", () => setImage(index));
  zoomThumbnailList.append(zoomThumbnail);
});

$("#zoom-trigger").addEventListener("click", () => {
  setImage(activeImageIndex);
  zoomDialog.showModal();
});
$("#zoom-close").addEventListener("click", () => zoomDialog.close());
$("#zoom-previous").addEventListener("click", () => setImage((activeImageIndex + productImages.length - 1) % productImages.length));
$("#zoom-next").addEventListener("click", () => setImage((activeImageIndex + 1) % productImages.length));
zoomDialog.addEventListener("click", (event) => { if (event.target === zoomDialog) zoomDialog.close(); });
zoomDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") setImage((activeImageIndex + productImages.length - 1) % productImages.length);
  if (event.key === "ArrowRight") setImage((activeImageIndex + 1) % productImages.length);
});
$("#wishlist-button").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isSaved = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(isSaved));
  $("#wishlist-label").textContent = isSaved ? "Ditambahkan ke wishlist" : "Tambah ke wishlist";
  button.querySelector(".wishlist-icon").textContent = isSaved ? "♥" : "♡";
});
document.querySelectorAll(".product-details details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".product-details details").forEach((otherDetail) => {
      if (otherDetail !== detail) otherDetail.open = false;
    });
  });
});
setImage(0);
