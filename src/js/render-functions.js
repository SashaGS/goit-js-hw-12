
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let  gallery = new SimpleLightbox('.gallery a',{
        captions: true,              // вмикає підписи
        captionsData: 'alt',         // джерело підпису — атрибут alt
        captionPosition: 'bottom',   // позиція підпису знизу
        captionDelay: 250            // затримка у мілісекундах
   });  

const loader = document.querySelector('.loader');
const btnShowMore = document.querySelector('.btn-showmore-js');

export function createGallery(images,elemGalary) { 
    const markup = imagesTamplate(images); 
    // elemGalary.innerHTML = markup;
    // elemGalary.insertAdjacentHTML('afterend',markup);
    elemGalary.insertAdjacentHTML('beforebegin',markup);
    gallery.refresh();
}


function imageTamplate(image) { 

    return `<li class="gallery-item"> 
        <a class="gallery-link" href="${image.largeImageURL}">    
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />          
          <ul class="caption">
              <li class="cap-item">
                  <label>Likes</label>
                  <p>${image.likes}</p>
              </li>
              <li class="cap-item">
                  <label>Views</label>
                  <p>${image.views}</p>
              </li>
              <li class="cap-item">
                  <label>Comments</label>
                  <p>${image.comments}</p>
              </li>
              <li class="cap-item">
                  <label>Downloads</label>
                  <p>${image.downloads}</p>
              </li>
          </ul>        
        </a>        
    </li>`;
};    


function imagesTamplate(images) { 
    return images.map(imageTamplate).join('');
};


export function clearGallery(elemGalary){
    elemGalary.innerHTML = '';
};


export function showLoader() {  
    if (loader) {
       loader.classList.remove('hidden'); 
    }
}


export function hideLoader() {
    if (loader) { 
        loader.classList.add('hidden');
    }
}

export function showLoadMoreButton(){
    if(btnShowMore){
        btnShowMore.classList.remove('hidden-shmore');
    }
}

export function hideLoadMoreButton(){
    if(btnShowMore){
        btnShowMore.classList.add('hidden-shmore');
    }
}
