import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elemGallary = document.querySelector('ul.gallery');


// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', async (e) => { 
        e.preventDefault(); 
        clearGallery(elemGallary);
        showLoader();
        // setTimeout(() => {
        const formData = new FormData(form);
        const searchText = formData.get('search-text').trim();
        if (searchText.length === 0) {
        //    hideLoader(); 
           iziToast.show({
                    title: 'Error',
                    message: `Empty search field`,
                    backgroundColor: '#c4501b',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500});          
            // return;        
        }
        try{
        const mdata = await getImagesByQuery(searchText);
        // console.log(mdata.hits);
        const marray = mdata.hits;
        if (marray.length !== 0 ) {
            // console.log(marray.length);
             createGallery(marray,elemGallary);               
         } else {                               
            iziToast.show({
            title: 'Error',
            message: `Sorry, there are no images matching your search query. Please try again!`,
            backgroundColor: '#EF4040',
            position:'topRight',
            radius: 35,
            maxWidth:500}); 
        } 
        }catch{

        }finally{
          hideLoader();  
        }  

        // getImagesByQuery(searchText)
        //     .then(data => {
        //         const marray = data.hits;
        //         if (marray.length !== 0 ) {
        //             // console.log(marray.length);
        //             createGallery(marray,elemGallary);               
        //         } else {                               
        //             iziToast.show({
        //             title: 'Error',
        //             message: `Sorry, there are no images matching your search query. Please try again!`,
        //             backgroundColor: '#EF4040',
        //             position:'topRight',
        //             radius: 35,
        //             maxWidth:500}); 
        //         }     
        //     })
        //     .catch(err => iziToast.error({
        //             title: 'Error',
        //             message: `${err}`,
        //             backgroundColor: '#efdb40',
        //             position:'topRight',
        //             radius: 35,
        //             maxWidth:500})).finally(() => hideLoader());
    });

