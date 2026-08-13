// ============================================================
// SHOPMART - script.js
// ============================================================


// ============================================================
// PRODUCTS
// ============================================================

const products = [

    {
        id: 1,
        name: "boAt Rockerz 550",
        category: "Electronics",
        desc: "Wireless Headphones",
        rating: 4.5,
        reviews: "2.1K",
        price: 1499,
        oldPrice: 2999,
        discount: "50% OFF",
        image: "assets/boat-rockerz-550.jpg"
    },

    {
        id: 2,
        name: "Wireless Keyboard",
        category: "Electronics",
        desc: "Wireless Keyboard",
        rating: 4.4,
        reviews: "1.2K",
        price: 899,
        oldPrice: 1499,
        discount: "40% OFF",
        image: "assets/wireless-keyboard.jpg"
    },

    {
        id: 3,
        name: "Smart Watch",
        category: "Electronics",
        desc: "Smart Fitness Watch",
        rating: 4.3,
        reviews: "980",
        price: 1299,
        oldPrice: 2499,
        discount: "48% OFF",
        image: "assets/smart-watch.jpg"
    },

    {
        id: 4,
        name: "Apple iPad",
        category: "Electronics",
        desc: "Tablet",
        rating: 4.8,
        reviews: "3.4K",
        price: 29999,
        oldPrice: 34999,
        discount: "14% OFF",
        image: "assets/apple-ipad.jpg"
    },

    {
        id: 5,
        name: "Noise Wireless Earbuds",
        category: "Electronics",
        desc: "Wireless Earbuds",
        rating: 4.2,
        reviews: "1.5K",
        price: 999,
        oldPrice: 1999,
        discount: "50% OFF",
        image: "assets/noise-wireless-earbuds.jpg"
    },

    {
        id: 6,
        name: "Fossil Grant Watch",
        category: "Fashion",
        desc: "For Men",
        rating: 4.6,
        reviews: "1.8K",
        price: 4995,
        oldPrice: 9995,
        discount: "50% OFF",
        image: "assets/fossil-grant-watch.jpg"
    },

    {
        id: 7,
        name: "Men's Cotton T-Shirt",
        category: "Fashion",
        desc: "Regular Fit",
        rating: 4.4,
        reviews: "890",
        price: 599,
        oldPrice: 999,
        discount: "40% OFF",
        image: "assets/mens-cotton-tshirt.jpg"
    },

    {
        id: 8,
        name: "Women's Handbag",
        category: "Fashion",
        desc: "Stylish Handbag",
        rating: 4.5,
        reviews: "760",
        price: 1299,
        oldPrice: 2499,
        discount: "48% OFF",
        image: "assets/womens-handbag.jpg"
    },

    {
        id: 9,
        name: "Women's Dress",
        category: "Fashion",
        desc: "Elegant Dress",
        rating: 4.4,
        reviews: "650",
        price: 999,
        oldPrice: 1799,
        discount: "44% OFF",
        image: "assets/womens-dress.jpg"
    },

    {
        id: 10,
        name: "Jewelry Earrings",
        category: "Fashion",
        desc: "Fashion Earrings",
        rating: 4.3,
        reviews: "540",
        price: 499,
        oldPrice: 999,
        discount: "50% OFF",
        image: "assets/jewelry-earrings-fashion.jpg"
    },

    {
        id: 11,
        name: "Coffee Maker",
        category: "Home & Kitchen",
        desc: "Automatic Coffee Maker",
        rating: 4.5,
        reviews: "1.1K",
        price: 2499,
        oldPrice: 3999,
        discount: "38% OFF",
        image: "assets/coffee-maker.jpg"
    },

    {
        id: 12,
        name: "Air Fryer",
        category: "Home & Kitchen",
        desc: "Digital Air Fryer",
        rating: 4.6,
        reviews: "1.4K",
        price: 2999,
        oldPrice: 4999,
        discount: "40% OFF",
        image: "assets/air-fryer.jpg"
    },

    {
        id: 13,
        name: "Bella Vita Perfume",
        category: "Beauty",
        desc: "Luxury Collection",
        rating: 4.3,
        reviews: "950",
        price: 799,
        oldPrice: 1299,
        discount: "38% OFF",
        image: "assets/bella-vita-perfume.jpg"
    },

    {
        id: 14,
        name: "Face Serum",
        category: "Beauty",
        desc: "Skin Care Serum",
        rating: 4.4,
        reviews: "870",
        price: 699,
        oldPrice: 1199,
        discount: "42% OFF",
        image: "assets/face-serum.jpg"
    },

    {
        id: 15,
        name: "Beauty Makeup Kit",
        category: "Beauty",
        desc: "Complete Makeup Kit",
        rating: 4.5,
        reviews: "720",
        price: 1499,
        oldPrice: 2499,
        discount: "40% OFF",
        image: "assets/beauty-makeup-kit.jpg"
    },

    {
        id: 16,
        name: "Nike Air Max",
        category: "Sports",
        desc: "Running Shoes",
        rating: 4.7,
        reviews: "1.5K",
        price: 3499,
        oldPrice: 6999,
        discount: "50% OFF",
        image: "assets/nike-air-max.jpg"
    },

    {
        id: 17,
        name: "Cricket Bat",
        category: "Sports",
        desc: "Professional Cricket Bat",
        rating: 4.6,
        reviews: "820",
        price: 1999,
        oldPrice: 2999,
        discount: "33% OFF",
        image: "assets/cricket-bat.jpg"
    },

    {
        id: 18,
        name: "Atomic Habits",
        category: "Books",
        desc: "Self Improvement Book",
        rating: 4.8,
        reviews: "4.5K",
        price: 499,
        oldPrice: 799,
        discount: "38% OFF",
        image: "assets/atomic-habits.jpg"
    },

    {
        id: 19,
        name: "The Psychology of Money",
        category: "Books",
        desc: "Personal Finance Book",
        rating: 4.7,
        reviews: "3.2K",
        price: 399,
        oldPrice: 699,
        discount: "43% OFF",
        image: "assets/psychology-of-money.jpg"
    },

    {
        id: 20,
        name: "Ikigai",
        category: "Books",
        desc: "Japanese Life Philosophy",
        rating: 4.6,
        reviews: "2.4K",
        price: 349,
        oldPrice: 599,
        discount: "42% OFF",
        image: "assets/ikigai.jpg"
    },

    {
        id: 21,
        name: "Remote Control Car",
        category: "Toys",
        desc: "Remote Control Toy Car",
        rating: 4.4,
        reviews: "1.1K",
        price: 899,
        oldPrice: 1499,
        discount: "40% OFF",
        image: "assets/remote-control-car.jpg"
    },

    {
        id: 22,
        name: "Cutie Doll Toy",
        category: "Toys",
        desc: "Cute Doll Toy",
        rating: 4.5,
        reviews: "780",
        price: 699,
        oldPrice: 1199,
        discount: "42% OFF",
        image: "assets/cutie-doll-toy.jpg"
    },

    {
        id: 23,
        name: "Car Cleaning Kit",
        category: "Automotive",
        desc: "Complete Car Cleaning Kit",
        rating: 4.5,
        reviews: "860",
        price: 699,
        oldPrice: 1199,
        discount: "42% OFF",
        image: "assets/car-cleaning-kit.jpg"
    },

    {
        id: 24,
        name: "Car Phone Holder",
        category: "Automotive",
        desc: "Dashboard Phone Holder",
        rating: 4.4,
        reviews: "720",
        price: 499,
        oldPrice: 899,
        discount: "44% OFF",
        image: "assets/car-phone-holder.jpg"
    },

    {
        id: 25,
        name: "LED Car Headlight",
        category: "Automotive",
        desc: "LED Headlight Bulbs",
        rating: 4.3,
        reviews: "640",
        price: 1299,
        oldPrice: 1999,
        discount: "35% OFF",
        image: "assets/led-car-headlight.jpg"
    },

    {
        id: 26,
        name: "Car Air Freshener",
        category: "Automotive",
        desc: "Long Lasting Car Freshener",
        rating: 4.2,
        reviews: "510",
        price: 299,
        oldPrice: 499,
        discount: "40% OFF",
        image: "assets/car-air-freshener.jpg"
    },

    {
        id: 27,
        name: "Basmati Rice",
        category: "Grocery",
        desc: "Premium Basmati Rice",
        rating: 4.6,
        reviews: "1.3K",
        price: 599,
        oldPrice: 749,
        discount: "20% OFF",
        image: "assets/basmati-rice.jpg"
    },

    {
        id: 28,
        name: "Cooking Oil",
        category: "Grocery",
        desc: "Premium Cooking Oil",
        rating: 4.4,
        reviews: "920",
        price: 699,
        oldPrice: 799,
        discount: "13% OFF",
        image: "assets/cooking-oil.jpg"
    },

    {
        id: 29,
        name: "Dry Fruits Combo",
        category: "Grocery",
        desc: "Premium Mixed Dry Fruits",
        rating: 4.7,
        reviews: "1.1K",
        price: 899,
        oldPrice: 1299,
        discount: "31% OFF",
        image: "assets/dry-fruits-combo.jpg"
    },

    {
        id: 30,
        name: "Premium Tea",
        category: "Grocery",
        desc: "Premium Tea Collection",
        rating: 4.5,
        reviews: "780",
        price: 399,
        oldPrice: 599,
        discount: "33% OFF",
        image: "assets/premium-tea.jpg"
    },

    {
        id: 31,
        name: "Non-Stick Cookware Set",
        category: "Home & Kitchen",
        desc: "Premium Cookware Set",
        rating: 4.6,
        reviews: "1.2K",
        price: 2499,
        oldPrice: 3999,
        discount: "38% OFF",
        image: "assets/non-stick-cookware-set.jpg"
    },

    {
        id: 32,
        name: "Yoga Mat",
        category: "Sports",
        desc: "Premium Fitness Yoga Mat",
        rating: 4.5,
        reviews: "690",
        price: 599,
        oldPrice: 999,
        discount: "40% OFF",
        image: "assets/yoga-mat.jpg"
    },

    {
        id: 33,
        name: "Dumbbell Set",
        category: "Sports",
        desc: "Home Workout Dumbbell Set",
        rating: 4.6,
        reviews: "580",
        price: 1499,
        oldPrice: 2499,
        discount: "40% OFF",
        image: "assets/dumbbell-set.jpg"
    },

    {
        id: 34,
        name: "Electric Kettle",
        category: "Home & Kitchen",
        desc: "Fast Boiling Electric Kettle",
        rating: 4.4,
        reviews: "830",
        price: 899,
        oldPrice: 1499,
        discount: "40% OFF",
        image: "assets/electric-kettle.jpg"
    },

    {
        id: 35,
        name: "Beauty Brush Set",
        category: "Beauty",
        desc: "Professional Makeup Brush Set",
        rating: 4.5,
        reviews: "680",
        price: 599,
        oldPrice: 999,
        discount: "40% OFF",
        image: "assets/brush-set-beauty.jpg"
    },

    {
        id: 36,
        name: "Egg Rolling Tray",
        category: "Home & Kitchen",
        desc: "Kitchen Egg Storage Tray",
        rating: 4.4,
        reviews: "420",
        price: 399,
        oldPrice: 699,
        discount: "43% OFF",
        image: "assets/egg-rolling-tray-kitchen.jpg"
    },

    {
        id: 37,
        name: "Korean Skin Care",
        category: "Beauty",
        desc: "Korean Skin Care Collection",
        rating: 4.6,
        reviews: "920",
        price: 1299,
        oldPrice: 1999,
        discount: "35% OFF",
        image: "assets/korean-skincare-beauty.jpg"
    },

    {
        id: 38,
        name: "Ludo Game",
        category: "Toys",
        desc: "Classic Ludo Board Game",
        rating: 4.5,
        reviews: "540",
        price: 349,
        oldPrice: 599,
        discount: "42% OFF",
        image: "assets/ludo-game-toys.jpg"
    },

    {
        id: 39,
        name: "Puzzle Game",
        category: "Toys",
        desc: "Fun Puzzle Board Game",
        rating: 4.4,
        reviews: "390",
        price: 449,
        oldPrice: 799,
        discount: "44% OFF",
        image: "assets/puzzle-game-toys.jpg"
    },

    {
        id: 40,
        name: "Sensory Game Toy",
        category: "Toys",
        desc: "Educational Sensory Game",
        rating: 4.6,
        reviews: "470",
        price: 699,
        oldPrice: 999,
        discount: "30% OFF",
        image: "assets/sensory-game-toys.jpg"
    },

    {
        id: 41,
        name: "Computer Fundamentals",
        category: "Books",
        desc: "Computer Fundamentals Book",
        rating: 4.7,
        reviews: "1.2K",
        price: 499,
        oldPrice: 799,
        discount: "38% OFF",
        image: "assets/computer-fundamentals-book.jpg"
    }

];


