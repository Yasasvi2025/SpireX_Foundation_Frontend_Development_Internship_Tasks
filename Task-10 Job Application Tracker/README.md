# Task-10:💼JobTrack — Job Application Tracker

A modern and responsive **Job Application Tracker** that helps users organize, monitor, and manage their job applications from a single dashboard.

JobTrack provides a clean dashboard with application statistics, status tracking, search and filtering, goals, calendar tracking, notes, notifications, theme switching, and browser-based data persistence using `localStorage`.

---

## 📌 Project Overview

**JobTrack** is a web-based application designed to simplify the process of managing multiple job applications.

Instead of maintaining job application details manually, users can use JobTrack to:

* Add new job applications
* Edit existing applications
* Delete applications
* Track application status
* Search applications
* Filter applications by status
* Sort applications
* View application statistics
* Monitor interview and application goals
* View applications on a calendar
* Maintain personal notes
* Receive application-related notifications
* Switch between dark and light themes
* Store application data locally in the browser

The project is built using standard frontend technologies and does not require a backend server.

---

## ✨ Features

### 📊 Dashboard

The dashboard provides an overview of the user's job search activity.

It displays:

* Total applications
* Interview applications
* Offers
* Pending applications
* Rejected applications
* Application progress
* Interview progress
* Monthly application progress
* Application status distribution

---

### 📝 Application Management

Users can manage their applications directly from the application tracker.

#### Add Application

Users can add a new application by providing:

* Company name
* Job role
* Application date
* Application status

The application is automatically added to the tracker and saved in browser storage.

#### Edit Application

Existing applications can be edited whenever application details change.

Users can update:

* Company
* Role
* Date
* Status

#### Delete Application

Users can remove applications from the tracker.

A confirmation message is displayed before deletion.

---

## 📋 Application Status

JobTrack supports the following application statuses:

* **Interview**
* **Offer**
* **Pending**
* **Rejected**
* **Withdrawn**

The status is displayed visually in the application table and is also used for dashboard statistics.

---

## 🔍 Search

The application tracker provides application searching.

Users can search by:

* Company name
* Job role

The application list updates dynamically while typing.

The global search and application search fields are synchronized.

### Keyboard Shortcut

Press:

`Ctrl + K`

to focus the global search field.

---

## 🎯 Filter

Applications can be filtered by their current status.

Available filters include:

* All
* Interview
* Offer
* Pending
* Rejected
* Withdrawn

Filtering works together with search and sorting.

---

## ↕️ Sorting

Applications can be sorted using:

* Newest
* Oldest
* Company
* Status

This makes it easier to organize and review a large number of applications.

---

## 📄 Pagination

The application table uses pagination to keep the interface clean.

The current configuration displays:

**6 applications per page**

The pagination system includes:

* Previous button
* Page numbers
* Next button
* Current result information

Example:

`Showing 1 to 6 of 28 applications`

---

## 📈 Application Statistics

JobTrack automatically calculates application statistics from the stored application data.

The statistics include:

* Total applications
* Interviews
* Offers
* Pending applications
* Rejected applications

Percentages are also calculated dynamically.

For example:

* Interview percentage
* Offer percentage
* Pending percentage
* Rejected percentage

---

## 🍩 Application Status Donut Chart

The dashboard includes a dynamic donut chart representing application status distribution.

The chart is generated using CSS `conic-gradient`.

The chart automatically updates when:

* An application is added
* An application is edited
* An application is deleted

---

## 🎯 Goals

JobTrack includes progress tracking for:

### Application Goal

Default target:

**50 applications**

### Interview Goal

Default target:

**5 interviews**

The dashboard displays progress bars showing how close the user is to completing each goal.

Users can edit their goals through the goal editing functionality.

---

## 📅 Calendar

The Calendar view provides a monthly overview of application dates.

Applications are displayed on their corresponding dates.

The calendar automatically:

* Detects the current month
* Generates the correct number of days
* Places applications on their application dates
* Displays the corresponding company names

---

## 📝 Notes

JobTrack includes a notes section for keeping useful job-search information.

Example notes include:

* Interview preparation
* Daily application goals
* Technical preparation
* Important reminders

Users can:

* Add notes
* View notes
* Delete notes

Notes are stored in browser `localStorage`.

---

## 🔔 Notifications

The notification system provides a notification popup.

It includes:

* Notification count
* Notification indicator
* Notification list
* Empty notification state
* Clear notifications option

Users can clear all notifications at once.

---

## 👤 Profile Menu

