# Mystical Voyages - A Travel Agency Website

Mystical Voyages is a web application that allows users to explore and book travel packages. It provides a user-friendly interface for browsing different travel packages, viewing package details, and making bookings. The application also includes an admin section where administrators can manage travel packages and view bookings.

# Website Link

https://coruscating-seahorse-2f2f42.netlify.app

# Live Demo

[Live Demo Link](https://youtu.be/rOvbiF6imag)

### Access Credentials

- **Admin**:
  - Email: admin@gmail.com
  - Password: Admin@123

- **user**:
  - Email: user@gmail.com
  - Password: User@123

## Screenshots

### Authentication Page

![Authentication Page](/client/src/assets/images/Authentication.png)

### Admin Home Page

![Admin Home Page](/client/src/assets/images/Admin-Home-Page.png)

### Admin Features

![Admin Features](/client/src/assets/images/Admin-Features.png)

### Add Travel Package Page

![Add Travel Package Page](/client/src/assets/images/Add-Travel-Package.png)

### Bookings Page

![Bookings Page](/client/src/assets/images/Bookings-Page.png)

### User Home Page

![User Home Page](/client/src/assets/images/User-Home-Page.png)

### User Features

![User Features](/client/src/assets/images/User-Features.png)

## Project Overview

The Mystical Voyages Travel Agency website is a captivating project that brings the magic of the wizarding world to life through curated travel packages. With the aim of offering fans an immersive experience, the project's purpose is to provide enchanting getaways inspired by the enchanting universe of wizards and witches. Its primary goal is to transport travelers into the heart of their favorite fantasy realm, offering meticulously designed itineraries that recreate iconic locations and activities. Through this, the project aspires to create unforgettable memories for participants and foster a community of like-minded enthusiasts. The significance of this endeavor lies in its ability to blend fantasy with reality, offering fans a chance to live out their wizarding dreams and forge connections with fellow fans.

## Features

### Basic Features
- Authentication using JWT and Google OAuth 2.0
- View Travel Packages
- Profile, About, Contact and FAQs Page
- Logout functionality
- Password Complexity Check

### User Features

- View Travel Packages
- Book Travel Packages

### Admin Features

- View Travel Packages
- Add Travel Packages
- Edit Travel Packages
- Delete Travel Packages
- View Bookings Package-wise

## Tech Stack

- Frontend: React, Bootstrap
- Backend: Node.js Express.js
- Database: MongoDB
- Deployment: Netlify(Frontend), Render(Backend)
- Other: JSON Web Tokens (JWT), Google OAuth2.0

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
- `GET /api/view-bookings`: View all bookings (admin only).

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm or Yarn**: Node.js comes with npm (Node Package Manager) by default. Alternatively, you can use Yarn as well. You can install Yarn by following the instructions [here](https://classic.yarnpkg.com/en/docs/install).
- **MongoDB**: You need a MongoDB database for storing your application's data. You can set up a MongoDB instance locally or use a cloud-based MongoDB service.

#### Environment Variables

- `DB`: Your MongoDB URL
- `JWTPRIVATEKEY`: Your Private Key for JWT
- `SALT`: Salt Value for Hashing
- `KEY`: Your Secret Key
- `CLIENT_ID`: Google Client ID
- `CLIENT_SECRET`: Google Client Secret
- `SECRET`: Your Secret
- `CLIENT_URL`: http://localhost:3000
- `BACKEND_URL`: http://localhost:5000

### Running the Application Locally

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