# 📘 Software Requirements Specification (SRS)
## Expense Tracker Application

---

## 📄 1. Introduction

### 1.1 Purpose
The purpose of this document is to describe the requirements of a simple **Expense Tracker Application** developed for learning and practicing **Redux Toolkit** with backend API integration using **Laravel**.

### 1.2 Scope
This application allows users to:
- Add transactions (income/expense)
- Update existing transactions
- Delete transactions
- View total balance

The system is designed as a learning project and focuses on state management and API integration rather than production-level features.

### 1.3 Technologies Used
- **Frontend:** React.js, Redux Toolkit  
- **Backend:** Laravel (REST API)  
- **Database:** MySQL  

---

## 🎯 2. Overall Description

### 2.1 Product Perspective
This is a single-page application (SPA) that communicates with a Laravel backend API to perform CRUD operations on transactions.

### 2.2 Product Functions
- Create a new transaction
- Update transaction details
- Delete a transaction
- Display all transactions
- Calculate and display total balance

### 2.3 User Characteristics
- Basic users with no authentication required
- Intended for developers learning Redux Toolkit

### 2.4 Constraints
- No authentication or authorization
- Limited UI/UX features
- No advanced filtering or reporting

---

## ⚙️ 3. Functional Requirements

### 3.1 Add Transaction
- User can add a transaction with:
  - Name
  - Type (Income / Expense)
  - Amount
- Data is sent to backend API and stored in database

### 3.2 Update Transaction
- User can edit an existing transaction
- Updated data is sent to backend and reflected in UI

### 3.3 Delete Transaction
- User can remove a transaction
- Deleted from backend and UI updates accordingly

### 3.4 View Transactions
- All transactions are fetched from API and displayed in a list

### 3.5 Calculate Balance
- Total balance is calculated dynamically:
  - Income adds to total
  - Expense subtracts from total

---

## 🔄 4. Data Flow

1. User interacts with UI (Add/Edit/Delete)
2. Redux Toolkit dispatches actions
3. Async thunks call Laravel API
4. API processes request and returns response
5. Redux store updates state
6. UI re-renders automatically

---

## 🗄️ 5. Data Model

### Transaction Object Structure
```json
{
  "id": 1,
  "name": "Salary",
  "type": "income",
  "amount": 10000
}
```

### 📁 6. Project Structure

```
src
│
├── app
│   └── store.js
│
├── assets
|   ├── edit.svg
│   └── delete.svg
|
├── components
|   ├── Transactions
│   │   ├──Transaction.jsx
│   │   └── Transactions.jsx
│   │
│   ├── Balance.jsx
│   ├── Form.jsx
│   └── Layout.jsx
│
├── features
│   └── transactions
│       ├── transactionSlice.js
│       └── transactionAPI.js
│
├── utils
│   └── helpers.js
│
├── App.jsx
└── main.jsx

```