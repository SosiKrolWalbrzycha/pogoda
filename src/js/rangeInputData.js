const range = document.querySelector('.nav__range')

const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']


const setTime = () => {
	if (range.value == 1) {
		timePeriod = 0
		timeinfo.textContent = 'Prognoza 1,5h'
	} // Za ok 1,5 h
	else if (range.value == 2) {
		timePeriod = 1
        now = new Date();
		now.setHours(now.getHours() + 5);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 5h - ${days[day]}, godz.: ${hour}:${minutes}`
	} // za 5 h
	else if (range.value == 3) {
		timePeriod = 2
        now = new Date();
		now.setHours(now.getHours() + 8);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 8h - ${days[day]}, godz.: ${hour}:${minutes}`
	} //  za 8 h
	else if (range.value == 4) {
		timePeriod = 5
        now = new Date();
		now.setHours(now.getHours() + 16);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 16h - ${days[day]}, godz.: ${hour}:${minutes}`
	} // 16 h
	else if (range.value == 5) {
		timePeriod = 7
        now = new Date();
		now.setHours(now.getHours() + 24);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 24h - ${days[day]}, godz.: ${hour}:${minutes}`
	} // 24 h
	else if (range.value == 6) {
		timePeriod = 15
        now = new Date();
		now.setHours(now.getHours() + 48);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 48h - 2 dni - ${days[day]}, godz.: ${hour}:${minutes}`
	} // 2 dni
	else if (range.value == 7) {
		timePeriod = 23
        now = new Date();
		now.setHours(now.getHours() + 72);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 72h - 3 dni - ${days[day]}, godz.: ${hour}:${minutes}`
	} // 3 dni
	else if (range.value == 8) {
		timePeriod = 31
        now = new Date();
		now.setHours(now.getHours() + 96);
		hour = now.getHours().toString().padStart(2, '0');
        minutes = now.getMinutes().toString().padStart(2, '0');
		day = now.getDay();
		timeinfo.textContent = `Prognoza 96h - 4 dni - ${days[day]}, godz.: ${hour}:${minutes}`
	} // 4 dni
	showWeather()
}

range.addEventListener('input', setTime)
