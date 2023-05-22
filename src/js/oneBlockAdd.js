const AddOneBlock = () => {
	const arrayLength = Places.length - 1
	const arrayToProcess = Places[arrayLength]

	if (arrayToProcess[0] == '' || arrayToProcess[1] == '' || arrayToProcess[2] == '') {
		completeTheData()
	} else {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${arrayToProcess[1]}&lon=${arrayToProcess[2]}&appid=3e7b287f8027f09bfa1bbf1152eb8152&units=metric&lang=pl`
		)
			.then(res => res.json())
			.then(res => {

				
				//Wybieramy ikonę
				let weathericon

				if (res.weather[0].id === 800) {
					weathericon = 'sun.svg'
				} else if (res.weather[0].id > 599 && res.weather[0].id < 623) {
					weathericon = 'cloud-snow.svg'
				} else if (res.weather[0].id > 499 && res.weather[0].id < 532) {
					weathericon = 'cloud-rain.svg'
				} else if (res.weather[0].id > 299 && res.weather[0].id < 322) {
					weathericon = 'cloud-rain.svg'
				} else if (res.weather[0].id > 199 && res.weather[0].id < 233) {
					weathericon = 'cloud-storm.svg'
				} else if (res.weather[0].id > 700 && res.weather[0].id < 782) {
					weathericon = 'mist.svg'
				} else if (res.weather[0].id > 800 && res.weather[0].id < 805) {
					weathericon = 'cloud.svg'
				}
				//Wklejamy dane o pogodzie
				const block = document.createElement('div')
				block.classList.add('smallitem')
				block.classList.add('item')
				block.setAttribute('id', `${arrayToProcess[3]}`)
				block.innerHTML = `<div class="smallitem__left">
                <div class="smallitem__left-icon"><img src="/dist/img/${weathericon}" alt="" id="ic"></div>
                <div class="smallitem__left-temp">
                    <p>${Math.round(res.main.temp)}°C</p>
                </div>
            </div>

            <div class="smallitem__right">
                <div class="smallitem__right-title">
                    <p>${arrayToProcess[0]}</p>
                </div>
                <div class="smallitem__right-description">
                    <p>${res.weather[0].description}</p>
                </div>
                <div class="smallitem__wind">
                    <p>Wiatr: ${Math.round(res.wind.speed * 3.6)} km/h</p>
                </div>
                <div class="smallitem__windy">
                    <p>Porywy wiatru: ${Math.round(res.wind.gust * 3.6)}</p>
                </div>
            </div>
			<div class="item smallitem__layer">
                <button id=${arrayToProcess[3]} class="showDetails">Detale</button>
                <button id=${arrayToProcess[3]} class="deleteBlock">
				Usuń</button>
            </div>
			`
				wrapper.appendChild(block)

				showButtons()
			})
	}
}
