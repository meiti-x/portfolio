import React, {useEffect, useState} from 'react'
import Helmet from 'react-helmet'

import favicon from '/static/favicon/favicon.ico'
import favicon16 from '/static/favicon/favicon-16x16.png'
import favicon32 from '/static/favicon/favicon-16x16.png'
import {Navigation} from './Navigation'
import {Footer} from './Footer'

import '../styles/style.css'
import '../styles/new-moon.css'
import config from '../utils/config'

export const Layout = ({children}) => {
    const [theme, setTheme] = useState('dark')

    const onUpdateTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        window.localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme')

        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    return (
        <div>
            <Helmet>
                <link rel="shortcut icon" type="image/png" href={favicon}/>
                <link rel="apple-touch-icon" sizes="180x180" href={favicon}/>
                <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
                <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
                <link rel="manifest" href="/static/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#1e1e1e"/>
                <meta name="msapplication-TileColor" content="#00aba9"/>
                <meta name="theme-color" content="#ffffff"/>
                {theme === 'dark' && (
                    <link rel="stylesheet" type="text/css" href={`${config.assetsBasePath}/dark-mode.css`}/>
                )}
            </Helmet>

            <div id="layout" className="layout">
                <Navigation onUpdateTheme={onUpdateTheme} theme={theme}/>
                <main>{children}</main>
                <Footer/>
            </div>
        </div>
    )
}
