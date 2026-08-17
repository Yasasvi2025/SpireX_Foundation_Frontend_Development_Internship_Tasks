/* =========================================================
   ONLINE BOOK LIBRARY
   FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   BOOK DATABASE
   ORIGINAL 10 BOOKS + 15 NEW BOOKS
   TOTAL = 25 BOOKS
========================================================= */

const books = [

    /* =====================================================
       ORIGINAL BOOKS
    ===================================================== */

    {
        id: 1,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: "Fiction",
        rating: 4.5,
        desc: "A gripping psychological mystery centered on a famous painter and the mystery behind her silence.",
        color: "linear-gradient(145deg,#416d88,#c9dce9)"
    },

    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        rating: 4.8,
        desc: "A practical guide to creating good habits, breaking bad ones, and making small changes that compound over time.",
        color: "linear-gradient(145deg,#bdb5a8,#f1eee8)"
    },

    {
        id: 3,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        rating: 4.6,
        desc: "A memorable journey about dreams, purpose, courage, and following the signs along the way.",
        color: "linear-gradient(145deg,#ad4225,#efa33a)"
    },

    {
        id: 4,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Science",
        rating: 4.7,
        desc: "An accessible exploration of the universe, time, black holes, and the biggest questions in cosmology.",
        color: "linear-gradient(145deg,#10192e,#5b6e99)"
    },

    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        rating: 4.8,
        desc: "Bilbo Baggins leaves his quiet home for an unexpected adventure filled with danger, friendship, and discovery.",
        color: "linear-gradient(145deg,#2f4b35,#d0a13d)"
    },

    {
        id: 6,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "History",
        rating: 4.6,
        desc: "A broad look at human history and the ideas and revolutions that shaped modern society.",
        color: "linear-gradient(145deg,#75422e,#d5a178)"
    },

    {
        id: 7,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Non-Fiction",
        rating: 4.7,
        desc: "Lessons about money, behavior, risk, wealth, and making better long-term financial decisions.",
        color: "linear-gradient(145deg,#173c55,#73a7c8)"
    },

    {
        id: 8,
        title: "Cosmos",
        author: "Carl Sagan",
        category: "Science",
        rating: 4.8,
        desc: "A fascinating journey through astronomy, science, human curiosity, and our place in the universe.",
        color: "linear-gradient(145deg,#101a47,#795bb8)"
    },

    {
        id: 9,
        title: "The Midnight Library",
        author: "Matt Haig",
        category: "Fiction",
        rating: 4.4,
        desc: "A thoughtful story about choices, regret, possibilities, and the lives we might have lived.",
        color: "linear-gradient(145deg,#25315d,#7186c5)"
    },

    {
        id: 10,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Self-Help",
        rating: 4.5,
        desc: "A focused approach to concentration and meaningful work in a world full of distractions.",
        color: "linear-gradient(145deg,#1b4058,#78a8c1)"
    },


    /* =====================================================
       NEW BOOK 11
    ===================================================== */

    {
        id: 11,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Non-Fiction",
        rating: 4.7,
        desc: "A popular personal finance book about financial education, investing, assets, and building wealth.",
        color: "linear-gradient(145deg,#172d42,#c9a227)"
    },


    /* =====================================================
       NEW BOOK 12
    ===================================================== */

    {
        id: 12,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "Self-Help",
        rating: 4.6,
        desc: "A classic guide focused on mindset, ambition, persistence, and achieving meaningful goals.",
        color: "linear-gradient(145deg,#38205c,#d59bff)"
    },


    /* =====================================================
       NEW BOOK 13
    ===================================================== */

    {
        id: 13,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        category: "Self-Help",
        rating: 4.5,
        desc: "A reflective guide to mindfulness, presence, and developing a healthier relationship with the present moment.",
        color: "linear-gradient(145deg,#176b70,#a4e5df)"
    },


    /* =====================================================
       NEW BOOK 14
    ===================================================== */

    {
        id: 14,
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        rating: 4.7,
        desc: "A powerful dystopian story exploring surveillance, freedom, truth, and control.",
        color: "linear-gradient(145deg,#1c1c1c,#8c3b3b)"
    },


    /* =====================================================
       NEW BOOK 15
    ===================================================== */

    {
        id: 15,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        rating: 4.8,
        desc: "A moving story about childhood, justice, empathy, and social inequality.",
        color: "linear-gradient(145deg,#3b5268,#d6b878)"
    },


    /* =====================================================
       NEW BOOK 16
    ===================================================== */

    {
        id: 16,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        rating: 4.4,
        desc: "A classic American novel about ambition, love, wealth, dreams, and the pursuit of an ideal future.",
        color: "linear-gradient(145deg,#102b42,#d3a93a)"
    },


    /* =====================================================
       NEW BOOK 17
    ===================================================== */

    {
        id: 17,
        title: "Educated",
        author: "Tara Westover",
        category: "Non-Fiction",
        rating: 4.6,
        desc: "A memoir about education, family, resilience, and the transformation that comes from learning.",
        color: "linear-gradient(145deg,#315c4d,#d8e2b2)"
    },


    /* =====================================================
       NEW BOOK 18
    ===================================================== */

    {
        id: 18,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        category: "Self-Help",
        rating: 4.7,
        desc: "A practical framework for improving personal effectiveness, relationships, responsibility, and leadership.",
        color: "linear-gradient(145deg,#284c72,#7cb5e8)"
    },


    /* =====================================================
       NEW BOOK 19
    ===================================================== */

    {
        id: 19,
        title: "The Martian",
        author: "Andy Weir",
        category: "Science",
        rating: 4.7,
        desc: "A science-focused survival story about an astronaut stranded on Mars and determined to stay alive.",
        color: "linear-gradient(145deg,#7a2d20,#e89b5d)"
    },


    /* =====================================================
       NEW BOOK 20
    ===================================================== */

    {
        id: 20,
        title: "Brief Answers to the Big Questions",
        author: "Stephen Hawking",
        category: "Science",
        rating: 4.6,
        desc: "A collection of thoughtful perspectives on major scientific questions about humanity and the universe.",
        color: "linear-gradient(145deg,#121b3b,#657bd0)"
    },


    /* =====================================================
       NEW BOOK 21
    ===================================================== */

    {
        id: 21,
        title: "The Book Thief",
        author: "Markus Zusak",
        category: "History",
        rating: 4.7,
        desc: "A moving historical story about a young girl, books, friendship, and life during wartime.",
        color: "linear-gradient(145deg,#422a28,#c7775d)"
    },


    /* =====================================================
       NEW BOOK 22
    ===================================================== */

    {
        id: 22,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        category: "Fantasy",
        rating: 4.7,
        desc: "An immersive fantasy adventure following a legendary figure and the story behind his extraordinary life.",
        color: "linear-gradient(145deg,#2a1c4f,#8d63d4)"
    },


    /* =====================================================
       NEW BOOK 23
    ===================================================== */

    {
        id: 23,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        category: "Fantasy",
        rating: 4.9,
        desc: "A young wizard discovers a magical world and begins an unforgettable journey at Hogwarts.",
        color: "linear-gradient(145deg,#243e70,#d6a72e)"
    },


    /* =====================================================
       NEW BOOK 24
    ===================================================== */

    {
        id: 24,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        category: "Non-Fiction",
        rating: 4.8,
        desc: "A profound reflection on meaning, resilience, purpose, and the human ability to endure difficult circumstances.",
        color: "linear-gradient(145deg,#3e3e3e,#b79b6c)"
    },


    /* =====================================================
       NEW BOOK 25
    ===================================================== */

    {
        id: 25,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        category: "Self-Help",
        rating: 4.6,
        desc: "An engaging exploration of how habits work and how understanding them can help create lasting change.",
        color: "linear-gradient(145deg,#164a5e,#66c2c8)"
    }

];


