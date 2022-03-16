import React from 'react';
import mockup1 from './mockup1.png';

const ItemListContainer = () => {
    return (

        <div class="flex flex-row">           
        <div class="basis-1/4 justify-around bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img class="p-8 rounded-t-lg" src={mockup1} alt="product image"></img>
        </a>
        <div class="px-5 pb-5">
        <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Taza Seinfeld</h5>
        </a>
        <div class="flex justify-between items-center">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">$999</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comprar!</a>
        </div>
        </div>
        </div>
        </div>


    )
}

export default ItemListContainer;