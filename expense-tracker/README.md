# 🎯 Naira Expense Tracker

A clean, modern, and responsive React application designed to help you track your daily expenses. This app allows you to add, edit, delete, and filter expenses, all while visualizing your spending habits with a simple and clear dashboard. All currency is formatted for Nigerian Naira (₦).

## Features

**Add Expenses:** An easy-to-use form with validation to add new expenses, including fields for description, amount, and category.

**Edit & Delete:** Full CRUD (Create, Read, Update, Delete) functionality. You can edit any expense's description or amount inline, or delete it with a single click.

**Statistics Dashboard:** Get an instant overview of your finances with:

- Total amount spent

- Total number of expenses

- Highest single expense

<!-- **Spending Breakdown:** A dynamic pie chart from recharts visualizes your spending distribution across different categories. -->

**Category Filtering:** Filter your expense list by "All", "Food", "Transport", "Bills", "Entertainment", or "Others". The statistics dashboard updates automatically based on your filter.

**Responsive Design:** The layout adapts smoothly from mobile to desktop, with a two-column layout on larger screens.

**Plain CSS Styling:** The app is styled using 100% plain, semantic CSS (App.css)—no CSS libraries or frameworks.

## Component Structure

The application is organized into logical, reusable components:

**App.jsx:** The main parent component.

- Holds all application state (e.g., expenses, currentFilter).

- Contains all helper functions and event handlers (e.g., handleAddExpense, handleUpdateExpense).

- Manages the layout and passes state and functions down to child components as props.

**Header.jsx:** A simple component that displays the application title and the current date.

**AddExpenseForm.jsx:** A stateful component that manages its own form inputs and validation, only calling the onAddExpense prop on successful submission.

**CategoryFilter.jsx:** A component that maps over the CATEGORIES constant to render filter buttons.

**ExpenseStats.jsx:** Displays the key statistics (Total, Count, Highest). All data is passed in as props.

**ExpenseList.jsx:** Renders the list of expenses by mapping over the filtered expenses array.

**ExpenseItem.jsx:** The most complex child component. It has two internal modes:

- View Mode: Displays the expense details.

- Edit Mode: Displays inputs to edit the description and amount, with its own local state to manage the edits.

**App.css:** A single, comprehensive stylesheet that contains all CSS rules for the entire application.

## Output
![alt text](<Screenshot 2025-10-29 234854.png>)