const wrapper = document.querySelector('.wrapper')
const menuShow = document.querySelector('.burger')
const openAddPointsPanel = document.querySelector('.openAddPoinstsPanel')
const addPointButton = document.querySelector('.addPointButton')
const addPointCityName = document.querySelector('.addPointCityName')
const addPointLatitude = document.querySelector('.addPointLatitude')
const addPointlongitude = document.querySelector('.addPointlongitude')
const mainBlock = document.querySelector('.addPointlongitude')
const mainAddPlace = document.querySelector('.mainitem__adplace')
const mainItem = document.querySelector('.mainitem')


let showDetailsButtons
let deleteBlockButtons
let smallBlocks
let buttonID
let divToDelete

let qqq = 1
let closeDetailsButton
let mainDetails
let placesLength
let placesToPush
let timePeriod = 0
let weatherData = [];


const clearContainer = () => {
	let childNumber = wrapper.childElementCount
	console.log(childNumber)

	while (childNumber > 2) {
		wrapper.removeChild(wrapper.lastChild)
		childNumber--
	}
}

addPointButton.addEventListener('click', addPlace)
menuShow.addEventListener('click', showWeather)
weatherDataDownload()



