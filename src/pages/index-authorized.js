const editCityButton = document.querySelector('.profile__city-edit')
const popupSelectCity = document.querySelector('.popup_content_cities')


editCityButton.addEventListener('click', () => {
    openPopup(popupSelectCity)
})