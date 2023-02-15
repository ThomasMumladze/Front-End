export class Theme {
    constructor() {
        this.currentTheme = localStorage.getItem('pageTheme')
    }

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

    toggleDefaultBgChange_onID(id) {
        if (this.currentTheme === "DARK") {
            id.style.backgroundColor = "#222"
        } else {
            id.style.backgroundColor = '#FFF'
        }
    }

    toggleDefaultBgChange(multipleItem) {
        if (this.currentTheme === "DARK") {
            multipleItem.forEach(item => item.classList.add('default_background'))
        } else {
            multipleItem.forEach(item => item.classList.remove('default_background'))
        }
    }

    toggleBgBlue(element) {
        if (this.currentTheme === "DARK") {
            element.classList.add('filter_background')
        } else {
            element.classList.remove('filter_background')
        }
    }

    toggleBgBlueMultiple(multipleItem) {
        if (this.currentTheme === "DARK") {
            multipleItem.forEach(item => item.classList.add('filter_background'))
        } else {
            multipleItem.forEach(item => item.classList.remove('filter_background'))
        }
    }

    displayRemover(item_1 , item_2){
        if(this.currentTheme === 'DARK'){
            item_1.style.display = 'none'
            item_2.style.display = 'block'
        }else{
            item_1.style.display = 'block'
            item_2.style.display = 'none'
        }
    }

}



