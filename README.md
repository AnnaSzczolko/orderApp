<h1 align="center">Order App</h1>

<p align="center">
    <b>Fullstack web application</b> built with <b>React frontend with Redux state management</b> and <b>Node.js / Express</b>
</p>

<p align="center">
  <a href="https://order-app-pied-three.vercel.app">🌐 Live Demo</a> •
  <a href="https://github.com/AnnaSzczolko/orderApp">📂 GitHub Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/State-Redux-764ABC?logo=redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/API-Express-000000?logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/Architecture-Fullstack-orange"/>
    <img src="https://img.shields.io/badge/Status-Live%20Demo-success"/>
</p>

---


## About the Project

This project is a fullstack web application that allows users to browse meals, add them to a cart, and submit orders which are stored on a backend server.

The application demonstrates how a modern frontend built with **React and Redux** communicates with a **Node.js and Express API** to persist data and manage application state.

The project showcases my ability to design and implement a **complete fullstack application**, including frontend UI, global state management, backend API development, and communication between client and server.

The frontend and backend are deployed as separate services (Vercel and Render), reflecting a typical real-world deployment setup.


### Main goals of the project

* practice building a <b>fullstack application </b>
* implement <b> global state management using Redux</b>
* create a <b> REST API using Node.js and Express </b>
* connect a frontend application with a backend server
* handle <b> sending and storing orders </b>
* deploy frontend and backend separately
* maintain a <b> clean project structure </b> and <b> responsive user interface </b>

This project was built independently as part of my developer portfolio.


---


## 🛠 Tech Stack

### Frontend

* React (Vite)
* Redux
* JavaScript (ES6+)
* CSS


### Backend

* Node.js
* Express
* JSON-based data storage


  ### API Communication
- Fetch API
- REST architecture


### Tools

* GitHub
* npm
* Vercel ( frontend deployment)
* Render ( backend deployment)


---
## 🔌 API Endpoints

The backend exposes a simple REST API built with **Node.js and Express**.
https://orderapp-backend-tpks.onrender.com

### GET /

Check if the API server is running.

Response example:

```json
{
  "message": "OrderApp API is running",
  "endpoints": {
    "meals": "/meals",
    "orders": "/orders"
  }
}
```

### GET /meals

Fetch a list of available meals.

The data is loaded from a JSON file on the server.

Response example:

```json
[
  {
    "id": "m1",
    "name": "Sushi",
    "price": 22.99
  }
]
```

### POST /orders

Create a new order.

The order is stored on the server in a JSON file.

Request body example:

```json
{
  "customer": {
    "name": "Anna",
    "street": "Main Street",
    "postalCode": "60-001",
    "city": "Poznan"
  },
  "items": [
    {
      "id": "m1",
      "name": "Sushi",
      "amount": 2,
      "price": 22.99
    }
  ]
}
```

### GET /orders

Retrieve stored orders.

Response example:

```json
[
  {
    "customer": {
      "name": "Anna",
      "street": "Main Street",
      "postalCode": "60-001",
      "city": "Poznan"
    },
    "items": [
      {
        "id": "m1",
        "name": "Sushi",
        "amount": 2
      }
    ]
  }
]
```


---
## 📁 Project Structure


```text
orderApp
│
├── frontend                # React application
│   ├── components          # UI components
│   ├── store               # Redux state management
│   ├── util                # helper functions
│   └── img                 # static assets
│
├── backend                 # Node.js + Express API
│   ├── data                # JSON data storage
│   └── server.js           # backend server entry point
│
└── screenshots             # images used in README
```


---


## ▶️ How to run the project locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AnnaSzczolko/orderApp.git
cd orderApp
```

### 2️⃣ Install backend dependencies 

```bash
cd backend
npm install
node server.js
```

Backend API runs separately and handles order storage.

### 3️⃣ Install frontend dependencies

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

### Open the application

Frontend runs on:

```
http://localhost:3000
```

The frontend communicates with the backend API for fetching meals and submitting orders.


---

## 🚀 Features

* Full communication between frontend and backend
* REST API for data operations
* Backend connected to a database
* Modern frontend setup with Vite
* Clean and readable code structure

---

## User can : 

* Browse available meals
* Add selected meals to the cart
* Modify cart items
* Submit an order
* Store the order on the backend server
* Retrieve stored orders

---

## 📈 What I learned

* building a <b>complete fullstack workflow</b>
* managing global state using <b>Redux</b>
* creating <b>REST APIs with Express</b>
* handling <b>frontend–backend communication</b>
* deploying frontend and backend separately
* structuring a small <b>production-like application</b>

---


## 👩‍💻 About Me

**Anna Szczołko**
Aspiring Junior Frontend / Fullstack Developer
📍 Poznań, Poland

🔗 GitHub: [https://github.com/AnnaSzczolko](https://github.com/AnnaSzczolko)


