import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'

export const Content = (language, page, word) => {
    // const appSnap = useSnapshot(STApp)
    // return languages[appSnap.language][page][word]
    return languages[language][page][word]
}

const languages = {
    az: {
        main: {
            aaaa: 'Bir',
            aaab: 'planımız var.',
            aaac: 'Biz 2020-dən bu yoldayıq. Çox şeyi dəyişməliyik.',
            aaad: 'Plana bax',
            aaae: 'Yaşadığımız dünyadan daha yaxşısı üçün düşünülüb.',
            aaaf: 'təkrar emal olunan material',
            aaag: 'ətraf mühitə faydalı',
            aaah: 'yenidən istifadə olunan batareyalar',
            aaai: 'Toplayırıq',
            aaaj: 'nədə varsa',
            aaak: 'Hazırlayırıb',
            aaal: 'çeviririk',
            aaam: 'Köhnə batareyaları gətirirsiniz.',
            aaan: 'Ödəniş edirik.',
            aaao: 'Kütlə',
            aaap: 'Batareyalar təbiəti çirkləndirən əsas tullantılardan biridir. Yenidən istifadə bu çirklənmənin qarşısını almağa töhvə verəcək. Tullantısız, təmiz dünyaya birlikdə addımlayaq.',
            aaaq: 'Cənnət Səmədov',
            aaar: 'Təsisçi'
        },
        maps: {
            aaaa: 'Yığım Məntələri',
            aaab: 'Nizami',
            aaac: '1025 Ayaz İsmayılov küçəsi',
            aaad: 'Xətai',
            aaae: 'Xaqani Rüstəmov küçəsi',
            aaaf: 'Gənclik',
            aaag: 'Fətəli Xan Xoyski'
        },
        ecobank: {
            aaaa: 'Hazır ol.',
            aaab: 'Cəsarətli ol.',
            aaac: 'Sərhədləri aş.'
        },
        navbar: {
            aaaa: 'Əsas',
            aaab: 'Xəritə',
            aaac: 'Ecobank',
            aaad: 'Bloq',
            aaae: 'Sosial'
        },
        footer: {
            aaaa: '© 2022 Ecopower. Bütün hüquqlar qorunur.'
        }
    },
    en: {
        main: {
            aaaa: 'We',
            aaab: 'have a plan.',
            aaac: 'We’ve been eco powered since 2020. By 2030, all our products will be too.',
            aaad: 'See the plan',
            aaae: 'Designed to leave the world better than we found it.',
            aaaf: 'recycled gold in the wire of all cameras',
            aaag: 'recycled gold in the wire of all cameras',
            aaah: 'recycled gold in the wire of all cameras',
            aaai: 'Receiving',
            aaaj: 'anything at',
            aaak: 'Processing',
            aaal: 'to convert',
            aaam: 'Our products use less power.',
            aaan: 'That’s powerful.',
            aaao: 'Mass',
            aaap: 'We consider our impact on people and the planet in everything we do. And we continue to ask ourselves how we can make our work an even greater force for good in the world.',
            aaaq: 'Lisa Jackson, Vice President',
            aaar: 'Environment, Policy and Social Initiatives'
        },
        maps: {
            aaaa: 'Drop-Off Locations',
            aaab: 'Nizami',
            aaac: '1025 Ayaz Ismayilov St',
            aaad: 'Khatai',
            aaae: 'Khagani Rustamov St',
            aaaf: 'Ganjlik',
            aaag: 'Fatali Khan Khoyski'
        },
        ecobank: {
            aaaa: 'Get ready.',
            aaab: 'Be bold.',
            aaac: 'Go beyond.'
        },
        navbar: {
            aaaa: 'Home',
            aaab: 'Map',
            aaac: 'Ecobank',
            aaad: 'Blog',
            aaae: 'Social'
        },
        footer: {
            aaaa: '© 2022 Ecopower. All rights reserved.'
        }
    }
}