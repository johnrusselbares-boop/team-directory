
# TeamSpace — Team Directory App

TeamSpace is a React-based team directory application developed
for a laboratory activity. It allows users to browse team member
profiles, search for people, save favorites, and switch between
light and dark modes.

## Features

- Home page with a team overview
- Team directory with at least 8 local user records
- Search by name, role, or department
- Add and remove favorite team members
- Filter the directory to show favorites
- Individual team member profile pages
- Light and dark mode
- Loading indicators and error messages
- Responsive interface using Tailwind CSS
- Page title updates based on the current route
- 404 page for unknown routes

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router DOM
- JavaScript
- Git
- GitHub

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/users` | Team directory |
| `/users/:id` | Individual team member profile |
| `/about` | Project information |
| `*` | 404 page |

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

1. Clone this repository.
2. Open the project directory in your terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## Project Structure

- `src/components/` — Reusable UI components
- `src/data/users.js` — Local team member data
- `src/pages/` — Application pages
- `src/App.jsx` — Routes and shared application state
- `src/main.jsx` — React entry point
- `src/index.css` — Tailwind CSS configuration

## React Concepts Demonstrated

### Props
Reusable components receive user information, favorite
status, button labels, and callback functions through props.

### useState
Manages search input, favorites, dark mode, loading state,
and other interactive UI state.

### useEffect
Simulates local data loading and updates the browser tab
title when the route changes.

### React Router
Provides navigation between the home page, directory,
individual profiles, About page, and 404 page.

## Data Source

All team member records are stored locally in
`src/data/users.js`. The project does not require an external
API or backend database. Sample profile images use external URLs.

## Author

Add your name here.

## License

This project was created for educational purposes.