// ============================================================
// APP STATE
// ============================================================

let cart =
    JSON.parse(
        localStorage.getItem("shopmartCart")
    ) || [];

let wishlist =
    JSON.parse(
        localStorage.getItem("shopmartWishlist")
    ) || [];

let orders =
    JSON.parse(
        localStorage.getItem("shopmartOrders")
    ) || [];


// ============================================================
// DOM ELEMENTS
// ============================================================

let productGrid;
let cartTrigger;
let cartDrawer;
let closeCart;
let overlay;
let cartItemsContainer;
let cartCount;
let wishlistCount;
let cartTotalPrice;
let searchInput;
let searchBtn;
let categorySelect;
let sidebarItems;
let categoryPills;
let checkoutBtn;
let viewAllBtn;
let viewDealsBtn;
let shopNowBtn;
let sidebarShopNowBtn;
let themeToggle;
let profileTrigger;
let profileMenu;
let ordersModal;
let closeOrders;
let orderModal;
let continueShopping;
let clearAllOrdersBtn;
let viewMoreCats;

let checkoutModal;
let checkoutForm;
let closeCheckout;


// ============================================================
// INITIALIZE APP
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // --------------------------------------------
        // GET DOM ELEMENTS
        // --------------------------------------------

        productGrid =
            document.getElementById("productGrid");

        cartTrigger =
            document.getElementById("cartTrigger");

        cartDrawer =
            document.getElementById("cartDrawer");

        closeCart =
            document.getElementById("closeCart");

        overlay =
            document.getElementById("overlay");

        cartItemsContainer =
            document.getElementById("cartItemsContainer");

        cartCount =
            document.getElementById("cartCount");

        wishlistCount =
            document.getElementById("wishlistCount");

        cartTotalPrice =
            document.getElementById("cartTotalPrice");

        searchInput =
            document.getElementById("searchInput");

        searchBtn =
            document.getElementById("searchBtn");

        categorySelect =
            document.getElementById("categorySelect");

        sidebarItems =
            document.querySelectorAll(
                ".sidebar-menu li"
            );

        categoryPills =
            document.querySelectorAll(
                ".cat-pill"
            );

        checkoutBtn =
            document.getElementById("checkoutBtn");

        viewAllBtn =
            document.getElementById("viewAllBtn");

        viewDealsBtn =
            document.getElementById("viewDealsBtn");

        shopNowBtn =
            document.getElementById("shopNowBtn");

        sidebarShopNowBtn =
            document.getElementById(
                "sidebarShopNowBtn"
            );

        themeToggle =
            document.getElementById("themeToggle");

        profileTrigger =
            document.getElementById(
                "profileTrigger"
            );

        profileMenu =
            document.getElementById(
                "profileMenu"
            );

        ordersModal =
            document.getElementById("ordersModal");

        closeOrders =
            document.getElementById("closeOrders");

        orderModal =
            document.getElementById("orderModal");

        continueShopping =
            document.getElementById(
                "continueShopping"
            );

        clearAllOrdersBtn =
            document.getElementById(
                "clearAllOrdersBtn"
            );

        viewMoreCats =
            document.getElementById(
                "viewMoreCats"
            );

        checkoutModal =
            document.getElementById(
                "checkoutModal"
            );

        checkoutForm =
            document.getElementById(
                "checkoutForm"
            );

        closeCheckout =
            document.getElementById(
                "closeCheckout"
            );


        // --------------------------------------------
        // INITIAL RENDER
        // --------------------------------------------

        if (productGrid) {
            renderProducts(products);
        }

        updateCartUI();

        if (wishlistCount) {
            wishlistCount.textContent =
                wishlist.length;
        }

        startCountdown();

        initTheme();


        // --------------------------------------------
        // INITIALIZE EVENT LISTENERS
        // --------------------------------------------

        initializeTheme();

        initializeProfile();

        initializeCart();

        initializeOrders();

        initializeCheckout();

        initializeFiltering();

        initializeButtons();

    }
);


