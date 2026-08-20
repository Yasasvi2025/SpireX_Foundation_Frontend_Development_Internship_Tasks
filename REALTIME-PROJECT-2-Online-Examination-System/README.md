# REALTIME PROJECT-2: Online Examination System

## REALTIME PROJECT 2

An **Online Examination System** using **HTML, CSS, and JavaScript** is a web-based application that allows students to attend online exams, answer questions, submit responses, and view their results instantly.

---

## 📌 Project Overview

The Online Examination System provides a simple and interactive platform for conducting multiple-choice examinations online.
Students can:

- Select an examination
- Read questions
- Select answers
- Navigate between questions
- View the remaining exam time
- Submit the examination
- View their marks instantly
- See correct and wrong answers
- Review the correct answers
- Retake an examination

The project is designed using **HTML, CSS, and JavaScript** without requiring a backend server.

---

## 🎯 Objectives

The main objectives of this project are:

1. To provide an easy-to-use online examination interface.
2. To allow students to answer multiple-choice questions.
3. To provide a countdown timer during the examination.
4. To calculate marks automatically after submission.
5. To display the examination result instantly.
6. To show correct and incorrect answers for review.
7. To provide a responsive interface for different screen sizes.
8. To provide a simple and interactive user experience.

---

## 🛠️ Technologies Used

### HTML5

HTML is used to create the structure of the Online Examination System.
It contains:

- Navigation bar
- Examination sections
- Question area
- Answer options
- Question navigation
- Timer
- Result section
- Buttons and other interface elements

### CSS3

CSS is used to design and style the application.
It provides:

- Page layout
- Colors
- Typography
- Buttons
- Cards
- Question panels
- Result display
- Responsive design
- Dark/light theme styling
- Mobile-friendly layout

### JavaScript

JavaScript is used to provide the functionality of the examination system.
It handles:

- Exam selection
- Question display
- Answer selection
- Question navigation
- Countdown timer
- Exam submission
- Mark calculation
- Correct/wrong answer calculation
- Answer review
- Result display
- Retaking the exam
- Local storage
- Dark/light theme
- Keyboard navigation

---

## 📂 Project Structure

```text
REALTIME-PROJECT-2-Online-Examination-System/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── Image/
    └── exam.jpg
````

### File Description

| File             | Description                                       |
| ---------------- | ------------------------------------------------- |
| `index.html`     | Contains the structure and content of the website |
| `style.css`      | Contains the styling and responsive design        |
| `script.js`      | Contains the examination functionality            |
| `README.md`      | Contains project documentation                    |
| `Image/exam.jpg` | Project image used in the application             |

---

## 📚 Available Examinations

The system contains multiple examination categories, including:

* HTML Basics Test
* CSS Fundamentals
* JavaScript Basics
* Web Development MCQ
* Computer Knowledge

Each examination contains multiple-choice questions with predefined correct answers.

---

## ⚙️ Main Features

### 1. Exam Selection

Students can select an examination from the available examination cards.

### 2. Multiple Choice Questions

Each question provides multiple options from which the student can select one answer.

### 3. Question Navigation

Students can:

* Move to the next question
* Move to the previous question
* Directly select a question from the question palette

### 4. Countdown Timer

The examination includes a countdown timer.
The timer displays the remaining examination time and automatically submits the exam when the time expires.

### 5. Answer Selection

Students can select an answer for each question.
Selected answers are maintained while navigating between questions.

### 6. Exam Submission

After answering the questions, students can submit the examination.
The system automatically calculates the result.

### 7. Instant Result

After submission, the system displays:

* Percentage
* Correct answers
* Wrong answers
* Total questions
* Result message

### 8. Answer Review

The system also shows the questions answered incorrectly.
For each incorrect question, the student can see:

```text
Your Answer: ...
Correct Answer: ...
```

If all answers are correct, the system displays a perfect-score message.

### 9. Retake Examination

Students can retake the selected examination after completing it.

### 10. Local Storage

The application uses browser `localStorage` to maintain:

* Number of completed examinations
* Best score
* Theme preference

The stored information remains available after refreshing the page.

### 11. Dark/Light Theme

The application provides a theme toggle for switching between light and dark modes.

### 12. Responsive Design

The interface is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile

### 13. Keyboard Navigation

Keyboard arrow keys can be used to navigate between examination questions.

---

## 🔄 How the System Works

```text
Start Website
     ↓
