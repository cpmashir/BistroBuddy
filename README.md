# BistroBuddy - Useless Food Partner Matcher

## Project Overview
BistroBuddy is a lighthearted web application designed to help users connect based on their unique and eccentric food preferences. Whether you fancy pickles on pizza or chocolate-covered avocados, this platform matches you with others who share your bizarre tastes!

## Author
C P M Ashir

## Table of Contents
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Changelog](#changelog)
- [License](#license)

## Demo
Link to live demo: [BistroBuddy Live Demo](https://your-demo-link-here.com) (replace with actual link when available)

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express

## Features
- User registration with unique food preferences
- Matching system to find food partners
- Simple and intuitive interface

## Requirements
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/BistroBuddy.git
   cd BistroBuddy
2.Install backend dependencies:

bash
Copy code
cd backend
npm install express


3.Start the backend server:
bash
Copy code
node server.js


4.Open the frontend:
Open frontend/index.html in your web browser.
Usage
Register your name and your unique food preference.
Use the match feature to find others who share your bizarre food tastes.
Endpoints
POST /register


Description: 
Register a user with their food preference.
Request Body:
json
Copy code
{
  "name": "User Name",
  "foodPreference": "Bizarre Food Preference"
}
GET /match

Description: Find a food partner based on a specified food preference.
Query Parameters:
foodPreference: The bizarre food preference you want to match with.
License
This project is licensed under the MIT License. See the LICENSE file for details.

