const page = document.querySelector('.page')
const header = page.querySelector('.header')
const navigation = page.querySelector('.nav-list')
const submenuItem = navigation.querySelector('.nav-list__item_submenu')
const submenuList = navigation.querySelector('.nav-list__submenu-list')

const openSubmenu = (evt) => {
    evt.target.querySelector('.nav-list__submenu-list').classList.add('nav-list__submenu-list_opened')
    submenuList.addEventListener('mouseout', closeSubmenu)
    submenuItem.addEventListener('mouseout', closeSubmenu)

}

const closeSubmenu = (evt) => {
    if (evt.relatedTarget.classList.contains('nav-list__submenu-item') || evt.relatedTarget.classList.contains('nav-list__submenu-list')) {
        return
    }
    submenuList.classList.remove('nav-list__submenu-list_opened')
    submenuList.removeEventListener('mouseout', closeSubmenu)
}

submenuItem.addEventListener('mouseenter', openSubmenu)