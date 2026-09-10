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

Guest users should be able to:

View the EventCrew home page.

Search and filter volunteering opportunities.

View complete opportunity information including details, images, required skills and weather information.

View the About Us page.

View the Contact Us page.

Register as a volunteer.

Register as an organization.

Log in to an existing account.

### 🙋 Volunteer users

Volunteer users should be able to:

Register a volunteer account and log in using their email and password.

Access the volunteer home page and dashboard.

Search and filter volunteering opportunities.

View complete opportunity information including details, images, required skills and weather information.

Apply for an opportunity and include an application message.

View the status of submitted applications and withdraw an application when needed.

View upcoming approved opportunities and completed opportunities in their volunteering history.

View and edit their volunteer profile.

Select and update their skills.

Delete their account.

Log out of the application.

### 🏢 Organization users

Organization users should be able to:

Register an organization account, select an organization type and log in using their email and password.

Access the organization home page and dashboard.

Create volunteering opportunities and provide all required information including title, description, category, type, compensation, date, time, deadline, location, number of volunteers, minimum age and additional requirements.

Add required skills and images to opportunities.

View, edit and delete opportunities created by the organization.

View applications submitted by volunteers and approve or reject them.

View and edit the organization profile.

Delete the organization account.

Log out of the application.

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

Follow these steps to run the EventCrew frontend locally.

### 1. Clone the repository

git clone https://github.com/HussamAymanAmara/EventCrew-client.git
cd EventCrew-client

### 2. Install the project dependencies

npm install

This installs the dependencies already listed in package.json, including React, React Router, Axios, Bootstrap and React Bootstrap.

### 3. Configure the environment variable

Create a .env file in the project root and add the EventCrew backend API URL:

VITE_API_URL=http://localhost:5000

If you are using the deployed backend, replace the local URL with the deployed backend URL.

### 4. Make sure the backend is running

The frontend depends on the EventCrew backend for authentication, opportunities, applications, profiles, skills and database operations. Follow the setup instructions in the EventCrew backend repository and make sure its URL matches VITE_API_URL.

Backend repository:

https://github.com/HussamAymanAmara/EventCrew-server

### 5. Run the frontend

npm run dev

Vite will display the local development URL, normally:

http://localhost:5173

Open that address in your browser to use EventCrew.

## 📁 Repository

EventCrew frontend repository:

https://github.com/HussamAymanAmara/EventCrew-client