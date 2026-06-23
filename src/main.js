import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader,
                                 showLoadMoreButton,hideLoadMoreButton } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elemGallary = document.querySelector('ul.gallery');


// let searchTextOld;
let searchText;
let page ;
let totalPages;
const PER_PAGES = 15;


// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', async (e) => { 
        e.preventDefault(); 
        hideLoadMoreButton();
        clearGallery(elemGallary);
        // showLoader();
       
        const formData = new FormData(e.target);
        searchText = formData.get('search-text').trim();
        page = 1;
        totalPages = 0;

        if (searchText.length === 0) {
            iziToast.show({
            title: 'Error',
            message: `Empty search field`,
            backgroundColor: '#c4501b',
            position:'topRight',
            radius: 35,
            maxWidth:500});    
            return;                    
        }
        showLoader();
        await showGallary(searchText);
        e.target.reset();
    });


    const btnShowmore = document.querySelector('.btn-showmore-js')
    
btnShowmore.addEventListener('click', async (e) => {
        e.preventDefault();
        hideLoadMoreButton();
        showLoader();

        await showGallary(searchText);
        await scrollToNextGroup();
    });


    async function showGallary(searchText){ 
       
        try
        {
        const mdata = await getImagesByQuery(searchText, page);
        
        const marray = mdata.hits;
        if (marray.length !== 0) {
            const totalResult = mdata.total; 
            totalPages = Math.ceil(totalResult/PER_PAGES);    
            createGallery(marray, elemGallary); 
            updateStatusBtn();   
            page += 1;
             
         } else {                               
            iziToast.show({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            backgroundColor: '#EF4040',
            position:'topRight',
            radius: 35,
            maxWidth:500}); 
        }
    }catch(error){
            iziToast.error({
            title: 'Error',
            message: `${error}`,
            backgroundColor: '#efdb40',
            position:'topRight',
            radius: 35,
            maxWidth:500}); 

        }finally{
          hideLoader();  
        }  
}
    

function updateStatusBtn() { 
    if (page < totalPages) {
        // console.log(totalPages);
        showLoadMoreButton();
    } else { 
        hideLoadMoreButton();
        iziToast.show({
            title: 'message',
            message: `We're sorry, but you've reached the end of search results.`,
            backgroundColor: '#abee8b',
            position:'topRight',
            radius: 35,
            maxWidth:500});
    }    
}


function scrollToNextGroup() {
    const elemImg = document.querySelector('ul.gallery > li.gallery-item');
    if (elemImg) {
        const rect = elemImg.getBoundingClientRect();
        const cardHeight = rect.height;
        // console.log(cardHeight + rect.y*(-1));
        window.scrollBy({ top: (cardHeight * 2), behavior: 'smooth' });
    }
}


// function updateObserverStatus() { 
//     if (condition) {
        
//     }

// }
