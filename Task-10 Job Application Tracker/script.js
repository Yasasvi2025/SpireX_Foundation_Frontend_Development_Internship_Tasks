/* =========================================================
   JOBTRACK APPLICATION TRACKER
   FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   STATUS OPTIONS
========================================================= */

const STATUS_OPTIONS = [
    "Interview",
    "Offer",
    "Pending",
    "Rejected",
    "Withdrawn"
];


/* =========================================================
   DEFAULT APPLICATION DATA
========================================================= */

const defaultApplications = [

    {
        id: 1,
        company: "Google",
        role: "Frontend Developer",
        date: "2024-05-12",
        status: "Interview",
        logo: "G"
    },

    {
        id: 2,
        company: "Microsoft",
        role: "Software Engineer",
        date: "2024-05-10",
        status: "Pending",
        logo: "M"
    },

    {
        id: 3,
        company: "Amazon",
        role: "SDE Intern",
        date: "2024-05-08",
        status: "Pending",
        logo: "a"
    },

    {
        id: 4,
        company: "Swiggy",
        role: "Frontend Developer",
        date: "2024-05-05",
        status: "Interview",
        logo: "S"
    },

    {
        id: 5,
        company: "TCS",
        role: "System Engineer",
        date: "2024-05-01",
        status: "Rejected",
        logo: "tcs"
    },

    {
        id: 6,
        company: "Infosys",
        role: "Software Engineer",
        date: "2024-04-28",
        status: "Rejected",
        logo: "Infosys"
    },

    {
        id: 7,
        company: "Meta",
        role: "React Developer",
        date: "2024-04-25",
        status: "Interview",
        logo: "M"
    },

    {
        id: 8,
        company: "Apple",
        role: "UI Developer",
        date: "2024-04-22",
        status: "Pending",
        logo: "A"
    },

    {
        id: 9,
        company: "Netflix",
        role: "Frontend Engineer",
        date: "2024-04-19",
        status: "Pending",
        logo: "N"
    },

    {
        id: 10,
        company: "Adobe",
        role: "Web Developer",
        date: "2024-04-17",
        status: "Rejected",
        logo: "A"
    },

    {
        id: 11,
        company: "Wipro",
        role: "Python Developer",
        date: "2024-04-15",
        status: "Pending",
        logo: "W"
    },

    {
        id: 12,
        company: "Accenture",
        role: "Associate Developer",
        date: "2024-04-13",
        status: "Interview",
        logo: "A"
    },

    {
        id: 13,
        company: "IBM",
        role: "Backend Developer",
        date: "2024-04-11",
        status: "Pending",
        logo: "IBM"
    },

    {
        id: 14,
        company: "Deloitte",
        role: "Software Engineer",
        date: "2024-04-09",
        status: "Rejected",
        logo: "D"
    },

    {
        id: 15,
        company: "Capgemini",
        role: "Web Developer",
        date: "2024-04-07",
        status: "Pending",
        logo: "C"
    },

    {
        id: 16,
        company: "Zoho",
        role: "Frontend Developer",
        date: "2024-04-05",
        status: "Interview",
        logo: "Z"
    },

    {
        id: 17,
        company: "Flipkart",
        role: "React Developer",
        date: "2024-04-03",
        status: "Rejected",
        logo: "F"
    },

    {
        id: 18,
        company: "Razorpay",
        role: "Software Engineer",
        date: "2024-04-01",
        status: "Pending",
        logo: "R"
    },

    {
        id: 19,
        company: "Paytm",
        role: "Frontend Developer",
        date: "2024-03-29",
        status: "Rejected",
        logo: "P"
    },

    {
        id: 20,
        company: "Cognizant",
        role: "Programmer Analyst",
        date: "2024-03-26",
        status: "Rejected",
        logo: "C"
    },

    {
        id: 21,
        company: "HCL",
        role: "Python Developer",
        date: "2024-03-24",
        status: "Rejected",
        logo: "H"
    },

    {
        id: 22,
        company: "Tech Mahindra",
        role: "Web Developer",
        date: "2024-03-21",
        status: "Interview",
        logo: "T"
    },

    {
        id: 23,
        company: "Dell",
        role: "Software Engineer",
        date: "2024-03-18",
        status: "Rejected",
        logo: "D"
    },

    {
        id: 24,
        company: "Oracle",
        role: "Backend Developer",
        date: "2024-03-15",
        status: "Rejected",
        logo: "O"
    },

    /* NEW APPLICATIONS */

    {
        id: 25,
        company: "LinkedIn",
        role: "Frontend Developer",
        date: "2024-03-12",
        status: "Interview",
        logo: "L"
    },

    {
        id: 26,
        company: "Atlassian",
        role: "React Developer",
        date: "2024-03-10",
        status: "Interview",
        logo: "A"
    },

    {
        id: 27,
        company: "Salesforce",
        role: "Software Engineer",
        date: "2024-03-08",
        status: "Rejected",
        logo: "S"
    },

    {
        id: 28,
        company: "Deloitte",
        role: "Frontend Engineer",
        date: "2024-03-05",
        status: "Offer",
        logo: "D"
    }

];


