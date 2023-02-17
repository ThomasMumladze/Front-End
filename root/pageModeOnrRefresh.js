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