/* =========================================================
   SHELF STATE
========================================================= */

let shelf =
    JSON.parse(
        localStorage.getItem(
            "bookLibraryShelf"
        ) || "[]"
    );


let current = null;


/* =========================================================
   ELEMENT HELPER
========================================================= */

const $ =
    id =>
        document.getElementById(id);


const search =
    $("search");


const topSearch =
    $("topSearch");


const filter =
    $("filter");


const sort =
    $("sort");


const box =
    $("booksBox");


const empty =
    $("empty");


const modal =
    $("modal");


const toast =
    $("toast");


/* =========================================================
   ESCAPE HTML
========================================================= */

function esc(value) {

    return String(value)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}


/* =========================================================
   SAVE SHELF
========================================================= */

function save() {

    localStorage.setItem(
        "bookLibraryShelf",
        JSON.stringify(shelf)
    );


    updateStats();

}


/* =========================================================
   STATISTICS
========================================================= */

function updateStats() {

    $("count").textContent =
        books.length;


    $("savedCount").textContent =
        shelf.length;

}


/* =========================================================
   STAR RATING
========================================================= */

function stars(rating) {

    return `
        <i class="fa-solid fa-star"></i>
        ${rating}
    `;

}


/* =========================================================
   BOOK COVER
========================================================= */

