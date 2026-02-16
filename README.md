# 🚖 QuickRide

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: Active](https://img.shields.io/badge/Status-Active%20Development-success)
![Tech: Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS%20(ES6+)-f7df1e)

**QuickRide** is a minimalist, professional ride-booking application built with pure **HTML5, CSS3, and Modern JavaScript**. 

This project demonstrates core Full-Stack concepts (CRUD, State Management, MVC Architecture) implementation **without frameworks**, serving as a solid foundation before transitioning to React.

## ✨ Features

- **Component-Driven UI**: Modular rendering of booking lists similar to React components.
- **MVC Architecture**: Strict separation of concerns:
  - **`storage.js`**: Data Layer (LocalStorage CRUD).
  - **`ui.js`**: Presentation Layer (DOM manipulation, Toasts).
  - **`app.js`**: Controller (Logic, Events, Data Wiring).
- **Real-Time Simulation**:
  - **Fare Estimation**: Calculates price based on vehicle type and randomized distance.
  - **Status Updates**: Simulates "Driver Search" with async promises (Pending ➝ Driver Assigned).
- **Modern Styling**: Dark Mode support, CSS Variables, and responsive Grid layouts.
- **Zero Dependencies**: No libraries/frameworks. Just pure code.

## 📂 Project Structure

```text
/
├── index.html          # Semantic HTML5 entry point
├── css/
│   └── style.css       # Modern CSS with Variables & Flexbox/Grid
└── js/
    ├── app.js          # Controller: Entry point & Event Listeners
    ├── ui.js           # View: UI Rendering & Notification Logic
    └── storage.js      # Model: LocalStorage Data Management
```

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Open `index.html`**
    - **Recommended**: Use **VS Code Live Server** extension for the best experience (to support ES6 Modules).
    - Or simply open the file in Chrome/Edge/Firefox.

## 🛠️ Usage

1.  **Book a Ride**: Fill in the form. Watch the fare estimate update instantly when you change vehicle types.
2.  **Observe**:
    - The "Confirm Booking" button shows a loading state.
    - A Toast notification appears upon success.
    - The booking is added to the "Active Bookings" list with status **"Pending"**.
3.  **Wait**: After 5 seconds, the system simulates finding a driver, and the status updates to **"Driver Assigned"**.
4.  **Persist**: Refresh the page. Your bookings remain saved in LocalStorage.

## 🔮 Future Scope

This project is prepared for migration to a modern stack:
- **Phase 1**: Migration to **React** (Components ➝ React Components).
- **Phase 2**: Backend integration with **Node.js/Express** (replacing `storage.js`).
- **Phase 3**: Real-time updates using **Socket.io**.

---
*Built with ❤️ by [Your Name]*