/* =========================================================
   STATE
========================================================= */

let applications =
    JSON.parse(
        localStorage.getItem("jobtrackApplications")
    ) || defaultApplications;


let currentPage = 1;

const itemsPerPage = 6;


/* =========================================================
   ELEMENTS
========================================================= */

const tableBody =
    document.getElementById(
        "applicationTableBody"
    );


const applicationSearch =
    document.getElementById(
        "applicationSearch"
    );


const globalSearch =
    document.getElementById(
        "globalSearch"
    );


const statusFilter =
    document.getElementById(
        "statusFilter"
    );


const sortSelect =
    document.getElementById(
        "sortSelect"
    );


const applicationModal =
    document.getElementById(
        "applicationModal"
    );


const applicationForm =
    document.getElementById(
        "applicationForm"
    );


const toast =
    document.getElementById(
        "toast"
    );


/* =========================================================
   SAFE TEXT UPDATE
========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent = value;

    }

}


/* =========================================================
   SAVE APPLICATIONS
========================================================= */

function saveApplications() {

    localStorage.setItem(
        "jobtrackApplications",
        JSON.stringify(applications)
    );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   COMPANY LOGO
========================================================= */

function getCompanyLogo(application) {

    return `

        <div class="company-logo">

            ${escapeHTML(
                application.logo ||
                application.company.charAt(0)
            )}

        </div>

    `;

}


/* =========================================================
   ENSURE STATUS OPTIONS
========================================================= */

function ensureStatusOptions() {

    const selects = [
        statusFilter,
        document.getElementById(
            "statusInput"
        )
    ];


    selects.forEach(
        select => {

            if (!select) return;


            STATUS_OPTIONS.forEach(
                status => {

                    const exists =
                        Array.from(
                            select.options
                        ).some(
                            option =>
                                option.value ===
                                status
                        );


                    if (!exists) {

                        const option =
                            document.createElement(
                                "option"
                            );


                        option.value =
                            status;


                        option.textContent =
                            status;


                        select.appendChild(
                            option
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   FILTER + SORT
========================================================= */

function getFilteredApplications() {

    const searchValue =
        (
            applicationSearch?.value ||
            globalSearch?.value ||
            ""
        )
        .toLowerCase()
        .trim();


    const filterValue =
        statusFilter?.value || "all";


    let result =
        applications.filter(
            app => {

                const matchesSearch =

                    !searchValue ||

                    app.company
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    app.role
                        .toLowerCase()
                        .includes(searchValue);


                const matchesStatus =
                    filterValue === "all" ||
                    app.status === filterValue;


                return (
                    matchesSearch &&
                    matchesStatus
                );

            }
        );


    const sortValue =
        sortSelect?.value || "newest";


    if (sortValue === "newest") {

        result.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

    }


    if (sortValue === "oldest") {

        result.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    if (sortValue === "company") {

        result.sort(
            (a, b) =>
                a.company.localeCompare(
                    b.company
                )
        );

    }


    if (sortValue === "status") {

        result.sort(
            (a, b) =>
                a.status.localeCompare(
                    b.status
                )
        );

    }


    return result;

}


/* =========================================================
   RENDER APPLICATION TABLE
========================================================= */

function renderApplications() {

    if (!tableBody) return;


    const filtered =
        getFilteredApplications();


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filtered.length /
                itemsPerPage
            )
        );


    if (currentPage > totalPages) {

        currentPage = totalPages;

    }


    const start =
        (currentPage - 1) *
        itemsPerPage;


    const visible =
        filtered.slice(
            start,
            start + itemsPerPage
        );


    tableBody.innerHTML = "";


    visible.forEach(
        application => {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>

                    <div class="company-cell">

                        ${getCompanyLogo(application)}

                        <span>
                            ${escapeHTML(
                                application.company
                            )}
                        </span>

                    </div>

                </td>


                <td>
                    ${escapeHTML(
                        application.role
                    )}
                </td>


                <td>
                    ${formatDate(
                        application.date
                    )}
                </td>


                <td>

                    <span
                        class="status ${application.status}"
                    >

                        ${escapeHTML(
                            application.status
                        )}

                    </span>

                </td>


                <td>

                    <div class="action-buttons">

                        <button
                            class="action-btn"
                            onclick="editApplication(${application.id})"
                            title="Edit application"
                            aria-label="Edit application"
                        >

                            <i class="fa-solid fa-pen"></i>

                        </button>


                        <button
                            class="action-btn delete"
                            onclick="deleteApplication(${application.id})"
                            title="Delete application"
                            aria-label="Delete application"
                        >

                            <i class="fa-solid fa-trash-can"></i>

                        </button>

                    </div>

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );


    renderPagination(
        filtered.length,
        totalPages
    );


    renderFullApplicationList(
        filtered
    );

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
   PAGINATION
========================================================= */

function renderPagination(
    totalItems,
    totalPages
) {

    const pagination =
        document.getElementById(
            "pagination"
        );


    if (!pagination) return;


    pagination.innerHTML = "";


    const previous =
        document.createElement(
            "button"
        );


    previous.className =
        "page-btn";


    previous.innerHTML =
        '<i class="fa-solid fa-chevron-left"></i>';


    previous.disabled =
        currentPage === 1;


    previous.onclick =
        () => {

            if (currentPage > 1) {

                currentPage--;

                renderApplications();

            }

        };


    pagination.appendChild(
        previous
    );


    for (
        let i = 1;
        i <= totalPages;
        i++
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "page-btn" +
            (
                i === currentPage
                    ? " active"
                    : ""
            );


        button.textContent =
            i;


        button.onclick =
            () => {

                currentPage = i;

                renderApplications();

            };


        pagination.appendChild(
            button
        );

    }


    const next =
        document.createElement(
            "button"
        );


    next.className =
        "page-btn";


    next.innerHTML =
        '<i class="fa-solid fa-chevron-right"></i>';


    next.disabled =
        currentPage === totalPages;


    next.onclick =
        () => {

            if (
                currentPage <
                totalPages
            ) {

                currentPage++;

                renderApplications();

            }

        };


    pagination.appendChild(
        next
    );


    const start =
        totalItems === 0

            ? 0

            :

            (
                currentPage - 1
            ) *
            itemsPerPage + 1;


    const end =
        Math.min(
            currentPage *
                itemsPerPage,
            totalItems
        );


    setText(
        "paginationInfo",
        `Showing ${start} to ${end} of ${totalItems} applications`
    );

}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateStatistics() {

    const total =
        applications.length;


    const interview =
        applications.filter(
            app =>
                app.status === "Interview"
        ).length;


    const offer =
        applications.filter(
            app =>
                app.status === "Offer"
        ).length;


    const pending =
        applications.filter(
            app =>
                app.status === "Pending"
        ).length;


    const rejected =
        applications.filter(
            app =>
                app.status === "Rejected"
        ).length;


    /* =====================================================
       MAIN DASHBOARD COUNTS
    ===================================================== */

    setText(
        "totalApplications",
        total
    );


    setText(
        "interviewCount",
        interview
    );


    setText(
        "offerCount",
        offer
    );


    setText(
        "pendingCount",
        pending
    );


    setText(
        "rejectedCount",
        rejected
    );


    /* =====================================================
       STATISTICS VIEW
    ===================================================== */

    setText(
        "statisticsTotal",
        total
    );


    setText(
        "statisticsInterview",
        interview
    );


    setText(
        "statisticsOffer",
        offer
    );


    setText(
        "statisticsPending",
        pending
    );


    setText(
        "statisticsRejected",
        rejected
    );


    /* =====================================================
       DONUT TOTAL
    ===================================================== */

    setText(
        "donutTotal",
        total
    );


    /* =====================================================
       PERCENTAGES
    ===================================================== */

    const interviewPercent =
        total
            ? (interview / total) * 100
            : 0;


    const offerPercent =
        total
            ? (offer / total) * 100
            : 0;


    const pendingPercent =
        total
            ? (pending / total) * 100
            : 0;


    const rejectedPercent =
        total
            ? (rejected / total) * 100
            : 0;


    setText(
        "interviewPercent",
        `${interviewPercent.toFixed(1)}%`
    );


    setText(
        "offerPercent",
        `${offerPercent.toFixed(1)}%`
    );


    setText(
        "pendingPercent",
        `${pendingPercent.toFixed(1)}%`
    );


    setText(
        "rejectedPercent",
        `${rejectedPercent.toFixed(1)}%`
    );


    /* =====================================================
       UPDATE DONUT
    ===================================================== */

    updateDonut(
        interviewPercent,
        offerPercent,
        pendingPercent,
        rejectedPercent
    );


    /* =====================================================
       GOALS
    ===================================================== */

    updateGoals(
        total,
        interview
    );

}


/* =========================================================
   DONUT
========================================================= */

function updateDonut(
    interview,
    offer,
    pending,
    rejected
) {

    const donut =
        document.getElementById(
            "donutChart"
        );


    const largeDonut =
        document.getElementById(
            "largeDonut"
        );


    const interviewEnd =
        interview;


    const offerEnd =
        interview +
        offer;


    const pendingEnd =
        interview +
        offer +
        pending;


    const gradient =
        `conic-gradient(
            #20d995 0 ${interviewEnd}%,
            #7c4dff ${interviewEnd}% ${offerEnd}%,
            #ffb21d ${offerEnd}% ${pendingEnd}%,
            #ff3e58 ${pendingEnd}% 100%
        )`;


    if (donut) {

        donut.style.background =
            gradient;

    }


    if (largeDonut) {

        largeDonut.style.background =
            gradient;

    }

}


/* =========================================================
   GOALS
========================================================= */

function updateGoals(
    total,
    interviews
) {

    const applicationTarget = 50;

    const interviewTarget = 5;


    const applicationPercentage =
        Math.min(
            100,
            (
                total /
                applicationTarget
            ) * 100
        );


    const interviewPercentage =
        Math.min(
            100,
            (
                interviews /
                interviewTarget
            ) * 100
        );


    setText(
        "applicationGoalText",
        `${total} / ${applicationTarget}`
    );


    setText(
        "interviewGoalText",
        `${interviews} / ${interviewTarget}`
    );


    const applicationGoalBar =
        document.getElementById(
            "applicationGoalBar"
        );


    if (applicationGoalBar) {

        applicationGoalBar.style.width =
            `${applicationPercentage}%`;

    }


    const interviewGoalBar =
        document.getElementById(
            "interviewGoalBar"
        );


    if (interviewGoalBar) {

        interviewGoalBar.style.width =
            `${interviewPercentage}%`;

    }


    setText(
        "largeApplicationGoal",
        `${total} of ${applicationTarget} applications completed`
    );


    setText(
        "largeInterviewGoal",
        `${interviews} of ${interviewTarget} interviews completed`
    );


    const largeApplicationBar =
        document.getElementById(
            "largeApplicationBar"
        );


    if (largeApplicationBar) {

        largeApplicationBar.style.width =
            `${applicationPercentage}%`;

    }


    const largeInterviewBar =
        document.getElementById(
            "largeInterviewBar"
        );


    if (largeInterviewBar) {

        largeInterviewBar.style.width =
            `${interviewPercentage}%`;

    }

}


/* =========================================================
   ADD APPLICATION
========================================================= */

function openAddModal() {

    if (!applicationForm ||
        !applicationModal) {

        return;

    }


    applicationForm.reset();


    setText(
        "modalTitle",
        "Add Application"
    );


    const applicationId =
        document.getElementById(
            "applicationId"
        );


    if (applicationId) {

        applicationId.value = "";

    }


    const dateInput =
        document.getElementById(
            "dateInput"
        );


    if (dateInput) {

        dateInput.value =
            new Date()
                .toISOString()
                .split("T")[0];

    }


    applicationModal.classList.add(
        "show"
    );

}


/* =========================================================
   EDIT APPLICATION
========================================================= */

window.editApplication =
function(id) {

    const application =
        applications.find(
            app =>
                app.id === id
        );


    if (!application) return;


    const applicationId =
        document.getElementById(
            "applicationId"
        );


    const companyInput =
        document.getElementById(
            "companyInput"
        );


    const roleInput =
        document.getElementById(
            "roleInput"
        );


    const dateInput =
        document.getElementById(
            "dateInput"
        );


    const statusInput =
        document.getElementById(
            "statusInput"
        );


    if (applicationId) {

        applicationId.value =
            application.id;

    }


    if (companyInput) {

        companyInput.value =
            application.company;

    }


    if (roleInput) {

        roleInput.value =
            application.role;

    }


    if (dateInput) {

        dateInput.value =
            application.date;

    }


    if (statusInput) {

        statusInput.value =
            application.status;

    }


    setText(
        "modalTitle",
        "Edit Application"
    );


    if (applicationModal) {

        applicationModal.classList.add(
            "show"
        );

    }

};


/* =========================================================
   DELETE APPLICATION
========================================================= */

window.deleteApplication =
function(id) {

    const application =
        applications.find(
            app =>
                app.id === id
        );


    if (!application) return;


    const confirmed =
        confirm(
            `Delete ${application.company} application?`
        );


    if (!confirmed) return;


    applications =
        applications.filter(
            app =>
                app.id !== id
        );


    saveApplications();

    renderApplications();

    updateStatistics();

    showToast(
        "Application deleted successfully."
    );

};


/* =========================================================
   FORM SUBMIT
========================================================= */

if (applicationForm) {

    applicationForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const id =
                document.getElementById(
                    "applicationId"
                )?.value;


            const company =
                document.getElementById(
                    "companyInput"
                )?.value.trim();


            const role =
                document.getElementById(
                    "roleInput"
                )?.value.trim();


            const date =
                document.getElementById(
                    "dateInput"
                )?.value;


            const status =
                document.getElementById(
                    "statusInput"
                )?.value ||
                "Pending";


            if (
                !company ||
                !role ||
                !date
            ) {

                showToast(
                    "Please complete all fields."
                );

                return;

            }


            if (id) {

                const index =
                    applications.findIndex(
                        app =>
                            app.id ===
                            Number(id)
                    );


                if (index !== -1) {

                    applications[index] = {

                        ...applications[index],

                        company,
                        role,
                        date,
                        status,

                        logo:
                            applications[index]
                                .logo ||
                            company
                                .charAt(0)
                                .toUpperCase()

                    };

                }


                showToast(
                    "Application updated successfully."
                );

            } else {

                applications.unshift({

                    id:
                        Date.now(),

                    company,

                    role,

                    date,

                    status,

                    logo:
                        company
                            .charAt(0)
                            .toUpperCase()

                });


                currentPage = 1;


                showToast(
                    "Application added successfully."
                );

            }


            saveApplications();

            renderApplications();

            updateStatistics();

            closeModal();

        }
    );

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    if (applicationModal) {

        applicationModal.classList.remove(
            "show"
        );

    }

}


document.getElementById(
    "closeModal"
)?.addEventListener(
    "click",
    closeModal
);


document.getElementById(
    "cancelModal"
)?.addEventListener(
    "click",
    closeModal
);


applicationModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            applicationModal
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   SEARCH
========================================================= */

applicationSearch?.addEventListener(
    "input",
    () => {

        currentPage = 1;


        if (globalSearch) {

            globalSearch.value =
                applicationSearch.value;

        }


        renderApplications();

    }
);


globalSearch?.addEventListener(
    "input",
    () => {

        currentPage = 1;


        if (applicationSearch) {

            applicationSearch.value =
                globalSearch.value;

        }


        renderApplications();

    }
);


/* =========================================================
   FILTER
========================================================= */

statusFilter?.addEventListener(
    "change",
    () => {

        currentPage = 1;

        renderApplications();

    }
);


/* =========================================================
   SORT
========================================================= */

sortSelect?.addEventListener(
    "change",
    () => {

        currentPage = 1;

        renderApplications();

    }
);


/* =========================================================
   ADD BUTTONS
========================================================= */

document.getElementById(
    "addApplicationBtn"
)?.addEventListener(
    "click",
    openAddModal
);


document.getElementById(
    "addApplicationBtn2"
)?.addEventListener(
    "click",
    openAddModal
);


document.getElementById(
    "sidebarAdd"
)?.addEventListener(
    "click",
    openAddModal
);


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


function updateThemeIcon() {

    const thumb =
        document.querySelector(
            ".toggle-thumb"
        );


    if (!thumb) return;


    if (
        document.body.classList.contains(
            "light"
        )
    ) {

        thumb.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        thumb.innerHTML =
            '<i class="fa-solid fa-gear"></i>';

    }

}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "jobtrackTheme"
        );


    if (
        savedTheme === "light"
    ) {

        document.body.classList.add(
            "light"
        );

    } else {

        document.body.classList.remove(
            "light"
        );

    }


    updateThemeIcon();

}


themeToggle?.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const light =
            document.body.classList.contains(
                "light"
            );


        localStorage.setItem(
            "jobtrackTheme",
            light
                ? "light"
                : "dark"
        );


        updateThemeIcon();

    }
);


loadTheme();


/* =========================================================
   NAVIGATION
========================================================= */

const views = {

    dashboard:
        document.getElementById(
            "dashboardView"
        ),

    applications:
        document.getElementById(
            "applicationsView"
        ),

    calendar:
        document.getElementById(
            "calendarView"
        ),

    statistics:
        document.getElementById(
            "statisticsView"
        ),

    goals:
        document.getElementById(
            "goalsView"
        ),

    notes:
        document.getElementById(
            "notesView"
        )

};


document.querySelectorAll(
    ".nav-item[data-view]"
).forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const view =
                    button.dataset.view;


                Object.values(views)
                    .forEach(
                        section => {

                            if (section) {

                                section.classList.add(
                                    "hidden-view"
                                );

                            }

                        }
                    );


                if (views[view]) {

                    views[view]
                        .classList.remove(
                            "hidden-view"
                        );

                }


                document.querySelectorAll(
                    ".nav-item"
                ).forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                if (
                    view === "calendar"
                ) {

                    renderCalendar();

                }


                if (
                    view === "notes"
                ) {

                    renderNotes();

                }

            }
        );

    }
);


