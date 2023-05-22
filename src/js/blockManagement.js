


const deleteBlock = el => {
	smallBlocks.forEach(element => {
		if (element.id === el) {
			element.remove()
		}
		Places.splice(el, 1)
		localStorage.setItem('Places', JSON.stringify(Places))
	})
}


const showButtons = () => {
	// Zdefiniowanie przycisków detali i kasowania:

	showDetailsButtons = document.querySelectorAll('.showDetails')
	deleteBlockButtons = document.querySelectorAll('.deleteBlock')

	//Zdefiniowanie elementów smallitem

	smallBlocks = document.querySelectorAll('.smallitem')

	// Nasłuch i akcja na przyskcach kasowania

	deleteBlockButtons.forEach(button => {
		button.addEventListener('click', event => {
			buttonID = event.target.id
			deleteBlock(buttonID)
		})
	})

	//Nasłuch i akcja na przyciskach detali


		showDetailsButtons.forEach(button => {
			button.addEventListener('click', function () {
				showDetails(this.id);
				this.id.delete
			})
		})
	

	
}
