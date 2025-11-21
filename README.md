# SiteForge — Agencia (Proyecto de ejemplo)

Este proyecto es una landing page en React (Vite) pensada como plantilla para tu agencia de contenido.
Incluye:
- Secciones: Servicios, Planes, Clientes, Tecnologías, Quiénes somos, Contacto.
- Formulario de contacto con *fallback mailto:* que apunta a **rodriguez.nico.alejandro@gmail.com**.
- Endpoint API para Vercel (`/api/contact`) que usa `nodemailer`. Para usarlo en Vercel debes configurar variables de entorno.

## Cómo usar localmente

1. Descomprime el archivo.
2. Instala dependencias:
```bash
cd agency-site
npm install
npm run dev
```
3. Abre `http://localhost:5173`

## Envío de emails (producción / Vercel)

El formulario intenta usar la función serverless en `/api/contact`. Si no quieres configurar SMTP, el formulario abrirá el cliente de correo del usuario con `mailto:`.

Para usar el envío desde el servidor (Vercel), configura estas variables en tu proyecto Vercel:
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- FROM_EMAIL (opcional)
- TO_EMAIL (opcional, por defecto: rodriguez.nico.alejandro@gmail.com)

Instala `nodemailer` en producción (Vercel lo manejará según package.json + dependencias de desarrollo). En este repo ejemplo el endpoint `api/contact.js` requiere `nodemailer` — si deployas en Vercel, agrega `nodemailer` a `dependencies`.

## Despliegue en Vercel

1. Crea un nuevo proyecto en Vercel y conecta el repositorio (o sube el ZIP).
2. En Settings > Environment Variables agrega las variables SMTP.
3. Build command: `npm run build`
4. Output directory: `dist`

Si prefieres no configurar SMTP, el formulario seguirá funcionando con el fallback `mailto:`.

