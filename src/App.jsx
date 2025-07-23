import React from 'react'
import Navbar from './assets/Components/Navbar/navbar'
import Home from './assets/Components/Home/Home'
import About from './assets/Components/About/About'
import Reach from './assets/Components/Reach/Reach'
import SocialLinks from './assets/Components/SocialLinks/SocialLinks'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Reach />
      <SocialLinks />
    </div>
  )
}

export default App