# Mystical Voyages

Mystical Voyages is a web application that allows users to explore and book travel packages. It provides a user-friendly interface for browsing different travel packages, viewing package details, and making bookings. The application also includes an admin section where administrators can manage travel packages and view bookings.

## Technologies Used

- Frontend: React, React Router, Axios, Bootstrap
- Backend: Node.js, Express.js, MongoDB, Passport.js
- Authentication: JWT (JSON Web Tokens), Google OAuth 2.0
- Deployment: Render (Backend), Netlify (Frontend)

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/UtsavRaithatha/wmc-travel-agency.git
```

2. Install the dependencies for both frontend and backend.

```bash
cd mystical-voyages
cd client
npm install

cd ..
cd server
npm install
```

3. Run the Application

```bash
cd client
npm start

cd ..
cd server
npm start
```

The application should now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend).

## Features

- User Registration and Login using email/password or Google OAuth.
- View a list of available travel packages with details.
- View individual travel package details.
- Make bookings for travel packages with details of the number of persons and selected dates.
- View and edit user profile.
- Admin section to manage travel packages and view bookings.
- Logout functionality for both users and admins.

## API Endpoints

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login with email and password.
- `GET /auth/google`: Redirects to Google OAuth for login.
- `GET /auth/google/callback`: Callback URL for Google OAuth login.
- `GET /api/auth/check`: Check if a user is authenticated.
- `GET /logout`: Logout and destroy the session.
- `GET /api/explore`: Get a list of all travel packages.
- `GET /api/explore/:key`: Get details of a specific travel package by key.
- `POST /api/booking/:userid/:key`: Make a booking for a travel package.
- `DELETE /api/delete-package/:key`: Delete a travel package (admin only).
- `GET /api/view-bookings`: View all bookings (admin only).