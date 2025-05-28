# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# student-search
# Student Searchbar

## Project Overview  
This is a full-stack single-page application (SPA) built with React.js frontend and a Node.js/Express backend. It features a search bar to find students by name, implementing lazy loading and debounce to optimize API calls. The backend serves student data from a local JSON file without using any database.

---

## Features  
- Search students by name with a minimum of 3 characters input  
- Lazy loading with 300ms debounce to reduce API calls  
- Shows up to 5 matching student suggestions in a dropdown  
- Displays full student details (Name, Class, Roll Number) on selection  
- Clearable search input with a clickable "×" icon  
- Responsive design for desktop and mobile devices  
- Backend API reads student data from a local JSON file (no database required)

---

## Tech Stack

- **Frontend:** React.js, Axios, CSS  
- **Backend:** Node.js, Express  
- **Data Storage:** Local JSON file (no database)  

---

## Getting Started

### Clone the Repository

bash
git clone https://github.com/Harman-shergill/student-searchbar.git
cd student-searchbar
