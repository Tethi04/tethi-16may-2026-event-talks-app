# Event Talks App

This is a simple, single-page web application for a 1-day technical event. It displays a schedule of talks, including details like title, speakers, category, duration, and description. Users can search and filter talks based on their categories.

## Features

-   **Event Schedule:** Displays a clear, timed schedule for the entire day.
-   **Talk Details:** Each talk includes a title, speaker(s), category, duration, and a brief description.
-   **Search by Category:** Users can easily filter talks by typing keywords into a search bar (e.g., "AI", "Frontend").
-   **Responsive Design:** (Implicitly handled by basic CSS, but good to mention for clarity).

## Technologies Used

-   **Backend:** Node.js with Express.js
-   **Frontend:** HTML, CSS, JavaScript
-   **Data Storage:** JSON file for talk data

## Setup and Local Development

Follow these steps to get the application up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Tethi04/tethi-16may-2026-event-talks-app.git
    cd tethi-16may-2026-event-talks-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the Node.js server, run the following command:

```bash
npm start
```

Once the server is running, open your web browser and navigate to:

```
http://localhost:3000
```

## Usage

The website will display the full schedule of talks. You can use the search bar at the top of the page to filter talks by category. For example, typing "AI" will show only talks related to Artificial Intelligence, while typing "Frontend" will show talks related to frontend development.

## Project Structure

```
.
├── public/
│   ├── index.html    # Main HTML structure
│   ├── style.css     # Styling for the application
│   └── script.js     # Frontend logic (data fetching, rendering, search)
├── talks.json      # JSON file containing all talk data
├── server.js       # Node.js Express server
├── package.json    # Project dependencies and scripts
└── .gitignore      # Specifies intentionally untracked files to ignore
└── README.md       # This file
```
