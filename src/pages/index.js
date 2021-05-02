const page = document.querySelector('.page')
const header = page.querySelector('.header')
const navigation = page.querySelector('.navigation__list')


const menuList = [
    {
        name: 'Календарь',
        link: '#',
    },
    {
        name: 'Куда пойти',
        link: '#',
    },
    {
        name: 'Вопросы',
        link: '#',
    },
    {
        name: 'Читать и смотреть',
        link: '#',
        boxList: [
            {
                name: 'справочник',
                link: '#'
            },
            {
                name: 'видео',
                link: '#'
            },
            {
                name: 'статьи',
                link: '#'
            },
            {
                name: 'фильмы',
                link: '#'
            },
            {
                name: 'книги',
                link: '#'
            },
        ],
    },
    {
        name: 'Права детей',
        link: '#',
    }

]


const openBoxList = (evt) => {
    evt.target.querySelector('.navigation__item-box').classList.add('navigation__item-box_active')
    // console.log(evt.target.querySelector('.navigation__item-box').classList)
    // evt.target
    // .querySelector('.navigation__item-box')
    // .classList
    // .add('navigation__item-box_active')
}

const closeBoxList = (evt) => {
    evt.stopPropagation()
    console.log(evt.currentTarget)
    evt.target.classList.remove('navigation__item-box_active')
    // evt.target.classList.remove('navigation__item-box_active')
}

menuList.forEach(item => {
    const navigationItem = document.createElement('a')
    navigationItem.className = 'navigation__item'
    navigationItem.textContent = item.name
    navigationItem.href = item.link

    if (!(item.boxList === undefined)) {
        const boxList = document.createElement('ul')
        boxList.className = 'navigation__item-box'
        navigationItem.append(boxList)
        navigationItem.addEventListener('mouseover', openBoxList)
        boxList.addEventListener('mouseover', evt => evt.stopPropagation())
        boxList.addEventListener('mouseleave', closeBoxList)
        navigationItem.addEventListener('mouseleave', closeBoxList)

        item.boxList.forEach(item => {
            const boxItem = document.createElement('a')
            boxItem.className = 'navigation__box-list'
            boxItem.textContent = item.name
            boxItem.href = item.link
            boxList.append(boxItem)
        })
    }
    navigation.append(navigationItem)
});



function testFunc({one, two}, three) {
    console.log(one, two, three)
}


testFunc({ one: 'name', two: 'go' })