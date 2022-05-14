// Add imports above this line
import imageCardsTpl from '../templates/image-cards.hbs'
import galleryItems from './gallery-items.json';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
console.log(imageCardsTpl(galleryItems));

const imageContainer = document.querySelector('.gallery');

const galleryMarkup = createImageCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML("afterbegin", galleryMarkup);
function createImageCardsMarkup(galleryItems) {
    return imageCardsTpl(galleryItems);
}
// imageContainer.addEventListener('click', changeCrsImages);

     
let gallery = new SimpleLightbox('.gallery a', {
    overlayOpasity: 0.8,
    fadeSpeed: 250,
    captionsData: 'alt',
    
});
  
gallery.on('show.SimpleLightbox', function (e) {
    sourceAttr: 'href';
});
