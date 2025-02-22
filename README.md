Car Store API 🚗
A RESTful API for managing car listings and processing customer orders. The API allows users to create, read, update, and delete (CRUD) cars, place orders, and track revenue from sales.

📌 Features
✅ Car Management

Add new cars with brand, model, year, price, category, and stock quantity.
Retrieve a list of all available cars or filter by brand, model, or category.
Get details of a specific car by its ID.
Update car details (e.g., price, quantity).
Delete a car from the database.
✅ Order Management

Customers can place an order by providing their email and selecting a car.
Orders reduce the available stock of the selected car.
If stock reaches 0, the car is marked as "out of stock".
Prevents orders if requested quantity is greater than available stock.
✅ Revenue Calculation

Aggregates total revenue from all orders in the system.
Retrieves the sum of all completed purchases.
✅ Error Handling

Handles invalid inputs, missing data, and insufficient stock.
Returns clear error messages with HTTP status codes.
✅ Timestamps

All data includes createdAt and updatedAt timestamps for tracking.
✅ Database Schema

Uses MongoDB with Mongoose models for structured data storage.
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Validation: Joi, Mongoose built-in validators
Error Handling: Express middleware
Version Control: Git

🚀 Getting Started (Local Setup)

1️⃣ Prerequisites
Ensure you have the following installed:

Node.js (v16 or later) - Download
MongoDB (Local or Cloud via MongoDB Atlas)

2️⃣ Clone the Repository
git clone https://github.com/MuntasirAbid/car-shop-server.git
cd car-shop-server

3️⃣ Install Dependencies
npm install

4️⃣ Set Up Environment Variables
Create a .env file in the root directory and add the following:
PORT=8000
DATABASE_URL= replace your own mongo url

5️⃣ Start the Server
npm run:dev
The API will be running at http://localhost:8000

🛠️ API Endpoints

🔹 Car Management
Method Endpoint Description
POST /api/cars Create a new car
GET /api/cars Get all cars (or filter by brand, model, category)
GET /api/cars/:carId Get a specific car by ID
PUT /api/cars/:carId Update car details
DELETE /api/cars/:carId Delete a car

🔹 Order Management
Method Endpoint Description
POST /api/orders Place a new order
GET /api/orders/revenue Get total revenue from orders
