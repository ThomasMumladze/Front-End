import { Theme } from "./root/darkMode.js"
import { Slider } from "./root/slider.js"
const THEME = new Theme()

const header = document.getElementById('header')
const document_body = document.body

let a_href = document.querySelectorAll('a'),
    LIST_TREE = document.querySelectorAll('.LIST_TREE'),
    TITLE_WRAPPER = document.querySelectorAll('.TITLE_WRAPPER'),
    lightEffect = document.querySelectorAll('.onDarkMode_Light')

let darkModeImage = document_body.querySelector('.darkMode'),
    lightModeImage = document.querySelector('.lightMode')

const darkModeButton = document.querySelector('.darkModeButton').addEventListener('click', () => {
    THEME.toggleChanges()
    THEME.bg_changeID_Element(header)
    THEME.Html__linkColor(a_href)
    THEME.html_LIST_wrapperBgChange(LIST_TREE)
    THEME.defaultBG(TITLE_WRAPPER)
    THEME.backgroundRemover(darkModeImage, lightModeImage)
    THEME.svgGlowEffect(lightEffect)
})

// !NoT lose darkTheme On Page Refresh
import {
    onRefresh_toggleChanges,
    onRefresh_bg_changeID_Element,
    onRefresh_Html__linkColor,
    onRefresh_html_LIST_wrapperBgChange,
    onRefresh_defaultBackground,
    onRefresh_bgRemover,
    onRefresh_GlowingEffect
} from "./root/pageModeOnrRefresh.js"
onRefresh_toggleChanges(THEME.currentTheme, document_body, document_body);
onRefresh_bg_changeID_Element(THEME.currentTheme, header)
onRefresh_Html__linkColor(THEME.currentTheme, a_href)
onRefresh_html_LIST_wrapperBgChange(THEME.currentTheme, LIST_TREE)
onRefresh_defaultBackground(THEME.currentTheme, TITLE_WRAPPER)
onRefresh_bgRemover(THEME.currentTheme, darkModeImage, lightModeImage)
onRefresh_GlowingEffect(THEME.currentTheme, lightEffect)


// !SLIDER
const SLIDER = new Slider()
const slider_JS = document.querySelector('.JAVASCRIPT__ .slider')
let prevBtn_JS = document.querySelector('.JAVASCRIPT__ .prevBtn').addEventListener('click' , () => {SLIDER.prevSlider(slider_JS)})
let nextBtn_JS = document.querySelector('.JAVASCRIPT__ .nextBtn').addEventListener('click' , () => {SLIDER.nextSlider(slider_JS)})

const slider_PY = document.querySelector('.PYTHON__ .slider')
let prevBtn_PY = document.querySelector('.PYTHON__ .prevBtn').addEventListener('click' , () => {SLIDER.prevSlider(slider_PY)})
let nextBtn_PY = document.querySelector('.PYTHON__ .nextBtn').addEventListener('click' , () => {SLIDER.nextSlider(slider_PY)})

    

    