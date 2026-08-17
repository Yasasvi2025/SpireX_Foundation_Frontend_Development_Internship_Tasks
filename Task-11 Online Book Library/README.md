# Task-11:📚Online Book Library

A simple and responsive **Online Book Library** built using **HTML, CSS, and JavaScript**.

The project provides a clean digital reading space where users can browse books, search for books, explore categories, view book details, and save books to their personal reading shelf.

---

## 🌐 Project Overview

**Online Book Library** is a front-end web application designed to make discovering and organizing books simple.

Users can:

* 🔎 Search books by title, author, or category
* 📚 Browse a collection of **25 books**
* 🗂️ Explore six different categories
* ⭐ View book ratings
* 📖 View detailed information about a book
* 🔖 Add or remove books from **My Shelf**
* 💾 Keep saved books using browser `localStorage`
* 🌙 Switch between Light and Dark themes
* 📱 Use the website on desktop, tablet, and mobile devices

---

## ✨ Features

### 🏠 Home

The homepage provides a welcoming introduction to the library with:

* Digital reading space introduction
* Library search
* Book statistics
* Number of available books
* Number of categories
* Number of saved books
* Reading book illustration

---

### 🔎 Book Search

Users can search for books using:

* Book title
* Author name
* Category

The project includes two search areas:

* Navigation search
* Main hero search

Both search fields are synchronized automatically.

Example:

```text
Search by title, author or keyword...
```

---

### 🗂️ Categories

The library contains six categories:

1. Fiction
2. Non-Fiction
3. Science
4. History
5. Fantasy
6. Self-Help

Users can select a category to filter the available books.

---

### 📚 Book Collection

The application currently contains **25 books**.

The collection includes books such as:

* The Silent Patient
* Atomic Habits
* The Alchemist
* A Brief History of Time
* The Hobbit
* Sapiens
* The Psychology of Money
* Cosmos
* The Midnight Library
* Deep Work
* Rich Dad Poor Dad
* Think and Grow Rich
* The Power of Now
* 1984
* To Kill a Mockingbird
* The Great Gatsby
* Educated
* The 7 Habits of Highly Effective People
* The Martian
* Brief Answers to the Big Questions
* The Book Thief
* The Name of the Wind
* Harry Potter and the Sorcerer's Stone
* Man's Search for Meaning
* The Power of Habit

---

## ⭐ Book Ratings

Each book contains a rating.

Ratings are displayed using a Font Awesome star icon.

Example:

```text
★ 4.8
```

Users can also sort books by:

* Featured
* Highest Rated
* Title A-Z

---

## 📖 View Book Details

Each book contains a **View Details** button.

When selected, a modal opens displaying:

* Book title
* Author
* Category
* Rating
* Description
* Book cover
* Add/Remove from My Shelf option

The modal can be closed using:

* Close button
* Clicking outside the modal
* `Escape` keyboard key

---

## 🔖 My Shelf

Users can create their own personal reading shelf.

Books can be:

* Added to My Shelf
* Removed from My Shelf

The saved books are stored in the browser using:

```text
localStorage
```

The shelf remains available after refreshing the webpage in the same browser.

The **View My Shelf** button displays the books saved by the user.

---

## 💾 Local Storage

The project uses browser local storage for saving user preferences.

### My Shelf

```text
bookLibraryShelf
```

### Theme

```text
bookLibraryTheme
```

This means no external database is required for the current front-end project.

---

## 🌙 Dark / ☀️ Light Theme

The website supports both:

### ☀️ Light Mode

A clean and bright interface suitable for normal browsing.

### 🌙 Dark Mode

A dark blue interface designed for comfortable viewing in darker environments.

The selected theme is saved in `localStorage`, so the theme remains after refreshing the page.

The theme button automatically changes its icon:

* 🌙 Moon icon → Light mode
* ☀️ Sun icon → Dark mode

---

## 📱 Responsive Design

The website is responsive and adapts to different screen sizes.

### 💻 Desktop

Includes:

* Full navigation
* Search box
* My Library button
* Theme button
* Featured book grid
* Category grid

### 📱 Mobile

Includes:

* Mobile navigation menu
* Responsive hero section
* Mobile book grid
* Responsive categories
* Mobile search
* Responsive My Shelf button
* Responsive modal
* Mobile footer

---

## ☰ Mobile Navigation

On smaller screens, the desktop navigation is replaced by a menu button.

The menu allows users to access:

* Home
* Books
* Categories
* My Shelf
* About

---

## 📚 My Library

The original login concept was replaced with a **My Library** button.

The button uses a book-reader icon:

```html
<i class="fa-solid fa-book-open-reader"></i>
```

Selecting **My Library** takes the user to the personal reading shelf section.

No account or login system is required.

---

## 🔍 Keyboard Shortcut

The project includes a keyboard shortcut for quick searching.

Press:

```text
Ctrl + K
```

The navigation search field will automatically receive focus.

---

## 🎨 Design

The project uses a clean modern library-inspired interface.

Design elements include:

* Rounded cards
* Soft shadows
* Blue primary color
* Gradient book covers
* Responsive layouts
* Light and dark themes
* Modern icons
* Clean typography
* Simple navigation

The book covers are generated dynamically using CSS gradients and icons rather than requiring individual cover images.

---

