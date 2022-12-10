import sty from '../styles/maps.module.css'

import { useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { Content } from '../content/language.content'
import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'

const locations = [
    {
        add: Content(STApp.language, 'maps', 'aaab'),
        desc: Content(STApp.language, 'maps', 'aaac'),
        pos: { lat: 40.407460211257956, lng: 49.905184549355134 }
    },
    {
        add: Content(STApp.language, 'maps', 'aaad'),
        desc: Content(STApp.language, 'maps', 'aaae'),
        pos: { lat: 40.396971170363706, lng: 49.80798257909025 }
    },
    {
        add: Content(STApp.language, 'maps', 'aaaf'),
        desc: Content(STApp.language, 'maps', 'aaag'),
        pos: { lat: 40.38805815103023, lng: 49.868039118928294 }
    }
]


export const Maps = () => {
    const appSnap = useSnapshot(STApp)
    const [map, setMap] = useState()
    const center = useMemo(() => ({ lat: 40.40938166979072, lng: 49.86726941731444 }), [])
    const res = useLoadScript({ googleMapsApiKey: 'AIzaSyDDbE40OpeMZKqhYudGniP-YYE-0ecTiV4' })

    const changeLocation = ({ lat, lng}) => map.panTo({ lat, lng })


    if (!res.isLoaded) return null

    return (
        <div className={sty.page}>
            <section className='container'>
                <div className={sty.header}>
                    <h3>{Content(appSnap.language, 'maps', 'aaaa')}</h3>
                </div>
                <div className={sty.mapsWrapper}>
                    <GoogleMap
                        zoom={13}
                        center={center}
                        mapContainerClassName={sty.mapsContainer}
                        options={{ fullscreenControl: false, zoomControl: false, streetViewControl: false }}
                        onLoad={(map) => setMap(map)}
                    >
                        {locations.map((marker, index) => {
                            return (
                                <MarkerF position={marker.pos} key={index} />
                            )
                        })}
                    </GoogleMap>
                </div>
                <div className={sty.lctCards}>
                    {locations.map((location, index) => {
                        return (
                            <div className={sty.lctCard} key={index} onClick={() => changeLocation(location.pos)} >
                                <img src={require('../assets/icons/ic-marker.svg').default} />
                                <div className={sty.lctCardDetails}>
                                    <h5>{location.add}</h5>
                                    <p>{location.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}