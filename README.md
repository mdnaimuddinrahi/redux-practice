# 🎬 Video Streaming Web Application

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/) 
[![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)](https://redux.js.org/)
[![Laravel](https://img.shields.io/badge/Laravel-10-red?logo=laravel)](https://laravel.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📄 Overview

A modern Blog Web Application built with **React** and **Redux** on the frontend, and **Laravel** as the backend API. Users can browse, search, filter, and explore blog content efficiently. The application provides a seamless reading experience with features like tag-based filtering, related blog suggestions, and dynamic interactions such as liking and saving blogs.

---

## 🚀 Features

## ✅ Core Features

- **Blog Listing** – Browse all available blogs with featured images, titles, and tags  
- **Search by Title** – Find blogs using keywords in the title  
- **Tag-Based Filtering** – Filter blogs using single or multiple tags  
- **Blog Details** – Full view of a blog including description, tags, and full content  
- **Related Blogs** – Display blogs related by shared tags  


## 🚀 Additional Features

- **Like System** – Users can like blogs and see the total number of likes updated dynamically  
- **Save/Bookmark** – Mark blogs as saved or unsaved for quick access later  
- **Sorting Options** – Sort blogs by newest or most liked  
- **Dynamic UI Updates** – Instant UI updates for like and save actions without page reload (optimistic update)

### 🛠️ Tech Stack
- **Frontend:** React.js, Redux Toolkit, Axios  
- **Backend API:** Laravel 10  
- **State Management:** Redux slices and async actions with Redux Thunk  
- **Styling:** TailwindCSS / CSS modules (adjust as per your project)  

---

## 🏗️ Architecture

**Data Flow:**
1. User triggers an action (search, filter, update)  
2. Action is dispatched to Redux store  
3. Async API call to Laravel backend fetches blog data  
4. Reducer updates the state  
5. UI re-renders with updated data  

**State Management:**
- Global Redux store  
- Separate slices for blogs, filters, and update (likes and Is Saved)  
- Async operations handled via `createAsyncThunk`  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mdnaimuddinrahi/blog-app.git
cd blog-app
```

# 📁 Project Structure

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── description
│   │   └── PostDetailsCard.jsx
│   │
│   ├── grid
│   │   └── BlogGrid.jsx
│   │
│   ├── list
│   │   ├── RelatedBlogList.jsx
│   │   └── RelatedBlogListItem.jsx
│   │
│   ├── navbar
│   │   └── Navbar.jsx
│   │
│   ├── tags
│   │   ├── Tag.jsx
│   │   └── Tags.jsx
│   │
│   └── ui
│       ├── ErroMsg.jsx
│       ├── Loading.jsx
│       └── GoHomeLink.jsx
│
├── features
│   │
│   ├── filter
│   │   └── filterSlice.js
│   │
│   ├── relatedBlogs
│   │   ├── relatedBlogsAPI.js
│   │   └── relatedBlogsSlice.js
│   │
│   ├── blogs
│   │   ├── blogsAPI.js
│   │   └── blogsSlice.js
│   │ 
│   ├── blog
│   │   ├── blogAPI.js
│   │   └── blogSlice.js
│   │ 
│   └── updateBlog
│       ├── updateBlogAPI.js
│       └── updateBlogSlice.js
│
├── layout
│   └── Bloggie.jsx
│
├── pages
│   ├── Details.jsx
│   └── Home.jsx
│
├── sidebar
│   └── Sidebar.jsx
│
├── utils
│   └── axios.js
│
├── App.css
│
├── App.jsx
│
├── index.css
│
├── main.jsx
│
└── rootReducers.jsx
```