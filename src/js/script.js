const wrapper = document.querySelector('.wrapper')
const openAddPointsPanel = document.querySelector('.openAddPoinstsPanel')
const addPointButton = document.querySelector('.addPointButton')
const addPointCityName = document.querySelector('.addPointCityName')
const addPointLatitude = document.querySelector('.addPointLatitude')
const addPointlongitude = document.querySelector('.addPointlongitude')
const mainBlock = document.querySelector('.addPointlongitude')
const mainAddPlace = document.querySelector('.mainitem__adplace')
const mainItem = document.querySelector('.mainitem')
const timeinfo = document.querySelector('.timeinfo')

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
let weatherData = []
let now
let hour
let day
let minutes

const clearContainer = () => {
	let childNumber = wrapper.childElementCount
	console.log(childNumber)

	while (childNumber > 2) {
		wrapper.removeChild(wrapper.lastChild)
		childNumber--
	}
}

const firstTime = () => {
	now = new Date()
	now.setHours(now.getHours() + 1.5)
	hour = now.getHours().toString().padStart(2, '0')
	minutes = now.getMinutes().toString().padStart(2, '0')
	day = now.getDay()
	timeinfo.textContent = `Prognoza 1h - ${days[day]}, godz.: ${hour}:${minutes}`
}

addPointButton.addEventListener('click', addPlace)
weatherDataDownload()
firstTime()
