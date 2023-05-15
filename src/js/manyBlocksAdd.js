const showWeather = () => {
	console.log('buger dziala')

	clearContainer()

	let placeNumber = 0

	weatherData.forEach(el => {
		let weathericon

		if (el[2].list[timePeriod].weather[0].id === 800) {
			weathericon = 'sun.svg'
		} else if (el[2].list[timePeriod].weather[0].id > 599 && el[2].list[timePeriod].weather[0].id < 623) {
			weathericon = 'cloud-snow.svg'
		} else if (el[2].list[timePeriod].weather[0].id > 499 && el[2].list[timePeriod].weather[0].id < 532) {
			weathericon = 'cloud-rain.svg'
		} else if (el[2].list[timePeriod].weather[0].id > 299 && el[2].list[timePeriod].weather[0].id < 322) {
			weathericon = 'cloud-rain.svg'
		} else if (el[2].list[timePeriod].weather[0].id > 199 && el[2].list[timePeriod].weather[0].id < 233) {
			weathericon = 'cloud-storm.svg'
		} else if (el[2].list[timePeriod].weather[0].id > 700 && el[2].list[timePeriod].weather[0].id < 782) {
			weathericon = 'mist.svg'
		} else if (el[2].list[timePeriod].weather[0].id > 800 && el[2].list[timePeriod].weather[0].id < 805) {
			weathericon = 'cloud.svg'
		}
		//Wklejamy dane o pogodzie
		const block = document.createElement('div')
		block.classList.add('smallitem')
		block.classList.add('item')
		block.setAttribute('id', `${el[1]}`)
		block.innerHTML = `<div class="smallitem__left">
                <div class="smallitem__left-icon"><img src="/dist/img/${weathericon}" alt="weather icon" id="ic"></div>
                <div class="smallitem__left-temp">
                    <p>${Math.round(el[2].list[timePeriod].main.temp)}°C</p>
                </div>
            </div>

            <div class="smallitem__right">
                <div class="smallitem__right-title">
                    <p>${el[0]}</p>
                </div>
                <div class="smallitem__right-description">
                    <p>${el[2].list[timePeriod].weather[0].description}</p>
                </div>
                <div class="smallitem__wind">
                    <p>Wiatr: ${Math.round(el[2].list[timePeriod].wind.speed * 3.6)} km/h</p>
                </div>
                <div class="smallitem__windy">
                    <p>Porywy wiatru: ${Math.round(el[2].list[timePeriod].wind.gust * 3.6)} km/h</p>
                </div>
            </div>
			<div class="item smallitem__layer">
                <button id=${el[1]} class="showDetails">Detale</button>
                <button id=${el[1]} class="deleteBlock">
				Usuń</button>
            </div>
			
			`
		wrapper.appendChild(block)
		placeNumber++

		showButtons()
	})
}
