import { Theme } from "./Store/DarkMode.js";

const THEME = new Theme()
const body_bg = document.body
const body_color = document.body
const header = document.getElementById('header')


let menu_list = document.querySelectorAll('.menu_list'),
    sub_menu_list = document.querySelectorAll('.sub_menu_list'),
    TITLE_WRAPPER = document.querySelectorAll('.TITLE_WRAPPER'),
    devSkillList = document.querySelectorAll('.devSkillList'),
    devImageDivFilter = document.querySelectorAll('.devImageDivFilter')


// Image Selectors
let darkModeImage = document.querySelector('.darkMode'),
    lightModeImage = document.querySelector('.lightMode')

const darkModeButton = document.querySelector('.darkModeButton').addEventListener('click', () => {
    THEME.toggleDarkMode(body_bg, body_color)
    THEME.toggleDefaultBgChange_onID(header)
    THEME.toggleDefaultBgChange(menu_list)
    THEME.toggleDefaultBgChange(sub_menu_list)
    THEME.toggleDefaultBgChange(TITLE_WRAPPER)
    THEME.toggleDefaultBgChange(devSkillList)
    THEME.toggleBgBlueMultiple(devImageDivFilter)
    THEME.displayRemover(darkModeImage , lightModeImage)
})




//Dark Mode Data Not lose After Refresh
document.body.style.backgroundColor = (THEME.currentTheme === 'DARK') ? '#444654' : '#f7f7f8';
document.body.style.color = (THEME.currentTheme === 'DARK') ? '#FFF' : '#222';
header.style.backgroundColor = (THEME.currentTheme === "DARK") ? '#222' : '#FFF'


const darkModeOnRefreshPageDefault_BG = (item) => { //* Default Background Changer
    if (THEME.currentTheme === 'DARK') {
        item.forEach(item => item.classList.add('default_background'))
    } else {
        item.forEach(item => item.classList.remove('default_background'))
    }
}
darkModeOnRefreshPageDefault_BG(menu_list)
darkModeOnRefreshPageDefault_BG(sub_menu_list)
darkModeOnRefreshPageDefault_BG(TITLE_WRAPPER)
darkModeOnRefreshPageDefault_BG(devSkillList)


const darkModeRefreshBlue_BG = (element) => {  //* Blue Background Changer
    if (THEME.currentTheme === 'DARK') {
        element.forEach(item => item.classList.add('filter_background'))
    } else {
        element.forEach(item => item.classList.remove('filter_background'))
    }
}
darkModeRefreshBlue_BG(devImageDivFilter)


const displayRemover = (item_1 , item_2) => {   // *Display Remover
    if(THEME.currentTheme === 'DARK'){
        item_1.style.display = 'none'
        item_2.style.display = 'block'
    }else{
        item_1.style.display = 'block'
        item_2.style.display = 'none'
    }
}
displayRemover(darkModeImage , lightModeImage)
