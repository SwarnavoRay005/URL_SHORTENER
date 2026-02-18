# 🔗 Modern URL Shortener with QR Generator

A full-stack URL shortener built using the MERN ecosystem, designed to transform long links into compact, shareable short URLs with instant QR code generation. This project focuses on clean API architecture, modern UI design using DaisyUI, and practical backend patterns used in real-world SaaS applications.

---

## 🚀 Project Overview

This application allows users to paste any valid long URL and generate a unique short link. Each generated link redirects to the original destination while tracking click counts. Alongside the shortened link, a QR code is automatically created, making it easy to share links across devices.

The project demonstrates REST API design, MongoDB data modeling, responsive frontend development, and real-time interaction between a React client and an Express backend.

---

## ✨ Key Features

* 🔗 Shorten long URLs instantly
* 📱 Automatic QR code generation & download
* 📊 Click tracking for every short link
* 📋 One-click copy to clipboard
* 🎨 Modern responsive UI built with DaisyUI
* 🧩 Clean separation between API routes and redirect routes

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* DaisyUI + Tailwind CSS
* react-qr-code
* qrcode (QR image download)

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* nanoid (unique short ID generation)
* CORS & RESTful API design

---

## 🧱 Architecture

The backend separates public redirect routes from API endpoints:

* `POST /api/shorten` → Create short URL
* `GET /:shortID` → Redirect to original link

Only essential data is stored in MongoDB:

* `shortID`
* `originalUrl`
* `clicks`

The full short URL is dynamically generated using the request host, ensuring compatibility across localhost, LAN, and production deployments.

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd url-shortener
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=2000
FRONTEND_URL=http://localhost:5173
```

Run the server:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
```

Create `.env`:

```
VITE_BASE_URL=http://localhost:2000
```

Run:

```
npm run dev
```

---

## 📸 How It Works

1. User enters a long URL.
2. React sends a POST request to the Express API.
3. Backend validates the URL and generates a unique shortID.
4. MongoDB stores the original link and click counter.
5. A short link and QR code are returned to the frontend.
6. Visiting the short link redirects and increments analytics.

---

## 🎯 Learning Objectives

This project demonstrates:

* Designing REST APIs with Express
* MongoDB schema modeling & indexing
* Handling CORS and environment configs
* Dynamic URL generation for scalable deployments
* Modern UI composition with DaisyUI
* Full-stack debugging and error handling

---

## 🌟 Future Improvements

* User authentication & dashboard
* Link analytics page
* Custom aliases for short URLs
* Expiration dates for links
* Theming and dark/light mode toggle

---

## 👨‍💻 Author

**Swarnavo Ray**

Built as a full-stack portfolio project to showcase modern MERN development practices, UI design, and backend architecture.

---
