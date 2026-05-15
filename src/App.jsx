import React from 'react'
import Header from './Header/Header'
import MainCard from './MainCard/MainCard'
import Footer from './Footer/Footer'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'
import Home from './Home'
import ScrollToTop from "react-scroll-to-top"
import { GiThumbDown } from 'react-icons/gi'
import Apis from './Apis'
import ApiDataa from './ApiDataa'
import Product from './Product'
import Overview from './Overview'
import Example from './Example'
import Search from './Search'
import Foarms from './Foarms'

const App = () => {

  return (

    <BrowserRouter>

      <Header />

      <ScrollToTop
        smooth
        component={<GiThumbDown />}
      />

      <Routes>

        <Route path='/' element={<MainCard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hooks' element={<Home />} />
        <Route path='/api' element={<Apis />} />
        <Route path='/info' element={<ApiDataa />} />
        <Route path='/info/:product' element={<Product />} />
        <Route path='/info/:product/:overview' element={<Overview />} />
        <Route path='/p' element={<Example />} />
        <Route path='/search' element={<Search />} />
        <Route path='/foarms' element={<Foarms />} />

        {/* </Route> */}

      </Routes>
      <Footer />
    </BrowserRouter >

  )
}

export default App