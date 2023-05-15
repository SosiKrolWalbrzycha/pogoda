const closeDetails = () => {
	mainAddPlace.classList.toggle('nonactive')
	isShowDetailsCalled = false
	closeDetailsButton.remove()
	mainDetails.remove()
}

const exitbutton = () => {
	closeDetailsButton = document.querySelector('.mainitem__details-close')
	mainDetails = document.querySelector('.mainitem__details')
}

let isShowDetailsCalled = false

const showDetails = el => {

	//Wybieramy ikonę
	let weatherbigicon

	if (weatherData[el][2].list[timePeriod].weather[0].id === 800) {
		weatherbigicon = 'sun.svg'
	} else if (
		weatherData[el][2].list[timePeriod].weather[0].id > 599 &&
		weatherData[el][2].list[timePeriod].weather[0].id < 623
	) {
		weatherbigicon = 'cloud-snow.svg'
	} else if (
		weatherData[el][2].list[timePeriod].weather[0].id > 499 &&
		weatherData[el][2].list[timePeriod].weather[0].id < 532
	) {
		weatherbigicon = 'cloud-rain.svg'
	} else if (
		weatherData[el][2].list[timePeriod].weather[0].id > 299 &&
		weatherData[el][2].list[timePeriod].weather[0].id < 322
	) {
		weatherbigicon = 'cloud-rain.svg'
	} else if (
		weatherData[el][2].list[timePeriod].weather[0].id > 199 &&
		weatherData[el][2].list[timePeriod].weather[0].id < 233
	) {
		weatherbigicon = 'cloud-storm.svg'
	} else if (
		weatherData[el][2].list[timePeriod].weather[0].id > 700 &&
		weatherData[el][2].list[timePeriod].weather[0].id < 782
	) {
		weatherbigicon = 'mist.svg'
	} else if (
		weatherData[el][2].list[timePeriod].weather[0].id > 800 &&
		weatherData[el][2].list[timePeriod].weather[0].id < 805
	) {
		weatherbigicon = 'cloud.svg'
	}

	//Wklejamy dane o pogodzie

	const bigBlockToAdd = document.createElement('div')

	bigBlockToAdd.classList.add('mainitem__details')

	bigBlockToAdd.innerHTML = `<div class="mainitem__details-topline">
	<div class="icon"><img src="/dist/img/${weatherbigicon}" alt="Weather Icon" id="ic"></div>
	<div class="title">
		<h2>${weatherData[el][0]}</h2>
		<p>${weatherData[el][2].list[timePeriod].weather[0].description}</p>

	</div>
</div>

<div class="mainitem__details-bottomline">

	<div class="mainitem__details-left">
		<img src="/dist/img/temperature.svg" alt="Weather Icon" id="ic">
		<p>Temperatura: ${Math.round(weatherData[el][2].list[timePeriod].main.temp)}°C</p>
		<p>Odczuwalna: ${Math.round(weatherData[el][2].list[timePeriod].main.feels_like)}°C</p>
		<p>Wilgotność: ${weatherData[el][2].list[timePeriod].main.humidity}%</p>
		<p>Ciśnienie: ${weatherData[el][2].list[timePeriod].main.pressure} hpa </p>
	</div>

	<div class="mainitem__details-right">
		<img src="/dist/img/wind.svg" alt="Weather Icon" id="ic">
		<p>Wiatr: ${Math.round(weatherData[el][2].list[timePeriod].wind.speed * 3.6)} km/h</p>
		<p>Porywy: ${Math.round(weatherData[el][2].list[timePeriod].wind.gust * 3.6)} km/h</p>
		<p>Zachmurzenie: ${weatherData[el][2].list[timePeriod].clouds.all}%</p>
		<p>Widoczność ${weatherData[el][2].list[timePeriod].visibility} m </p>
	</div>
</div>

<div class="mainitem__details-semiline">
	<p>Kierunek wiatru: ${weatherData[el][2].list[timePeriod].wind.deg}°</p>
	<img src="/dist/img/arrow-move-up.svg" alt="Weather Icon" id="ic" style="transform: rotate(${
		weatherData[el][2].list[timePeriod].wind.deg}deg)">
</div>
<button class="mainitem__details-close">
        <img src="/dist/img/x.svg" alt="Close Deatails Icon" id="ic">
    </button>`

	mainAddPlace.classList.add('nonactive')
	const details = document.querySelector('.mainitem__details')
	if (details) {details.remove()} 
	mainItem.appendChild(bigBlockToAdd)
	exitbutton()
	closeDetailsButton.addEventListener('click', closeDetails)
}