/* =========================================================
   FULL APPLICATION LIST
========================================================= */

function renderFullApplicationList(
    list
) {

    const container =
        document.getElementById(
            "applicationsFullList"
        );


    if (!container) return;


    container.innerHTML = "";


    list.forEach(
        application => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "full-application";


            div.innerHTML = `

                <div class="company-cell">

                    ${getCompanyLogo(application)}

                    <span>
                        ${escapeHTML(
                            application.company
                        )}
                    </span>

                </div>


                <span>
                    ${escapeHTML(
                        application.role
                    )}
                </span>


                <span>
                    ${formatDate(
                        application.date
                    )}
                </span>


                <span
                    class="status ${application.status}"
                >
                    ${escapeHTML(
                        application.status
                    )}
                </span>


                <div class="action-buttons">

                    <button
                        class="action-btn"
                        onclick="editApplication(${application.id})"
                        title="Edit"
                    >

                        <i class="fa-solid fa-pen"></i>

                    </button>


                    <button
                        class="action-btn delete"
                        onclick="deleteApplication(${application.id})"
                        title="Delete"
                    >

                        <i class="fa-solid fa-trash-can"></i>

                    </button>

                </div>

            `;


            container.appendChild(
                div
            );

        }
    );

}


/* =========================================================
   CALENDAR
========================================================= */

