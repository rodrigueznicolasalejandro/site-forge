import React from 'react'

const services = [
  {title: 'Landing Pages', desc: 'Estructura clara, foco en conversión y SEO básico.'},
  {title: 'Sitios Corporativos', desc: 'Páginas "Quiénes somos", servicios, contacto y más.'},
  {title: 'Formularios y Lead Gen', desc: 'Integración con email y CRMs.'},
  {title: 'Mantenimiento', desc: 'Actualizaciones, backups y soporte mensual.'},
]

export default function Services(){
  return (
    <section id="services" className="panel">
      <div className="container">
        <h2>Servicios</h2>
        <div className="grid">
          {services.map(s => (
            <article key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
