let map = ['Euroasia', 'America', 'Greenland', 'Africa', 'Australia'],
    continentInfo = document.querySelector('.travel-map__list'),
    travelMapArrow = document.getElementById('travelArrow');


function viewTravels(e) {
    console.log(e.layerY)
    let clientX = e.layerX,
        clientY = e.layerY,
        travelMap = document.getElementById('travel-map');


    if (clientX > 300) {
        travelMap.style.left = clientX - 350 + 'px'
        travelMapArrow.style.left = clientX - 128 + 'px'
        travelMapArrow.style.transform = 'rotate(317deg)'
    } else {
        travelMap.style.left = clientX + 90 + 'px'
        travelMapArrow.style.left = clientX - 25 + 'px'
        travelMapArrow.style.transform = 'rotate(230deg)'
    }

    if (clientY > 240) {
        travelMap.style.top = 240 + 'px'
        travelMapArrow.style.left = clientX - 148 + 'px'
        travelMapArrow.style.transform = 'rotate(343deg)'
        travelMapArrow.style.top = clientY + 10 + 'px'
    } else if (clientY > 100){
        travelMap.style.top = clientY + 'px'
        travelMapArrow.style.top = clientY + 44  + 'px'
    } else {
        console.log('2 else')
        travelMap.style.top = clientY + 'px'
        travelMapArrow.style.top = clientY + 45 + 'px'
    }
}

map.forEach((cont) => {
    let currentContinent = document.getElementById(cont);

    currentContinent.addEventListener('click', (e)=>{
        document.getElementById('travel-map__description').innerText = cont
        map.forEach((checkCont) => {
            if (document.getElementById(checkCont).classList.contains('continent--active')) {
                document.getElementById(checkCont).classList.remove('continent--active')
                document.getElementById(checkCont).classList.add('continent--disable')
            }
        })

        if (currentContinent.classList.contains('continent--disable')) {
            currentContinent.classList.add('continent--active')
            continentInfo.classList.add('travel-map__list--active')
            travelMapArrow.classList.add('travel-map__list--active')
    
            currentContinent.classList.remove('continent--disable')
            continentInfo.classList.remove('travel-map__list--disable')
            travelMapArrow.classList.remove('travel-map__list--disable')
            viewTravels(e)
        } else {
            currentContinent.classList.add('continent--disable')
            continentInfo.classList.add('travel-map__list--disable')
            travelMapArrow.classList.add('travel-map__list--disable')
    
            currentContinent.classList.remove('continent--active')
            continentInfo.classList.remove('travel-map__list--active')
            travelMapArrow.classList.remove('travel-map__list--active')
        }
    })
})



/* baron('#style-1') */