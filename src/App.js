import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
// import Header from './components/Header'
import Note from './components/Note'
// import Navbar from './components/Navbar';
// import { Router } from 'react-router-dom'
import Header from './components/Header';
function App() {
  return (
    // <Router>
    <>

      {/* <Navbar /> */}
      <Header />
      <Banner />
      <Carousel />
      <About />
      <Note />

      <Footer />
    </>
    // </Router>



  )
}

export default App