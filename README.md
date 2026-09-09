# 🤝 EventCrew Frontend

EventCrew is a volunteer management web application built with React and Vite.

## 🎯 Description

EventCrew is designed to provide a simple platform that connects people who want to volunteer with organizations that provide volunteering opportunities.

The platform brings the volunteering process into one place instead of requiring volunteers and organizations to manage opportunities and applications separately.

EventCrew has two main types of users: volunteers and organizations. Volunteers use the platform to discover volunteering opportunities that match their interests and skills, while organizations use the platform to publish and manage opportunities and communicate application decisions.

The frontend provides the user interface for the EventCrew system and communicates with the EventCrew backend through REST API requests. The backend is responsible for storing and retrieving information from the PostgreSQL database.

The application includes public pages that allow visitors to browse volunteering opportunities before signing in, as well as separate interfaces for volunteers and organizations after authentication.

EventCrew is focused on providing a clear and simple volunteering experience through opportunity discovery, application management, profile management, organization management, and volunteer skill requirements.

---

## 🧑‍💻 User requirements

### 👤 Guest users

Guest users can:

- View the EventCrew home page
- Browse available volunteering opportunities
- Search for opportunities
- Filter opportunities by category, city, compensation type, and date
- View full opportunity details
- View opportunity images
- View the skills required for an opportunity
- View weather information for an opportunity
- View the About Us page
- View the Contact Us page
- Register as a volunteer
- Register as an organization
- Log in to an existing account

### 🙋 Volunteer users

Volunteer users can:

- Log in using their registered email and password
- View the volunteer home page
- Browse available volunteering opportunities
- Search and filter opportunities
- View complete opportunity details
- View required skills for an opportunity
- View opportunity weather information
- Apply for volunteering opportunities
- Add an application message when applying
- View the status of submitted applications
- Withdraw an application
- View upcoming opportunities
- View volunteering history
- View their volunteer dashboard
- View their profile
- Edit their profile information
- Select and update their skills
- Log out of the application

### 🏢 Organization users

Organization users can:

- Log in using their registered email and password
- View the organization home page
- View the organization dashboard
- Create new volunteering opportunities
- Select an opportunity category
- Select the opportunity type
- Add compensation information
- Add the event date and time
- Add the application deadline
- Add location information
- Define the number of volunteers needed
- Define a minimum volunteer age
- Select required skills
- Add additional volunteer requirements
- Add an opportunity image
- Save an opportunity as draft, open, completed, or cancelled
- Edit existing opportunities
- Delete opportunities
- View applications submitted for their opportunities
- Approve volunteer applications
- Reject volunteer applications
- View their organization profile
- Edit their organization profile
- Log out of the application

### 💾 Session handling

- Logged-in user information is stored using `localStorage`
- The application uses the stored user role to provide the appropriate volunteer or organization interface
- Users can log out to remove their current session

---

## 🛠️ Technologies

The EventCrew frontend uses the following technologies:

### React

React is used to build the user interface using reusable functional components.

The project uses React features including:

- Functional components
- Props
- `useState`
- `useEffect`
- Conditional rendering
- Event handling
- Form handling
- Array mapping

### Vite

Vite is used as the frontend development and build tool.

It provides:

- Fast development server
- React project setup
- Hot Module Replacement
- Frontend build support

### JavaScript

JavaScript is used for the frontend application logic, including:

- Form handling
- API requests
- Data processing
- User interaction
- Conditional rendering
- Application state

### React Router

React Router is used for navigation between the different pages of the application.

It is used for:

- Page routing
- Dynamic opportunity routes
- Navigation
- Route parameters
- Programmatic navigation

Examples of application routes include:

```text
/login
/register
/opportunities
/opportunities/:id
/volunteer/home
/volunteer/dashboard
/organization/home
/organization/dashboard
```

### Axios

Axios is used to communicate with the EventCrew backend REST API.

It is used for:

- `GET` requests
- `POST` requests
- `PUT` requests
- `DELETE` requests

### HTML

HTML structure is written through JSX inside the React components.

### CSS

CSS is used to style the EventCrew interface, including:

- Navigation
- Forms
- Opportunity cards
- Dashboards
- Profiles
- Home pages
- Responsive page layouts

### React Bootstrap and Bootstrap

React Bootstrap and Bootstrap are used for selected interface components and frontend styling.

### LocalStorage

Browser `localStorage` is used to keep the currently logged-in user's information available during the session.

### REST API

The frontend communicates with the EventCrew backend through REST API endpoints.

The API handles information related to:

- Authentication
- Volunteers
- Organizations
- Opportunities
- Applications
- Categories
- Skills
- Opportunity images

### Open-Meteo API

Open-Meteo is used to provide weather information related to volunteering opportunities.