function renderCalendar() {

    const calendar =
        document.getElementById(
            "calendar"
        );


    if (!calendar) return;


    calendar.innerHTML = "";


    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];


    days.forEach(
        day => {

            const header =
                document.createElement(
                    "div"
                );


            header.className =
                "calendar-day";


            header.style.minHeight =
                "35px";


            header.innerHTML =
                `<strong>${day}</strong>`;


            calendar.appendChild(
                header
            );

        }
    );


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        today.getMonth();


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const blank =
            document.createElement(
                "div"
            );


        blank.className =
            "calendar-day";


        calendar.appendChild(
            blank
        );

    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cell =
            document.createElement(
                "div"
            );


        cell.className =
            "calendar-day";


        cell.innerHTML =
            `<strong>${day}</strong>`;


        const dateKey =
            `${year}-${String(
                month + 1
            ).padStart(2, "0")}-${String(
                day
            ).padStart(2, "0")}`;


        const events =
            applications.filter(
                app =>
                    app.date === dateKey
            );


        events.forEach(
            event => {

                const eventElement =
                    document.createElement(
                        "div"
                    );


                eventElement.className =
                    "calendar-event";


                eventElement.textContent =
                    event.company;


                cell.appendChild(
                    eventElement
                );

            }
        );


        calendar.appendChild(
            cell
        );

    }

}