The profile menu provides quick profile-related actions.

Available actions include:

* Account
* Sign out

The interface also closes the profile menu automatically when the user clicks outside it.

---

## 🌙 Dark / ☀️ Light Theme

JobTrack supports both:

* Dark theme
* Light theme

The selected theme is stored in `localStorage`.

Therefore, the user's theme preference remains available after refreshing the page.

---

## 💾 Local Storage

JobTrack uses browser `localStorage` for client-side persistence.

Application data is stored using:

```text
jobtrackApplications
```

Notes are stored using:

```text
jobtrackNotes
```

Theme preference is stored using:

```text
jobtrackTheme
```

This allows users to retain their data without requiring a backend database.

---

## 🛡️ Safe User Input

The JavaScript includes an `escapeHTML()` function to safely display user-entered values.

This protects dynamically generated application and note content from being interpreted directly as HTML.

Escaped values include:

* Company names
* Job roles
* Status values
* Note titles
* Note text
* Company logos

---

## 🔔 Toast Notifications

JobTrack uses toast messages to provide feedback after important actions.

Examples include:

* Application added successfully.
* Application updated successfully.
* Application deleted successfully.
* Note added.
* Note deleted.
* Goals updated.
* All notifications cleared.
* Signed out successfully.

Toast messages automatically disappear after a short period.

---

## 📊 Monthly Progress Chart

The dashboard contains a monthly application progress visualization.

It displays application activity across the recent months and includes:

* Monthly labels
* Progress line
* Area visualization
* Current application value

The chart is generated dynamically using SVG path data.

---

## 🏢 Sample Applications

The project includes sample application data for demonstration.

Example companies include:

* Google
* Microsoft
* Amazon
* Swiggy
* TCS
* Infosys
* Meta
* Apple
* Netflix
* Adobe
* Wipro
* Accenture
* IBM
* Deloitte
* Capgemini
* Zoho
* Flipkart
* Razorpay
* Paytm
* Cognizant
* HCL
* Tech Mahindra
* Dell
* Oracle
* LinkedIn
* Atlassian
* Salesforce

These sample records demonstrate the different application statuses and tracker functionality.

---

# 🛠️ Technologies Used

## Frontend

* **HTML5**
* **CSS3**
* **JavaScript**

## Libraries / Resources

* **Font Awesome** for icons
* **Browser LocalStorage API** for data persistence

No backend framework or database is required.

---

# 📁 Project Structure

```text
JobTrack/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── Image/
    ├── Profile.jpg
    └── rocket.png
```

### `index.html`

Contains the complete application interface, including:

* Sidebar navigation
* Dashboard
* Application tracker
* Statistics
* Goals
* Calendar
* Notes
* Notifications
* Profile menu
* Application modal

### `style.css`

Contains:

* Dashboard styling
* Responsive layout
* Cards
* Tables
* Buttons
* Status badges
* Modal styling
* Calendar styling
* Charts
* Dark/light themes
* Mobile styling

### `script.js`

Contains the complete application logic, including:

* Application CRUD operations
* Search
* Filtering
* Sorting
* Pagination
* Statistics
* Charts
* Goals
* Calendar
* Notes
* Notifications
* Profile menu
* Theme management
* LocalStorage
* Toast messages
* Keyboard shortcuts

---

# 🚀 How to Run

## 1. Download or Clone the Project

Place the JobTrack project files in a folder.

```text
JobTrack/
├── index.html
├── style.css
├── script.js
├── README.md
└── Image/
    ├── Profile.jpg
    └── rocket.png
```

## 2. Open the Project

Open:

```text
index.html
```

in a modern web browser.

You can also use **VS Code with Live Server** for development.

## 3. Start Using JobTrack

Once the application loads:

1. View the dashboard.
2. Add a new application.
3. Select the application status.
4. Search or filter applications.
5. Edit or delete applications.
6. Check statistics and goals.
7. View applications on the calendar.
8. Add personal notes.
9. Switch between dark and light themes.

---

# 🔄 Application Workflow

```text
Open JobTrack
      ↓
Dashboard
      ↓
Add Application
      ↓
Enter Company / Role / Date / Status
      ↓
Save Application
      ↓
Application Stored in LocalStorage
      ↓
Dashboard Statistics Updated
      ↓
Search / Filter / Sort
      ↓
Edit or Delete When Required
```

---

# 📊 Data Flow

