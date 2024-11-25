 # 🛒 DigiMart  

This is an **E-commerce platform** built using React.js and React Router, featuring a comprehensive range of functionalities, including **role-based access control (RBAC)** for admin and customer roles. The project demonstrates a secure and user-friendly admin panel with access control, making it ideal for managing users, products, and orders.

---

## ✨ Features  

### User Features  
- 🔐 User authentication (Login, Signup, Forgot Password)  
- 🛍️ Product browsing and detailed views  
- 🗂️ Category-wise product filtering  
- 🛒 Shopping cart functionality  
- 🔍 Search functionality  
- 💳 Payment processing with success and cancel pages  
- 📦 Order management  

### Admin Features  
- 🛠️ Admin panel for managing products, users, and orders  
- 🔑 **Role-Based Access Control (RBAC)**:
  - Admins have exclusive access to sensitive operations like product and user management.
  - Customers can only access shopping-related features.  

### Additional Features  
- 📱 Responsive design for all devices  
- 🚫 Error handling for undefined routes  

---

## 🛠️ Technologies Used  

**Frontend:**  
- ⚛️ React.js  
- 🚦 React Router  
- 🎨 HTML5 & CSS3  
- 💻 JavaScript  

**Backend:**  
- 🟢 Node.js  
- 🛣️ Express.js  

**Database:**  
- 🍃 MongoDB  

**Other:**  
- 💳 Stripe for payment processing  

---

## 📸 Screenshots 
![Homepage Screenshot](/Home_Page.png) 
![Admin Page Screenshot](/Admin_Page.png)

## 🔑 Testing Credentials
Use the following credentials to test the RBAC features:

**Admin Role:** 
- **Email:** admin@gmail.com
- **Password:** admin123
- Click on profile pic to go to admin page
  
**Customer Role:** 
- **Email:** customer@example.com
- **Password:** customer123


## 💳 Payment Testing
Since this is a test environment, use the following card details for payment:
- **Card Number:** 4242 4242 4242 4242
- **Expiry Date:** Any future date (e.g., 12/25)
- **CVC:** 123

## 🚀 Getting Started  

These instructions will help you set up the project on your local machine for development and testing purposes.

### 📋 Prerequisites  

Ensure that you have the following installed:  
- 🟢 Node.js (v14 or higher)  
- 📦 npm (v6 or higher)  

---

### ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

### ▶️ Running the Application

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

