/* =========================================================
   EVENT REGISTRATION SYSTEM
   FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   EVENT DATABASE
========================================================= */

const events = {

    music: {

        id: "music",

        title: "Music Night 2026",

        description:
            "An evening of live music, fun and entertainment.",

        date:
            "15 September 2026",

        location:
            "City Auditorium",

        capacity:
            200,

        registered:
            120,

        image:
            "Image/music night.jpg"

    },


    tech: {

        id: "tech",

        title: "Tech Conference",

        description:
            "Latest trends in technology and digital innovations.",

        date:
            "22 September 2026",

        location:
            "Tech Hub",

        capacity:
            150,

        registered:
            95,

        image:
            "Image/tech conference.jpg"

    },


    food: {

        id: "food",

        title: "Food Festival",

        description:
            "A celebration of food, culture and delicious cuisine.",

        date:
            "30 September 2026",

        location:
            "Food Plaza",

        capacity:
            100,

        registered:
            80,

        image:
            "Image/food festival.jpg"

    }

};


/* =========================================================
   STATE
========================================================= */

let registrations =
    JSON.parse(
        localStorage.getItem(
            "eventRegistrations"
        ) || "[]"
    );


let selectedEvent =
    null;


/* =========================================================
   ELEMENT HELPER
========================================================= */

const $ = id =>
    document.getElementById(id);


/* =========================================================
   ELEMENTS
========================================================= */

const registrationForm =
    $("registrationForm");


const eventSelect =
    $("eventSelect");


const registrationTable =
    $("registrationTable");


const eventModal =
    $("eventModal");


const modalContent =
    $("modalContent");


const toast =
    $("toast");


const toastMessage =
    $("toastMessage");


/* =========================================================
   SAVE REGISTRATIONS
========================================================= */

