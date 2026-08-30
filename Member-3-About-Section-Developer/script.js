/* =========================================================
   SPIREX FOUNDATION
   ABOUT PAGE
   COMPLETE FINAL JAVASCRIPT
   MOBILE MENU + MOBILE SIZE FIXED
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    const themeToggle =
        document.getElementById("themeToggle");

    const scrollProgress =
        document.querySelector(".scroll-progress");

    const pointerGlow =
        document.querySelector(".pointer-glow");

    const brandLogo =
        document.getElementById("brandLogo");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && navLinks) {

        menuToggle.setAttribute(
            "aria-controls",
            "navLinks"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        /* =================================================
           MOBILE MENU CSS FIX
        ================================================= */

        if (!document.getElementById("spirex-mobile-menu-fix")) {

            const mobileMenuStyle =
                document.createElement("style");

            mobileMenuStyle.id =
                "spirex-mobile-menu-fix";

            mobileMenuStyle.textContent = `

                /* =========================================
                   DESKTOP
                ========================================== */

                @media (min-width: 851px) {

                    #menuToggle {
                        display: none !important;
                    }

                    #navLinks {
                        display: flex !important;
                        position: static !important;
                        width: auto !important;
                        height: auto !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        flex-direction: row !important;
                    }

                }


                /* =========================================
                   TABLET / MOBILE
                ========================================== */

                @media (max-width: 850px) {

                    /* Navbar */

                    .navbar {
                        position: relative !important;
                        min-height: 72px !important;
                        height: 72px !important;
                        width: 100% !important;
                    }


                    .nav-container {
                        position: relative !important;

                        min-height: 72px !important;
                        height: 72px !important;

                        width: 100% !important;

                        padding-left: 16px !important;
                        padding-right: 16px !important;

                        display: flex !important;
                        align-items: center !important;
                        justify-content: space-between !important;

                        box-sizing: border-box !important;
                    }


                    /* Logo */

                    #brandLogo {
                        flex-shrink: 1 !important;
                        min-width: 0 !important;
                        height: 72px !important;
                    }


                    #brandLogo .logo-wrap {
                        width: 120px !important;
                        height: 52px !important;
                    }


                    #brandLogo .logo-img {
                        width: 120px !important;
                        height: 52px !important;

                        max-width: 120px !important;
                        max-height: 52px !important;
                    }


                    /* Navigation */

                    #navLinks {
                        display: none !important;

                        position: absolute !important;

                        top: 72px !important;
                        left: 12px !important;
                        right: 12px !important;

                        width: auto !important;
                        max-width: none !important;

                        box-sizing: border-box !important;

                        flex-direction: column !important;
                        align-items: stretch !important;

                        gap: 4px !important;

                        padding: 10px !important;
                        margin: 0 !important;

                        border-radius: 14px !important;

                        background:
                            rgba(10, 12, 18, 0.98) !important;

                        border:
                            1px solid rgba(255,255,255,0.10) !important;

                        backdrop-filter:
                            blur(18px) !important;

                        -webkit-backdrop-filter:
                            blur(18px) !important;

                        box-shadow:
                            0 16px 40px rgba(0,0,0,0.30) !important;

                        z-index: 9999 !important;
                    }


                    /* Open menu */

                    #navLinks.nav-active {
                        display: flex !important;
                    }


                    /* Menu links */

                    #navLinks.nav-active a {
                        display: flex !important;

                        align-items: center !important;

                        justify-content: flex-start !important;

                        width: 100% !important;

                        min-height: 44px !important;
                        height: 44px !important;

                        box-sizing: border-box !important;

                        padding:
                            8px 12px !important;

                        margin: 0 !important;

                        border-radius: 9px !important;

                        font-size: 14px !important;

                        line-height: 1.2 !important;

                        white-space: nowrap !important;
                    }


                    #navLinks.nav-active a:hover {
                        background:
                            rgba(255,255,255,0.07) !important;
                    }


                    /* Navigation actions */

                    .nav-actions {
                        display: flex !important;

                        align-items: center !important;

                        justify-content: flex-end !important;

                        gap: 8px !important;

                        flex-shrink: 0 !important;
                    }


                    /* Theme button */

                    #themeToggle {
                        width: 40px !important;
                        height: 40px !important;

                        min-width: 40px !important;
                        min-height: 40px !important;

                        padding: 0 !important;

                        display: inline-flex !important;

                        align-items: center !important;
                        justify-content: center !important;
                    }


                    /* Join Now */

                    .nav-actions .btn-primary {
                        min-height: 40px !important;
                        height: 40px !important;

                        padding:
                            0 14px !important;

                        font-size: 13px !important;

                        white-space: nowrap !important;
                    }


                    /* Hamburger */

                    #menuToggle {
                        display: inline-flex !important;

                        align-items: center !important;
                        justify-content: center !important;

                        width: 40px !important;
                        height: 40px !important;

                        min-width: 40px !important;
                        min-height: 40px !important;

                        padding: 0 !important;

                        margin: 0 !important;

                        border: 0 !important;

                        cursor: pointer !important;

                        position: relative !important;

                        z-index: 10000 !important;
                    }


                    #menuToggle i {
                        font-size: 18px !important;
                    }

                }


                /* =========================================
                   SMALL PHONES
                ========================================== */

                @media (max-width: 600px) {

                    .nav-container {
                        padding-left: 12px !important;
                        padding-right: 12px !important;
                    }


                    #brandLogo .logo-wrap {
                        width: 105px !important;
                        height: 48px !important;
                    }


                    #brandLogo .logo-img {
                        width: 105px !important;
                        height: 48px !important;

                        max-width: 105px !important;
                        max-height: 48px !important;
                    }


                    .nav-actions {
                        gap: 6px !important;
                    }


                    #themeToggle,
                    #menuToggle {
                        width: 38px !important;
                        height: 38px !important;

                        min-width: 38px !important;
                        min-height: 38px !important;
                    }


                    .nav-actions .btn-primary {
                        height: 38px !important;
                        min-height: 38px !important;

                        padding:
                            0 11px !important;

                        font-size: 12px !important;
                    }


                    #navLinks {
                        left: 10px !important;
                        right: 10px !important;

                        top: 72px !important;

                        padding: 8px !important;

                        border-radius: 12px !important;
                    }


                    #navLinks.nav-active a {
                        min-height: 42px !important;
                        height: 42px !important;

                        font-size: 13px !important;

                        padding:
                            8px 11px !important;
                    }

                }


                /* =========================================
                   VERY SMALL PHONES
                ========================================== */

                @media (max-width: 400px) {

                    .nav-container {
                        padding-left: 9px !important;
                        padding-right: 9px !important;
                    }


                    #brandLogo .logo-wrap {
                        width: 92px !important;
                        height: 46px !important;
                    }


                    #brandLogo .logo-img {
                        width: 92px !important;
                        height: 46px !important;

                        max-width: 92px !important;
                        max-height: 46px !important;
                    }


                    .nav-actions {
                        gap: 5px !important;
                    }


                    #themeToggle,
                    #menuToggle {
                        width: 36px !important;
                        height: 36px !important;

                        min-width: 36px !important;
                        min-height: 36px !important;
                    }


                    #menuToggle i {
                        font-size: 16px !important;
                    }


                    .nav-actions .btn-primary {
                        height: 36px !important;
                        min-height: 36px !important;

                        padding:
                            0 9px !important;

                        font-size: 11px !important;
                    }


                    #navLinks {
                        left: 8px !important;
                        right: 8px !important;
                    }

                }

            `;

            document.head.appendChild(
                mobileMenuStyle
            );

        }


        /* =================================================
           CLOSE MOBILE MENU
        ================================================= */

        const closeMobileMenu = () => {

            navLinks.classList.remove(
                "nav-active"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        };


        /* =================================================
           TOGGLE MOBILE MENU
        ================================================= */

        menuToggle.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                const opened =
                    !navLinks.classList.contains(
                        "nav-active"
                    );


                if (opened) {

                    navLinks.classList.add(
                        "nav-active"
                    );

                } else {

                    navLinks.classList.remove(
                        "nav-active"
                    );

                }


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.toggle(
                        "fa-bars",
                        !opened
                    );

                    icon.classList.toggle(
                        "fa-xmark",
                        opened
                    );

                }


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(opened)
                );

            }
        );


        /* =================================================
           CLOSE AFTER LINK CLICK
        ================================================= */

        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        closeMobileMenu();

                    }
                );

            });


        /* =================================================
           CLOSE WHEN CLICKING OUTSIDE
        ================================================= */

        document.addEventListener(
            "click",
            event => {

                if (
                    !navLinks.classList.contains(
                        "nav-active"
                    )
                ) {
                    return;
                }


                const insideMenu =
                    navLinks.contains(
                        event.target
                    );


                const insideButton =
                    menuToggle.contains(
                        event.target
                    );


                if (
                    !insideMenu &&
                    !insideButton
                ) {

                    closeMobileMenu();

                }

            }
        );


        /* =================================================
           ESCAPE KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    navLinks.classList.contains(
                        "nav-active"
                    )
                ) {

                    closeMobileMenu();

                    menuToggle.focus();

                }

            }
        );


        /* =================================================
           RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 850
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =====================================================
       THEME
       ===================================================== */

    function applyTheme(theme) {

        const light =
            theme === "light";


        document.body.classList.toggle(
            "light-mode",
            light
        );


        if (!themeToggle) {
            return;
        }


        const icon =
            themeToggle.querySelector("i");


        if (icon) {

            icon.classList.toggle(
                "fa-sun",
                light
            );

            icon.classList.toggle(
                "fa-moon",
                !light
            );

        }


        themeToggle.setAttribute(
            "aria-label",
            light
                ? "Switch to dark mode"
                : "Switch to light mode"
        );


        themeToggle.setAttribute(
            "title",
            light
                ? "Switch to dark mode"
                : "Switch to light mode"
        );

    }


    const savedTheme =
        localStorage.getItem(
            "spirex-theme"
        );


    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {

        applyTheme(
            savedTheme
        );

    } else {

        const prefersLight =
            window.matchMedia(
                "(prefers-color-scheme: light)"
            ).matches;


        applyTheme(
            prefersLight
                ? "light"
                : "dark"
        );

    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const light =
                    document.body.classList.contains(
                        "light-mode"
                    );


                const nextTheme =
                    light
                        ? "dark"
                        : "light";


                applyTheme(
                    nextTheme
                );


                localStorage.setItem(
                    "spirex-theme",
                    nextTheme
                );

            }
        );

    }


    /* =====================================================
       LOGO / BRAND HOVER EFFECT
       ===================================================== */

    if (brandLogo) {

        const supportsHover =
            window.matchMedia(
                "(hover: hover) and (pointer: fine)"
            ).matches;


        if (supportsHover) {

            brandLogo.addEventListener(
                "mouseenter",
                () => {

                    brandLogo.classList.add(
                        "logo-hover"
                    );

                }
            );


            brandLogo.addEventListener(
                "mouseleave",
                () => {

                    brandLogo.classList.remove(
                        "logo-hover"
                    );

                }
            );

        }

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal-up, .reveal-left, .reveal-right"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "active"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "active"
            );

        });

    }


    /* =====================================================
       COUNTERS
       ===================================================== */

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    if (counters.length) {

        const animateCounter =
            counter => {

                const target =
                    Number(
                        counter.dataset.target
                    );


                if (
                    !Number.isFinite(target) ||
                    target <= 0
                ) {

                    counter.textContent =
                        "0";

                    return;

                }


                const duration =
                    1500;


                const start =
                    performance.now();


                function animate(time) {

                    const progress =
                        Math.min(
                            (time - start) /
                            duration,
                            1
                        );


                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    counter.textContent =
                        Math.floor(
                            target * eased
                        ).toLocaleString();


                    if (
                        progress < 1
                    ) {

                        requestAnimationFrame(
                            animate
                        );

                    } else {

                        counter.textContent =
                            target.toLocaleString();

                    }

                }


                requestAnimationFrame(
                    animate
                );

            };


        if (
            "IntersectionObserver" in window
        ) {

            const counterObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach(entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            animateCounter(
                                entry.target
                            );


                            observer.unobserve(
                                entry.target
                            );

                        });

                    },
                    {
                        threshold: 0.5
                    }
                );


            counters.forEach(counter => {

                counterObserver.observe(
                    counter
                );

            });

        } else {

            counters.forEach(counter => {

                animateCounter(
                    counter
                );

            });

        }

    }


    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    function updateScrollProgress() {

        if (!scrollProgress) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const percentage =
            pageHeight > 0
                ? (scrollTop / pageHeight) * 100
                : 0;


        scrollProgress.style.width =
            `${Math.min(percentage, 100)}%`;

    }


    updateScrollProgress();


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );


    /* =====================================================
       POINTER GLOW
       ===================================================== */

    const isTouchDevice =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    if (
        pointerGlow &&
        !isTouchDevice
    ) {

        window.addEventListener(
            "pointermove",
            event => {

                pointerGlow.style.left =
                    `${event.clientX}px`;


                pointerGlow.style.top =
                    `${event.clientY}px`;


                pointerGlow.style.opacity =
                    "1";

            },
            {
                passive: true
            }
        );


        document.addEventListener(
            "mouseleave",
            () => {

                pointerGlow.style.opacity =
                    "0";

            }
        );

    }


    /* =====================================================
       ACTIVE NAV LINK
       ===================================================== */

    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (!currentPage) {

        currentPage =
            "index.html";

    }


    document
        .querySelectorAll(
            ".nav-links a"
        )
        .forEach(link => {

            const href =
                link.getAttribute("href");


            if (!href) {
                return;
            }


            const cleanHref =
                href
                    .split("#")[0]
                    .split("?")[0]
                    .split("/")
                    .pop();


            if (
                cleanHref === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


    /* =====================================================
       INITIAL MOBILE MENU STATE
       ===================================================== */

    if (
        menuToggle &&
        navLinks
    ) {

        navLinks.classList.remove(
            "nav-active"
        );


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }


});