Select Examination
     ↓
Exam Starts
     ↓
Read Question
     ↓
Select Answer
     ↓
Navigate Questions
     ↓
Submit Examination
     ↓
Calculate Result
     ↓
Display Marks
     ↓
Display Correct/Wrong Answers
     ↓
Review Result / Retake Exam
```

---

## 🧮 Result Calculation

The system compares the student's selected answer with the predefined correct answer.
The percentage is calculated using:

```text
Percentage = (Correct Answers / Total Questions) × 100
```

For example:

```text
Correct Answers = 8
Total Questions = 10

Percentage = (8 / 10) × 100

Result = 80%
```

---

## ⏱️ Examination Timer

The examination uses a countdown timer.
When the timer reaches zero:

1. The timer stops.
2. The examination is automatically submitted.
3. The result is calculated.
4. The result is displayed to the student.

---

## 💾 Local Storage

The project uses browser local storage to save examination statistics.
Stored information includes:

```text
examCompleted
examBestScore
examTheme
```
The application uses browser local storage to maintain examination statistics and theme preferences during the current application usage.

---

## 🎨 User Interface

The interface contains:

* Header/navigation
* Examination cards
* Question panel
* Answer options
* Question number palette
* Timer
* Progress indicator
* Previous/Next buttons
* Submit functionality
* Result card
* Answer review
* Theme toggle

---

## 🚀 How to Run the Project

### Step 1

Download or copy the project files.

### Step 2

Keep the files in the same folder:

```text
index.html
style.css
script.js
README.md
Image/exam.jpg
```

### Step 3

Open:

```text
index.html
```

in a web browser.

### Step 4

Select an examination and start answering the questions.
No server or database setup is required.

---

## 💻 Browser Requirements

The project can be opened using modern web browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

JavaScript must be enabled in the browser.

---

## 🔐 Data and Privacy

This project is a frontend-based application.
It does not require a backend database for the examination functionality. Examination questions and answers are stored in the JavaScript code, while basic statistics and theme preferences are stored in the browser's local storage.

---

## ✅ Advantages

* Simple and easy to use
* Instant result calculation
* Automatic mark calculation
* Countdown timer
* Answer review
* Multiple examination categories
* Responsive design
* Dark/light theme
* Retake functionality
* No backend required
* Easy to understand and maintain

---

## 🔮 Future Enhancements

The project can be extended in the future with:

* Student login and registration
* Admin login
* Database integration
* Online question management
* Random question generation
* Random answer options
* Negative marking
* Exam history
* Student leaderboard
* Certificate generation
* Backend authentication
* Cloud-based result storage
* Admin dashboard

---

## 📌 Project Conclusion

The **Online Examination System** successfully provides a web-based platform for conducting multiple-choice examinations using **HTML, CSS, and JavaScript**.
The system allows students to attend exams, select answers, navigate through questions, submit their responses, and view their results immediately. Features such as the countdown timer, automatic evaluation, answer review, responsive design, theme switching, and local storage make the application interactive and user-friendly.
This project demonstrates the practical use of **HTML for structure, CSS for presentation, and JavaScript for dynamic functionality** in a real-time web application.

---

## 📌 Project Information

**Project:** REALTIME PROJECT 2 – Online Examination System
**Technologies:** HTML5, CSS3, JavaScript
**Application Type:** Frontend Web Application
**Assessment Type:** Multiple Choice Examination

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
REALTIME-PROJECT-2-Online-Examination-System
```

Open the **index.html** file using one of these methods:

* Double-click **index.html**
* Open with **Live Server** in Visual Studio Code

### For Windows (Optional)

```cmd
cd "REALTIME-PROJECT-2-Online-Examination-System"
start index.html
```

---

## 🌐 Live Demo

🔗 **Live Demo:**

[Open Realtime Project 2 – Online Examination System](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/REALTIME-PROJECT-2-Online-Examination-System/index.html)

---

## 📜 License

This project is developed for **educational and internship purposes** as part of the **SpireX Foundation Frontend Development Internship Tasks**.

---

## 👨‍💻 Developer

**Nune Venkata Yasasvi**

Frontend Development Internship – Realtime Project 2

🇮🇳 Designed & Developed in India

---

⭐ If you found this project helpful, consider giving this repository a **Star ⭐** on GitHub.


