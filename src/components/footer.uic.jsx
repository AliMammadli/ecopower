import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'
import { Content } from '../content/language.content'


const sty = {
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    footerInner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #CECECF',
        borderWidth: 0,
        borderTopWidth: '1px',
        height: '35px'
    },
    copyright: {
        color: '#6E6E73',
        fontSize: 12,
        fontVariationSettings: '"wght" 200'
    },
    region: {
        border: 'none',
        backgroundColor: 'transparent',
        color: '#424245',
        fontSize: 12,
        fontVariationSettings: '"wght" 400'
    }
}


export const Footer = () => {
    const appSnap = useSnapshot(STApp)

    return (
        <div style={sty.footer}>
            <nav className='container' style={sty.footerInner}>
                <h5 style={sty.copyright}>{Content(appSnap.language, 'footer', 'aaaa')}</h5>
                <h5>{appSnap.language}</h5>
                {/* <a style={sty.region} href="https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" target="_blank">Azerbaijan</a> */}
                {STApp.language === 'az' && <button style={sty.region} onClick={() => { STApp.language = 'en' }}>English</button>}
                {STApp.language === 'en' && <button style={sty.region} onClick={() => { STApp.language = 'az' }}>Azərbaycan</button>}
            </nav>
        </div>
    )
}