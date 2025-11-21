/**
 * Vercel Serverless function to send emails.
 * Configure environment variables in Vercel:
 * SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL
 *
 * If not configured, the client will fallback to mailto: (handled in the frontend).
 */
const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')
  try {
    const { name, email, message } = req.body || {}
    const host = process.env.SMTP_HOST
    if (!host) return res.status(500).json({ error: 'SMTP not configured' })

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || 'rodriguez.nico.alejandro@gmail.com',
      subject: `Contacto web: ${name || 'Nuevo mensaje'}`,
      text: `${message}\n\nFrom: ${name} <${email}>`
    })

    return res.status(200).json({ ok: true, info })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Error sending email' })
  }
}
