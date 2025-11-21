import React from 'react'
const clients = [
  {name: 'Cliente A', logo: '/assets/logo-variants.png'},
  {name: 'Cliente B', logo: '/assets/logo-variants.png'},
  {name: 'Cliente C', logo: '/assets/logo-variants.png'},
]

export default function Clients(){
  return (
    <section id="clients" className="panel">
      <div className="container">
        <h2>Clientes</h2>
        <div className="clients-grid">
          {clients.map(c => (
            <div key={c.name} className="client">
              <img src={c.logo} alt={c.name} />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
