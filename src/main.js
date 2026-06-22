import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader,
                                showLoadMoreButton,hideLoadMoreButton } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elemGallary = document.querySelector('ul.gallery');
// const elemImg1 = document.querySelector('ul.gallery>li.gallery-item');
// console.log(elemImg1);


let searchTextOld;
let searchText; 
let page;
let totalPages;
const PER_PAGES = 15;
let sizeElemImg;
let elemImg;
let rect, sum;


// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', async (e) => { 
        e.preventDefault(); 
        hideLoadMoreButton();
        clearGallery(elemGallary);
        showLoader();
       
        const formData = new FormData(e.target);
        searchText = formData.get('search-text').trim();
        page = 1;

        if (searchText.length === 0) {
            iziToast.show({
            title: 'Error',
            message: `Empty search field`,
            backgroundColor: '#c4501b',
            position:'topRight',
            radius: 35,
            maxWidth:500});                        
        }
        await showGallary(searchText);

        e.target.reset();
    });


    const btnShowmore = document.querySelector('.btn-showmore-js')
    
    btnShowmore.addEventListener('click',async (e)=>{
        e.preventDefault();
        hideLoadMoreButton();
        showLoader();

        await showGallary(searchText); 

       // After new images are added, recalc rect
        elemImg = document.querySelector('ul.gallery > li.gallery-item:nth-last-child(2)');
        
         if (elemImg) {
            let rect = elemImg.getBoundingClientRect();
            sum = rect.height * 2;
            
            // console.log(sum);
            window.scrollBy({
            top: sum,
            left: 0,
            behavior: "smooth"
            });
         }
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
            updateStusBtn();   
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
    

function updateStusBtn() { 
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


function updateObserverStatus() { 
    if (condition) {
        
    }

}