/* =========================================================
   NOTES
========================================================= */

let notes =
    JSON.parse(
        localStorage.getItem(
            "jobtrackNotes"
        )
    ) ||

    [

        {
            title:
                "Interview Preparation",

            text:
                "Review JavaScript, React, Python and common behavioral questions before interviews."
        },

        {
            title:
                "Daily Goal",

            text:
                "Apply to at least 2 suitable positions every day."
        }

    ];


function saveNotes() {

    localStorage.setItem(
        "jobtrackNotes",
        JSON.stringify(notes)
    );

}


function renderNotes() {

    const container =
        document.getElementById(
            "notesList"
        );


    if (!container) return;


    container.innerHTML = "";


    notes.forEach(
        (
            note,
            index
        ) => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "note";


            div.innerHTML = `

                <h3>
                    ${escapeHTML(
                        note.title
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        note.text
                    )}
                </p>

                <br>

                <button
                    class="action-btn delete"
                    onclick="deleteNote(${index})"
                    title="Delete note"
                >

                    <i class="fa-solid fa-trash-can"></i>

                </button>

            `;


            container.appendChild(
                div
            );

        }
    );

}


window.deleteNote =
function(index) {

    notes.splice(
        index,
        1
    );


    saveNotes();

    renderNotes();

    showToast(
        "Note deleted."
    );

};


