import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imagesListMarkup = createGalleryItemMarkup(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', imagesListMarkup)

galleryList.addEventListener('click', openOriginalImage);


function createGalleryItemMarkup (galleryItems) {
    const markup = galleryItems.map(({ preview, description, original }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
             />
            </a>
        </li>
        `
    }).join('');
    return markup;
};

document
  .querySelectorAll(".gallery__link")
  .forEach((item) =>
    item.addEventListener("click", (event) => event.preventDefault())
);
  
function openOriginalImage(event) {
  if (event.target.nodeName !== "IMG") return;

  const fullImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${fullImageUrl}" width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", function closeFullImage(event) {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", closeFullImage);
    }
  });
}
// --------------------------------//
