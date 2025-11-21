import React from 'react'
export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/assets/logo-presentation.png" alt="SiteForge logo" />
          <div className="brand-text">
            <strong>SiteForge</strong>
            <small>Creative Agency</small>
          </div>
        </div>
        <nav>
          <a href="#services">Servicios</a>
          <a href="#plans">Planes</a>
          <a href="#clients">Clientes</a>
          <a href="#about">Quiénes somos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