function saveRegistrations() {

    localStorage.setItem(
        "eventRegistrations",
        JSON.stringify(
            registrations
        )
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   UPDATE EVENT COUNTS
========================================================= */

function updateEventCounts() {

    $("musicCount").textContent =
        events.music.registered;


    $("techCount").textContent =
        events.tech.registered;


    $("foodCount").textContent =
        events.food.registered;

}


/* =========================================================
   UPDATE REGISTRATION BUTTONS
========================================================= */

function updateRegistrationButtons() {

    document
        .querySelectorAll(
            "[data-register]"
        )
        .forEach(
            button => {

                const eventId =
                    button.dataset.register;


                const alreadyRegistered =
                    registrations.some(
                        item =>
                            item.eventId ===
                            eventId
                    );


                if (
                    alreadyRegistered
                ) {

                    button.classList.add(
                        "registered"
                    );


                    button.innerHTML = `

                        <i class="fa-solid fa-check"></i>

                        Registered

                    `;

                } else {

                    button.classList.remove(
                        "registered"
                    );


                    button.innerHTML = `

                        Register Now

                        <i class="fa-solid fa-arrow-right"></i>

                    `;

                }

            }
        );

}


/* =========================================================
   RENDER REGISTRATIONS
========================================================= */

function renderRegistrations() {

    const total =
        registrations.length;


    $("registrationTotal")
        .textContent =
        `${total} ${
            total === 1
                ? "Registered"
                : "Registered"
        }`;


    $("sideRegistered")
        .textContent =
        total;


    $("profileEvents")
        .textContent =
        total;


    if (
        !registrations.length
    ) {

        registrationTable.innerHTML = `

            <div class="empty-registration">

                <i class="fa-regular fa-calendar-xmark"></i>

                <h3>
                    No registrations yet
                </h3>

                <p>
                    Register for an event
                    to see it here.
                </p>

            </div>

        `;


        return;

    }


    registrationTable.innerHTML = `

        <table class="registration-table">

            <thead>

                <tr>

                    <th>
                        Event Name
                    </th>

                    <th>
                        Date
                    </th>

                    <th>
                        Location
                    </th>

                    <th>
                        Attendee
                    </th>

                    <th>
                        Status
                    </th>

                    <th>
                        Action
                    </th>

                </tr>

            </thead>


            <tbody>

                ${
                    registrations
                        .map(
                            registration => {

                                const event =
                                    events[
                                        registration.eventId
                                    ];


                                return `

                                    <tr>

                                        <td>
                                            ${escapeHTML(
                                                event.title
                                            )}
                                        </td>


                                        <td>
                                            ${escapeHTML(
                                                event.date
                                            )}
                                        </td>


                                        <td>
                                            ${escapeHTML(
                                                event.location
                                            )}
                                        </td>


                                        <td>
                                            ${escapeHTML(
                                                registration.name
                                            )}
                                        </td>


                                        <td>

                                            <span class="confirmed">
                                                Confirmed
                                            </span>

                                        </td>


                                        <td>

                                            <button
                                                class="view-btn"
                                                data-view="${event.id}"
                                            >
                                                View
                                            </button>


                                            <button
                                                class="cancel-btn"
                                                data-cancel="${registration.id}"
                                            >
                                                Cancel
                                            </button>

                                        </td>

                                    </tr>

                                `;

                            }
                        )
                        .join("")
                }

            </tbody>

        </table>

    `;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

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
   OPEN EVENT DETAILS
========================================================= */

function openEvent(eventId) {

    const event =
        events[eventId];


    if (!event) {

        return;

    }


    const registered =
        registrations.some(
            item =>
                item.eventId ===
                eventId
        );


    modalContent.innerHTML = `

        <img
            class="modal-event-image"
            src="${event.image}"
            alt="${escapeHTML(event.title)}"
        >


        <span class="section-label">
            EVENT DETAILS
        </span>


        <h2>
            ${escapeHTML(event.title)}
        </h2>


        <p>
            ${escapeHTML(event.description)}
        </p>


        <div class="modal-details">

            <span>

                <i class="fa-regular fa-calendar"></i>

                ${escapeHTML(event.date)}

            </span>


            <span>

                <i class="fa-solid fa-location-dot"></i>

                ${escapeHTML(event.location)}

            </span>


            <span>

                <i class="fa-solid fa-users"></i>

                ${event.registered}
                / ${event.capacity}
                registered

            </span>

        </div>


        <button
            class="submit-btn"
            id="modalRegister"
        >

            ${
                registered
                    ? "Already Registered"
                    : "Register for this Event"
            }

        </button>

    `;


    $("modalRegister").onclick =
        () => {

            if (
                registered
            ) {

                showToast(
                    "You are already registered for this event."
                );


                return;

            }


            eventSelect.value =
                eventId;


            eventModal.classList.add(
                "hidden"
            );


            document
                .querySelector(
                    "#contact"
                )
                .scrollIntoView({
                    behavior:
                        "smooth"
                });


            $("fullName").focus();


            showToast(
                `${event.title} selected. Complete the form to register.`
            );

        };


    eventModal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   FORM VALIDATION
========================================================= */

function validateForm() {

    const name =
        $("fullName")
            .value
            .trim();


    const email =
        $("email")
            .value
            .trim();


    const phone =
        $("phone")
            .value
            .trim();


    const eventId =
        eventSelect.value;


    if (!name) {

        showToast(
            "Please enter your full name."
        );

        $("fullName").focus();

        return false;

    }


    if (name.length < 3) {

        showToast(
            "Please enter a valid name."
        );

        $("fullName").focus();

        return false;

    }


    if (!email) {

        showToast(
            "Please enter your email address."
        );

        $("email").focus();

        return false;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(email)
    ) {

        showToast(
            "Please enter a valid email address."
        );

        $("email").focus();

        return false;

    }


    if (!phone) {

        showToast(
            "Please enter your phone number."
        );

        $("phone").focus();

        return false;

    }


    const phoneDigits =
        phone.replace(
            /\D/g,
            ""
        );


    if (
        phoneDigits.length < 10
    ) {

        showToast(
            "Please enter a valid phone number."
        );

        $("phone").focus();

        return false;

    }


    if (!eventId) {

        showToast(
            "Please select an event."
        );

        eventSelect.focus();

        return false;

    }


    return true;

}


/* =========================================================
   REGISTER EVENT
========================================================= */

registrationForm.onsubmit =
    event => {

        event.preventDefault();


        if (
            !validateForm()
        ) {

            return;

        }


        const name =
            $("fullName")
                .value
                .trim();


        const email =
            $("email")
                .value
                .trim();


        const phone =
            $("phone")
                .value
                .trim();


        const eventId =
            eventSelect.value;


        const selected =
            events[eventId];


        if (!selected) {

            return;

        }


        const duplicate =
            registrations.some(
                item =>
                    item.eventId ===
                        eventId &&
                    item.email.toLowerCase() ===
                        email.toLowerCase()
            );


        if (
            duplicate
        ) {

            showToast(
                "You are already registered for this event."
            );

            return;

        }


        const alreadyRegistered =
            registrations.some(
                item =>
                    item.eventId ===
                    eventId
            );


        if (
            alreadyRegistered
        ) {

            showToast(
                "You have already registered for this event."
            );

            return;

        }


        if (
            selected.registered >=
            selected.capacity
        ) {

            showToast(
                "Sorry, this event is full."
            );

            return;

        }


        const newRegistration = {

            id:
                Date.now(),

            eventId:
                eventId,

            name:
                name,

            email:
                email,

            phone:
                phone

        };


        registrations.push(
            newRegistration
        );


        selected.registered++;


        localStorage.setItem(
            "eventCounts",
            JSON.stringify({
                music:
                    events.music.registered,
                tech:
                    events.tech.registered,
                food:
                    events.food.registered
            })
        );


        saveRegistrations();


        renderRegistrations();

        updateEventCounts();

        updateRegistrationButtons();


        registrationForm.reset();


        showToast(
            `Successfully registered for ${selected.title}!`
        );


        document
            .querySelector(
                "#registrations"
            )
            .scrollIntoView({
                behavior:
                    "smooth"
            });

    };


/* =========================================================
   LOAD EVENT COUNTS
========================================================= */

function loadEventCounts() {

    const saved =
        JSON.parse(
            localStorage.getItem(
                "eventCounts"
            ) || "null"
        );


    if (!saved) {

        return;

    }


    if (
        typeof saved.music ===
        "number"
    ) {

        events.music.registered =
            saved.music;

    }


    if (
        typeof saved.tech ===
        "number"
    ) {

        events.tech.registered =
            saved.tech;

    }


    if (
        typeof saved.food ===
        "number"
    ) {

        events.food.registered =
            saved.food;

    }

}


/* =========================================================
   EVENT REGISTER BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-register]"
    )
    .forEach(
        button => {

            button.onclick =
                () => {

                    const eventId =
                        button.dataset.register;


                    const alreadyRegistered =
                        registrations.some(
                            item =>
                                item.eventId ===
                                eventId
                        );


                    if (
                        alreadyRegistered
                    ) {

                        showToast(
                            "You are already registered for this event."
                        );


                        return;

                    }


                    eventSelect.value =
                        eventId;


                    document
                        .querySelector(
                            "#contact"
                        )
                        .scrollIntoView({
                            behavior:
                                "smooth"
                        });


                    setTimeout(
                        () => {

                            $("fullName")
                                .focus();

                        },
                        500
                    );

                };

        }
    );


/* =========================================================
   EVENT CARD CLICK
========================================================= */

document
    .querySelectorAll(
        ".event-card"
    )
    .forEach(
        card => {

            card.ondblclick =
                () => {

                    openEvent(
                        card.dataset.event
                    );

                };

        }
    );


/* =========================================================
   REGISTRATION TABLE ACTIONS
========================================================= */

registrationTable.onclick =
    event => {

        const viewButton =
            event.target.closest(
                "[data-view]"
            );


        const cancelButton =
            event.target.closest(
                "[data-cancel]"
            );


        if (
            viewButton
        ) {

            openEvent(
                viewButton.dataset.view
            );

            return;

        }


        if (
            cancelButton
        ) {

            const id =
                Number(
                    cancelButton.dataset.cancel
                );


            cancelRegistration(id);

        }

    };


/* =========================================================
   CANCEL REGISTRATION
========================================================= */

function cancelRegistration(id) {

    const registration =
        registrations.find(
            item =>
                item.id === id
        );


    if (!registration) {

        return;

    }


    const event =
        events[
            registration.eventId
        ];


    const confirmed =
        confirm(
            `Cancel your registration for ${event.title}?`
        );


    if (
        !confirmed
    ) {

        return;

    }


    registrations =
        registrations.filter(
            item =>
                item.id !== id
        );


    if (
        event.registered > 0
    ) {

        event.registered--;

    }


    saveRegistrations();


    localStorage.setItem(
        "eventCounts",
        JSON.stringify({
            music:
                events.music.registered,
            tech:
                events.tech.registered,
            food:
                events.food.registered
        })
    );


    renderRegistrations();

    updateEventCounts();

    updateRegistrationButtons();


    showToast(
        "Registration cancelled successfully."
    );

}


/* =========================================================
   BROWSE EVENTS
========================================================= */

$("browseEvents").onclick =
    () => {

        $("events")
            .scrollIntoView({
                behavior:
                    "smooth"
            });

    };


/* =========================================================
   PROFILE
========================================================= */

$("profileBtn").onclick =
    () => {

        renderRegistrations();

        $("profileModal")
            .classList.remove(
                "hidden"
            );

    };


/* =========================================================
   CLOSE PROFILE
========================================================= */

$("profileClose").onclick =
    () => {

        $("profileModal")
            .classList.add(
                "hidden"
            );

    };


/* =========================================================
   CLOSE EVENT MODAL
========================================================= */

$("modalClose").onclick =
    () => {

        eventModal.classList.add(
            "hidden"
        );

    };


/* =========================================================
   MODAL BACKGROUND CLICK
========================================================= */

eventModal.onclick =
    event => {

        if (
            event.target ===
            eventModal
        ) {

            eventModal.classList.add(
                "hidden"
            );

        }

    };


$("profileModal").onclick =
    event => {

        if (
            event.target ===
            $("profileModal")
        ) {

            $("profileModal")
                .classList.add(
                    "hidden"
                );

        }

    };


/* =========================================================
   MOBILE MENU
========================================================= */

$("menu").onclick =
    () => {

        $("nav")
            .classList.toggle(
                "show"
            );

    };


/* =========================================================
   NAVIGATION
========================================================= */

document
    .querySelectorAll(
        ".navbar nav a"
    )
    .forEach(
        link => {

            link.onclick =
                () => {

                    document
                        .querySelectorAll(
                            ".navbar nav a"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    link.classList.add(
                        "active"
                    );


                    $("nav")
                        .classList.remove(
                            "show"
                        );

                };

        }
    );


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


    themeIcon.className =
        dark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

}


function loadTheme() {

    const theme =
        localStorage.getItem(
            "eventTheme"
        );


    if (
        theme === "dark"
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
            "eventTheme",
            dark
                ? "dark"
                : "light"
        );


        updateThemeIcon();

    };


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.onkeydown =
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            eventModal.classList.add(
                "hidden"
            );


            $("profileModal")
                .classList.add(
                    "hidden"
                );

        }

    };


/* =========================================================
   INITIALIZE
========================================================= */

loadEventCounts();

loadTheme();

updateEventCounts();

renderRegistrations();

updateRegistrationButtons();