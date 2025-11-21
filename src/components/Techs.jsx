import React from 'react'
const techs = [
  {name: 'React', logo: '/assets/logo-variants.png'},
  {name: 'Vercel', logo: '/assets/logo-variants.png'},
  {name: 'Node', logo: '/assets/logo-variants.png'},
  {name: 'HTML5', logo: '/assets/logo-variants.png'},
]

export default function Techs(){
  return (
    <section id="techs" className="panel alt">
      <div className="container">
        <h2>Tecnologías</h2>
        <div className="tech-grid">
          {techs.map(t => (
            <div key={t.name} className="tech">
              <img src={t.logo} alt={t.name} />
              <p>{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
