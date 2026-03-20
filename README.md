# 🎬 Video Streaming Web Application

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/) 
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)](https://redux.js.org/)
[![Laravel](https://img.shields.io/badge/Laravel-10-red?logo=laravel)](https://laravel.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📄 Overview

A modern Video Streaming Web Application built with **React** and **Redux** on the frontend, and **Laravel** as the backend API. Users can browse, search, filter, and view video details efficiently.

---

## 🚀 Features

### ✅ Core Features
- **Video Listing** – Browse all available videos with thumbnails, titles, and tags  
- **Pagination** – Navigate through video pages seamlessly  
- **Search by Title** – Find videos using keywords in the title  
- **Tag-Based Filtering** – Filter videos using single or multiple tags  
- **Video Details** – Full view of a video including description, tags, and player  
- **Related Videos** – Display videos related by shared tags  

### 🛠️ Tech Stack
- **Frontend:** React.js, Redux Toolkit, Axios  
- **Backend API:** Laravel 10  
- **State Management:** Redux slices and async actions with Redux Thunk  
- **Styling:** TailwindCSS / CSS modules (adjust as per your project)  

---

## 🏗️ Architecture

**Data Flow:**
1. User triggers an action (search, filter, pagination)  
2. Action is dispatched to Redux store  
3. Async API call to Laravel backend fetches video data  
4. Reducer updates the state  
5. UI re-renders with updated data  

**State Management:**
- Global Redux store  
- Separate slices for videos, filters, and pagination  
- Async operations handled via `createAsyncThunk`  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mdnaimuddinrahi/video-web-app.git
cd video-web-app