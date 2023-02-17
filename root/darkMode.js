export class Theme {
    constructor() {
        this.currentTheme = localStorage.getItem('__Mode')
    }

    toggleChanges() {
        if (this.currentTheme === 'dark') {
            document.body.style.background = '#f7f7f8'
            document.body.style.color = '#222'
            this.currentTheme = 'light'
        } else {
            document.body.style.background = '#343541'
            document.body.style.color = '#FFF'
            this.currentTheme = 'dark'
        }
        localStorage.setItem('__Mode', this.currentTheme)
    }

    bg_changeID_Element(ID) {
        if (this.currentTheme === 'dark') {
            ID.style.background = '#222'
        } else {
            ID.style.background = '#FFF'
        }
    }

    Html__linkColor(a_href) {
        if (this.currentTheme === 'dark') {
            a_href.forEach(item => item.classList.add('a_hrefColor__'))
        } else {
            a_href.forEach(item => item.classList.remove('a_hrefColor__'))
        }
    }

    html_LIST_wrapperBgChange(listWrapper) {
        if (this.currentTheme === 'dark') {
            listWrapper.forEach(item => item.classList.add('LIST_WRAPPER'))
        } else {
            listWrapper.forEach(item => item.classList.remove('LIST_WRAPPER'))
        }
    }

    defaultBG(className){
        if (this.currentTheme === 'dark') {
            className.forEach(item => item.classList.add('defaulTBackground'))
        } else {
            className.forEach(item => item.classList.remove('defaulTBackground'))
        }
    }
    
    backgroundRemover(item_1 , item_2){
        if(this.currentTheme === 'dark'){
            item_1.style.display = 'none'
            item_2.style.display = 'block'
        }else{
            item_1.style.display = 'block'
            item_2.style.display = 'none'
        }
    }
    
    svgGlowEffect (item){
        if(this.currentTheme === 'dark'){
            item.forEach(item =>  item.classList.add('LightEffect'))
        }else{
            item.forEach(item =>  item.classList.remove('LightEffect'))
        }
    }
    
}


