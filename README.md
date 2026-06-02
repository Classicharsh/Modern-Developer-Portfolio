Live https://www.harshitprajapati.me/



# Portfolio Website



A full-stack responsive personal portfolio website built with React, Vite, Node.js, Express, and MongoDB.

## Features
- Fully responsive design (Mobile, Tablet, Desktop)
- Dark theme with premium emerald green accents
- Smooth scrolling and animations with Framer Motion
- Contact form connected to a MongoDB backend

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB

---

## Local Development Setup

### Project Structure
```text
├── client/          # Frontend (React + Vite)
├── server/          # Backend (Node.js + Express)
├── package.json     # Root package.json (workspace manager)
└── README.md
```

### Installation
You can install dependencies for both the frontend and backend in one command from the project root:
```bash
npm run install-all
```

### Start Development Servers

1. **Start Backend**:
   ```bash
   npm run dev-server
   ```
   *Runs locally on `http://localhost:5000`*

2. **Start Frontend**:
   ```bash
   npm run dev-client
   ```
   *Runs locally on `http://localhost:5173`*

---

## Production Deployment Guide

Follow these steps to deploy the application to production using MongoDB Atlas, Render, and Vercel.

### 1. Database Setup (MongoDB Atlas)
1. Sign in or sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new project and build a free database cluster (Shared M0 tier).
3. Under **Network Access**, click **Add IP Address** and choose **Allow Access from Anywhere** (`0.0.0.0/0`) since cloud platforms like Render rotate outbound IPs.
4. Under **Database Access**, create a database user with a secure password (make sure not to use special characters like `@` or `:` in the password as it might break the URI connection).
5. Click **Connect** -> **Drivers** and copy the connection string. It should look like:
   `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/portfolio?retryWrites=true&w=majority`
6. Replace `<username>` and `<password>` with your database user credentials.

---

### 2. Backend Deployment (Render)
We recommend deploying the backend to [Render](https://render.com/).

1. Sign in to Render and click **New** -> **Web Service**.
2. Connect your Git repository (GitHub/GitLab).
3. Set the following configurations:
   * **Root Directory**: `server`
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
4. Expand **Advanced** and add the following **Environment Variables**:
   * `PORT`: `10000` (or leave empty; Render assigns one dynamically)
   * `NODE_ENV`: `production`
   * `MONGODB_URI`: *Your MongoDB Atlas connection string from step 1*
   * `FRONTEND_URL`: *Your Vercel production frontend URL (e.g. `https://myportfolio.vercel.app`)*
5. Click **Deploy Web Service** and copy the generated service URL (e.g., `https://portfolio-backend.onrender.com`).

---

### 3. Frontend Deployment (Vercel)
We recommend deploying the frontend to [Vercel](https://vercel.com/).

1. Sign in to Vercel and click **Add New** -> **Project**.
2. Import your Git repository.
3. Configure the project settings:
   * **Framework Preset**: `Vite`
   * **Root Directory**: `client`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Expand **Environment Variables** and add:
   * `VITE_API_URL`: *Your Render backend URL (e.g., `https://portfolio-backend.onrender.com`)*
5. Click **Deploy**.
6. Once deployed, note down your production domain URL and add/update it in the Render backend environment variables as `FRONTEND_URL` to configure CORS correctly.

#### Handling Single Page Application Routing
To ensure routing works correctly on Vercel without returning `404` errors on refresh, create a `vercel.json` file inside the `client` folder with the following contents:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### 4. Custom Domain Setup
To point your custom domain (e.g., `yourname.com`) to your deployed app:

#### Mapping Vercel Frontend to Custom Domain
1. In the Vercel dashboard, go to **Project Settings** -> **Domains**.
2. Enter your custom domain name (e.g., `yourname.com`) and click **Add**.
3. Vercel will provide DNS records. Log into your domain registrar (e.g., GoDaddy, Namecheap) and add the following records:
   * **A Record** (for root domain `@`): Point to `76.76.21.21`
   * **CNAME Record** (for subdomains like `www`): Point to `cname.vercel-dns.com`
4. Wait for SSL certificate generation and DNS propagation (usually takes 5–30 minutes).

#### Mapping Render Backend to Custom Domain (Optional)
If you want a professional subdomain for your API (e.g. `api.yourname.com`):
1. In your Render backend dashboard, go to **Settings** -> **Custom Domains**.
2. Click **Add Custom Domain** and enter `api.yourname.com`.
3. In your DNS registrar, add a **CNAME Record**:
   * Name: `api`
   * Value: *Your Render subdomain URL (e.g., `portfolio-backend.onrender.com`)*
