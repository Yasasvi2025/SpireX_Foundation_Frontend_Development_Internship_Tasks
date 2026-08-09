# Task -5:🎨Color Palette Generator

A beautiful and responsive **Color Palette Generator** with a modern **glassmorphism UI**, purple/pink gradient styling, multiple palette generation styles, color format conversion, locking, favourites, theme switching, and PDF export.

---

## 🌐 Live Demo

🔗 **Live Demo:**

[Open Task 5 – Color Palette Generator](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Task-5%20Color%20Palette%20Generator/index.html)

---

## ✨ Features

- 🎨 **Generate Color Palettes**
- 🎲 **10 Palette Styles**
  - Prism Shuffle
  - Color Neighbors
  - Single Hue Flow
  - Opposite Pulse
  - Three Point Harmony
  - Contrast Split
  - Candy Mist
  - Neon Energy
  - Midnight Ember
  - Forest Clay
- 🔒 **Lock Colors** to preserve selected colors while generating new palettes
- ❤️ **Favourite** palettes
- 🌈 **Multiple Color Formats**
  - HEX
  - RGB
  - HSL
- ☀️🌙 **Light/Dark Theme Toggle**
- 📄 **Export Palette as PDF**
- 📋 **Click a color to copy its value**
- ⌨️ **Spacebar shortcut** for generating a palette
- 📱 **Responsive design** for desktop, tablet, and mobile
- 🪟 **Glassmorphism interface**
- 🌸 Custom **Cherry Blossom Mountain Lake** background

---

## 🖥️ Preview

The application uses a glassmorphism-style interface with:

- Transparent glass container
- Purple/pink gradients
- Rounded cards
- Responsive color swatches
- Custom dropdowns
- Modern buttons and icons
- Cherry blossom mountain lake background

---

## 🎨 Palette Styles

The application provides 10 different palette-generation styles:

| Style | Description |
| ---------------------- | -------------------------- |
| 🎲 Prism Shuffle | Random color combinations |
| 🌈 Color Neighbors | Analogous colors |
| 🌗 Single Hue Flow | Monochromatic colors |
| ☯️ Opposite Pulse | Complementary colors |
| 🔺 Three Point Harmony | Triadic colors |
| 📐 Contrast Split | Split-complementary colors |
| 🌸 Candy Mist | Pastel colors |
| ⚡ Neon Energy | Vibrant colors |
| 🌙 Midnight Ember | Moody colors |
| 🌿 Forest Clay | Earthy colors |

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- CSS Grid
- CSS Flexbox
- CSS Glassmorphism
- CSS Gradients
- CSS Responsive Media Queries
- SVG Icons
- Browser Clipboard API
- PDF Export functionality

---

## 📂 Project Structure

```text
SpireX_Foundation_Frontend_Development_Internship_Tasks/
│
└── Task-5 Color Palette Generator/
    │
    ├── index.html
    ├── Image/
    │   └── Twilight Cherry Blossom Mountain Lake.png
    └── README.md
````

> Keep the background image inside the `Image` folder because the CSS currently references:

```text
background: url("Image/Twilight Cherry Blossom Mountain Lake.png")
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
Task-5 Color Palette Generator
```

Open the **index.html** file using one of these methods:

* Double-click **index.html**
* Open with **Live Server** in Visual Studio Code

### For Windows (Optional)

```cmd
cd "Task-5 Color Palette Generator"
start index.html
```

---

## 🎯 How to Use

### Generate a Palette

Click:

**Generate Palette**

to create a new color palette.

### Select a Palette Style

Use the palette-style dropdown to choose from the 10 available styles.

Example:

```text
🎲 Prism Shuffle
🌈 Color Neighbors
🌗 Single Hue Flow
☯️ Opposite Pulse
🔺 Three Point Harmony
📐 Contrast Split
🌸 Candy Mist
⚡ Neon Energy
🌙 Midnight Ember
🌿 Forest Clay
```

### Lock Colors

Click **Lock Colors** to prevent selected colors from changing when generating a new palette.

### Copy a Color

Click any color swatch to copy its value.

### Change Color Format

You can switch between:

```text
HEX
RGB
HSL
```

### Save Favourite

Click **♡ Favourite** to save the current palette as a favourite.

### Change Theme

Use the theme button in the top-left corner to switch between light and dark themes.

### Export

Click **Export** to export the generated palette as a PDF.

### Keyboard Shortcut

Press:

```text
Spacebar
```

to generate a new palette.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes.

### Desktop

The color palette displays **5 columns**.

### Tablet

The palette changes to **3 columns**.

### Mobile

The palette changes to **2 columns**, while the controls remain horizontally scrollable for easier access.

---

## 🎨 Design

The project uses a modern glassmorphism design system.

### Main Colors

```text
Purple: #A855F7
Pink:   #EC4899
Dark Purple: #2E1065
Muted Purple: #6B21A8
```

### Gradient

```text
linear-gradient(135deg, #a855f7, #ec4899)
```

### Glass Effect

```text
backdrop-filter: blur(30px) brightness(1.2);
```

---

## 📋 Main UI Components

### Header

```text
☀️    🎨 Color Palette Generator    Export
```

### Controls

```text
Generate Palette
      +
Palette Style
      +
Lock Colors
      +
Favourite
      +
HEX / RGB / HSL
```

### Palette

Five color cards are displayed on desktop, with responsive layouts for smaller screens.

### Footer

```text
✦ Click any color to copy value
⌨️ Press Spacebar to generate
© 2026 Nune Venkata Yasasvi
```

---

## 🌟 Future Improvements

Possible future enhancements:

* 🎨 Custom color input
* 💾 Local storage for favourite palettes
* 🔗 Shareable palette URLs
* 📋 Copy entire palette
* 🖼️ Export palette as PNG
* 🎭 More palette-generation algorithms
* 🔍 Color accessibility/contrast checker
* 📱 PWA support

---

## 👤 Author

**Nune Venkata Yasasvi**

© 2026 Nune Venkata Yasasvi

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is available for personal and educational use.

