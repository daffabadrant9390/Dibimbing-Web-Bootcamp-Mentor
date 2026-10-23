const API_BASE_URL = "http://localhost:3000";
const requestedId = new URLSearchParams(window.location.search).get("id") || "1";
const money = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
const $ = (selector) => document.querySelector(selector);

// TODO(Day 16): stepper lama dipakai lagi setelah belajar if/else
// const quantityOutput = $("#quantity");
const bagCount = $("#bag-count");
const bagButton = $(".bag-button");
const toast = $("#toast");
const heroImage = $("#hero-image");
const thumbnailList = $("#thumbnail-list");
const zoomThumbnailList = $("#zoom-thumbnails");
// const quantityMinus = $("#quantity-minus");
// const quantityPlus = $("#quantity-plus");
// const addToBag = $("#add-to-bag");
const zoomTrigger = $("#zoom-trigger");
const zoomDialog = $("#image-zoom");
const zoomImage = $("#zoom-image");
const status = $("#api-status");
let quantity = 1;
let maxQuantity = 0;
let bagItems = 0;
let activeImageIndex = 0;
let productImages = [];
let currentProduct;
let toastTimer;

// TODO(Day 16): batas stok di stepper lama
// function updateQuantity(nextQuantity) {
//   if (maxQuantity < 1) return;
//   quantity = Math.min(maxQuantity, Math.max(1, nextQuantity));
//   quantityOutput.textContent = quantity;
//   quantityMinus.disabled = quantity === 1;
//   quantityPlus.disabled = quantity === maxQuantity;
// }

function setImage(index) {
  if (!productImages.length) return;
  activeImageIndex = index;
  const image = productImages[index];
  document.querySelectorAll(".thumbnail").forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === index);
    item.setAttribute("aria-pressed", String(itemIndex === index));
  });
  document.querySelectorAll(".zoom-thumbnail").forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === index);
    item.setAttribute("aria-pressed", String(itemIndex === index));
  });
  heroImage.src = image;
  heroImage.alt = "Foto " + currentProduct.name;
  zoomImage.src = image;
  zoomImage.alt = heroImage.alt;
  const position = String(index + 1).padStart(2, "0") + " / " + String(productImages.length).padStart(2, "0");
  $("#image-index").textContent = position;
  $("#zoom-position").textContent = position;
}

function createThumbnail(image, index, product, zoom) {
  const button = document.createElement("button");
  button.className = zoom ? "zoom-thumbnail" : "thumbnail";
  button.type = "button";
  button.setAttribute("aria-label", "Tampilkan gambar " + (index + 1));
  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = zoom ? "" : "Foto " + product.name;
  button.append(imageElement);
  button.addEventListener("click", () => setImage(index));
  return button;
}

function renderGallery(product) {
  // API saat ini memiliki satu foto; bila kelak ada galeri, field images juga didukung.
  productImages = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
  thumbnailList.replaceChildren();
  zoomThumbnailList.replaceChildren();
  productImages.forEach((image, index) => {
    thumbnailList.append(createThumbnail(image, index, product, false));
    zoomThumbnailList.append(createThumbnail(image, index, product, true));
  });
  zoomTrigger.disabled = false;
  setImage(0);
}

function showError(message) {
  status.textContent = message;
  status.classList.add("is-error");
  $("#product-title").textContent = "Produk tidak dapat dimuat";
  $("#product-intro").textContent = "Pastikan API berjalan di localhost:3000, lalu muat ulang halaman.";
}

function renderProduct(product) {
  currentProduct = product;
  document.title = product.name + " | Escentric Molecules";
  $('meta[name="description"]').content = product.description.slice(0, 155);
  $("#breadcrumb-product").textContent = product.name;
  $("#product-title").textContent = product.name;
  $("#productPrice").firstChild.textContent = money.format(product.price) + " ";
  $("#product-intro").textContent = product.description;
  $("#product-description").textContent = product.description;
  $("#product-variants").textContent = product.variants.colorOrSize.join(" · ");
  const accords = $("#accords");
  accords.replaceChildren(...product.variants.colorOrSize.map((variant) => {
    const tag = document.createElement("span");
    tag.textContent = variant;
    return tag;
  }));

  maxQuantity = product.variants.quantity;
  $("#stock-summary").textContent = maxQuantity ? maxQuantity + " tersedia" : "Stok habis";
  // TODO(Day 16): kalau stok habis, matikan form (butuh if/else)

  // Day 15 · Langkah 5: harga + varian dari API untuk product-interaction.js
  const priceElement = $("#productPrice");
  const variantInput = $("#variant");
  const submitButton = $("#productForm button[type='submit']");
  priceElement.dataset.price = product.price;
  const values = product.variants.colorOrSize;
  variantInput.innerHTML =
    '<option value="">Pilih varian</option>';
  values.forEach((value) => {
    variantInput.add(new Option(value, value));
  });
  submitButton.disabled = false; // API ready
  renderGallery(product);
  status.textContent = "";
  status.classList.remove("is-error");
}

async function loadProduct() {
  if (!/^\d+$/.test(requestedId) || Number(requestedId) < 1) {
    showError("ID produk tidak valid.");
    return;
  }
  try {
    const response = await fetch(API_BASE_URL + "/api/products/" + encodeURIComponent(requestedId), {
      headers: { Accept: "application/json" },
    });
    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("json") ? await response.json() : null;
    if (!response.ok || !payload || !payload.data) {
      if (response.status === 404) throw new Error("Produk tidak ditemukan.");
      throw new Error("Detail produk belum dapat dimuat.");
    }
    renderProduct(payload.data);
  } catch (error) {
    showError(error.message === "Produk tidak ditemukan." ? error.message : "Tidak dapat menghubungi API produk. Coba lagi setelah server siap.");
  }
}

// TODO(Day 16): stepper lama
// quantityMinus.addEventListener("click", () => updateQuantity(quantity - 1));
// quantityPlus.addEventListener("click", () => updateQuantity(quantity + 1));
zoomTrigger.addEventListener("click", () => {
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
// TODO(Day 16): add to bag
// addToBag.addEventListener("click", () => {
//   bagItems += quantity;
//   bagCount.textContent = bagItems;
//   bagButton.setAttribute("aria-label", "Tas belanja, " + bagItems + " item");
//   toast.textContent = quantity + " " + currentProduct.name + " ditambahkan ke tas";
//   toast.classList.add("is-visible");
//   window.clearTimeout(toastTimer);
//   toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
// });

loadProduct();
