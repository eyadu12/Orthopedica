import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Article from './components/Article/Article'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Banner/>
      <Article/>
      <Services/>
      <Blog />
      <Footer/>
    </div>
  )
}

export default App
