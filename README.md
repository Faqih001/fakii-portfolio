
# Fakii Portfolio

A modern portfolio web application for Fakii Mohammed, built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. Features a contact form with SMTP email delivery via Resend, deployable on Vercel.

## Features
- Responsive, modern UI with shadcn/ui and Tailwind CSS
- Contact form with email delivery (Resend SMTP, Nodemailer)
- API route for contact form (Vercel serverless function)
- Easy deployment to Vercel

## Getting Started (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- npm

### 1. Clone the repository
```bash
git clone https://github.com/Faqih001/fakii-portfolio.git
cd fakii-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```
REACT_APP_RESEND_API_KEY=your_resend_api_key_here
```

### 4. Run the app locally
```bash
npm run dev
```
- Frontend: http://localhost:8080
- Backend (if using Express): http://localhost:5001

## Deployment (Vercel)
1. Push your code to GitHub.
2. Import the repo at https://vercel.com/new.
3. In Vercel dashboard, add your `REACT_APP_RESEND_API_KEY` as an environment variable.
4. Deploy!

### Contact API Route
- The contact form POSTs to `/api/contact`.
- The API route is implemented in `api/contact.js` using Nodemailer and Resend SMTP.

## Customization
- Edit your contact info in `src/pages/Contact.tsx`.
- Update styles and content as needed.

## License
MIT