## 🖼️ Images

The project uses the following images:

```text
Image/
├── reading book.png
└── books.png
```

### `reading book.png`

Used in the main hero section.

### `books.png`

Used in the About section.

**Important:** Keep the filenames and folder name unchanged because they are referenced directly by the HTML.

---

## 🛠️ Technologies Used

### HTML5

Used for:

* Page structure
* Navigation
* Sections
* Book containers
* Modal
* Footer

### CSS3

Used for:

* Layout
* Responsive design
* Cards
* Gradients
* Dark mode
* Animations
* Mobile styling

### JavaScript

Used for:

* Book database
* Search
* Filtering
* Sorting
* Book rendering
* Book details
* My Shelf
* Local storage
* Theme switching
* Modal handling
* Mobile navigation
* Toast notifications

### Font Awesome

Used for interface icons such as:

* Books
* Search
* Bookmark
* Moon
* Sun
* Menu
* Stars
* Categories

---

## 📁 Project Structure

```text
Online-Book-Library/
│
├── index.html
├── style.css
├── script.js
│
└── Image/
    ├── reading book.png
    └── books.png
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Yasasvi2025/SpireX_Foundation_Frontend_Development_Internship_Tasks.git
cd SpireX_Foundation_Frontend_Development_Internship_Tasks
```

### 2. Open the Project

Navigate to:

```text
Task-11 Online Book Library
```

Open the **index.html** file using one of these methods:

* Double-click **index.html**
* Open with **Live Server** in Visual Studio Code

### For Windows (Optional)

```cmd
cd "Task-11 Online Book Library"
start index.html
```

---

## 🌐 Live Demo

🔗 **Live Demo:**

[Open Task 11 – Online Book Library](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Task-11%20Online%20Book%20Library/index.html)

---

## 🔄 How the Application Works

The application stores all book information inside the JavaScript book database.

Each book contains information such as:

```javascript
{
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Fiction",
    rating: 4.5,
    desc: "Book description...",
    color: "linear-gradient(...)"
}
```

JavaScript dynamically generates the book cards from this data.

---

## 🔎 Search Flow

The search process works as follows:

```text
User enters search
        ↓
JavaScript reads search text
        ↓
Books are filtered
        ↓
Matching books are displayed
        ↓
Book count is updated
```

The search checks:

```text
Title
Author
Category
```

---

## 🗂️ Filter Flow

Users can select a category from the category filter.

Example:

```text
Science
```

The application displays only books belonging to:

```text
Science
```

---

## ↕️ Sorting

Books can be sorted using:

### Featured

Displays books in the default order.

### Highest Rated

Displays books from highest rating to lowest rating.

### Title A-Z

Displays books alphabetically by title.

---

## 🔖 My Shelf Flow

```text
Select Book
     ↓
Click Bookmark
     ↓
Book added to My Shelf
     ↓
Saved in localStorage
     ↓
Shelf count updated
```

When the user removes a book:

```text
Click Bookmark
     ↓
Book removed
     ↓
localStorage updated
     ↓
Shelf count updated
```

---

## 🌙 Theme Flow

```text
Click Theme Button
        ↓
Toggle Dark / Light Theme
        ↓
Update Theme Icon
        ↓
Save Theme Preference
        ↓
localStorage
```

---

## 🔔 Notifications

The project includes toast notifications for user actions.

Examples:

```text
Book added to My Shelf.
```

```text
Book removed from My Shelf.
```

```text
Your shelf is empty. Add a book first.
```

---

## 🔐 No Login Required

This project intentionally does not require:

* User registration
* Login
* Password
* Backend authentication
* Database

The **My Library** button provides direct access to the user's local reading shelf.

---

## 🧩 Main Sections

The website contains the following main sections:

```text
Home
Books
Categories
My Shelf
About
Footer
```

---

## 📌 Project Highlights

* ✅ 25 books
* ✅ 6 categories
* ✅ Search functionality
* ✅ Category filtering
* ✅ Book sorting
* ✅ Book details modal
* ✅ Personal reading shelf
* ✅ Local storage
* ✅ Dark/Light theme
* ✅ Responsive design
* ✅ Mobile navigation
* ✅ Toast notifications
* ✅ Keyboard shortcut
* ✅ No backend required
* ✅ No login required
* ✅ Clean modern UI

---

## 🎯 Purpose of the Project

The purpose of this project is to create a simple digital library interface where users can easily:

**Discover → Search → Explore → Save → Read**

It demonstrates practical front-end development using core web technologies.

---

## 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Backend integration
* Online database
* Real book cover images
* Book API integration
* User profiles
* Reading progress
* Favorites
* Recently viewed books
* Book reviews
* Pagination
* Advanced filtering
* Cloud-based shelf synchronization

---

## 👩‍💻 Author

**Nune Venkata Yasasvi**

Frontend Web Development Project

---

## 📄 License

This project is created for learning, portfolio, and demonstration purposes.

---

## ❤️ Final Note

**Online Book Library** is a simple front-end project focused on creating a clean, responsive, and user-friendly digital reading experience using:

```text
HTML + CSS + JavaScript
```

📚 **Read. Discover. Enjoy.**

© 2026 Nune Venkata Yasasvi

---

⭐ If you found this project helpful, consider giving this repository a **Star ⭐** on GitHub.