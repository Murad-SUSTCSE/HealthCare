# 🏥 HealthCare+ | Complete Healthcare Management System

> A modern, full-stack healthcare platform built with Next.js 16, MongoDB, and AI-powered features. Manage appointments, find hospitals, order medicines, request ambulances, and get instant health advice—all in one place.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.20-green?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🎯 User Roles](#-user-roles)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔐 Authentication](#-authentication)
- [🗄️ Database Models](#️-database-models)
- [🌐 API Routes](#-api-routes)
- [🎨 UI Components](#-ui-components)
- [📧 Email System](#-email-system)
- [🤖 AI Chatbot](#-ai-chatbot)
- [📱 Responsive Design](#-responsive-design)
- [🔒 Security](#-security)
- [📄 License](#-license)

---

## ✨ Features

### 👥 For Patients
- **🔐 Secure Authentication** - JWT-based auth with email verification & password recovery
- **📅 Appointment Booking** - Schedule appointments with doctors at partner hospitals
- **🏥 Hospital Finder** - Browse hospitals by location, specialty, and ratings
- **💊 Medicine Ordering** - Order medicines online with doorstep delivery
- **🚑 Ambulance Service** - Request emergency ambulance with one click
- **🤖 AI Health Advisor** - Get instant health advice from AI-powered chatbot
- **📊 Personal Dashboard** - View appointments, orders, and health stats
- **🔔 Order Tracking** - Track medicine orders in real-time

### 👨‍⚕️ For Doctors
- **📋 Doctor Portal** - Dedicated dashboard for managing practice
- **👤 Professional Profile** - Detailed profile with credentials, specialty, fees
- **📅 Schedule Management** - Set availability and manage time slots
- **👥 Patient Management** - View appointments and patient history
- **🔒 Separate Authentication** - Secure doctor-specific login system
- **🎓 Academic Details** - Support for academic positions and department heads

### 🛡️ For Administrators
- **🚑 Ambulance Fleet** - Manage ambulance providers and vehicles
- **👥 User Management** - Monitor and manage system users
- **📊 Analytics Dashboard** - View system-wide statistics
- **🏥 Hospital Management** - Add and manage hospital listings

---

## 🎯 User Roles

### 1. **Patient** (Default User)
- Primary user of the platform
- Access to all patient-facing features
- Personal health dashboard

### 2. **Doctor**
- Medical professionals registered on the platform
- Separate authentication system
- Profile verification and credentials management

### 3. **Administrator**
- System administrators
- Full access to backend management
- Ambulance and hospital management

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 16.0](https://nextjs.org/) (React 19.2.0)
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com/) + Custom UI Components
- **UI Library:** [Radix UI](https://www.radix-ui.com/) primitives
- **Animations:** Tailwind CSS Animations + Custom CSS
- **Theme:** Dark/Light mode with `next-themes`
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js (Next.js API Routes)
- **Database:** [MongoDB 6.20](https://www.mongodb.com/) with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens) with HTTP-only cookies
- **Password Hashing:** bcryptjs
- **Email Service:** Nodemailer
- **AI Integration:** Vercel AI SDK (for chatbot)

### Development Tools
- **Package Manager:** pnpm
- **Linting:** ESLint
- **CSS Processing:** PostCSS + Autoprefixer

---

## 📁 Project Structure

```
HealthCare+/
│
├── app/                          # Next.js App Router
│   ├── api/                      # Backend API Routes
│   │   ├── admin/               # Admin management APIs
│   │   ├── ambulance/           # Ambulance request APIs
│   │   ├── appointments/        # Appointment booking APIs
│   │   ├── auth/                # Authentication APIs
│   │   ├── chatbot/             # AI chatbot API
│   │   ├── dashboard/           # Dashboard stats APIs
│   │   ├── doctor/              # Doctor profile APIs
│   │   ├── hospitals/           # Hospital listing APIs
│   │   ├── medicines/           # Medicine catalog APIs
│   │   └── orders/              # Order management APIs
│   │
│   ├── auth/                     # Authentication Pages
│   │   ├── login/               # Patient login
│   │   ├── sign-up/             # Patient registration
│   │   ├── doctor/              # Doctor authentication
│   │   ├── userForget/          # Password recovery
│   │   └── user-verify-otp/     # OTP verification
│   │
│   ├── dashboard/                # Patient Dashboard
│   │   ├── appointments/        # Appointment management
│   │   ├── hospitals/           # Hospital browsing
│   │   ├── medicines/           # Medicine ordering
│   │   ├── ambulance/           # Ambulance requests
│   │   ├── chatbot/             # Health advisor
│   │   └── orders/              # Order history
│   │
│   ├── doctor/                   # Doctor Portal
│   │   ├── dashboard/           # Doctor dashboard
│   │   ├── profile/             # Profile management
│   │   ├── schedule/            # Schedule setup
│   │   └── patients/            # Patient appointments
│   │
│   ├── admin/                    # Admin Panel
│   │   ├── dashboard/           # Admin dashboard
│   │   ├── ambulances/          # Ambulance management
│   │   └── login/               # Admin login
│   │
│   ├── layout.jsx                # Root layout
│   ├── page.jsx                  # Landing page
│   └── globals.css               # Global styles
│
├── components/                   # React Components
│   ├── ui/                       # Reusable UI components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── form.jsx
│   │   └── [50+ components]
│   ├── sidebar.jsx               # Navigation sidebar
│   ├── theme-provider.jsx        # Theme context
│   └── theme-toggle.jsx          # Dark/light toggle
│
├── lib/                          # Core Libraries
│   ├── mongodb/                  # MongoDB Integration
│   │   ├── models/               # Mongoose Models
│   │   │   ├── User.js           # Patient model
│   │   │   ├── doctor.js         # Doctor model
│   │   │   ├── Appointment.js
│   │   │   ├── Hospital.js
│   │   │   ├── Order.js
│   │   │   ├── Ambulance.js
│   │   │   └── AmbulanceRequest.js
│   │   ├── connection.js         # DB connection handler
│   │   └── auth.js               # JWT utilities
│   └── utils.js                  # Utility functions
│
├── hooks/                        # Custom React Hooks
│   ├── use-toast.js              # Toast notifications
│   └── use-mobile.js             # Responsive detection
│
├── Middleware/                   # Email & Utilities
│   ├── Email.js                  # Email sender
│   ├── Emailconfig.js            # Email configuration
│   └── EmailTemplate.js          # Email templates
│
├── public/                       # Static Assets
│   └── uploads/                  # User uploads
│
├── scripts/                      # Database Scripts
│   └── seed-hospitals.js         # Hospital data seeding
│
├── middleware.js                 # Next.js middleware
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── components.json               # shadcn/ui config
└── package.json                  # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **pnpm** (or npm/yarn)
- **MongoDB** (local or MongoDB Atlas)
- **SMTP Server** (for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Murad-SUSTCSE/HealthCare.git
   cd HealthCare
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/healthcare
   # Or use MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/healthcare

   # JWT Secret (Change in production!)
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

   # Node Environment
   NODE_ENV=development

   # Email Configuration (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=HealthCare+ <noreply@healthcare.com>

   # AI Chatbot (Optional - if using Vercel AI SDK)
   OPENAI_API_KEY=your-openai-api-key
   ```

4. **Set up MongoDB**

   **Option A: Local MongoDB**
   ```bash
   # Ubuntu/Debian
   sudo systemctl start mongod
   ```

   **Option B: Docker**
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

   **Option C: MongoDB Atlas**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get your connection string and add it to `.env.local`

5. **Seed the database (optional)**
   ```bash
   node scripts/seed-hospitals.js
   ```

6. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🔐 Authentication

### JWT-Based Authentication
- **Patient & Doctor** separate authentication systems
- **HTTP-only cookies** for secure token storage
- **bcryptjs** password hashing (10 rounds)
- **Email verification** support (optional)
- **Password recovery** with secure tokens

### Authentication Flow

1. **Sign Up**
   - User/Doctor registers with email & password
   - Password is hashed with bcryptjs
   - JWT token issued and stored in HTTP-only cookie

2. **Login**
   - Credentials validated against MongoDB
   - JWT token generated with 7-day expiry
   - Token stored in secure HTTP-only cookie

3. **Protected Routes**
   - `middleware.js` validates JWT on each request
   - Redirects to login if token invalid/expired

4. **Logout**
   - Cookie cleared
   - Session terminated

### Role-Based Access Control

| Role | Access |
|------|--------|
| Patient | `/dashboard/*` |
| Doctor | `/doctor/*` |
| Admin | `/admin/*` |

---

## 🗄️ Database Models

### User (Patient)
```javascript
{
  name: String,
  email: String (unique, required),
  password: String (hashed),
  phone: String,
  age: Number,
  gender: String,
  address: String,
  emailVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Doctor
```javascript
{
  name: String (required),
  email: String (unique, required),
  password: String (hashed, required),
  phone: String,
  specialty: String,
  mbbsFrom: String,
  currentWorkplace: String,
  additionalDegrees: [String],
  academicPosition: String,
  licenseNumber: String,
  qualifications: String,
  experience: Number,
  consultationFee: Number,
  schedule: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  departmentHead: {
    isDepartmentHead: Boolean,
    department: String,
    institution: String
  },
  profilePicture: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment
```javascript
{
  userId: ObjectId (ref: User),
  doctorId: ObjectId (ref: Doctor),
  hospitalId: ObjectId (ref: Hospital),
  date: Date,
  time: String,
  status: String (pending/confirmed/cancelled),
  reason: String,
  notes: String,
  createdAt: Date
}
```

### Hospital
```javascript
{
  name: String (required),
  address: String,
  phone: String,
  email: String,
  specialty: [String],
  rating: Number,
  facilities: [String],
  location: {
    latitude: Number,
    longitude: Number
  },
  createdAt: Date
}
```

### Order
```javascript
{
  userId: ObjectId (ref: User),
  items: [{
    medicineId: ObjectId,
    name: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String (pending/processing/shipped/delivered),
  deliveryAddress: String,
  paymentMethod: String,
  createdAt: Date,
  deliveredAt: Date
}
```

### Ambulance & AmbulanceRequest
```javascript
// Ambulance
{
  provider: String,
  vehicleNumber: String,
  type: String (basic/advanced),
  available: Boolean,
  location: String
}

// AmbulanceRequest
{
  userId: ObjectId (ref: User),
  ambulanceId: ObjectId (ref: Ambulance),
  pickupLocation: String,
  destination: String,
  status: String (pending/assigned/completed),
  urgency: String (low/medium/high),
  createdAt: Date
}
```

---

## 🌐 API Routes

### Authentication APIs (`/api/auth`)
- `POST /api/auth/signup` - Patient registration
- `POST /api/auth/login` - Patient login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/user` - Get current user
- `POST /api/auth/signupDoctor` - Doctor registration
- `POST /api/auth/loginDoctor` - Doctor login
- `GET /api/auth/userDoctor` - Get current doctor
- `POST /api/auth/loginAdmin` - Admin login
- `POST /api/auth/logoutAdmin` - Admin logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/forgot-password/verify` - Verify reset token
- `POST /api/auth/forgot-password/update-password` - Update password

### Patient APIs
- `GET /api/dashboard/stats` - Dashboard statistics
- `POST /api/appointments/book` - Book appointment
- `GET /api/appointments` - List appointments
- `GET /api/hospitals` - List hospitals
- `GET /api/medicines` - List medicines
- `POST /api/orders` - Create medicine order
- `GET /api/orders` - List orders
- `POST /api/ambulance/request` - Request ambulance
- `GET /api/ambulance/requests` - List ambulance requests

### Doctor APIs (`/api/doctor`)
- `PUT /api/doctor/profile` - Update doctor profile
- `POST /api/doctor/profile-picture` - Upload profile picture
- `GET /api/doctor/profile-picture` - Get profile picture
- `PUT /api/doctor/schedule` - Update schedule
- `GET /api/doctor/appointments` - List doctor appointments
- `POST /api/doctor/appointments/:id/notes` - Add appointment notes

### Admin APIs (`/api/admin`)
- `POST /api/admin/ambulances/providers` - Add ambulance provider
- `DELETE /api/admin/ambulances/providers` - Remove provider
- `POST /api/admin/ambulances/vehicles` - Add vehicle
- `PUT /api/admin/ambulances/vehicles` - Update vehicle
- `DELETE /api/admin/ambulances/vehicles` - Remove vehicle

### AI Chatbot API
- `POST /api/chatbot` - Chat with AI health advisor

---

## 🎨 UI Components

Built with **Radix UI** primitives and **Tailwind CSS**, the project includes 50+ custom components:

### Layout Components
- `sidebar.jsx` - Main navigation sidebar
- `theme-provider.jsx` - Dark/light theme context
- `theme-toggle.jsx` - Theme switcher button

### UI Library (`components/ui/`)
- **Forms:** Input, Textarea, Select, Checkbox, Radio, Switch
- **Buttons:** Button, Button Group, Toggle
- **Feedback:** Toast, Alert, Alert Dialog, Dialog, Sheet
- **Data Display:** Card, Table, Badge, Avatar, Skeleton
- **Navigation:** Tabs, Accordion, Breadcrumb, Pagination
- **Overlays:** Popover, Tooltip, Hover Card, Context Menu
- **Advanced:** Calendar, Date Picker, Carousel, Charts (Recharts)

### Design System
- **Color Palette:** Emerald/Teal/Cyan gradients (light mode), Deep Blue with Purple accents (dark mode)
- **Glassmorphism:** Backdrop blur effects throughout
- **Ambient Orbs:** Animated background elements
- **Smooth Animations:** Tailwind CSS animations + custom keyframes

---

## 📧 Email System

### Configuration
Uses **Nodemailer** for transactional emails:
- Welcome emails
- Email verification
- Password recovery
- Appointment confirmations

### Email Templates (`Middleware/EmailTemplate.js`)
- HTML-based templates with healthcare branding
- Responsive design for all devices

### Setup
Configure SMTP in `.env.local`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

---

## 🤖 AI Chatbot

### Features
- Instant health advice
- Symptom analysis (not a substitute for professional diagnosis)
- Medicine information
- General health tips

### Integration
- Powered by **Vercel AI SDK**
- Supports multiple AI providers (OpenAI, Anthropic, etc.)
- Streaming responses for better UX

### Usage
Navigate to **Dashboard → Health Advisor** and start chatting!

---

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile Menu:** Collapsible sidebar for mobile devices
- **Touch-friendly:** Large tap targets and gestures
- **PWA-ready:** Can be installed as a mobile app

---

## 🔒 Security

### Authentication Security
- ✅ **JWT** with HTTP-only cookies (prevents XSS)
- ✅ **bcryptjs** password hashing (10 rounds)
- ✅ **CSRF protection** via SameSite cookies
- ✅ **Secure headers** in Next.js middleware

### Data Protection
- ✅ **MongoDB connection** over SSL/TLS (Atlas)
- ✅ **Environment variables** for secrets
- ✅ **Input validation** with Zod schemas
- ✅ **SQL Injection** prevention (using Mongoose)

### Best Practices
- ✅ **Rate limiting** (recommended for production)
- ✅ **HTTPS only** (enforce in production)
- ✅ **Secure file uploads** with validation
- ✅ **Password strength** requirements

---

## 📚 Additional Documentation

- [AUTH_CHANGES_README.md](./AUTH_CHANGES_README.md) - Authentication system details
- [MONGODB_SETUP.md](./MONGODB_SETUP.md) - MongoDB setup guide
- [EMAIL_VERIFICATION_GUIDE.md](./EMAIL_VERIFICATION_GUIDE.md) - Email verification setup
- [HOSPITAL_FINDER_FEATURES.md](./HOSPITAL_FINDER_FEATURES.md) - Hospital finder features
- [COMPLETE_DOCUMENTATION.md](./COMPLETE_DOCUMENTATION.md) - File-by-file documentation

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Known Issues

- Production build requires wrapping `useSearchParams()` in `<Suspense>` for `/auth/doctor/doctorReset`
- Email verification implementation is partially complete (frontend ready, backend needs SMTP setup)

---

## 📝 Roadmap

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Video consultation with doctors
- [ ] Prescription upload and OCR
- [ ] Health records storage
- [ ] Insurance claim management
- [ ] Mobile app (React Native)

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Murad-SUSTCSE**
- GitHub: [@Murad-SUSTCSE](https://github.com/Murad-SUSTCSE)
- Repository: [HealthCare](https://github.com/Murad-SUSTCSE/HealthCare)

---

## 🌟 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📞 Support

For issues, questions, or feature requests, please open an issue on [GitHub](https://github.com/Murad-SUSTCSE/HealthCare/issues).

---

<div align="center">
  <strong>Built with ❤️ for better healthcare access</strong>
  <br>
  <sub>© 2025 HealthCare+ | All Rights Reserved</sub>
</div>
