# To-Do List App

This is a simple To-Do List application built with React, Redux, and Redux Persist. It allows users to add, remove, and mark tasks as completed.

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/to-do-application.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd to-do-application
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

To start the development server:

```bash
npm start

## Task Management

### Local State Management with useState Hook
The application uses the `useState` hook to manage tasks locally. When the app initializes, it fetches tasks from the Redux store and sets them as local state. This allows tasks to be displayed and managed within the component without directly interacting with the Redux store for every operation.

### Redux State Management
Redux is used to manage the global state of the application, including the task list. The Redux store contains the task list, and actions are dispatched to add, remove, and toggle task completion. Redux reducers handle these actions to update the state accordingly.

### Redux Persist for Local Storage
Redux Persist is used to persist the task list in local storage. This ensures that tasks remain saved even after the user refreshes the page or closes the browser. When the application initializes, it retrieves the task list from local storage and initializes the Redux store with the persisted data.

## Technologies Used
- React: Frontend library for building user interfaces.
- Redux: State management library for managing application state.
- Redux Persist: Library for persisting Redux state to local storage.
- Tailwind CSS: Utility-first CSS framework for quickly building custom designs.
