const addPlaceError = document.querySelector('.mainitem__adplace-error')

let Places

if (localStorage.getItem('Places') !== null) {
	Places = JSON.parse(localStorage.getItem('Places'))
} else {
	Places = [
		['Podzamcze', 50.8224847, 16.2788, 0],
		['Rzeczka', 50.6771675, 16.4454494, 1],
		['Bielice', 50.2643467, 16.9975303, 2],
		['Cervenohorskie Sedlo', 50.1245331, 17.1537733, 3],
		['Wrocław', 51.1089775, 17.0326689, 4],
	]
}

const addPlace = () => {
	if (
		addPointCityName.value === '' ||
		addPointLatitude.value == '' ||
		addPointlongitude.value == '' ||
		parseFloat(addPointLatitude.value) > 90 ||
		parseFloat(addPointLatitude.value) < 0 ||
		parseFloat(addPointlongitude.value) > 180 ||
		parseFloat(addPointlongitude.value) < 0
	) {
		addPlaceError.textContent =
			'Popraw nazwę lub położenie geograficzne punktu bo coś jest nie tak. Pamiętaj maksymalna szerokość geograficzna to 90 a długość 180.'
		addPlaceError.style.display = 'block'
	} else {
		let addPlaceArray = []
		addPlaceArray[0] = addPointCityName.value
		addPlaceArray[1] = parseFloat(addPointLatitude.value)
		addPlaceArray[2] = parseFloat(addPointlongitude.value)
		addPlaceArray[3] = Places.length

		Places.push(addPlaceArray)
		addPointCityName.value = ''
		addPointLatitude.value = ''
		addPointlongitude.value = ''

		weatherDataDownloadForOne()
		AddOneBlock()

		addPlaceError.textContent = ''
		addPlaceError.style.display = 'none'
		placesRemember()
	}
}

placesRemember()
