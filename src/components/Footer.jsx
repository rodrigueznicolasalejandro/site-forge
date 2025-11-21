import React from 'react'
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} SiteForge — Agencia de Contenido</p>
        <small>Diseño y desarrollo por SiteForge</small>
      </div>
    </footer>
  )
}
