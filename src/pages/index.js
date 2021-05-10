const page = document.querySelector('.page')
const header = page.querySelector('.header')
const navigation = page.querySelector('.nav-list')
const submenuItem = navigation.querySelector('.nav-list__item_submenu')
const submenuList = navigation.querySelector('.nav-list__submenu-list')
const searchElement = page.querySelector('.search')
const searchButton = searchElement.querySelector('.search__btn')
const searchInput = searchElement.querySelector('.search__input')
const headerRightElement = header.querySelector('.header__right-block')
const btnOpenMenu = header.querySelector('.header__btn-menu')
const profile = header.querySelector('.profile-ico')


const classesChekForClosingSubMenu = [
    'nav-list__submenu-item',
    'nav-list__submenu-list',
    'nav-list__link'
]



const openSubmenu = (evt) => {
    evt.target.querySelector('.nav-list__submenu-list').classList.add('nav-list__submenu-list_opened')
    submenuList.addEventListener('mouseout', closeSubmenu)
    submenuItem.addEventListener('mouseout', closeSubmenu)

}



const checkClassesInElement = (array, elem) => {
    return array.some(item => elem.classList.contains(item))
}

const closeSubmenu = (evt) => {
    if (checkClassesInElement(classesChekForClosingSubMenu, evt.relatedTarget)) {
        return
    }
    console.log(evt.relatedTarget)
    submenuList.classList.remove('nav-list__submenu-list_opened')
    submenuList.removeEventListener('mouseout', closeSubmenu)
    submenuItem.removeEventListener('mouseout', closeSubmenu)
}

const toggleSearchInput = () => {
    if (searchInput.classList.contains('search__input_active')) {
        searchInput.classList.add('search__input_reduced')
        setTimeout(() => {
            searchInput.classList.remove('search__input_active')
            navigation.classList.remove('nav-list_hidden')
            searchInput.classList.remove('search__input_reduced')
        }, 700)
    } else {
        searchInput.classList.add('search__input_active')
        navigation.classList.add('nav-list_hidden')
    }
    headerRightElement.classList.toggle('header__right-block_disclosed')
}

const openMenu = () => {
    btnOpenMenu.classList.toggle('header__btn-menu_opening')
    profile.classList.toggle('profile-ico_visible')
    navigation.classList.toggle('nav-list_opened')
}

const openPopup = (popup) => {
    popup.classList.add('popup_opened')
    popup.querySelector('.popup__close').addEventListener('click', closePopup)
}

const closePopup = (evt) => {
    evt.target.parentNode.parentNode.classList.remove('popup_opened')
    evt.target.removeEventListener('click', closePopup)
}


btnOpenMenu.addEventListener('click', openMenu)
submenuItem.addEventListener('mouseenter', openSubmenu)
searchButton.addEventListener('click', toggleSearchInput)
profile.addEventListener('click', () => {
    if(profile.classList.contains('profile-ico_state_non-authorize')) {
        const popupAuthorization = document.querySelector('.popup_content_authorization-form')
        openPopup(popupAuthorization)
    } else return
})