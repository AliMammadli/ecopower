import { NavLink, Link, useLocation } from 'react-router-dom'

import { Content } from '../content/language.content'
import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'


const sty = {
    navbar: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100vw',
        height: 50,
        backdropFilter: 'saturate(180%) blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        zIndex: 1,
        border: '1px solid #CECECF',
        borderWidth: 0,
        borderBottomWidth: '1px'
    },
    navbarInner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        cursor: 'pointer'
    },
    nav: {
        textDecoration: 'none',
        color: '#86868B',
        margin: '0 7px',
        fontSize: 16,
        fontVariationSettings: '"wght" 500'
    },
    activeNav: {
        textDecoration: 'none',
        color: '#1d1d1f',
        margin: '0 7px',
        fontSize: 16,
        fontVariationSettings: '"wght" 600'
    }
}


export const Navbar = () => {
    // let location = useLocation().pathname.slice(1)
    // let pageName = location.charAt(0).toUpperCase() + location.slice(1)
    const appSnap = useSnapshot(STApp)

    return (
        <div style={sty.navbar}>
            <nav className='container' style={sty.navbarInner}>
                <img style={sty.logo} src={require('../assets/images/logo-ecopower.png')} />
                <div>
                    <NavLink to={'/'} style={({ isActive }) => isActive ? sty.activeNav : sty.nav}>{Content(appSnap.language, 'navbar', 'aaaa')}</NavLink>
                    <NavLink to={'/maps'} style={({ isActive }) => isActive ? sty.activeNav : sty.nav}>{Content(appSnap.language, 'navbar', 'aaab')}</NavLink>
                    <NavLink to={'/ecobank'} style={({ isActive }) => isActive ? sty.activeNav : sty.nav}>{Content(appSnap.language, 'navbar', 'aaac')}</NavLink>
                    <NavLink to={'/blog'} style={({ isActive }) => isActive ? sty.activeNav : sty.nav}>{Content(appSnap.language, 'navbar', 'aaad')}</NavLink>
                </div>
                <a style={sty.nav} href="https://www.instagram.com/ecopowerbanks" target="_blank">{Content(appSnap.language, 'navbar', 'aaae')}</a>
            </nav>
        </div>
    )
}