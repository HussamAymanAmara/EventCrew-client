# 🤝 EventCrew Frontend (React)

This is the frontend for **EventCrew**, a volunteer management web application built with **React + Vite**.

## 🎯 Description

EventCrew connects volunteers with organizations that provide volunteering opportunities.

The application supports two types of users:

### 👤 Volunteers

- Register and log in
- Browse available volunteer opportunities
- Search and filter opportunities
- View opportunity details
- View required skills and opportunity information
- Apply for opportunities
- View application status
- Withdraw applications
- View upcoming opportunities
- View volunteering history
- Manage their profile
- Select and update their skills

### 🏢 Organizations

- Register and log in
- Create volunteer opportunities
- Edit existing opportunities
- Delete opportunities
- Add opportunity images
- Select required skills for opportunities
- View their active opportunities
- Review volunteer applications
- Approve or reject applications
- Manage their organization profile

The application uses the EventCrew backend API to store and retrieve data from the PostgreSQL database.

## 🧑‍💻 User Requirements

### Volunteers

- Sign up using personal information, email, and password
- Log in using a registered account
- Browse available opportunities
- Filter and search for opportunities
- View full opportunity details
- Apply for an opportunity
- View application status
- Withdraw an application when needed
- View upcoming and previous opportunities
- Update personal profile information
- Select and save personal skills

### Organizations

- Sign up using organization and contact information
- Log in using a registered organization account
- Create new volunteering opportunities
- Add opportunity details such as:
  - Title
  - Description
  - Category
  - Opportunity type
  - Compensation
  - Date and time
  - Location
  - Number of volunteers needed
  - Minimum age
  - Required skills
- Edit existing opportunities
- Delete opportunities
- View applications submitted by volunteers
- Approve or reject applications
- Update organization profile information

The application stores the logged-in user information using **localStorage**.

## 🛠️ Technologies

- React
- Vite
- JavaScript
- React Router
- Axios
- HTML
- CSS
- LocalStorage
- REST API
- Open-Meteo API for opportunity weather information

## 🚀 Getting Started

Clone the frontend repository:

```bash
git clone https://github.com/HussamAymanAmara/EventCrew-client.git