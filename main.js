


let euroAsia = document.querySelector('.EuroAsia');
let america = document.querySelector('.America');
let greenland = document.querySelector('.Greenland');
let africa = document.querySelector('.Africa');
let australia = document.querySelector('.Australia');
let continentInfo = document.querySelector('.travel-map__list');

euroAsia.addEventListener('click', function() {
    if (euroAsia.classList.contains('continent--disable')) {
        euroAsia.classList.remove('continent--disable')
        euroAsia.classList.add('continent--active')
        continentInfo.classList.remove('travel-map__list--disable')
        continentInfo.classList.add('travel-map__list--active')
    } else {
        euroAsia.classList.add('continent--disable')
        euroAsia.classList.remove('continent--active')
        continentInfo.classList.add('travel-map__list--disable')
        continentInfo.classList.remove('travel-map__list--active')
    }
}) 

america.addEventListener('click', function() {
    if (america.classList.contains('continent--disable')) {
        america.classList.remove('continent--disable')
        america.classList.add('continent--active')
        continentInfo.classList.remove('travel-map__list--disable')
        continentInfo.classList.add('travel-map__list--active')
    } else {
        america.classList.add('continent--disable')
        america.classList.remove('continent--active')
        continentInfo.classList.add('travel-map__list--disable')
        continentInfo.classList.remove('travel-map__list--active')
    }
}) 

greenland.addEventListener('click', function() {
    if (greenland.classList.contains('continent--disable')) {
        greenland.classList.remove('continent--disable')
        greenland.classList.add('continent--active')
        continentInfo.classList.remove('travel-map__list--disable')
        continentInfo.classList.add('travel-map__list--active')
    } else {
        greenland.classList.add('continent--disable')
        greenland.classList.remove('continent--active')
        continentInfo.classList.add('travel-map__list--disable')
        continentInfo.classList.remove('travel-map__list--active')
    }
}) 

africa.addEventListener('click', function() {
    if (africa.classList.contains('continent--disable')) {
        africa.classList.remove('continent--disable')
        africa.classList.add('continent--active')
        continentInfo.classList.remove('travel-map__list--disable')
        continentInfo.classList.add('travel-map__list--active')
    } else {
        africa.classList.add('continent--disable')
        africa.classList.remove('continent--active')
        continentInfo.classList.add('travel-map__list--disable')
        continentInfo.classList.remove('travel-map__list--active')
    }
}) 

australia.addEventListener('click', function() {
    if (australia.classList.contains('continent--disable')) {
        australia.classList.remove('continent--disable')
        australia.classList.add('continent--active')
        continentInfo.classList.remove('travel-map__list--disable')
        continentInfo.classList.add('travel-map__list--active')
    } else {
        australia.classList.add('continent--disable')
        australia.classList.remove('continent--active')
        continentInfo.classList.add('travel-map__list--disable')
        continentInfo.classList.remove('travel-map__list--active')
    }
}) 


baron('#style-1')