document.getElementById(
    "addNoteBtn"
)?.addEventListener(
    "click",
    () => {

        const title =
            prompt(
                "Enter note title:"
            );


        if (!title) return;


        const text =
            prompt(
                "Enter your note:"
            );


        if (!text) return;


        notes.push({

            title,
            text

        });


        saveNotes();

        renderNotes();

        showToast(
            "Note added."
        );

    }
);


/* =========================================================
   NOTIFICATIONS
========================================================= */

const notificationBtn =
    document.getElementById(
        "notificationBtn"
    );


const notificationPopup =
    document.getElementById(
        "notificationPopup"
    );


const notificationDot =
    document.getElementById(
        "notificationDot"
    );


const notificationList =
    document.getElementById(
        "notificationList"
    );


const notificationEmpty =
    document.getElementById(
        "notificationEmpty"
    );


const notificationCount =
    document.getElementById(
        "notificationCount"
    );


const clearNotifications =
    document.getElementById(
        "clearNotifications"
    );


function updateNotificationState() {

    if (!notificationList) return;


    const count =
        notificationList.querySelectorAll(
            ".notification-item"
        ).length;


    if (notificationCount) {

        notificationCount.textContent =
            `${count} notification${count === 1 ? "" : "s"}`;

    }


    if (count === 0) {

        notificationDot?.classList.add(
            "hidden"
        );

        notificationEmpty?.classList.add(
            "show"
        );

    } else {

        notificationDot?.classList.remove(
            "hidden"
        );

        notificationEmpty?.classList.remove(
            "show"
        );

    }

}


