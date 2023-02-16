export class Theme {
    constructor() {
        this.currentTheme = localStorage.getItem('pageTheme')
    }

    // !DarkMode For Body Background & Body Text Colo
    toggleDarkMode(body_bg, body_color) {
        if (this.currentTheme === 'DARK') {
            body_bg.style.background = '#f7f7f8'
            body_color.style.color = "#222"
            this.currentTheme = 'LIGHT'
        } else {
            body_bg.style.background = '#444654'
            body_color.style.color = '#FFF'
            this.currentTheme = 'DARK'
        }
        localStorage.setItem('pageTheme', this.currentTheme)
    }

    // !HTML <a href></a> Color Change
    linkColoChanger(HTML_a) {
        if (this.currentTheme === "DARK") {
            HTML_a.forEach(item => item.style.color = "#FFF")
        } else {
            HTML_a.forEach(item => item.style.color = "#222")
        }
    }
    
    // !Default Background Change For getElementById
    toggleDefaultBgChange_onID(id) {
        if (this.currentTheme === "DARK") {
            id.style.backgroundColor = "rgb(40, 40, 40)"
        } else {
            id.style.backgroundColor = '#FFF'
        }
    }

    // !Default Background_Change For QuerySelectorAll bg="222" color="FFF" darkMode.css
    toggleDefaultBgChange(multipleItem) {
        if (this.currentTheme === "DARK") {
            multipleItem.forEach(item => item.classList.add('default_background'))
        } else {
            multipleItem.forEach(item => item.classList.remove('default_background'))
        }
    }

    // !DarkMode Change QuerySelector class Add & Remove
    toggleBgBlue(element) {
        if (this.currentTheme === "DARK") {
            element.classList.add('filter_background')
        } else {
            element.classList.remove('filter_background')
        }
    }

    // !DarkMode Change QuerySelectorAll class Add & Remove
    toggleBgBlueMultiple(multipleItem) {
        if (this.currentTheme === "DARK") {
            multipleItem.forEach(item => item.classList.add('filter_background'))
        } else {
            multipleItem.forEach(item => item.classList.remove('filter_background'))
        }
    }

    // !Removes Display & Add between Two Element
    displayRemover(item_1, item_2) {
        if (this.currentTheme === 'DARK') {
            item_1.style.display = 'none'
            item_2.style.display = 'block'
        } else {
            item_1.style.display = 'block'
            item_2.style.display = 'none'
        }
    }

    // !classList WithOut Default Style
    noneStyleClass(item) {
        if (this.currentTheme === 'DARK') {
            item.classList.add('dark_STYLE_mode')
        } else {
            item.classList.remove('dark_STYLE_mode')
        }
    }

    // !QuerySelectorAll classList WithOut Default Style
    noneStyleClass_multiple(item) {
        if (this.currentTheme === "DARK") {
            item.forEach(item => item.classList.add('dark_STYLE_mode'))
        } else {
            item.forEach(item => item.classList.add('dark_STYLE_mode'))
        }
    }

}


