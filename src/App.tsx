import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecommendedProducts from './components/RecommendedProducts'

function App() {
  
  return (
    <main>
      <Header />
      <Navbar />
      <RecommendedProducts />
      <Footer />
    </main>
  )
}

export default App
