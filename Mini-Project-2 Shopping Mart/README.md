# 🛒 Mini Project-2: Shopping Mart

A responsive and interactive **Shopping Mart / E-Commerce Website** built using **HTML5, CSS3, and JavaScript** as part of the **SpireX Foundation Frontend Development Internship**.

The project provides a modern shopping experience with product browsing, search, category filtering, cart management, wishlist functionality, checkout, payment selection, order placement, order history, dark/light theme switching, and more.

---

## 📌 Project Overview

**Shopping Mart** is a frontend-based e-commerce website designed to demonstrate practical frontend development concepts and JavaScript functionality.

Users can browse products across multiple categories, search for products, add products to their cart, manage quantities, save products to their wishlist, complete a checkout form, select a payment method, place orders, and view or cancel previous orders.

The application also uses **Local Storage** to preserve cart, wishlist, theme, and order information in the browser.

---

## ✨ Features

### 🛍️ Product Shopping

- 41 products included
- Multiple product categories
- Product images
- Product descriptions
- Product ratings and review counts
- Current price and original price
- Discount labels
- Add to Cart functionality

### 🔎 Search & Filtering

- Search products by name
- Search by category
- Search by product description
- Category dropdown filtering
- Category sidebar filtering
- Category pill filtering
- View All Products
- View Deals
- Fashion Shop Now section
- Discount-based product filtering

### 🛒 Shopping Cart

- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products from cart
- Automatic cart item count
- Automatic total price calculation
- Cart drawer interface
- Empty cart message
- Cart data stored using Local Storage

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- Wishlist counter
- Wishlist products displayed through the profile menu
- Wishlist data stored using Local Storage

### 💳 Checkout & Payment

The checkout flow follows:

**Add to Cart → Checkout → Checkout Form → Payment → Place Order → Order Success**

The checkout form includes:

- Full Name validation
- Gmail address validation
- 10-digit Indian mobile number validation
- City validation
- Payment method selection
- Automatic order total calculation
- Unique Order ID generation
- Order confirmation screen

### 📦 My Orders

- View placed orders
- Display Order ID
- Display order date
- Display number of products
- Display order total
- Display order status
- Cancel an order
- Cancelled order status
- Clear complete order history
- Order history stored using Local Storage

### 🌙 Dark / Light Theme

- Light theme
- Dark theme
- Theme toggle button
- Theme preference saved using Local Storage
- Theme icon changes automatically

### 👤 Profile Menu

The profile menu provides access to:

- Profile
- My Orders
- Wishlist
- Cart
- Logout

### ⏳ Deals Countdown

- Live countdown timer
- Hours, minutes, and seconds display
- Deals section with discounted products

### 📱 Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🧰 Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Website structure |
| **CSS3** | Styling, layout and responsive design |
| **JavaScript** | Interactivity and application logic |
| **Font Awesome** | Icons |
| **Local Storage API** | Cart, wishlist, theme and order persistence |
| **Git & GitHub** | Version control and project hosting |
| **GitHub Pages** | Live deployment |

---

## 📂 Project Structure

