import sty from '../styles/main.module.css'

import { useState } from 'react'
import { Content } from '../content/language.content'
import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'


export const Main = () => {
    const [value, setValue] = useState(1000)
    const appSnap = useSnapshot(STApp)

    const calcDiscount = (e) => setValue(e.target.value)
    
    return (
        <div className={sty.page}>
            <section className='container'>
                <div className={sty.headerTop} />
                <div className={sty.header}>
                    <h1 className={sty.headerTitle}><span>{Content(appSnap.language, 'main', 'aaaa')}</span> {Content(appSnap.language, 'main', 'aaab')}</h1>
                    <p className={sty.headerSubtitle}>{Content(appSnap.language, 'main', 'aaac')}</p>
                    <button className={sty.headerButton} onClick={() => window.open('https://prezi.com/view/SehYNwkmDRHYGm16vtvI', '_blank', 'noopener,noreferrer')} >
                        <p>{Content(appSnap.language, 'main', 'aaad')}</p>
                        <img className={sty.plus} src={require('../assets/icons/ic-plus.svg').default} />
                        <img className={sty.underline} src={require('../assets/icons/ic-underline.svg').default} />
                    </button>
                </div>
            </section>

            <section className='container'>
                <div className={sty.card}>
                    <h3>{Content(appSnap.language, 'main', 'aaae')}</h3>
                    <div className={sty.cardContent}>
                        <div className={sty.descContent}>
                            <div className={sty.descContentInner}>
                                <img className={sty.imgRot1} src={require('../assets/icons/ic-arrow.svg').default} />
                                <h4>100%</h4>
                                <p>{Content(appSnap.language, 'main', 'aaaf')}</p>
                            </div>
                            <div className={sty.descContentInner}>
                                <h4>100%</h4>
                                <p>{Content(appSnap.language, 'main', 'aaag')}</p>
                                <img className={sty.imgRot2} src={require('../assets/icons/ic-arrow.svg').default} />
                            </div>
                        </div>
                        <div className={sty.imgContent}>
                            <img src={require('../assets/images/power-bank-2.png')} />
                        </div>
                        <div className={sty.descContent}>
                            <h4>100%</h4>
                            <p>{Content(appSnap.language, 'main', 'aaah')}</p>
                            <img className={sty.imgRot3} src={require('../assets/icons/ic-arrow.svg').default} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className={sty.cardSmallWrap}>
                    <div className={sty.cardSmall}>
                        <h3>{Content(appSnap.language, 'main', 'aaai')}</h3>
                        <div className={sty.iconImg}>
                            <img src={require('../assets/images/ic-phone.png')} />
                            <img src={require('../assets/images/ic-laptop.png')} />
                            <img src={require('../assets/images/ic-watch.png')} />
                            <img src={require('../assets/images/ic-camera.png')} />
                            <img src={require('../assets/images/ic-flashlight.png')} />
                        </div>
                        <h3>{Content(appSnap.language, 'main', 'aaaj')}</h3>
                        <div className={sty.iconImg} style={{ marginBottom: 0 }}>
                            <img src={require('../assets/images/ic-low-battery.png')} />
                            <img src={require('../assets/images/ic-low-battery.png')} />
                            <img src={require('../assets/images/ic-low-battery.png')} />
                        </div>
                    </div>
                    <div className={sty.cardSmall}>
                        <h3>{Content(appSnap.language, 'main', 'aaak')}</h3>
                        <div className={sty.iconImg}>
                            <img src={require('../assets/images/ic-toolbox.png')} />
                            <img src={require('../assets/images/ic-screwdriver.png')} />
                            <img src={require('../assets/images/ic-high-voltage.png')} />
                            <img src={require('../assets/images/ic-test-tube.png')} />
                            <img src={require('../assets/images/ic-microscope.png')} />
                        </div>
                        <h3>{Content(appSnap.language, 'main', 'aaal')}</h3>
                        <div className={sty.iconImg} style={{ marginBottom: 0 }}>
                            <img src={require('../assets/images/ic-battery.png')} />
                            <img src={require('../assets/images/ic-battery.png')} />
                            <img src={require('../assets/images/ic-battery.png')} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className={sty.cardBlack}>
                    <h3>{Content(appSnap.language, 'main', 'aaam')}</h3>
                    <h3 className={sty.powerful}>{Content(appSnap.language, 'main', 'aaan')}</h3>

                    <div className={sty.sliderContainer}>
                        <div className={sty.sliderDisplay}>
                            <h1>{(value / 1000 * 3).toFixed()}₼</h1>
                        </div>
                        <div className={sty.sliderLabel}>
                            <h4>{Content(appSnap.language, 'main', 'aaao')}</h4>
                            <h5>{value / 1000}kq</h5>
                        </div>
                        <div className="range-slider" style={{ '--min': '0', '--max': '100', '--value': `${value}`, '--text-value': '75' }}>
                            <input type="range" min={100} max={50000} step={100} value={value} onInput={(e) => calcDiscount(e)} />
                            <div className='range-slider__progress'></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className={sty.quote}>
                    <h5>
                        <span>"</span>{Content(appSnap.language, 'main', 'aaap')}<span>"</span>
                    </h5>
                    <p className={sty.quoteTitle}>{Content(appSnap.language, 'main', 'aaaq')}</p>
                    <p className={sty.quoteSubtitle}>{Content(appSnap.language, 'main', 'aaar')}</p>
                </div>
            </section>

            <section className='container'>
                <div style={{ height: '240px' }} />
            </section>
        </div>
    )
}