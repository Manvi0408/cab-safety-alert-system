# SafeGuard Emergency Response System

A modern, responsive web app for women's safety, featuring real-time emergency alerts via SMS and email, location sharing, and trusted contact management.

## 🚀 Features

- **Emergency Button**: Instantly send alerts to all emergency contacts via SMS and email, including your live location and a Google Maps link.
- **Contact Management**: Add, edit, and test emergency contacts with phone and email fields.
- **Location Sharing**: Automatically includes your current address and coordinates in every alert.
- **Test Messaging**: Test SMS and email delivery to any contact with a single click.
- **Customizable Alerts**: Easily update your contact list and alert message templates.
- **Modern UI**: Built with React, Vite, Tailwind CSS, and shadcn/ui for a beautiful, accessible experience.

## 🆓 Free Messaging APIs Used

- **EmailJS**: 200 free emails/month ([emailjs.com](https://www.emailjs.com/))
- **TextBelt**: 1 free SMS/day ([textbelt.com](https://textbelt.com/))
- **Geolocation**: Built-in browser API
- **Reverse Geocoding**: [BigDataCloud](https://www.bigdatacloud.com/)

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
# Using HTTPS
git clone https://github.com/your-username/empower-her-response-system.git
cd empower-her-response-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
- Copy `.env.example` to `.env.local` and fill in your EmailJS and TextBelt keys.
- See `MESSAGING_SETUP.md` for a step-by-step guide.

### 4. Start the Development Server
```bash
npm run dev
```
- Visit [http://localhost:8080](http://localhost:8080) in your browser.

## ✨ Usage

- **Add Contacts**: Enter name, phone, email, and relationship.
- **Test Alerts**: Click the message icon (📨) to send a test SMS/email.
- **Send Emergency Alert**: Press the EMERGENCY ALERT button to notify all contacts with your location.

## 📦 Build for Production
```bash
npm run build
```
- Output is in the `dist/` folder.

## 📋 Project Structure

- `src/components/` — UI components (EmergencyButton, EmergencyContacts, etc.)
- `src/services/` — Messaging and location logic
- `src/pages/` — Main app pages
- `.env.local` — Your API keys (never commit this!)

## 📝 Documentation
- See `MESSAGING_SETUP.md` for full setup and API instructions.

## 🛡️ Security & Privacy
- All sensitive keys are stored in environment variables.
- No personal data is stored on a server; all alerts are sent directly from your device.

## 🙏 Credits
- [EmailJS](https://www.emailjs.com/)
- [TextBelt](https://textbelt.com/)
- [BigDataCloud](https://www.bigdatacloud.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

## 📧 Support
For help, open an issue or check the console for error messages.
Live on: https://empower-her-response-system-bexe.vercel.app/

---

**Empowering safety, one alert at a time.**