```text
Mini-Project-2 Shopping Mart/
|
│── README.md
├── index.html
├── style.css
├── script.js
│
└── assets/
    ├── boat-rockerz-550.jpg
    ├── wireless-keyboard.jpg
    ├── smart-watch.jpg
    ├── apple-ipad.jpg
    ├── noise-wireless-earbuds.jpg
    ├── fossil-grant-watch.jpg
    ├── mens-cotton-tshirt.jpg
    ├── womens-handbag.jpg
    ├── womens-dress.jpg
    ├── jewelry-earrings-fashion.jpg
    ├── coffee-maker.jpg
    ├── air-fryer.jpg
    ├── bella-vita-perfume.jpg
    ├── face-serum.jpg
    ├── beauty-makeup-kit.jpg
    ├── nike-air-max.jpg
    ├── cricket-bat.jpg
    ├── atomic-habits.jpg
    ├── psychology-of-money.jpg
    ├── ikigai.jpg
    ├── remote-control-car.jpg
    ├── cutie-doll-toy.jpg
    ├── car-cleaning-kit.jpg
    ├── car-phone-holder.jpg
    ├── led-car-headlight.jpg
    ├── car-air-freshener.jpg
    ├── basmati-rice.jpg
    ├── cooking-oil.jpg
    ├── dry-fruits-combo.jpg
    ├── premium-tea.jpg
    ├── non-stick-cookware-set.jpg
    ├── yoga-mat.jpg
    ├── dumbbell-set.jpg
    ├── electric-kettle.jpg
    ├── brush-set-beauty.jpg
    ├── egg-rolling-tray-kitchen.jpg
    ├── korean-skincare-beauty.jpg
    ├── ludo-game-toys.jpg
    ├── puzzle-game-toys.jpg
    ├── sensory-game-toys.jpg
    └── computer-fundamentals-book.jpg
````

---

## 🛍️ Product Categories

The Shopping Mart contains products from the following categories:

* 📱 Electronics
* 👕 Fashion
* 🏠 Home & Kitchen
* 💄 Beauty
* 🏃 Sports
* 📚 Books
* 🧸 Toys
* 🚗 Automotive
* 🛒 Grocery

---

## 💾 Local Storage

The application uses the browser's **Local Storage API** to maintain user data.

The following information is stored locally:

```text
shopmartCart
shopmartWishlist
shopmartOrders
shopmartTheme
```

This allows the application to retain cart items, wishlist products, orders, and theme preferences after refreshing the page.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Yasasvi2025/SpireX_Foundation_Frontend_Development_Internship_Tasks.git
```

### 2. Navigate to the Project

```bash
cd SpireX_Foundation_Frontend_Development_Internship_Tasks
```

Then navigate to:

```text
Mini-Project-2 Shopping Mart
```

### 3. Open the Project

Open the `index.html` file using one of these methods:

* Double-click `index.html`
* Open the project folder in **Visual Studio Code**
* Run the project using **Live Server**

### For Windows (Optional)

```cmd
cd "Mini-Project-2 Shopping Mart"
start index.html
```

---

## 🌐 GitHub Pages

The project is deployed using **GitHub Pages**.

### 🔗 Live Demo

**[Shopping Mart – Live Demo](https://yasasvi2025.github.io/SpireX_Foundation_Frontend_Development_Internship_Tasks/Mini-Project-2%20Shopping%20Mart/index.html)**

---

## 🎯 Learning Outcomes

Through this project, I practiced and strengthened my understanding of:

* HTML5 semantic structure
* CSS3 styling and responsive layouts
* JavaScript DOM manipulation
* JavaScript event handling
* Arrays and objects
* Product rendering
* Search functionality
* Category filtering
* Shopping cart logic
* Wishlist management
* Form validation
* Checkout workflows
* Payment selection
* Order management
* Local Storage
* Dark/light theme implementation
* Dynamic UI updates
* Git and GitHub
* GitHub Pages deployment

---

## 🔄 Shopping Flow

```text
Browse Products
      ↓
Search / Filter
      ↓
Add to Cart
      ↓
Shopping Cart
      ↓
Checkout
      ↓
Checkout Form
      ↓
Payment Selection
      ↓
Place Order
      ↓
Order Success
      ↓
Continue Shopping
      ↓
My Orders
```

---

## 📸 Project Highlights

### 🛍️ Product Shopping

Browse products from multiple categories with ratings, prices, discounts, and product images.

### 🛒 Cart Management

Manage products and quantities directly from the shopping cart drawer.

### ❤️ Wishlist

Save favourite products and access them from the profile menu.

### 💳 Checkout

Complete customer details, select a payment method, and place an order.

### 📦 My Orders

View order history and cancel active orders.

### 🌙 Theme Switching

Switch between light and dark themes with the theme toggle.

---

## 👨‍💻 Developed By

**Nune Venkata Yasasvi**

**Role:** Frontend Developer

**Internship:** SpireX Foundation – Frontend Development Internship

---

## 🔗 Connect With Me

* 💼 **LinkedIn:** [Nune Venkata Yasasvi](https://www.linkedin.com/in/nune-venkata-yasasvi-a907b9246/)
* 🐙 **GitHub:** [Yasasvi2025](https://github.com/Yasasvi2025)

---

## 🙏 Acknowledgement

I would like to thank **SpireX Foundation** for providing the opportunity to work on frontend development projects and strengthen my practical skills in HTML, CSS, JavaScript, and modern web development.

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub!

---

## 📄 License

This project was created for **educational and internship purposes** as part of the SpireX Foundation Frontend Development Internship.
