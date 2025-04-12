# ⚖️ Lawsphere

**Lawsphere** is a full-stack legal information platform built to spread legal awareness, provide easy access to legal articles, and assist users through AI and location-based services. The platform features legal blogs, a chatbot for legal help, and a way to discover NGOs near you — all wrapped in a modern, responsive UI with user authentication.

## 🌟 Features

- 📰 **Legal Blogs & Articles**  
  Stay informed with well-written, categorized content on various legal topics.

- 🤖 **Legal Assistant Chatbot**  
  An AI-powered chatbot to assist users with legal questions and basic guidance.

- 📍 **NGOs Nearby**  
  Enter your pincode to discover nearby NGOs that offer legal support and services, using location-based API integration.

- 🔐 **User Authentication**  
  Secure sign-up and login system to manage user access and personalize experience.

## 🛠️ Tech Stack

### Frontend
- **Next.js** – for building the modern React-based UI  
- **Tailwind CSS** – for fast and efficient styling  

### Backend
- **Express.js** – lightweight Node.js backend server for API handling  
- **PostgreSQL** – to store NGO and user data  

### APIs
- **Google Places API / Custom APIs/ Open API** – to fetch nearby NGO data by pincode  

### Deployment
- **Vercel** – for seamless and fast deployment of the Next.js app  

## 🔧 Project Structure (Simplified)

```
lawsphere/
├── app/
│   ├── page.js                 # Landing/Home Page
│   ├── signup/page.js          # Sign Up Page
│   ├── login/page.js           # Login Page
│   ├── ngos/page.js            # NGOs Search Page
│   ├── blog/                   # Blog section
│   └── chatbot/page.js         # Legal Assistant
├── public/
├── styles/
│   └── globals.css
├── components/
│   └── Navbar.js, Footer.js, etc.
├── server/
│   └── server.mjs              # Express server
├── utils/
│   └── db.js, auth.js, api.js  # DB & API utilities
├── .env.local                  # Environment variables
├── README.md
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- PostgreSQL setup
- Google Places API key
- Open API

### Installation

```bash
git clone https://github.com/your-username/lawsphere.git
cd lawsphere
npm install
```

### Run the Project

```bash
npm run dev
```

## 🔐 Environment Variables

Create a `.env.local` file and include:

```env
DATABASE_URL_POSTGRES=your_postgres_url
DATABASE_URL_MYSQL=your_mysql_url
GOOGLE_API_KEY=your_google_places_api_key
```

## 📌 Deployment

The app is deployed on **Vercel** for scalability and performance. Just push to your main branch and Vercel handles the rest.

