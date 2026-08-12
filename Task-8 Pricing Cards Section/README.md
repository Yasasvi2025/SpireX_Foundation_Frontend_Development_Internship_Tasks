# Task-8:Pricing Cards Section 💳

A responsive and interactive **Pricing Cards Section** built using **HTML, CSS, and JavaScript** as part of the **SpireX Foundation Frontend Development Internship**.

---

## 📌 Task Description

A Pricing Cards Section is a responsive web component that displays different pricing plans with features, prices, and call-to-action buttons using **HTML, CSS, and JavaScript**.

This task demonstrates the creation of a modern pricing interface with multiple plans, responsive layouts, billing options, interactive buttons, and plan-specific forms.

---

## ✨ Features

- 📱 Fully responsive pricing cards
- 💳 Three pricing plans:
  - Starter
  - Growth
  - Premium
- ⭐ Most Popular plan highlighting
- 🔄 Monthly / Yearly billing toggle
- 💰 20% yearly discount
- 🇮🇳 Indian Rupee (₹) pricing
- 📋 Feature lists for each pricing plan
- ✅ Included features
- ❌ Unavailable features for Starter
- 🚀 Interactive call-to-action buttons
- 🪟 CTA modal popup
- 📝 Form validation
- 👤 Full Name field
- 📧 Email Address field
- 📞 Phone Number validation
- 📝 Requirement textarea
- 🔀 Different form requirements for each pricing plan
- 🎨 Custom colored card designs
- 🔵 Starter - Blue
- 🟣 Growth - Purple
- 🟠 Premium - Orange
- 🏆 Most Popular badge for Growth plan
- 🛡️ Trust and benefits section
- 📄 Responsive footer
- ✨ Google Fonts
- ⭐ Font Awesome icons
- 📱 Desktop, tablet, and mobile responsive layouts

---

## 💰 Pricing Plans

### 🔵 Starter

**Price:** ₹0  
**Billing:** Forever Free

#### Features

- ✅ 5 Projects
- ✅ 1GB Storage
- ✅ Basic Analytics
- ❌ Custom Domain
- ❌ Priority Support

#### CTA

**Get Started Free**

The Starter plan opens a free account creation modal.

---

### 🟣 Growth

**Monthly Price:** ₹499/month  
**Yearly Price:** ₹399/month  
**Yearly Billing:** ₹4,788 billed annually

#### Features

- ✅ Unlimited Projects
- ✅ 20GB Storage
- ✅ Advanced Analytics
- ✅ Custom Domain
- ✅ Priority Support
- ✅ Email Support
- ✅ Team Collaboration

#### CTA

**Start 7-Day Free Trial**

The Growth plan opens a trial registration modal with phone number validation.

---

### 🟠 Premium

**Monthly Price:** ₹1,499/month  
**Yearly Price:** ₹1,199/month  
**Yearly Billing:** ₹14,388 billed annually

#### Features

- ✅ Unlimited Projects
- ✅ 100GB Storage
- ✅ Advanced Analytics
- ✅ Custom Domain
- ✅ Priority Support
- ✅ Dedicated Account Manager
- ✅ Team Collaboration
- ✅ Custom Integrations

#### CTA

**Contact Sales**

The Premium plan opens a contact form requiring phone number and requirements.

---

## 🔄 Monthly / Yearly Billing

The pricing section includes an interactive billing toggle.

### Monthly Billing

- Growth: ₹499/month
- Premium: ₹1,499/month

### Yearly Billing

A **20% discount** is applied when yearly billing is selected.

- Growth: ₹399/month
- Premium: ₹1,199/month

The interface also displays the original monthly price and annual billing amount.

---

## 🪟 CTA Modal Functionality

Each pricing plan has its own CTA action.

### Starter Modal

**Title:** Get Started Free

The Starter form requires:

- Full Name
- Email Address

Phone number and requirement fields are hidden.

---

### Growth Modal

**Title:** Start 7-Day Free Trial

The Growth form requires:

- Full Name
- Email Address
- Phone Number

The phone number must contain exactly 10 digits.

---

### Premium Modal

**Title:** Contact Sales

The Premium form requires:

- Full Name
- Email Address
- Phone Number
- Requirements

The requirement textarea is displayed and required.

---

## 📝 Form Validation

The project includes HTML and JavaScript-based form validation.

Validation includes:

