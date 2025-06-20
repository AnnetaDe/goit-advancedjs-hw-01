export * from "./1-gallery.js";
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview:
      "gallery/1.png",
    original:
      "gallery/1@2x.png",
    description: "description 1"
  },
  {
    preview:
      "gallery/1-1.png",
    original:
      "gallery/1@2x-1.png",
    description: "description 2"
  },
  {
    preview:
      "gallery/2-1.png",
    original:
      "gallery/2@2x-1.png",
    description: "description 3"
  },
  {
    preview:
      "gallery/2.png",
    original:
      "gallery/2@2x.png",
    description: "description 4"
  },
  {
    preview:
      "gallery/3-1.png",
    original:
      "gallery/3@2x-1.png",
    description: "description 5"
  },
  {
    preview:
      "gallery/3.png",
    original:
      "gallery/3@2x.png",
    description: "description 6"
  },
 
];

const container =document.createElement("div")
const gallery = document.querySelector(".gallery");
if (!gallery) {
  const galleryContainer = document.createElement("ul");
  galleryContainer.classList.add("gallery");
  document.body.appendChild(galleryContainer);
}


const createGalleryItem = images.map(item => {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${item.original}">
      <img class="gallery-image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>`;
});

gallery.insertAdjacentHTML("beforeend", createGalleryItem.join(""));


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});


