import { Theme } from "./root/darkMode.js"
const THEME = new Theme()

const header = document.getElementById('header')

let a_href = document.querySelectorAll('a'),
LIST_TREE = document.querySelectorAll('.LIST_TREE')

const darkModeButton = document.querySelector('.darkModeButton').addEventListener('click' , () => {
    THEME.toggleChanges()
    THEME.bg_changeID_Element(header)
    THEME.Html__linkColor(a_href)
    THEME.html_LIST_wrapperBgChange(LIST_TREE)
})