### Environment variables

Vite environment variables are used to configure the backend API address.

The frontend uses:

```env
VITE_API_URL=http://localhost:5000
```

The value is accessed through the frontend configuration instead of repeating the backend URL throughout the application.

### ESLint

ESLint is included in the project to help identify JavaScript and React code issues during development.

### npm

npm is used to install and manage the frontend project dependencies.

---

## 🚀 Getting started

Follow the steps below to download and run the EventCrew frontend on your computer.

### 1. Install Node.js

EventCrew requires Node.js and npm.

Download and install Node.js from:

https://nodejs.org/

Installing Node.js also installs npm.

After installation, open a terminal and verify that Node.js is installed:

```bash
node --version
```

Then verify npm:

```bash
npm --version
```

Both commands should display installed version numbers.

---

### 2. Install Git

Git is required if you want to clone the project directly from GitHub.

Download and install Git from:

https://git-scm.com/

Verify the installation:

```bash
git --version
```

---

### 3. Clone the EventCrew frontend repository

Open PowerShell, Command Prompt, Git Bash, or the VS Code terminal.

Run:

```bash
git clone https://github.com/HussamAymanAmara/EventCrew-client.git
```

This downloads the EventCrew frontend project to your computer.

---

### 4. Open the project folder

Move into the downloaded project:

```bash
cd EventCrew-client
```

You can also open the folder using Visual Studio Code.

If the `code` command is available, run:

```bash
code .
```

---

### 5. Install the frontend dependencies

The project dependencies are listed inside `package.json`.

Install them by running:

```bash
npm install
```

npm will automatically download the required packages and create the `node_modules` folder.

There is no need to manually install each React package separately when `npm install` completes successfully.

---

### 6. Create the frontend environment file

The repository contains a `.env.sample` file showing the environment variable required by the project.

Create a new file in the root of the frontend project named:

```text
.env
```

The project structure should contain:

```text
EventCrew-client/
├── .env
├── .env.sample
├── package.json
├── src/
└── vite.config.js
```

Inside `.env`, add:

```env
VITE_API_URL=http://localhost:5000
```

This tells the frontend where the EventCrew backend API is running.

The `.env` file is used locally and should not contain unnecessary private information.

The `.env.sample` file is provided as an example of the required environment configuration.

---

### 7. Set up the EventCrew backend

The frontend cannot provide all system functionality by itself.

The EventCrew backend must also be installed and running because the frontend retrieves and stores information through the backend API.

The backend is responsible for:

- User accounts
- Volunteer profiles
- Organization profiles
- Opportunities
- Applications
- Categories
- Skills
- Opportunity images
- PostgreSQL database communication

Follow the setup instructions provided in the EventCrew backend repository before running the complete application.

The backend should run on:

```text
http://localhost:5000
```

This must match the frontend `.env` configuration:

```env
VITE_API_URL=http://localhost:5000
```

---

### 8. Make sure PostgreSQL is running

The PostgreSQL database is used by the EventCrew backend.

The database is not connected directly to the React frontend.

Make sure:

1. PostgreSQL is installed
2. The EventCrew database has been created
3. The backend database configuration is correct
4. The backend server successfully connects to PostgreSQL

If the backend is not running correctly, frontend operations such as login, registration, opportunities, applications, and profiles will not work.

---

### 9. Start the EventCrew backend

Open a separate terminal inside the EventCrew backend project.

Start the backend according to its README instructions.

When it starts successfully, it should be available at:

```text
http://localhost:5000
```

Keep the backend terminal running.

---

### 10. Start the EventCrew frontend

Return to the terminal containing:

```text
EventCrew-client
```

Run:

```bash
npm run dev
```

Vite will start the frontend development server.

The terminal should display output similar to:

```text
Local: http://localhost:5173/
```

---

### 11. Open EventCrew in the browser

Open:

```text
http://localhost:5173
```

The EventCrew home page should appear.

---

### 12. Keep both servers running

For the complete EventCrew application to work, both applications must run at the same time.

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

Use separate terminals for the frontend and backend.

Example:

```text
Terminal 1
EventCrew-server
→ backend running on port 5000

Terminal 2
EventCrew-client
→ frontend running on port 5173
```

---

### 13. Stop the frontend

To stop the Vite development server, return to its terminal and press:

```text
Ctrl + C
```

The same command can be used in the backend terminal when you want to stop the backend server.

---

### Quick start after the first setup

After Node.js, the dependencies, `.env`, backend, and database have already been configured, you normally only need to:

```bash
cd EventCrew-client
npm run dev
```

while the EventCrew backend is also running.

---

## 📁 Repository

EventCrew frontend repository:

https://github.com/HussamAymanAmara/EventCrew-client