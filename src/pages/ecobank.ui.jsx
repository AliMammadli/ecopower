import sty from '../styles/ecobank.module.css'

import { Content } from '../content/language.content'
import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'


export const Ecobank = () => {
    const appSnap = useSnapshot(STApp)
    
    return (
        <div className={sty.page}>
            <section className='container'>
                <div className={sty.cardHeader}>
                    <h1 className={sty.cardHeaderLabel1}>Gold Series</h1>
                </div>
                <div className={sty.card1}>
                    <div className={sty.cardDetails}>
                        <h3>Gold Max & Gold Ultra</h3>
                        <h4>{Content(appSnap.language, 'ecobank', 'aaaa')}</h4>
                    </div>
                    <img className={sty.cardImg1} src={require('../assets/images/power-bank-2.png')} />
                </div>
            </section>

            <section className='container'>
                <div className={sty.cardHeader}>
                    <h1 className={sty.cardHeaderLabel2}>Platin Series</h1>
                </div>
                <div className={sty.card2}>
                    <div className={sty.cardDetails}>
                        <h3>Platin Max & Platin Ultra</h3>
                        <h4>{Content(appSnap.language, 'ecobank', 'aaab')}</h4>
                    </div>
                    <img className={sty.cardImg2} src={require('../assets/images/power-bank-3.png')} />
                </div>
            </section>

            <section className='container'>
                <div className={sty.cardHeader}>
                    <h1 className={sty.cardHeaderLabel3}>Titan Series</h1>
                </div>
                <div className={sty.card3}>
                    <div className={sty.cardDetails}>
                        <h3>Titan Max & Titan Ultra</h3>
                        <h4>{Content(appSnap.language, 'ecobank', 'aaac')}</h4>
                    </div>
                    <img className={sty.cardImg3} src={require('../assets/images/power-bank-1.png')} />
                </div>
            </section>

            <section className='container'>
                <div style={{ height: '200px' }} />
            </section>
        </div>
    )
}