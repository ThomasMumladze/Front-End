export class Theme {
    constructor() {
        this.currentTheme = localStorage.getItem('pageTheme')
    }

    toggleDarkMode(body_bg , body_color) {
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
}