function cover(book) {

    return `

        <div
            class="cover"
            style="background:${book.color}"
        >

            <div>

                <i class="fa-solid fa-book-open"></i>

                <div>
                    ${esc(book.title)}
                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   RENDER BOOKS
========================================================= */

function render(list) {

    box.innerHTML = "";


    $("results").textContent =

        `${list.length} ${
            list.length === 1
                ? "book"
                : "books"
        } found`;


    empty.classList.toggle(
        "hidden",
        list.length > 0
    );


    list.forEach(
        book => {

            const saved =
                shelf.includes(
                    book.id
                );


            const element =
                document.createElement(
                    "article"
                );


            element.className =
                "book";


            element.innerHTML = `

                ${cover(book)}

                <div class="body">

                    <h3>
                        ${esc(book.title)}
                    </h3>


                    <p class="author">
                        ${esc(book.author)}
                    </p>


                    <p class="category">
                        ${esc(book.category)}
                    </p>


                    <div class="rating">
                        ${stars(book.rating)}
                    </div>


                    <div class="actions">

                        <button
                            class="details"
                            data-details="${book.id}"
                        >
                            View Details
                        </button>


                        <button
                            class="save ${
                                saved
                                    ? "saved"
                                    : ""
                            }"
                            data-save="${book.id}"
                            title="${
                                saved
                                    ? "Remove from shelf"
                                    : "Add to shelf"
                            }"
                        >

                            <i class="fa-solid fa-bookmark"></i>

                        </button>

                    </div>

                </div>

            `;


            box.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   SEARCH + FILTER + SORT
========================================================= */

function apply() {

    const query =

        (
            search.value ||
            topSearch.value
        )
        .toLowerCase()
        .trim();


    const category =
        filter.value;


    let list =
        books.filter(
            book => {

                const matchesSearch =

                    !query ||

                    `
                        ${book.title}
                        ${book.author}
                        ${book.category}
                    `
                    .toLowerCase()
                    .includes(
                        query
                    );


                const matchesCategory =

                    category === "all" ||

                    book.category ===
                        category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    if (
        sort.value ===
        "rating"
    ) {

        list.sort(
            (a, b) =>
                b.rating -
                a.rating
        );

    }


    if (
        sort.value ===
        "title"
    ) {

        list.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title
                )
        );

    }


    render(list);

}


/* =========================================================
   TOAST
========================================================= */

function toastMsg(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.tt
    );


    window.tt =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================================
   OPEN BOOK DETAILS
========================================================= */

function openBook(id) {

    current =
        books.find(
            book =>
                book.id === id
        );


    if (!current) {

        return;

    }


    $("modalContent").innerHTML = `

        <div class="modal-content">

            <div
                class="modal-cover"
                style="background:${current.color}"
            >

                <div>

                    <i
                        class="fa-solid fa-book-open"
                        style="
                            font-size:35px;
                            display:block;
                            margin-bottom:10px;
                        "
                    ></i>

                    ${esc(
                        current.title
                    )}

                </div>

            </div>


            <div>

                <span class="label">

                    ${esc(
                        current.category
                    )}

                </span>


                <h2>

                    ${esc(
                        current.title
                    )}

                </h2>


                <p>

                    by
                    ${esc(
                        current.author
                    )}

                </p>


                <div class="rating">

                    ${stars(
                        current.rating
                    )}

                </div>


                <p>

                    ${esc(
                        current.desc
                    )}

                </p>


                <button
                    class="add"
                    id="modalSave"
                >

                    ${
                        shelf.includes(
                            current.id
                        )
                            ? "Remove from My Shelf"
                            : "Add to My Shelf"
                    }

                </button>

            </div>

        </div>

    `;


    $("modalSave").onclick =
        () =>
            toggleShelf(
                current.id
            );


    modal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   SHELF TOGGLE
========================================================= */

function toggleShelf(id) {

    if (
        shelf.includes(id)
    ) {

        shelf =
            shelf.filter(
                value =>
                    value !== id
            );


        toastMsg(
            "Book removed from My Shelf."
        );

    } else {

        shelf.push(id);


        toastMsg(
            "Book added to My Shelf."
        );

    }


    save();

    apply();


    if (
        current &&
        current.id === id
    ) {

        openBook(id);

    }

}


/* =========================================================
   CATEGORIES
========================================================= */

$(
    "categoriesBox"
).innerHTML = [

    "Fiction",

    "Non-Fiction",

    "Science",

    "History",

    "Fantasy",

    "Self-Help"

]
.map(
    (
        category,
        index
    ) => `

        <button
            class="cat"
            data-cat="${category}"
        >

            <i
                class="fa-solid ${
                    [
                        "fa-book",
                        "fa-book-open",
                        "fa-flask",
                        "fa-landmark",
                        "fa-wand-magic-sparkles",
                        "fa-heart"
                    ][index]
                }"
            ></i>

            ${category}

        </button>

    `
)
.join("");


/* =========================================================
   CATEGORY CLICK
========================================================= */

$("categoriesBox").onclick =
    event => {

        const button =
            event.target.closest(
                "[data-cat]"
            );


        if (!button) {

            return;

        }


        document
            .querySelectorAll(
                ".cat"
            )
            .forEach(
                item =>
                    item.classList.remove(
                        "selected"
                    )
            );


        button.classList.add(
            "selected"
        );


        filter.value =
            button.dataset.cat;


        apply();


        $("books").scrollIntoView({
            behavior: "smooth"
        });

    };


/* =========================================================
   VIEW ALL CATEGORIES
========================================================= */

$("allCategories").onclick =
    () => {

        filter.value =
            "all";


        document
            .querySelectorAll(
                ".cat"
            )
            .forEach(
                item =>
                    item.classList.remove(
                        "selected"
                    )
            );


        apply();

    };


/* =========================================================
   BOOK GRID CLICK
========================================================= */

box.onclick =
    event => {

        const details =
            event.target.closest(
                "[data-details]"
            );


        const saveButton =
            event.target.closest(
                "[data-save]"
            );


        if (details) {

            openBook(
                Number(
                    details.dataset.details
                )
            );

        }


        if (saveButton) {

            toggleShelf(
                Number(
                    saveButton.dataset.save
                )
            );

        }

    };


/* =========================================================
   SEARCH
========================================================= */

search.oninput =
    () => {

        topSearch.value =
            search.value;


        apply();

    };


topSearch.oninput =
    () => {

        search.value =
            topSearch.value;


        apply();

    };


/* =========================================================
   SEARCH BUTTON
========================================================= */

$("searchBtn").onclick =
    () => {

        $("books").scrollIntoView({
            behavior: "smooth"
        });

    };


/* =========================================================
   FILTER
========================================================= */

filter.onchange =
    apply;


/* =========================================================
   SORT
========================================================= */

sort.onchange =
    apply;


/* =========================================================
   MY SHELF
========================================================= */

$("viewShelf").onclick =
    () => {

        const list =
            books.filter(
                book =>
                    shelf.includes(
                        book.id
                    )
            );


        if (!list.length) {

            toastMsg(
                "Your shelf is empty. Add a book first."
            );


            return;

        }


        render(list);


        $("books").scrollIntoView({
            behavior: "smooth"
        });

    };


/* =========================================================
   MY LIBRARY BUTTON
   LOGIN REPLACED
========================================================= */

$("login").onclick =
    () => {

        const shelfSection =
            $("shelf");


        if (shelfSection) {

            shelfSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    };


/* =========================================================
   CLOSE MODAL
========================================================= */

$("close").onclick =
    () => {

        modal.classList.add(
            "hidden"
        );

    };


modal.onclick =
    event => {

        if (
            event.target ===
            modal
        ) {

            modal.classList.add(
                "hidden"
            );

        }

    };


/* =========================================================
   KEYBOARD
========================================================= */

document.onkeydown =
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            modal.classList.add(
                "hidden"
            );

        }


        if (
            event.ctrlKey &&
            event.key.toLowerCase() ===
                "k"
        ) {

            event.preventDefault();

            topSearch.focus();

        }

    };


/* =========================================================
   MOBILE MENU
========================================================= */

$("menu").onclick =
    () => {

        $("nav").classList.toggle(
            "show"
        );

    };


/* =========================================================
   DARK / LIGHT THEME
========================================================= */

const themeToggle =
    $("themeToggle");


const themeIcon =
    $("themeIcon");


function updateThemeIcon() {

    const dark =
        document.body.classList.contains(
            "dark-theme"
        );


    if (dark) {

        themeIcon.className =
            "fa-solid fa-sun";

    } else {

        themeIcon.className =
            "fa-solid fa-moon";

    }

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "bookLibraryTheme"
        );


    if (
        savedTheme ===
        "dark"
    ) {

        document.body.classList.add(
            "dark-theme"
        );

    } else {

        document.body.classList.remove(
            "dark-theme"
        );

    }


    updateThemeIcon();

}


themeToggle.onclick =
    () => {

        document.body.classList.toggle(
            "dark-theme"
        );


        const dark =
            document.body.classList.contains(
                "dark-theme"
            );


        localStorage.setItem(
            "bookLibraryTheme",
            dark
                ? "dark"
                : "light"
        );


        updateThemeIcon();

    };


/* =========================================================
   INITIALIZE
========================================================= */

loadTheme();

updateStats();

render(books);