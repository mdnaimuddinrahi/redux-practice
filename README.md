# 📄 Software Requirements Specification (SRS)

## 🧑‍💼 Job Seeker Application (React + Redux Toolkit + Laravel API)

---

## 1. 📌 Introduction

### 1.1 Purpose

This document defines the requirements for the **Job Seeker Application**, a full-stack learning project built using **React (frontend)**, **Redux Toolkit (state management)**, and **Laravel (backend API)**.

### 1.2 Scope

The system enables users to:

* Create, edit, and delete job posts
* Search jobs by title
* Filter jobs by type
* Sort jobs by salary

The backend API is responsible for **data persistence and business logic**, while the frontend handles **UI and state management**.

---

## 2. 🧾 Overall Description

### 2.1 Product Perspective

This is a **Single Page Application (SPA)** with a RESTful backend:

* **Frontend:** React + Redux Toolkit
* **Backend:** Laravel (REST API)
* **Communication:** HTTP (JSON आधारित API)

---

### 2.2 Product Features

* Add new job posts
* Edit existing jobs
* Delete jobs
* Search jobs by title
* Filter jobs by type (Remote, Internship, Full-Time)
* Sort jobs by salary

---

### 2.3 User Characteristics

* General users (no authentication required)
* Basic knowledge of web interaction

---

## 3. ⚙️ Functional Requirements

### 3.1 Job Management

#### 3.1.1 Add Job

* Users can create a job with:

  * Title
  * Type (`remote`, `internship`, `full_time`)
  * Salary
  * Deadline

#### 3.1.2 Edit Job

* Users can update existing job details
* Form is pre-filled with existing data

#### 3.1.3 Delete Job

* Users can delete a job
* UI updates instantly after deletion

---

### 3.2 Search Functionality

* Search jobs by title
* Debounced input for optimized API calls

---

### 3.3 Filter Functionality

* Filter jobs by type:

  * Remote
  * Internship
  * Full-Time

---

### 3.4 Sorting

* Sort jobs by salary:

  * Ascending (Low → High)
  * Descending (High → Low)

---

## 4. 🔌 API (Laravel Backend)

### 4.1 Overview

The backend is built with **Laravel**, providing RESTful APIs for job management.

---

### 4.2 API Endpoints

#### 📥 Get All Jobs

```
GET /api/jobs
```

Supports query params:

```
/api/jobs?search=developer&type=remote&sort=high
```

---

#### ➕ Create Job

```
POST /api/jobs
```

Request Body:

```json
{
  "title": "Software Engineer",
  "type": "full_time",
  "salary": 50000,
  "deadline": "2026-04-01"
}
```

---

#### ✏️ Update Job

```
PUT /api/jobs/{id}
```

---

#### ❌ Delete Job

```
DELETE /api/jobs/{id}
```

---

### 4.3 API Responsibilities

* Handle CRUD operations
* Validate input data
* Apply filtering, searching, and sorting
* Return JSON responses

---

## 5. 🧠 State Management (Redux Toolkit)

### 5.1 Store Structure

```json
{
  "jobList": [],
  "filters": {
    "search": "",
    "type": "",
    "sort_by_salary": ""
  },
  "isLoading": false,
  "isError": false,
  "error": ""
}
```

---

### 5.2 Actions

* fetchJobList
* createJobSeek
* updateJobSeek
* deleteJobSeek
* filterBySearch
* filterByType
* filterBySort

---

## 6. 🖥️ Non-Functional Requirements

### 6.1 Performance

* Efficient API calls using debounce
* Optimized rendering using React

### 6.2 Usability

* Clean UI
* Easy navigation and filtering

### 6.3 Maintainability

* Modular components
* Scalable Redux structure
* RESTful API design

### 6.4 Scalability

* Can integrate authentication
* Can handle pagination and large datasets

---

## 7. 📊 Data Model

```json
{
  "id": number,
  "title": string,
  "type": "remote | internship | full_time",
  "salary": number,
  "deadline": "YYYY-MM-DD",
  "created_at": datetime,
  "updated_at": datetime
}
```

---

## 8. 🔄 System Workflow

1. User performs action (add/edit/delete/search/filter)
2. Frontend dispatches Redux action
3. API request sent to Laravel backend
4. Backend processes and returns response
5. Redux updates state
6. UI re-renders automatically

---

## 9. 🧪 Limitations

* No authentication system
* Basic validation only
* No pagination implemented

---

## 10. 🚀 Future Improvements

* Authentication (JWT / Laravel Sanctum)
* Pagination & infinite scroll
* Advanced filtering
* Notifications (toast messages)
* Role-based access control

---

## 11. 🛠️ Technologies Used

### Frontend

* React.js
* Redux Toolkit
* JavaScript (ES6+)

### Backend

* Laravel (PHP Framework)
* MySQL (Database)

---

## 12. 📌 Conclusion

This project demonstrates a **full-stack job management system** using:

* React for UI
* Redux Toolkit for state management
* Laravel for backend API

It is designed as a **learning project** to understand real-world application architecture including CRUD operations, API integration, and state management.

---


### 📁 6. Project Structure

```
src
│
├── app
│   └── store.js
│
├── assets
│   └── logo.svg
|
├── components
|   ├── Pages
│   │   ├── Form
│   │   │   └── JobForm.jsx
│   │   │ 
│   │   └── List
│   │       ├── JobList.jsx
│   │       └── JobListItem.jsx
│   │
|   ├── Router
│   │   └── LayoutRouter.jsx
│   │
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── features
│   └── JobList
│       ├── JobListApi.js
│       └── JobListSlice.js
│
├── utils
│   └── axios.js
│
├── App.jsx
└── main.jsx

```