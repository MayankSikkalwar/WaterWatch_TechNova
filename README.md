<div align="center">
  <img src="https://img.icons8.com/color/96/000000/water.png" alt="WaterWatch Logo" width="80" />
  
  <h1>💧 WaterWatch</h1>
  <p><strong>Predict. Prepare. Protect: An AI-Powered Smart City Water Management Platform</strong></p>

  <p>
    <a href="#-problem-statement">Problem</a> •
    <a href="#-solution">Solution</a> •
    <a href="#-key-features">Features</a> •
    <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
    <a href="#-installation--setup">Setup</a>
  </p>
</div>

---

## 🌍 Problem Statement
With rapid urbanization and changing climate patterns, cities face increasingly unpredictable water scarcity. Traditional models for water distribution are historically reactive—meaning authorities only dispatch water tankers *after* a neighborhood runs dry. This leads to inefficient supply chains, panic among citizens, and misallocated resources.

## 💡 Solution
**WaterWatch** is an enterprise-grade SaaS platform built for municipal corporations and city operators. It utilizes data modeling to forecast water demand, monitor shortage risks in real time, and proactively recommend tanker dispatches across multiple city wards, ensuring equitable water distribution before a crisis hits. 

---

## ✨ Key Features

- **📊 Executive Dashboard:** A comprehensive, premium UI built with modern glassmorphism that tracks total demand, active tankers, risk levels, and prediction accuracy.
- **🔮 AI Demand Forecast:** Trend analysis algorithms that dynamically chart weekly water consumption vs. upcoming predictions.
- **🗺️ Risk Heatmap Indexing:** At-a-glance geo-visual mapping of city wards flagged by color-coded risk (Low, Moderate, High, Critical).
- **🚚 Smart Tanker Dispatch Engine:** Automated table system that recommends tanker allocation per ward based on real-time urgency and pipeline telemetry.
- **🚨 Live Alert Timeline:** Real-time push notifications indicating sudden supply drops, predicted shortages, and complaint volume spikes.
- **🔍 Root Cause Analytics:** Factorized metrics tracking how population density, supply hours, and rainfall impact the scarcity index.

---

## 🛠️ Tech Stack

### Frontend Architecture
- **React.js (Vite):** Blazing fast UI rendering and hot module replacement.
- **React Router DOM v7:** Client-side routing for seamless navigation.
- **Axios:** Promise-based HTTP client for secure backend API communication.
- **Vanilla CSS3:** Custom, zero-dependency modern enterprise styling.
- **Lucide-React:** Lightweight, pixel-perfect iconography.
- **React Context API:** Clean global state management for predictions, alerts, and ward data mapping.

### Backend Infrastructure
- **Node.js (Express):** Robust, fast, and scalable REST API layer.
- **MongoDB (Mongoose):** Flexible NoSQL document database for structured dynamic storage.
- **CRON & Axios:** Automated scheduling and reliable telemetry data fetching.

---

## 📸 Platform Sneak Peek

*(Add your winning screenshot here! Simply drop your dashboard image into the repository and link it below)*

```html
<!-- Example: <img src="./docs/dashboard.png" width="100%"> -->
```

---

## 🚀 Installation & Setup

### Requirements
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/YourOrganization/WaterWatch_TechNova.git
cd WaterWatch_TechNova
```

### 2. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
*The frontend will boot up dynamically at `http://localhost:5173`.*

### 3. Backend Setup
```bash
# In a new terminal window
cd backend
npm install
npm run dev
```
*Note: Ensure you set up a `.env` file in the backend folder containing your `MONGO_URI`.*

---

## 🔮 Future Scope
- **IoT Integration:** Real-time sensor hooks directly connected to main city pipelines.
- **Advanced Predictive ML:** Switching to robust time-series forecasting (LSTM neural networks) for extreme weather anomalies.
- **Mobile Application:** A React Native port for tanker drivers to receive routing optimization live.

---

<div align="center">
  <b>Built with 🩵 for TechNova Hackathon</b>
</div>