// ============================================================
// THEME
// ============================================================

function initTheme() {

    const savedTheme =
        localStorage.getItem(
            "shopmartTheme"
        );

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-theme"
        );

        updateThemeIcon();

    }

}


function initializeTheme() {

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-theme"
            );

            const isDark =
                document.body.classList.contains(
                    "dark-theme"
                );

            localStorage.setItem(
                "shopmartTheme",
                isDark
                    ? "dark"
                    : "light"
            );

            updateThemeIcon();

        }
    );

}


function updateThemeIcon() {

    if (!themeToggle) {
        return;
    }

    const icon =
        themeToggle.querySelector("i");

    if (!icon) {
        return;
    }

    if (
        document.body.classList.contains(
            "dark-theme"
        )
    ) {

        icon.className =
            "fa-solid fa-sun";

    } else {

        icon.className =
            "fa-solid fa-moon";

    }

}


// ============================================================
// PROFILE
// ============================================================

function initializeProfile() {

    if (
        !profileTrigger ||
        !profileMenu
    ) {
        return;
    }


    profileTrigger.addEventListener(
        "click",
        (e) => {

            e.stopPropagation();

            profileMenu.classList.toggle(
                "active"
            );

        }
    );


    window.addEventListener(
        "click",
        () => {

            if (
                profileMenu.classList.contains(
                    "active"
                )
            ) {

                profileMenu.classList.remove(
                    "active"
                );

            }

        }
    );


    const menuProfile =
        document.getElementById(
            "menuProfile"
        );

    if (menuProfile) {

        menuProfile.addEventListener(
            "click",
            () => {

                alert(
                    "Profile: Nune Venkata Yasasvi\n" +
                    "Role: Frontend Developer\n" +
                    "Project: Mini Project 2 - Shopping Mart"
                );

            }
        );

    }


    const menuOrders =
        document.getElementById(
            "menuOrders"
        );

    if (menuOrders) {

        menuOrders.addEventListener(
            "click",
            () => {

                showOrders();

                if (ordersModal) {

                    ordersModal.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    const menuWishlist =
        document.getElementById(
            "menuWishlist"
        );

    if (menuWishlist) {

        menuWishlist.addEventListener(
            "click",
            () => {

                const wishlistedProducts =
                    products.filter(
                        product =>
                            wishlist.includes(
                                product.id
                            )
                    );

                renderProducts(
                    wishlistedProducts
                );

                const productsSection =
                    document.querySelector(
                        ".products-section"
                    );

                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    const menuCart =
        document.getElementById(
            "menuCart"
        );

    if (menuCart) {

        menuCart.addEventListener(
            "click",
            () => {

                openCartDrawer();

            }
        );

    }


    const menuLogout =
        document.getElementById(
            "menuLogout"
        );

    if (menuLogout) {

        menuLogout.addEventListener(
            "click",
            () => {

                alert(
                    "Logged out successfully!"
                );

            }
        );

    }

}


// ============================================================
// RENDER PRODUCTS
// ============================================================

function renderProducts(
    itemsToRender
) {

    if (!productGrid) {
        return;
    }


    productGrid.innerHTML = "";


    if (
        !itemsToRender ||
        itemsToRender.length === 0
    ) {

        productGrid.innerHTML = `

            <p
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:30px;
                    color:#718096;
                "
            >
                No products found.
            </p>

        `;

        return;

    }


    itemsToRender.forEach(
        product => {

            const isWishlisted =
                wishlist.includes(
                    product.id
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            card.innerHTML = `

                <button
                    class="wishlist-btn ${
                        isWishlisted
                            ? "active"
                            : ""
                    }"
                    onclick="toggleWishlist(${product.id})"
                >

                    <i
                        class="fa-${
                            isWishlisted
                                ? "solid"
                                : "regular"
                        } fa-heart"
                    ></i>

                </button>


                <div class="product-img-container">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.style.display='none'"
                    >

                </div>


                <h4
                    class="product-title"
                    title="${product.name}"
                >
                    ${product.name}
                </h4>


                <span class="product-category">
                    ${product.desc}
                </span>


                <div class="product-rating">

                    <i class="fa-solid fa-star"></i>

                    <span>
                        ${product.rating}
                        (${product.reviews})
                    </span>

                </div>


                <div class="product-price-row">

                    <span class="current-price">
                        ₹${product.price.toLocaleString()}
                    </span>

                    <span class="original-price">
                        ₹${product.oldPrice.toLocaleString()}
                    </span>

                    <span class="discount-tag">
                        ${product.discount}
                    </span>

                </div>


                <button
                    class="btn-add-cart"
                    onclick="addToCart(${product.id})"
                >

                    <i class="fa-solid fa-cart-shopping"></i>

                    Add to Cart

                </button>

            `;


            productGrid.appendChild(
                card
            );

        }
    );

}


// ============================================================
// CART
// ============================================================

function addToCart(
    productId
) {

    const product =
        products.find(
            p =>
                p.id === productId
        );


    if (!product) {
        return;
    }


    const existingItem =
        cart.find(
            item =>
                item.id === productId
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCartAndSync();

    openCartDrawer();

}


function updateQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            i =>
                i.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (
        item.quantity <= 0
    ) {

        removeFromCart(
            productId
        );

    } else {

        saveCartAndSync();

    }

}


function removeFromCart(
    productId
) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCartAndSync();

}


function saveCartAndSync() {

    localStorage.setItem(
        "shopmartCart",
        JSON.stringify(cart)
    );

    updateCartUI();

}


function updateCartUI() {

    if (cartCount) {

        cartCount.textContent =
            cart.reduce(
                (
                    total,
                    item
                ) =>
                    total +
                    item.quantity,
                0
            );

    }


    if (!cartItemsContainer) {
        return;
    }


    if (
        cart.length === 0
    ) {

        cartItemsContainer.innerHTML = `

            <p
                style="
                    text-align:center;
                    color:#718096;
                    margin-top:40px;
                "
            >
                Your shopping cart is empty.
            </p>

        `;


        if (cartTotalPrice) {

            cartTotalPrice.textContent =
                "₹0";

        }

        return;

    }


    cartItemsContainer.innerHTML =
        "";


    let totalAmount = 0;


    cart.forEach(
        item => {

            totalAmount +=
                item.price *
                item.quantity;


            const cartItemEl =
                document.createElement(
                    "div"
                );


            cartItemEl.className =
                "cart-item";


            cartItemEl.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-item-details">

                    <h5 class="cart-item-title">
                        ${item.name}
                    </h5>

                    <span class="cart-item-price">
                        ₹${item.price.toLocaleString()}
                    </span>


                    <div class="cart-item-controls">

                        <button
                            onclick="updateQuantity(${item.id}, -1)"
                        >
                            -
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="updateQuantity(${item.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="cart-item-remove"
                    onclick="removeFromCart(${item.id})"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            cartItemsContainer.appendChild(
                cartItemEl
            );

        }
    );


    if (cartTotalPrice) {

        cartTotalPrice.textContent =
            `₹${totalAmount.toLocaleString()}`;

    }

}


function initializeCart() {

    if (cartTrigger) {

        cartTrigger.addEventListener(
            "click",
            openCartDrawer
        );

    }


    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeCartDrawer
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeCartDrawer
        );

    }

}


// ============================================================
// WISHLIST
// ============================================================

function toggleWishlist(
    productId
) {

    if (
        wishlist.includes(
            productId
        )
    ) {

        wishlist =
            wishlist.filter(
                id =>
                    id !== productId
            );

    } else {

        wishlist.push(
            productId
        );

    }


    localStorage.setItem(
        "shopmartWishlist",
        JSON.stringify(
            wishlist
        )
    );


    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;

    }


    handleFiltering();

}


// ============================================================
// CART DRAWER
// ============================================================

function openCartDrawer() {

    if (cartDrawer) {

        cartDrawer.classList.add(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "active"
        );

    }

}


function closeCartDrawer() {

    if (cartDrawer) {

        cartDrawer.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "active"
        );

    }

}


// ============================================================
// MY ORDERS
// ============================================================

function initializeOrders() {

    if (closeOrders) {

        closeOrders.addEventListener(
            "click",
            () => {

                if (ordersModal) {

                    ordersModal.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    if (clearAllOrdersBtn) {

        clearAllOrdersBtn.addEventListener(
            "click",
            () => {

                if (
                    orders.length === 0
                ) {

                    alert(
                        "No orders to clear."
                    );

                    return;

                }


                if (
                    confirm(
                        "Are you sure you want to clear all order history?"
                    )
                ) {

                    orders = [];


                    localStorage.removeItem(
                        "shopmartOrders"
                    );


                    showOrders();

                }

            }
        );

    }

}


function showOrders() {

    const container =
        document.getElementById(
            "ordersContainer"
        );


    if (!container) {
        return;
    }


    if (
        orders.length === 0
    ) {

        container.innerHTML = `

            <div class="no-orders">

                <i class="fa-solid fa-box-open"></i>

                <h3>
                    No Orders Yet
                </h3>

                <p>
                    Your placed orders will appear here.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            orders
                .slice()
                .reverse()
                .map(
                    (
                        order,
                        index
                    ) => {

                        const originalIndex =
                            orders.length -
                            1 -
                            index;


                        const isCancelled =
                            order.status ===
                            "Order Cancelled";


                        return `

                            <div class="order-card">

                                <div class="order-card-top">

                                    <div>

                                        <span class="order-label">
                                            Order ID
                                        </span>

                                        <strong>
                                            ${order.orderId}
                                        </strong>

                                    </div>


                                    <span
                                        class="order-status ${
                                            isCancelled
                                                ? "cancelled"
                                                : ""
                                        }"
                                    >
                                        ${order.status}
                                    </span>

                                </div>


                                <div class="order-date">
                                    ${order.date}
                                </div>


                                <div class="order-items">
                                    ${order.items.length}
                                    product(s)
                                </div>


                                <div class="order-card-bottom">

                                    <div>

                                        <span>
                                            Total:
                                        </span>

                                        <strong>
                                            ₹${order.total.toLocaleString()}
                                        </strong>

                                    </div>


                                    ${
                                        !isCancelled
                                            ? `
                                                <button
                                                    class="cancel-order-btn"
                                                    onclick="cancelOrder(${originalIndex})"
                                                >
                                                    Cancel Order
                                                </button>
                                            `
                                            : ""
                                    }

                                </div>

                            </div>

                        `;

                    }
                )
                .join("");

    }

}


// ============================================================
// CANCEL ORDER
// ============================================================

function cancelOrder(
    index
) {

    if (
        !orders[index]
    ) {
        return;
    }


    if (
        confirm(
            "Are you sure you want to cancel this order?"
        )
    ) {

        orders[index].status =
            "Order Cancelled";


        localStorage.setItem(
            "shopmartOrders",
            JSON.stringify(
                orders
            )
        );


        showOrders();

    }

}


// ============================================================
// GENERATE ORDER ID
// ============================================================

function generateOrderId() {

    const date =
        new Date();


    const datePart =
        date.getFullYear()
            .toString() +

        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        ) +

        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );


    const randomPart =
        Math.random()
            .toString(36)
            .substring(
                2,
                6
            )
            .toUpperCase();


    return (
        `#SM${datePart}${randomPart}`
    );

}


// ============================================================
// CHECKOUT
// ============================================================

function initializeCheckout() {

    if (checkoutBtn) {

        checkoutBtn.addEventListener(
            "click",
            () => {

                if (
                    cart.length === 0
                ) {

                    alert(
                        "Your cart is empty!"
                    );

                    return;

                }


                const totalAmount =
                    cart.reduce(
                        (
                            total,
                            item
                        ) =>
                            total +
                            (
                                item.price *
                                item.quantity
                            ),
                        0
                    );


                const checkoutTotal =
                    document.getElementById(
                        "checkoutTotal"
                    );


                if (checkoutTotal) {

                    checkoutTotal.textContent =
                        `₹${totalAmount.toLocaleString()}`;

                }


                closeCartDrawer();


                if (checkoutModal) {

                    checkoutModal.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    if (
        closeCheckout &&
        checkoutModal
    ) {

        closeCheckout.addEventListener(
            "click",
            () => {

                checkoutModal.classList.remove(
                    "active"
                );

            }
        );


        checkoutModal.addEventListener(
            "click",
            (e) => {

                if (
                    e.target ===
                    checkoutModal
                ) {

                    checkoutModal.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    if (checkoutForm) {

        checkoutForm.addEventListener(
            "submit",
            (e) => {

                e.preventDefault();


                if (
                    cart.length === 0
                ) {

                    alert(
                        "Your cart is empty!"
                    );


                    if (checkoutModal) {

                        checkoutModal.classList.remove(
                            "active"
                        );

                    }

                    return;

                }


                const fullNameElement =
                    document.getElementById(
                        "fullName"
                    );


                const gmailElement =
                    document.getElementById(
                        "gmail"
                    );


                const contactElement =
                    document.getElementById(
                        "contactNumber"
                    );


                const cityElement =
                    document.getElementById(
                        "city"
                    );


                const fullName =
                    fullNameElement
                        ? fullNameElement.value.trim()
                        : "";


                const gmail =
                    gmailElement
                        ? gmailElement.value.trim()
                        : "";


                const contactNumber =
                    contactElement
                        ? contactElement.value.trim()
                        : "";


                const city =
                    cityElement
                        ? cityElement.value.trim()
                        : "";


                const paymentMethod =
                    document.querySelector(
                        'input[name="paymentMethod"]:checked'
                    );


                // --------------------------------------------
                // FULL NAME
                // --------------------------------------------

                if (
                    fullName.length < 3
                ) {

                    alert(
                        "Please enter your full name."
                    );

                    return;

                }


                // --------------------------------------------
                // GMAIL
                // --------------------------------------------

                const gmailPattern =
                    /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


                if (
                    !gmailPattern.test(
                        gmail
                    )
                ) {

                    alert(
                        "Please enter a valid Gmail address."
                    );

                    return;

                }


                // --------------------------------------------
                // CONTACT NUMBER
                // --------------------------------------------

                const phonePattern =
                    /^[6-9]\d{9}$/;


                if (
                    !phonePattern.test(
                        contactNumber
                    )
                ) {

                    alert(
                        "Please enter a valid 10-digit contact number."
                    );

                    return;

                }


                // --------------------------------------------
                // CITY
                // --------------------------------------------

                if (
                    city.length < 2
                ) {

                    alert(
                        "Please enter your city."
                    );

                    return;

                }


                // --------------------------------------------
                // PAYMENT
                // --------------------------------------------

                if (!paymentMethod) {

                    alert(
                        "Please select a payment method."
                    );

                    return;

                }


                // --------------------------------------------
                // ORDER ID
                // --------------------------------------------

                const orderId =
                    generateOrderId();


                // --------------------------------------------
                // TOTAL
                // --------------------------------------------

                const totalAmount =
                    cart.reduce(
                        (
                            total,
                            item
                        ) =>
                            total +
                            (
                                item.price *
                                item.quantity
                            ),
                        0
                    );


                // --------------------------------------------
                // NEW ORDER
                // --------------------------------------------

                const newOrder = {

                    orderId:
                        orderId,

                    date:
                        new Date()
                            .toLocaleString(),

                    customer: {

                        fullName:
                            fullName,

                        gmail:
                            gmail,

                        contactNumber:
                            contactNumber,

                        city:
                            city

                    },

                    paymentMethod:
                        paymentMethod.value,

                    items:
                        [...cart],

                    total:
                        totalAmount,

                    status:
                        "Order Placed"

                };


                // --------------------------------------------
                // SAVE ORDER
                // --------------------------------------------

                orders.push(
                    newOrder
                );


                localStorage.setItem(
                    "shopmartOrders",
                    JSON.stringify(
                        orders
                    )
                );


                // --------------------------------------------
                // CLEAR CART
                // --------------------------------------------

                cart = [];


                saveCartAndSync();


                // --------------------------------------------
                // CLOSE CHECKOUT
                // --------------------------------------------

                if (checkoutModal) {

                    checkoutModal.classList.remove(
                        "active"
                    );

                }


                // --------------------------------------------
                // SUCCESS DATA
                // --------------------------------------------

                const successOrderId =
                    document.getElementById(
                        "successOrderId"
                    );


                const successOrderTotal =
                    document.getElementById(
                        "successOrderTotal"
                    );


                const successPayment =
                    document.getElementById(
                        "successPayment"
                    );


                if (successOrderId) {

                    successOrderId.textContent =
                        orderId;

                }


                if (successOrderTotal) {

                    successOrderTotal.textContent =
                        `₹${totalAmount.toLocaleString()}`;

                }


                if (successPayment) {

                    successPayment.textContent =
                        paymentMethod.value;

                }


                // --------------------------------------------
                // RESET FORM
                // --------------------------------------------

                checkoutForm.reset();


                // --------------------------------------------
                // SHOW SUCCESS
                // --------------------------------------------

                if (orderModal) {

                    orderModal.classList.add(
                        "active"
                    );

                }

            }
        );

    }

}


// ============================================================
// CONTINUE SHOPPING
// ============================================================

function initializeButtons() {

    if (continueShopping) {

        continueShopping.addEventListener(
            "click",
            () => {

                if (orderModal) {

                    orderModal.classList.remove(
                        "active"
                    );

                }


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                if (searchInput) {

                    searchInput.value =
                        "";

                }


                filterByCategory(
                    "all"
                );

            }
        );

    }

}


// ============================================================
// FILTER LOGIC
// ============================================================

function filterProductsList() {

    const query =
        searchInput
            ? searchInput.value.toLowerCase()
            : "";


    const selectedCategory =
        categorySelect
            ? categorySelect.value
            : "all";


    return products.filter(
        product => {

            const matchesQuery =
                product.name
                    .toLowerCase()
                    .includes(query) ||

                product.category
                    .toLowerCase()
                    .includes(query) ||

                product.desc
                    .toLowerCase()
                    .includes(query);


            const matchesCategory =
                selectedCategory ===
                    "all" ||

                product.category
                    .toLowerCase() ===
                    selectedCategory
                        .toLowerCase();


            return (
                matchesQuery &&
                matchesCategory
            );

        }
    );

}


function handleFiltering() {

    const filtered =
        filterProductsList();


    renderProducts(
        filtered
    );

}


function initializeFiltering() {

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            handleFiltering
        );

    }


    if (searchBtn) {

        searchBtn.addEventListener(
            "click",
            handleFiltering
        );

    }


    if (categorySelect) {

        categorySelect.addEventListener(
            "change",
            (e) => {

                filterByCategory(
                    e.target.value
                );

            }
        );

    }


    if (sidebarItems) {

        sidebarItems.forEach(
            li => {

                li.addEventListener(
                    "click",
                    () => {

                        const cat =
                            li.getAttribute(
                                "data-cat"
                            );


                        if (
                            cat &&
                            cat !== "Deals"
                        ) {

                            filterByCategory(
                                cat
                            );

                        }

                    }
                );

            }
        );

    }


    if (categoryPills) {

        categoryPills.forEach(
            pill => {

                const cat =
                    pill.getAttribute(
                        "data-cat"
                    );


                if (cat) {

                    pill.addEventListener(
                        "click",
                        () => {

                            filterByCategory(
                                cat
                            );

                        }
                    );

                }

            }
        );

    }

}


// ============================================================
// FILTER BY CATEGORY
// ============================================================

function filterByCategory(
    category
) {

    if (categorySelect) {

        categorySelect.value =
            category;

    }


    if (sidebarItems) {

        sidebarItems.forEach(
            item => {

                item.classList.remove(
                    "active"
                );


                const dataCat =
                    item.getAttribute(
                        "data-cat"
                    );


                if (
                    dataCat &&
                    dataCat.toLowerCase() ===
                        category.toLowerCase()
                ) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    if (categoryPills) {

        categoryPills.forEach(
            pill => {

                pill.classList.remove(
                    "active"
                );


                const dataCat =
                    pill.getAttribute(
                        "data-cat"
                    );


                if (
                    dataCat &&
                    dataCat.toLowerCase() ===
                        category.toLowerCase()
                ) {

                    pill.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    handleFiltering();

}


// ============================================================
// VIEW MORE
// ============================================================

function initializeViewMore() {

    if (!viewMoreCats) {
        return;
    }


    viewMoreCats.addEventListener(
        "click",
        () => {

            filterByCategory(
                "all"
            );


            const productsSection =
                document.querySelector(
                    ".products-section"
                );


            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ============================================================
// VIEW ALL / DEALS / SHOP NOW
// ============================================================

function initializeActionButtons() {

    // --------------------------------------------
    // VIEW ALL
    // --------------------------------------------

    if (viewAllBtn) {

        viewAllBtn.addEventListener(
            "click",
            () => {

                if (searchInput) {

                    searchInput.value =
                        "";

                }


                filterByCategory(
                    "all"
                );

            }
        );

    }


    // --------------------------------------------
    // VIEW DEALS
    // --------------------------------------------

    if (viewDealsBtn) {

        viewDealsBtn.addEventListener(
            "click",
            () => {

                const deals =
                    products.filter(
                        product => {

                            const discountVal =
                                parseInt(
                                    product.discount
                                );


                            return (
                                discountVal >=
                                40
                            );

                        }
                    );


                renderProducts(
                    deals
                );


                const productsSection =
                    document.querySelector(
                        ".products-section"
                    );


                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // --------------------------------------------
    // SHOP NOW
    // --------------------------------------------

    if (shopNowBtn) {

        shopNowBtn.addEventListener(
            "click",
            () => {

                const fashionProducts =
                    products.filter(
                        product =>
                            product.category ===
                            "Fashion"
                    );


                if (searchInput) {

                    searchInput.value =
                        "";

                }


                if (categorySelect) {

                    categorySelect.value =
                        "Fashion";

                }


                renderProducts(
                    fashionProducts
                );


                const productsSection =
                    document.querySelector(
                        ".products-section"
                    );


                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // --------------------------------------------
    // SIDEBAR SHOP NOW
    // --------------------------------------------

    if (sidebarShopNowBtn) {

        sidebarShopNowBtn.addEventListener(
            "click",
            () => {

                const deals =
                    products.filter(
                        product => {

                            const discountVal =
                                parseInt(
                                    product.discount
                                );


                            return (
                                discountVal >=
                                40
                            );

                        }
                    );


                if (searchInput) {

                    searchInput.value =
                        "";

                }


                if (categorySelect) {

                    categorySelect.value =
                        "all";

                }


                renderProducts(
                    deals
                );


                const productsSection =
                    document.querySelector(
                        ".products-section"
                    );


                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    initializeViewMore();

}


// ============================================================
// COUNTDOWN TIMER
// ============================================================

function startCountdown() {

    let hours = 2;
    let mins = 46;
    let secs = 18;


    setInterval(
        () => {

            secs--;


            if (
                secs < 0
            ) {

                secs = 59;

                mins--;


                if (
                    mins < 0
                ) {

                    mins = 59;

                    hours =
                        Math.max(
                            0,
                            hours - 1
                        );

                }

            }


            const hrsEl =
                document.getElementById(
                    "hours"
                );


            const minsEl =
                document.getElementById(
                    "mins"
                );


            const secsEl =
                document.getElementById(
                    "secs"
                );


            if (
                hrsEl &&
                minsEl &&
                secsEl
            ) {

                hrsEl.textContent =
                    String(hours)
                        .padStart(
                            2,
                            "0"
                        );


                minsEl.textContent =
                    String(mins)
                        .padStart(
                            2,
                            "0"
                        );


                secsEl.textContent =
                    String(secs)
                        .padStart(
                            2,
                            "0"
                        );

            }

        },
        1000
    );

}


// ============================================================
// INITIALIZE ACTION BUTTONS
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeActionButtons();

    }
);


// ============================================================
// MAKE INLINE HTML FUNCTIONS AVAILABLE
// ============================================================

window.addToCart =
    addToCart;

window.updateQuantity =
    updateQuantity;

window.removeFromCart =
    removeFromCart;

window.toggleWishlist =
    toggleWishlist;

window.cancelOrder =
    cancelOrder;

window.openCartDrawer =
    openCartDrawer;

window.closeCartDrawer =
    closeCartDrawer;

window.showOrders =
    showOrders;

window.filterByCategory =
    filterByCategory;
