# ⌨️ Task-13:Virtual Keyboard

A modern and responsive **Virtual Keyboard** built using **HTML, CSS, and JavaScript** as part of the **SpireX Foundation Frontend Development Internship Tasks**.

The project provides an interactive keyboard interface where users can type using either the virtual keys or their physical keyboard.

---

## 🚀 Features

- ⌨️ Interactive virtual keyboard
- 🖱️ Click-to-type functionality
- 💻 Physical keyboard support
- 🔤 Caps Lock functionality
- ⇧ Shift functionality
- ⌫ Backspace support
- ↵ Enter key support
- ⇥ Tab key support
- ␣ Space key support
- 🗑️ Clear text functionality
- 📋 Copy text functionality
- 📥 Download text as a `.txt` file
- 🌙 Dark theme
- ☀️ Light theme
- 🔊 Key press sound
- 👀 Key preview
- 💡 Word suggestions
- ⚙️ Settings panel
- 📋 Keyboard shortcuts panel
- 📱 Responsive design
- 🎨 Modern gradient-based UI
- 💾 Theme preference saved using Local Storage

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Font Awesome**
- **Local Storage API**
- **Web Audio API**

---

## 📂 Project Structure

```text
Task-13 Virtual Keyboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
````

---

## 🎯 Project Highlights

### ⌨️ Virtual Keyboard

The application provides a complete virtual keyboard with:

* Number keys
* QWERTY letter keys
* Tab
* Caps Lock
* Enter
* Shift
* Ctrl
* Alt
* Space
* Backspace
* Clear

Users can click the virtual keys to enter text into the text area.

---

### 📝 Text Input

The text area allows users to:

* Type normally using their physical keyboard
* Type using the virtual keyboard
* Edit existing text
* Select text
* Delete characters
* Insert spaces and line breaks

---

### 🔊 Sound Toggle

The **Sound** feature provides an audio feedback effect whenever a keyboard key is pressed.

Users can turn the feature:

```text
ON
OFF
```

from the feature controls.

---

### 👀 Key Preview

The **Key Preview** feature displays the pressed key in a visual popup.

Example:

```text
       A
```

The preview automatically disappears after a short period.

---

### 💡 Word Suggestions

The application provides simple word suggestions while typing.

Examples include:

```text
jav → javascript
jav → java
html → html5
web → website
vir → virtual
key → keyboard
cod → coding
hel → hello
```

The suggestion feature can also be enabled or disabled.

---

### 🌙 Theme Support

The application supports two themes:

* ☀️ Light Theme
* 🌙 Dark Theme

The selected theme is stored in **Local Storage**, so the preference remains available when the page is opened again.

---

### 📋 Copy Text

Users can copy the complete text from the text area using the:

```text
Copy Text
```

button.

A success notification is displayed after copying.

---

### 📥 Download Text

Users can download the typed content as:

```text
virtual-keyboard-text.txt
```

---

### 🗑️ Clear Text

The **Clear Text** button removes all text from the input area and displays a confirmation message.

---

## 📋 Keyboard Shortcuts

The application includes a shortcut information panel.

| Shortcut    | Action                    |
| ----------- | ------------------------- |
| `Ctrl + A`  | Select all text           |
| `Ctrl + C`  | Copy text                 |
| `Ctrl + V`  | Paste text                |
| `Ctrl + Z`  | Undo                      |
| `Backspace` | Delete previous character |

---

## ⚙️ Settings

The Settings panel provides controls for:

* 🔊 Sound
* 👀 Key Preview
* 💡 Word Suggestion

Each feature can be switched between:

```text
ON
OFF
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

It supports:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

CSS media queries automatically adjust the layout for smaller screens.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Yasasvi2025/SpireX_Foundation_Frontend_Development_Internship_Tasks.git
```

Then navigate into the repository:

```bash
cd SpireX_Foundation_Frontend_Development_Internship_Tasks
```

---

## 2. Open the Project

Navigate to:

```text
Task-13 Virtual Keyboard
```

Open the **`index.html`** file using one of these methods:

* Double-click **`index.html`**
* Open the project in **Visual Studio Code**
* Use **Live Server** in Visual Studio Code

---

## For Windows (Optional)

You can also open the project using Command Prompt:

```cmd
cd "Task-13 Virtual Keyboard"
start index.html
```

---

# 🌐 Live Demo

🔗 **Live Demo:**

[https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Task-13%20Virtual%20Keyboard/index.html](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Task-13%20Virtual%20Keyboard/index.html)

---

# 🖥️ How to Use

### Step 1

Open the Virtual Keyboard application.

### Step 2

Click inside the text area.

### Step 3

Type using either:

* Your physical keyboard
* The virtual keyboard

### Step 4

Use the available controls to:

* Copy text
* Clear text
* Download text
* Change the theme
* Enable or disable sound
* Enable or disable key preview
* Enable or disable word suggestions

---

# 📸 Project Interface

The application contains:

```text
┌──────────────────────────────────────────────┐
│ Keyboard   Shortcuts   Settings              │
│                                              │
│              Virtual Keyboard                │
│          Click on the keys to type           │
│                                              │
│  Clear Text   Copy Text   Download Text      │
├──────────────────────────────────────────────┤
│                                              │
│  Start typing using the virtual keyboard...  │
│                                              │
├──────────────────────────────────────────────┤
│  `  1  2  3  4  5  6  7  8  9  0  -   ←      │
│  Tab Q  W  E  R  T  Y  U  I  O  P  [ ] \     │
│  Caps A  S  D  F  G  H  J  K  L  ;  ' Enter  │
│  Shift Z  X  C  V  B  N  M  ,  .  /  Shift   │
│  Ctrl  Alt          Space          Alt Ctrl  │
├──────────────────────────────────────────────┤
│  Auto Capitalize   Sound   Key Preview       │
│  Word Suggestion   Responsive                │
└──────────────────────────────────────────────┘
```

---

# 📁 Files Description

### `index.html`

Contains the complete structure of the Virtual Keyboard application, including:

* Header
* Navigation
* Text area
* Virtual keyboard
* Feature cards
* Suggestions
* Shortcut panel
* Settings panel
* Toast notification
* Footer

### `style.css`

Contains the complete visual styling, including:

* Dark and light themes
* Keyboard design
* Buttons
* Feature cards
* Responsive layouts
* Animations
* Gradients
* Hover effects
* Active key effects

### `script.js`

Contains the application's functionality, including:

* Virtual keyboard input
* Physical keyboard handling
* Backspace
* Caps Lock
* Shift
* Copy
* Clear
* Download
* Theme switching
* Sound
* Key preview
* Word suggestions
* Navigation tabs
* Settings controls
* Local Storage

---

# 🎓 Internship Task

This project was developed as part of:

**SpireX Foundation – Frontend Development Internship**

### Task

```text
Task-13 – Virtual Keyboard
```

---

# 👩‍💻 Author

**Nune Venkata Yasasvi**

---

# 📜 License

This project is created for **educational and internship purposes**.

---

⭐ If you found this project helpful, consider giving this repository a **Star ⭐** on GitHub.

