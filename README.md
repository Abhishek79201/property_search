# Property Search Application

A web application that allows users to search for properties using various filters. It is built with **Next** on the frontend and offers two different backends: one using **Next.js API routes** and another using a **Node.js API backend**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Property search with filters such as area, price, and property type.
- Responsive user interface built with React.
- Two backend options: Next.js API routes or Node.js API.
- Same frontend functionality, but different backends behind the scenes.

## Technologies Used

- **Frontend**: React, Next.js
- **Backend**:
  - Option 1: Next.js API routes
  - Option 2: Node.js with Express.js
- **Database**: MongoDB
- **Hosting**: Vercel (Frontend), Render.com (Node.js Backend)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Git

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Abhishek79201/property_search.git
   cd property_search
   ```

2. **Set up environment variables**:
   Create an `.env` file with the following:

   ```bash
   MONGODB_URI = mongodb+srv://abhishek:Abhi%40290@dotodo.newsp.mongodb.net/?retryWrites=true&w=majority&appName=dotodo
   ```

   For the backend, use the appropriate URL:

   - **Next.js API routes**:

     ```bash
     NEXT_BACKEND_URL = https://property-infynno.vercel.app/api
     ```

   - **Node.js backend**:
     ```bash
     NEXT_BACKEND_URL = https://property-search-backend.onrender.com/api
     ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

## Usage

This application is hosted on two different websites, both functioning the same from the user's perspective but calling different backends behind the scenes:

- **Using Next.js API routes**:  
  [https://property-infynno.vercel.app/](https://property-infynno.vercel.app/)

  In this version, the backend API is handled directly by the Next.js API routes.

- **Using Node.js API backend**:  
  [https://propertysearchnodebackend.vercel.app/](https://propertysearchnodebackend.vercel.app/)

  In this version, the backend API is handled by a Node.js server hosted separately on Render.

Both sites offer the same frontend experience but demonstrate how different backends can be used to handle data retrieval and processing.

## License

This project is licensed under the MIT License.
