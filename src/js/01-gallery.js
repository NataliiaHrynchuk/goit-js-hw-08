// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const imageContainer = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
`<a class="gallery__item" href = ${original}><img class="gallery__image" src = ${preview} alt
 = ${description}/></a>`).join("");

imageContainer.insertAdjacentHTML("afterbegin", markup);
// imageContainer.addEventListener('click', changeCrsImages);

     
let gallery = new SimpleLightbox('.gallery a', {
    overlayOpasity: 0.8,
    fadeSpeed: 250,
    captionsData: 'alt',
    
});
  
gallery.on('show.SimpleLightbox', function (e) {
    sourceAttr: 'href';
});