```text
User
 │
 ▼
JobTrack Interface
 │
 ▼
JavaScript
 │
 ├── Applications
 │
 ├── Statistics
 │
 ├── Goals
 │
 ├── Calendar
 │
 └── Notes
 │
 ▼
Browser LocalStorage
```

---

# 🔐 Data Persistence

JobTrack does not require a server or database.

Data is stored locally in the user's browser.

This means:

* Data remains after page refresh.
* Applications remain available during future visits from the same browser/storage context.
* Notes remain available.
* Theme preference remains available.

Clearing the browser's site/local storage will remove locally stored JobTrack data.

---

# 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile

The responsive CSS adjusts the dashboard layout, application content, controls, and navigation for smaller screens.

---

# 🎨 User Interface

JobTrack provides a modern dashboard-style interface with:

* Sidebar navigation
* Application cards
* Status badges
* Action buttons
* Progress bars
* Donut chart
* Monthly chart
* Modal form
* Calendar
* Notes
* Notification popup
* Profile popup
* Dark/light theme

The interface is designed to keep important job-search information easy to access.

---

# ⚙️ Main JavaScript Functions

Important functions implemented in `script.js` include:

```text
saveApplications()
formatDate()
getCompanyLogo()
ensureStatusOptions()
getFilteredApplications()
renderApplications()
renderPagination()
updateStatistics()
updateDonut()
updateGoals()
openAddModal()
editApplication()
deleteApplication()
closeModal()
renderFullApplicationList()
renderCalendar()
saveNotes()
renderNotes()
deleteNote()
updateNotificationState()
editGoals()
updateCurrentMonth()
updateChartMonths()
drawProgressChart()
showToast()
initialize()
```

---

# 🧩 CRUD Operations

JobTrack implements the complete application CRUD workflow.

| Operation | Function                      |
| --------- | ----------------------------- |
| Create    | Add Application               |
| Read      | Application Table / Dashboard |
| Update    | Edit Application              |
| Delete    | Delete Application            |

---

# 🎯 Project Objective

The main objective of JobTrack is to provide a simple and organized way for users to manage their job search.

The application brings job applications, statuses, progress, goals, notes, and important dates together in one centralized dashboard.

---

# 🌟 Key Benefits

### Organization

Keep all job applications in one place.

### Tracking

Monitor the progress of every application.

### Productivity

Set application and interview goals.

### Visibility

View application statistics and progress at a glance.

### Convenience

Search, filter, sort, edit, and delete applications quickly.

### Persistence

Keep application and note data using browser local storage.

### Accessibility Across Devices

Use the responsive interface on desktop, tablet, or mobile screens.

---

# 🔮 Future Enhancements

Possible future improvements could include:

* Backend database integration
* User authentication
* Cloud synchronization
* Email reminders
* Interview reminders
* Resume management
* Job description storage
* Company website links
* Interview notes
* Application documents
* Export to CSV/PDF
* Advanced analytics
* Multiple user accounts

These are potential future improvements and are not required for the current version.

---

# 📄 License

This project is intended for educational, portfolio, and demonstration purposes.

---

# 👨‍💻 Project

**Project Name:** JobTrack — Job Application Tracker

**Type:** Web Application

**Category:** Job Search / Productivity / Application Tracking

**Frontend:** HTML5, CSS3, JavaScript

**Storage:** Browser LocalStorage

---

# 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Yasasvi2025/SpireX_Foundation_Frontend_Development_Internship_Tasks.git
cd SpireX_Foundation_Frontend_Development_Internship_Tasks
```

### 2. Open the Project

Navigate to:

```text
Task-10 Job Application Tracker
```

Open the **index.html** file using one of these methods:

* Double-click **index.html**
* Open with **Live Server** in Visual Studio Code

### For Windows (Optional)

```cmd
cd "Task-10 Job Application Tracker"
start index.html
```

---

# 🌐 GitHub Pages

The project is deployed using GitHub Pages.

### Live Demo

🔗 [Task 10 - Job Application Tracker](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Task-10%20Job%20Application%20Tracker/index.html)

---

## ⭐ Final Summary

**JobTrack** is a complete frontend-based job application management system that allows users to track applications, monitor statuses, manage goals, view statistics, maintain notes, and organize application dates through a responsive dashboard.

The project demonstrates practical frontend development concepts including **DOM manipulation, JavaScript event handling, CRUD operations, filtering, sorting, pagination, localStorage, dynamic UI rendering, charts, responsive design, and theme management**.

---

⭐ If you found this project helpful, consider giving this repository a **Star ⭐** on GitHub.
