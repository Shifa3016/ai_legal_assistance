# ⚖️ Lawsphere

**Lawsphere** is a full-stack legal information platform built to spread legal awareness, provide easy access to legal articles, and assist users through AI and location-based services. The platform features legal blogs, a chatbot for legal help, and a way to discover NGOs near you — all wrapped in a modern, responsive UI with user authentication.

**Presentation Link:** https://docs.google.com/presentation/d/1li-qZUJTsdr9XJvtri2rI-TX-7kgPxG7/edit?usp=sharing&ouid=100332202078166223510&rtpof=true&sd=true

**Deployment Link:** https://ai-legal-assistance.vercel.app/

**Prototype Video Link:** https://drive.google.com/drive/folders/1-KEDL5K9-ehtG34rU9jZt6YvroW94Dpk?usp=drive_link
## 🌟 Features

- 📰 **Legal Blogs & Articles**  
  Stay informed with well-written, categorized content on various legal topics.

- 🤖 **Legal Assistant Chatbot**  
  An AI-powered chatbot to assist users with legal questions and basic guidance.

- 📍 **NGOs Nearby**  
  Enter your pincode to discover nearby NGOs that offer legal support and services, using location-based API integration.

- 🔐 **User Authentication**  
  Secure sign-up and login system to manage user access and personalize experience.

## Working of Project

Our project is a legal assistance website designed to provide users with a platform for information, support, and interaction related to legal matters. It includes authentication features, dynamic content, and a chatbot for real-time help. Here's how it works:

1. Homepage
The landing page introduces users to the platform's features, including legal blogs, NGO resources, and chatbot assistance.
It acts as a central hub linking to other parts of the website.

2. User Authentication (Login/Signup)
New users can register using their name, email, and password.
Existing users can log in securely using encrypted credentials.
JWT-based session management is used to authenticate users and maintain login states.

3. Blog Page
Offers articles and posts related to laws, rights, legal tips, and current legal issues.
Helps educate and inform users about the legal landscape.

4. Chatbot – Legal Assistant
A built-in AI-powered chatbot offers basic legal guidance and information.
Users can ask legal questions and get quick responses based on predefined logic or AI models.
This improves accessibility to legal help for those who can't afford lawyers.

5. NGO Library Page
A curated list of NGOs that provide legal aid, categorized by location, specialty, or issue type.
Users can view details about each NGO, including contact information and support offered.
Helps bridge the gap between legal aid seekers and NGOs.

6.  Logout & Session Management
Users can log out securely, which clears their session cookie.
Protected routes like dashboard and chatbot are accessible only when logged in.

7. Error Handling
Custom 404 and 500 pages enhance user experience and gracefully handle bad routes or internal errors.

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
│   └── chatbot/chatbot.html        # Legal Assistant
├── public/
├── styles/
│   └── globals.css
├── components/
│   └── Navbar.js, Footer.js, etc.
├── server.mjs              # Express server-Backend File
│
├── controllers/
│   └── auth.mjs  # provide authentication
├── router/
│ └── auth.mjs, pages.mjs, ngo.mjs  # router
├── .env.local                  # Environment variables
├── README.md
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- PostgreSQL setup
- Open API

## Set-Up Instructions

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



