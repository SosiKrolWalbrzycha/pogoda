const sunbutton = document.querySelector('.sun')

const weatherDataDownload = () => {

Places.forEach(element => {
    const weatherCity = [element[0], element[3]]
fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${element[1]}&lon=${element[2]}&appid=3e7b287f8027f09bfa1bbf1152eb8152&units=metric&lang=pl`
	)
		.then(res => res.json())
		.then(res => weatherCity.push(res))
        weatherData.push(weatherCity)
        
});

}
const weatherDataDownloadForOne = () => {
    const itemNumber = Places.length - 1;
    const weatherCity = [Places[itemNumber][0], Places[itemNumber][3]]
fetch(
		`https://api.openweathermap.org/data/2.5/forecast?lat=${Places[itemNumber][1]}&lon=${Places[itemNumber][2]}&appid=3e7b287f8027f09bfa1bbf1152eb8152&units=metric&lang=pl`
	)
		.then(res => res.json())
		.then(res => weatherCity.push(res))
        weatherData.push(weatherCity)
        
;

}