notificationBtn?.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        notificationPopup?.classList.toggle(
            "show"
        );


        profileMenu?.classList.remove(
            "show"
        );

    }
);


clearNotifications?.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        if (notificationList) {

            notificationList.innerHTML = "";

        }


        updateNotificationState();


        showToast(
            "All notifications cleared."
        );

    }
);


/* =========================================================
   PROFILE
========================================================= */

const profileBtn =
    document.getElementById(
        "profileBtn"
    );


const profileMenu =
    document.getElementById(
        "profileMenu"
    );


profileBtn?.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        profileMenu?.classList.toggle(
            "show"
        );


        notificationPopup?.classList.remove(
            "show"
        );

    }
);


document.getElementById(
    "profileAccount"
)?.addEventListener(
    "click",
    () => {

        showToast(
            "Profile section selected."
        );


        profileMenu?.classList.remove(
            "show"
        );

    }
);


document.getElementById(
    "signOutBtn"
)?.addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Are you sure you want to sign out?"
            );


        if (confirmed) {

            showToast(
                "Signed out successfully."
            );


            profileMenu?.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   CLOSE POPUPS OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            notificationPopup &&
            notificationBtn &&
            !notificationPopup.contains(
                event.target
            ) &&
            event.target !==
            notificationBtn
        ) {

            notificationPopup.classList.remove(
                "show"
            );

        }


        if (
            profileMenu &&
            profileBtn &&
            !profileMenu.contains(
                event.target
            ) &&
            event.target !==
            profileBtn
        ) {

            profileMenu.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   GOALS EDIT
========================================================= */

function editGoals() {

    const applicationGoal =
        prompt(
            "Set application goal:",
            "50"
        );


    if (
        applicationGoal === null
    ) {

        return;

    }


    const interviewGoal =
        prompt(
            "Set interview goal:",
            "5"
        );


    if (
        interviewGoal === null
    ) {

        return;

    }


    const total =
        applications.length;


    const interviews =
        applications.filter(
            app =>
                app.status === "Interview"
        ).length;


    const appTarget =
        Math.max(
            1,
            Number(applicationGoal)
        );


    const interviewTarget =
        Math.max(
            1,
            Number(interviewGoal)
        );


    const appPercentage =
        Math.min(
            100,
            total /
            appTarget *
            100
        );


    const interviewPercentage =
        Math.min(
            100,
            interviews /
            interviewTarget *
            100
        );


    setText(
        "applicationGoalText",
        `${total} / ${appTarget}`
    );


    setText(
        "interviewGoalText",
        `${interviews} / ${interviewTarget}`
    );


    const applicationGoalBar =
        document.getElementById(
            "applicationGoalBar"
        );


    const interviewGoalBar =
        document.getElementById(
            "interviewGoalBar"
        );


    const largeApplicationBar =
        document.getElementById(
            "largeApplicationBar"
        );


    const largeInterviewBar =
        document.getElementById(
            "largeInterviewBar"
        );


    if (applicationGoalBar) {

        applicationGoalBar.style.width =
            `${appPercentage}%`;

    }


    if (interviewGoalBar) {

        interviewGoalBar.style.width =
            `${interviewPercentage}%`;

    }


    setText(
        "largeApplicationGoal",
        `${total} of ${appTarget} applications completed`
    );


    setText(
        "largeInterviewGoal",
        `${interviews} of ${interviewTarget} interviews completed`
    );


    if (largeApplicationBar) {

        largeApplicationBar.style.width =
            `${appPercentage}%`;

    }


    if (largeInterviewBar) {

        largeInterviewBar.style.width =
            `${interviewPercentage}%`;

    }


    showToast(
        "Goals updated."
    );

}


document.getElementById(
    "editGoalsBtn"
)?.addEventListener(
    "click",
    editGoals
);


document.getElementById(
    "goalsEdit2"
)?.addEventListener(
    "click",
    editGoals
);


/* =========================================================
   CURRENT MONTH
========================================================= */

function updateCurrentMonth() {

    const now =
        new Date();


    const month =
        now.toLocaleDateString(
            "en-US",
            {
                month: "short"
            }
        );


    const fullMonth =
        now.toLocaleDateString(
            "en-US",
            {
                month: "long",
                year: "numeric"
            }
        );


    setText(
        "currentMonthLabel",
        `This Month · ${month}`
    );


    setText(
        "chartMonthTitle",
        `Applications · ${fullMonth}`
    );


    setText(
        "chartTooltipMonth",
        month
    );

}


/* =========================================================
   MONTH LABELS
========================================================= */

function updateChartMonths() {

    const container =
        document.getElementById(
            "chartMonths"
        );


    if (!container) return;


    const now =
        new Date();


    const labels = [];


    for (
        let i = 5;
        i >= 0;
        i--
    ) {

        const date =
            new Date(
                now.getFullYear(),
                now.getMonth() - i,
                1
            );


        labels.push(
            date.toLocaleDateString(
                "en-US",
                {
                    month: "short"
                }
            )
        );

    }


    container.innerHTML =
        labels
            .map(
                label =>
                    `<span>${label}</span>`
            )
            .join("");

}


/* =========================================================
   MONTHLY PROGRESS CHART
========================================================= */

function drawProgressChart() {

    const progressPath =
        document.getElementById(
            "progressPath"
        );


    const areaPathElement =
        document.getElementById(
            "areaPath"
        );


    if (
        !progressPath ||
        !areaPathElement
    ) {

        return;

    }


    const values = [
        5,
        12,
        7,
        11,
        18,
        16
    ];


    const width = 400;

    const height = 180;

    const max = 20;


    const points =
        values.map(
            (
                value,
                index
            ) => {

                const x =
                    index *
                    (
                        width /
                        (
                            values.length - 1
                        )
                    );


                const y =
                    height -
                    (
                        value /
                        max
                    ) *
                    (
                        height - 20
                    );


                return {
                    x,
                    y
                };

            }
        );


    let path = "";


    points.forEach(
        (
            point,
            index
        ) => {

            if (
                index === 0
            ) {

                path +=
                    `M ${point.x} ${point.y}`;

            } else {

                const previous =
                    points[
                        index - 1
                    ];


                const controlX =
                    (
                        previous.x +
                        point.x
                    ) / 2;


                path +=
                    ` C ${controlX} ${previous.y}, ${controlX} ${point.y}, ${point.x} ${point.y}`;

            }

        }
    );


    progressPath.setAttribute(
        "d",
        path
    );


    const areaPath =
        `${path} L ${width} ${height} L 0 ${height} Z`;


    areaPathElement.setAttribute(
        "d",
        areaPath
    );


    const currentValue =
        values[
            values.length - 1
        ];


    setText(
        "chartTooltipValue",
        `${currentValue} applications`
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
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
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            event.key.toLowerCase() ===
            "k"
        ) {

            event.preventDefault();


            globalSearch?.focus();

        }


        if (
            event.key === "Escape"
        ) {

            closeModal();


            notificationPopup?.classList.remove(
                "show"
            );


            profileMenu?.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

    ensureStatusOptions();

    updateCurrentMonth();

    updateChartMonths();

    renderApplications();

    updateStatistics();

    renderNotes();

    renderCalendar();

    drawProgressChart();

    updateNotificationState();

}


initialize();