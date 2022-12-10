import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/main.ui'
import { Maps } from './pages/maps.ui'
import { Ecobank } from './pages/ecobank.ui'
import { Blog } from './pages/blog.ui'

import { Navbar } from './components/navbar.uic'
import { Footer } from './components/footer.uic'


export const App = () => {
    return (
        <div style={{ display: 'block', width: '100%' }}>
            <Navbar />
            <div style={{ height: '50px' }} />
            <Routes>
                <Route path='/*' element={<Main />} />
                <Route exact path='/' element={<Main />} />
                <Route path='/home' element={<Main />} />
                <Route path='/maps' element={<Maps />} />
                <Route path='/ecobank' element={<Ecobank />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
            <Footer />
        </div>
    )
}