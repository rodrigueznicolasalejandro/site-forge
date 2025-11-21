import React from 'react'

const plans = [
  {name: 'Starter', price: '$250', features: ['Landing 1p', 'Formulario', '1 semana entrega']},
  {name: 'Pro', price: '$650', features: ['Sitio hasta 5p', 'SEO básico', '2 semanas entrega']},
  {name: 'Enterprise', price: '$1500', features: ['Sitio 10+ p', 'Integraciones', 'Soporte 3 meses']},
]

export default function Plans(){
  return (
    <section id="plans" className="panel alt">
      <div className="container">
        <h2>Planes</h2>
        <div className="plans-grid">
          {plans.map(p => (
            <div key={p.name} className="plan">
              <h3>{p.name}</h3>
              <div className="price">{p.price}</div>
              <ul>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a className="cta" href="#contact">Contratar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
