import React from 'react'
import Header from './components/Header'
import Services from './components/Services'
import Plans from './components/Plans'
import Clients from './components/Clients'
import Techs from './components/Techs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <section id="hero" className="panel hero">
          <div className="container">
            <h1>Construimos tu presencia digital</h1>
            <p>Landing, sitios corporativos, formularios y mantenimiento. Diseño moderno y optimizado para conversión.</p>
            <a className="cta" href="#contact">Comenzar</a>
          </div>
        </section>

        <Services />
        <Plans />
        <Clients />
        <Techs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
