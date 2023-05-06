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

  
function openOriginalImage(event) {
  if (event.target.nodeName !== "IMG") return;
  event.preventDefault();

  const fullImageUrl = event.target.dataset.source;


  const methods = {
		onShow: instance => {
			window.addEventListener("keydown", closeOriginalImage);
		},
		onClose: instance => {
			window.removeEventListener("keydown", closeOriginalImage);
		},
	};
  
  const instance = basicLightbox.create(`<img src="${fullImageUrl}" width="800" height="600">`, methods);

  instance.show();
 
 function closeOriginalImage({ code }) {
		if (code === "Escape") {
			instance.close();
		}
	}
  };
  


