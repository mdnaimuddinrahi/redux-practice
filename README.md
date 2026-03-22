# Redux Practice Projects

This repository contains my practice projects while learning **Redux** with **React**.

I am currently practicing state management and building small applications using Redux.

## Branches

* **flight-booking** – A simple flight booking application to practice Redux state management.
  Branch: https://github.com/mdnaimuddinrahi/redux-practice/tree/flight-booking

* **to-do-app** – A basic todo application to practice Redux actions, reducers, and store.
  Branch: https://github.com/mdnaimuddinrahi/redux-practice/tree/to-do-app

* **product-grocery-app** – A basic grocery shop application to practice Redux actions, reducers, and store.
  Branch: https://github.com/mdnaimuddinrahi/redux-practice/tree/product-grocery-app

* **vedio-web-app** – A basic vedio learning management tool.
  Branch: https://github.com/mdnaimuddinrahi/redux-practice/tree/vedio-web-app

* **blog-app** – A basic Blog management app.
  Branch: https://github.com/mdnaimuddinrahi/redux-practice/tree/blog-app

## Purpose

I created these projects to learn and practice how Redux works in real applications.

# Scalable Redux Toolkit Architecture

A clean and scalable Redux Toolkit architecture designed for large React applications.
This project demonstrates how to organize Redux logic using a **feature-based structure**, centralized API services, selectors, and async actions.

---

# 🚀 Overview

This architecture follows modern best practices recommended by the Redux team.
It separates concerns properly so applications remain **maintainable, scalable, and easy to understand**.

Key ideas used in this structure:

* Feature-based folder organization
* Redux Toolkit slices
* Centralized API services
* Async logic with `createAsyncThunk`
* Reusable selectors
* Clean import patterns

---

# 📁 Project Structure

```
src
│
├── app
│   ├── store.js
│   ├── hooks.js
│   └── rootReducer.js
│
├── features
│   ├── cart
│   │   ├── cartSlice.js
│   │   ├── cartSelectors.js
│   │   ├── cartThunks.js
│   │   └── index.js
│   │
│   ├── products
│   │   ├── productSlice.js
│   │   ├── productSelectors.js
│   │   ├── productAPI.js
│   │   └── index.js
│
├── services
│   └── api.js
│
├── components
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages
│   ├── Home.jsx
│   └── CartPage.jsx
│
├── utils
│   └── helpers.js
│
├── App.jsx
└── main.jsx
```

---

# 🧠 Architecture Explanation

## 1. App Layer

The **app folder** contains the global Redux configuration.

* `store.js` → Configures Redux store
* `rootReducer.js` → Combines all reducers
* `hooks.js` → Custom Redux hooks

---

## 2. Features Layer

Each feature manages its own Redux logic.

Example:

```
features/cart
```

Contains:

* `cartSlice.js` → Redux slice
* `cartSelectors.js` → Selectors
* `cartThunks.js` → Async logic
* `index.js` → Clean exports

This keeps each feature **independent and scalable**.

---

## 3. Services Layer

The **services folder** contains centralized API configurations.

Example:

```
services/api.js
```

This allows all API calls to use the same configuration.

Benefits:

* Easier API management
* Cleaner async code
* Reusable request logic

---

## 4. Components Layer

Reusable UI components.

Examples:

* Navbar
* ProductCard
* Buttons
* Layout elements

These components should remain **UI focused** and avoid business logic.

---

## 5. Pages Layer

Pages represent application screens.

Examples:

* Home
* Cart page
* Product list page

Pages combine components and connect them to Redux.

---

# ⚙️ Store Configuration Example

```javascript
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
})
```

---

# 🔄 Async Actions Example

Redux Toolkit supports async logic using `createAsyncThunk`.

Example:

```javascript
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await api.get('/products')
    return response.data
  }
)
```

---

# 🎯 Benefits of This Architecture

* Scales well for large applications
* Keeps Redux logic organized
* Improves maintainability
* Reduces code duplication
* Makes onboarding easier for teams

---

# 📚 Technologies Used

* React
* Redux Toolkit
* React Redux
* Axios (for API requests)

---

# 💡 Best Practices

* Keep components focused on UI
* Place business logic in slices or thunks
* Use selectors to access state
* Keep features independent
* Centralize API logic

---

# 📌 Conclusion

This architecture provides a **clean and scalable foundation** for building modern React applications using Redux Toolkit.
It follows best practices used by experienced developers and helps maintain a well-structured codebase as the application grows.

