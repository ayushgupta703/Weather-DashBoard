# Real-Time Weather Dashboard


A MERN stack application built for the Afford Medical coding contest that displays real-time weather data for any city worldwide.

## Features Implemented

✅ **Core Requirements**
- City search functionality
- Real-time weather data display (temperature, conditions, humidity, wind speed)
- Clean, responsive UI
- Error handling for invalid cities
- Loading states

✅ **Enhanced UI**
- Modern card-based design
- Weather condition icons
- Responsive layout (mobile & desktop)
- Animated loading spinner
- Detailed weather metrics

✅ **Bonus Features**
- Dark/Light mode toggle
- Persistent theme preference (localStorage)

## Tech Stack

**Frontend:**
- React.js
- Axios for API calls
- CSS3 with custom animations

**Backend:**
- Node.js
- Express
- Axios for weather API requests

**API:**
- OpenWeatherMap API

## Project Structure

```
weather-dashboard/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main component
│   │   └── App.css       # Styling
│   └── package.json
├── server/               # Node backend
│   ├── routes/           # API routes
│   ├── server.js         # Server configuration
│   └── package.json
├── .gitignore
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Set up backend**
   ```bash
   cd server
   npm install
   cp .env.example .env
   ```
   - Add your OpenWeatherMap API key in `.env`

3. **Set up frontend**
   ```bash
   cd ../client
   npm install
   ```

## Running the Application

1. **Start backend server** (from `/server` directory)
   ```bash
   npm start
   ```
   Server runs on `http://localhost:5000`

2. **Start frontend** (from `/client` directory)
   ```bash
   npm start
   ```
   App runs on `http://localhost:3000`


## Screenshots

![image](https://github.com/user-attachments/assets/b1ab48d0-42bb-48e2-b706-795a133a9b46)   ![image](https://github.com/user-attachments/assets/5d57e092-f821-4e3a-807a-f00e9eba4c81)
![image](https://github.com/user-attachments/assets/d57142ea-e864-44b1-b779-f49fdc5fdc3c)   ![image](https://github.com/user-attachments/assets/f240a060-a991-4759-9054-75edfb9f63bf)