- Required Full Name
- Required Email Address
- Valid email format
- 10-digit phone number pattern
- Required phone number for Growth and Premium
- Required requirements for Premium

After successful form submission, a success message is displayed.

---

## 🛡️ Trust & Benefits Section

The project includes a trust and benefits bar containing:

- 🛡️ **7-Day** - Money Back Guarantee
- 🔒 **Secure & Reliable** - Infrastructure
- ⚡ **99.9%** - Uptime Guarantee
- 🎧 **Priority** - Customer Support

---

## 🎨 Design

The pricing section uses a modern card-based design with:

- Custom clipped card shapes
- Colored plan borders
- Rounded icon bubbles
- Pricing hierarchy
- Feature check and unavailable icons
- Hover animations
- Popular plan highlighting
- Dotted background pattern
- Decorative SVG element
- Responsive spacing and typography

### Plan Colors

| Plan    | Color     |
| ------- | --------- |
| Starter | 🔵 Blue   |
| Growth  | 🟣 Purple |
| Premium | 🟠 Orange |

---

## 📱 Responsive Design

The project is designed to work across different screen sizes.

### 💻 Desktop

The three pricing cards are displayed in a horizontal layout.

### 📲 Tablet

The pricing cards switch to a single-column layout and the trust section adapts to two columns.

### 📱 Mobile

The layout is optimized for smaller screens with:

- Single-column pricing cards
- Single-column trust section
- Responsive footer
- Smaller heading sizes
- Responsive spacing
- Mobile-friendly modal

Responsive behavior is implemented using CSS media queries.

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### External Resources

- Google Fonts - Plus Jakarta Sans
- Font Awesome 6.4.0

---

## ⚙️ JavaScript Functionality

JavaScript is used for the interactive functionality of the pricing section.

### Pricing Toggle

The `togglePricing()` function:

- Detects monthly/yearly selection
- Calculates the discounted yearly price
- Updates Growth pricing
- Updates Premium pricing
- Displays original prices
- Displays annual billing totals
- Updates billing-period text

### CTA Modal

The `openModal()` function:

- Opens the modal
- Detects the selected pricing plan
- Updates modal title
- Updates modal description
- Updates submit button text
- Shows/hides required fields
- Applies plan-specific form requirements

### Modal Closing

The `closeModal()` function closes the CTA modal.

The modal can also be closed by clicking outside the modal content.

### Form Submission

The `submitForm()` function:

- Prevents the default form submission
- Hides the form
- Displays the success message

---

## 📂 Project Structure

```text
Task-8 Pricing Cards Section/
│
├── index.html
└── README.md
```

The project is implemented in a single HTML file containing:

- HTML structure
- CSS styling
- JavaScript functionality

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
Task-8 Pricing Cards Section
```

Open the **index.html** file using one of these methods:

- Double-click **index.html**
- Open with **Live Server** in Visual Studio Code

### For Windows (Optional)

```cmd
cd "Task-8 Pricing Cards Section"
start index.html
```

---

## 🌐 GitHub Pages

The project is deployed using GitHub Pages.

### Live Demo

🔗 [Task 8 - Pricing Cards Section](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Task-8%20Pricing%20Cards%20Section/index.html)

---

## 🎯 Internship Task

**Task:** 8 - Pricing Cards Section

**Program:** SpireX Foundation Frontend Development Internship

**Developer:** Nune Venkata Yasasvi

---

## 📚 Learning Outcomes

Through this task, the following frontend development concepts are demonstrated:

- Creating responsive layouts using CSS Grid
- Designing pricing cards
- Creating responsive components
- Using CSS custom properties
- Creating custom card shapes using `clip-path`
- Implementing hover effects
- Creating responsive media queries
- Building interactive billing toggles
- Updating content dynamically with JavaScript
- Creating modal popups
- Handling form validation
- Creating conditional form fields
- Handling form submission
- Using Font Awesome icons
- Using external Google Fonts
- Deploying a frontend project using GitHub Pages

---

## 📜 License

This project was created for **educational and internship purposes** as part of the SpireX Foundation Frontend Development Internship Tasks.

---

## 👨‍💻 Developer

**Nune Venkata Yasasvi**

Frontend Development Internship - Task 8

🇮🇳 Designed & Developed in India

---

⭐ If you found this project helpful, consider giving this repository a **Star ⭐** on GitHub.