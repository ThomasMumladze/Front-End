export const onRefresh_toggleChanges = (THEME, body_bg, body_color) => {
    if (THEME === 'dark') {
        body_bg.style.background = '#343541'
        body_color.style.color = '#FFF'
    } else {
        body_bg.style.background = '#f7f7f8'
        body_color.style.color = '#222'
    }
}

export const onRefresh_bg_changeID_Element = (THEME, ID) => {
    if (THEME === 'dark') {
        ID.style.background = '#222'
    } else {
        ID.style.background = '#FFF'
    }
}

export const onRefresh_Html__linkColor = (THEME, a_href) => {
    if (THEME === 'dark') {
        a_href.forEach(item => item.classList.add('a_hrefColor__'))
    } else {
        a_href.forEach(item => item.classList.remove('a_hrefColor__'))
    }
}

export const onRefresh_html_LIST_wrapperBgChange = (THEME, listWrapper) => {
    if (THEME === 'dark') {
        listWrapper.forEach(item => item.classList.add('LIST_WRAPPER'))
    } else {
        listWrapper.forEach(item => item.classList.remove('LIST_WRAPPER'))
    }
}

export const onRefresh_defaultBackground = (THEME, className) => {
    if (THEME === 'dark') {
        className.forEach(item => item.classList.add('defaulTBackground'))
    } else {
        className.forEach(item => item.classList.remove('defaulTBackground'))
    }
}

export const onRefresh_bgRemover = (THEME, item_1, item_2) => {
    if (THEME === 'dark') {
        item_1.style.display = 'none'
        item_2.style.display = 'block'
    } else {
        item_1.style.display = 'block'
        item_2.style.display = 'none'
    }
}

export const onRefresh_GlowingEffect = (THEME , item) => {
    if(THEME === 'dark'){
        item.forEach(item =>  item.classList.add('LightEffect'))
    }else{
        item.forEach(item =>  item.classList.remove('LightEffect'))
    }
}