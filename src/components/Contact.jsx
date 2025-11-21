import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if (res.ok){
        setStatus('sent')
        setForm({name:'', email:'', message:''})
      } else {
        // fallback to mailto if no API configured
        const mailto = `mailto:rodriguez.nico.alejandro@gmail.com?subject=${encodeURIComponent('Contacto desde sitio')}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' <' + form.email + '>')}`
        window.location.href = mailto
        setStatus('mailto')
      }
    }catch(err){
      const mailto = `mailto:rodriguez.nico.alejandro@gmail.com?subject=${encodeURIComponent('Contacto desde sitio')}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' <' + form.email + '>')}`
      window.location.href = mailto
      setStatus('mailto')
    }
  }

  return (
    <section id="contact" className="panel contact">
      <div className="container">
        <h2>Contacto</h2>
        <form onSubmit={submit} className="contact-form">
          <label>Nombre<input name="name" value={form.name} onChange={handleChange} required/></label>
          <label>Email<input name="email" value={form.email} onChange={handleChange} type="email" required/></label>
          <label>Mensaje<textarea name="message" value={form.message} onChange={handleChange} required/></label>
          <button type="submit" className="cta">Enviar</button>
        </form>
        <div className="contact-help">
          <p>Si tu despliegue en Vercel no tiene SMTP configurado, el formulario abrirá tu cliente de correo para enviar el mensaje directamente a <strong>rodriguez.nico.alejandro@gmail.com</strong>.</p>
        </div>
        {status && <p className="status">Estado: {status}</p>}
      </div>
    </section>
  )
}
