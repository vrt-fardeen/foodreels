FoodReels

FoodReels is a video-based food discovery platform where users can browse short-form video content about food and restaurants can showcase their dishes.

# Project Structure

foodreels/
-frontend/          # React + Vite frontend
-backend/          # Express.js backend

# Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- MongoDB installed and running locally
- Git for version control

# Setup Instructions

## 1. Clone the Repository

bash-
git clone https://github.com/vrt-fardeen/foodreels.git
cd foodreels

## 2. Backend Setup

Navigate to the backend directory and install dependencies:

bash-
cd backend
npm install


Required backend dependencies:
- express
- mongoose
- cors
- dotenv
- bcryptjs
- cookie-parser
- jsonwebtoken
- multer
- @imagekit/nodejs
- uuid

Create a `.env` file in the backend directory with the following variables:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint


Start the backend server:
```bash
node server.js

The backend will run on http://localhost:3000

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Required frontend dependencies:
- react
- react-dom
- react-router-dom
- axios

Development dependencies:
- vite
- @vitejs/plugin-react
- eslint and related plugins

Start the frontend development server:
```bash
npm run dev
```
The frontend will run on http://localhost:5173

## Running the Application

1. Start MongoDB service (if not already running)
2. Start the backend server:
```bash
cd backend
node server.js
```
3. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

## Features

- User authentication (register/login)
- Food partner authentication
- Video feed with smooth scrolling
- Like and save functionality
- Food partner profile management
- Video upload and management
- Responsive design for mobile and desktop

## Development

For frontend development:
```bash
cd frontend
npm run dev        # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

For backend development:
```bash
cd backend
node server.js    # Start server
# or use nodemon for development:
nodemon server.js
```

## Browser Support

The application supports all modern browsers including:
- Chrome
- Firefox
- Safari 16+
- Edge

## Notes

- The backend requires a running MongoDB instance
- ImageKit.io credentials are required for image/video handling
- Some features require modern browser capabilities (e.g., backdrop-filter)
- iOS < 16 may have slightly different scroll behavior