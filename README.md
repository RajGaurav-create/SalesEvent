🛒 SalesEvent – Frontend

A modern e-commerce frontend built using React with authentication, role-based dashboards, cart functionality, Razorpay integration, and experimental voice consultation powered by OpenAI LLM.

🚀 Features
🔐 Authentication System

User Registration Page

User Login Page

Role-based access (Customer / Admin)

👤 Customer Dashboard

View available products

Add products to cart

Remove products from cart

Place orders

Online payment integration using Razorpay

View previous orders

🛠 Admin Dashboard

Manage products

View customer orders

Monitor overall business activity

🎤 Voice Consultation (Experimental Feature)

Attempted integration of voice-based consultation

Powered by OpenAI LLM

Currently not fully functional due to API usage limits (maximum quota reached)

🏗 Tech Stack

React (Frontend Framework)

Tailwind CSS (Styling)

Axios (API Communication)

Razorpay (Payment Gateway)

OpenAI API (Voice / LLM Integration)

📂 Project Structure (Frontend)
src/
 ├── components/
 ├── pages/
 │    ├── Login
 │    ├── Register
 │    ├── CustomerDashboard
 │    ├── AdminDashboard
 ├── services/
 ├── App.js
 └── main.jsx
💳 Payment Integration

Customers can securely make payments using Razorpay test/production keys.

Flow:

Add products to cart

Click Buy

Razorpay checkout opens

On success → Order stored in database

🎤 Voice Consultation Status

The voice consultation feature was implemented using OpenAI APIs but is currently:

❌ Not fully operational

❌ Hitting maximum API quota

🚧 Under improvement

Future plan:

Upgrade API plan

Optimize token usage

Add real-time streaming responses
