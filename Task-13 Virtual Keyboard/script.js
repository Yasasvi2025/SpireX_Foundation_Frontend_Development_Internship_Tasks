/* =========================================================
   VIRTUAL KEYBOARD
   FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const textInput =
    document.getElementById("textInput");

const clearText =
    document.getElementById("clearText");

const copyText =
    document.getElementById("copyText");

const downloadText =
    document.getElementById("downloadText");

const lightTheme =
    document.getElementById("lightTheme");

const darkTheme =
    document.getElementById("darkTheme");

const keyPreview =
    document.getElementById("keyPreview");

const toast =
    document.getElementById("toast");

const suggestions =
    document.getElementById("suggestions");

const soundToggle =
    document.getElementById("soundToggle");

const previewToggle =
    document.getElementById("previewToggle");

const suggestionToggle =
    document.getElementById("suggestionToggle");


/* =========================================================
   STATE
========================================================= */

let capsLock = false;

let shiftActive = false;

let soundEnabled = true;

let previewEnabled = true;

let suggestionEnabled = true;


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimeout);

    window.toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2000);

}


/* =========================================================
   CURSOR INSERT
========================================================= */

function insertText(value) {

    textInput.focus();

    const start =
        textInput.selectionStart;

    const end =
        textInput.selectionEnd;

    const before =
        textInput.value.substring(
            0,
            start
        );

    const after =
        textInput.value.substring(
            end
        );

    textInput.value =
        before +
        value +
        after;

    const cursor =
        start +
        value.length;

    textInput.setSelectionRange(
        cursor,
        cursor
    );

}


/* =========================================================
   DELETE CHARACTER
   FIXED BACKSPACE
========================================================= */

function deleteCharacter() {

    /* Keep the textarea focused before reading the cursor */
    textInput.focus();

    const start =
        textInput.selectionStart;

    const end =
        textInput.selectionEnd;


    /* Delete selected text */
    if (start !== end) {

        textInput.value =
            textInput.value.substring(
                0,
                start
            ) +
            textInput.value.substring(
                end
            );

        textInput.setSelectionRange(
            start,
            start
        );

        return;

    }


    /* Nothing to delete */
    if (start <= 0) {

        return;

    }


    /* Delete one character before cursor */
    textInput.value =
        textInput.value.substring(
            0,
            start - 1
        ) +
        textInput.value.substring(
            start
        );


    /* Move cursor one position backward */
    textInput.setSelectionRange(
        start - 1,
        start - 1
    );

}


/* =========================================================
   AUDIO
========================================================= */

function playKeySound() {

    if (!soundEnabled) {

        return;

    }


    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        const audioContext =
            new AudioContext();

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type =
            "sine";

        oscillator.frequency.value =
            480;

        gain.gain.setValueAtTime(
            0.04,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.07
        );


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.07
        );

    } catch (error) {

        console.log(
            "Audio not supported."
        );

    }

}


/* =========================================================
   KEY PREVIEW
========================================================= */

function showKeyPreview(value) {

    if (!previewEnabled) {

        return;

    }


    keyPreview.textContent =
        value;


    keyPreview.classList.add(
        "show"
    );


    clearTimeout(
        window.previewTimer
    );


    window.previewTimer =
        setTimeout(() => {

            keyPreview.classList.remove(
                "show"
            );

        }, 550);

}


/* =========================================================
   CAPITALIZATION
========================================================= */

function getCharacter(key) {

    let character =
        key;


    if (
        key.length === 1 &&
        /[a-z]/i.test(key)
    ) {

        if (
            capsLock !== shiftActive
        ) {

            character =
                key.toUpperCase();

        } else {

            character =
                key.toLowerCase();

        }

    }


    return character;

}


/* =========================================================
   KEY ACTION
========================================================= */

function handleAction(action) {

    switch (action) {

        case "backspace":

            /* FIX: focus before every virtual Backspace click */
            textInput.focus();

            deleteCharacter();

            showKeyPreview(
                "⌫"
            );

            break;


        case "space":

            insertText(" ");

            showKeyPreview(
                "Space"
            );

            break;


        case "enter":

            insertText("\n");

            showKeyPreview(
                "Enter"
            );

            break;


        case "tab":

            insertText("    ");

            showKeyPreview(
                "Tab"
            );

            break;


        case "caps":

            capsLock =
                !capsLock;

            document
                .querySelectorAll(
                    '[data-action="caps"]'
                )
                .forEach(
                    button =>
                        button.classList.toggle(
                            "caps-active",
                            capsLock
                        )
                );

            showKeyPreview(
                "Caps"
            );

            break;


        case "shift":

            shiftActive =
                !shiftActive;

            document
                .querySelectorAll(
                    '[data-action="shift"]'
                )
                .forEach(
                    button =>
                        button.classList.toggle(
                            "shift-active",
                            shiftActive
                        )
                );

            showKeyPreview(
                "Shift"
            );

            break;


        case "clear":

            textInput.value = "";

            textInput.focus();

            showKeyPreview(
                "Clear"
            );

            showToast(
                "Text cleared."
            );

            break;


        case "ctrl":

            showKeyPreview(
                "Ctrl"
            );

            break;


        case "alt":

            showKeyPreview(
                "Alt"
            );

            break;

    }

}


/* =========================================================
   KEY CLICK
========================================================= */

document
    .querySelectorAll(".key")
    .forEach(
        key => {

            key.addEventListener(
                "click",
                () => {

                    playKeySound();


                    const action =
                        key.dataset.action;


                    const value =
                        key.dataset.key;


                    if (action) {

                        handleAction(
                            action
                        );

                    } else if (
                        value !== undefined
                    ) {

                        const character =
                            getCharacter(
                                value
                            );

                        insertText(
                            character
                        );

                        showKeyPreview(
                            character
                        );


                        if (
                            shiftActive
                        ) {

                            shiftActive =
                                false;

                            document
                                .querySelectorAll(
                                    '[data-action="shift"]'
                                )
                                .forEach(
                                    button =>
                                        button.classList.remove(
                                            "shift-active"
                                        )
                                );

                        }

                    }


                    textInput.dispatchEvent(
                        new Event(
                            "input"
                        )
                    );

                }
            );

        }
    );


/* =========================================================
   HIGHLIGHT KEY
========================================================= */

function highlightKey(
    keyValue
) {

    const buttons =
        document.querySelectorAll(
            ".key"
        );


    buttons.forEach(
        button => {

            const value =
                button.dataset.key;


            if (
                value &&
                value.toLowerCase() ===
                    keyValue.toLowerCase()
            ) {

                button.classList.add(
                    "pressed"
                );


                setTimeout(
                    () => {

                        button.classList.remove(
                            "pressed"
                        );

                    },
                    120
                );

            }

        }
    );

}


/* =========================================================
   PHYSICAL KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const key =
            event.key;


        if (
            event.ctrlKey ||
            event.metaKey
        ) {

            if (
                key.toLowerCase() === "a"
            ) {

                return;

            }

            if (
                key.toLowerCase() === "c"
            ) {

                return;

            }

            if (
                key.toLowerCase() === "v"
            ) {

                return;

            }

            if (
                key.toLowerCase() === "z"
            ) {

                return;

            }

        }


        if (
            key === "CapsLock"
        ) {

            capsLock =
                !capsLock;

            document
                .querySelectorAll(
                    '[data-action="caps"]'
                )
                .forEach(
                    button =>
                        button.classList.toggle(
                            "caps-active",
                            capsLock
                        )
                );

            return;

        }


        if (
            key === "Shift"
        ) {

            shiftActive =
                true;

            document
                .querySelectorAll(
                    '[data-action="shift"]'
                )
                .forEach(
                    button =>
                        button.classList.add(
                            "shift-active"
                        )
                );

            return;

        }


        if (
            key === "Backspace"
        ) {

            event.preventDefault();

            deleteCharacter();

            highlightKey(
                "Backspace"
            );

            showKeyPreview(
                "⌫"
            );

            playKeySound();

            return;

        }


        if (
            key === "Enter"
        ) {

            event.preventDefault();

            insertText("\n");

            highlightKey(
                "Enter"
            );

            showKeyPreview(
                "Enter"
            );

            playKeySound();

            return;

        }


        if (
            key === "Tab"
        ) {

            event.preventDefault();

            insertText("    ");

            highlightKey(
                "Tab"
            );

            showKeyPreview(
                "Tab"
            );

            playKeySound();

            return;

        }


        if (
            key === " "
        ) {

            event.preventDefault();

            insertText(" ");

            showKeyPreview(
                "Space"
            );

            playKeySound();

            return;

        }


        if (
            key.length === 1
        ) {

            highlightKey(
                key
            );

            showKeyPreview(
                key
            );

            playKeySound();

        }

    }
);


/* =========================================================
   PHYSICAL SHIFT RELEASE
========================================================= */

document.addEventListener(
    "keyup",
    event => {

        if (
            event.key === "Shift"
        ) {

            shiftActive =
                false;

            document
                .querySelectorAll(
                    '[data-action="shift"]'
                )
                .forEach(
                    button =>
                        button.classList.remove(
                            "shift-active"
                        )
                );

        }

    }
);


/* =========================================================
   CLEAR TEXT
========================================================= */

clearText.onclick =
    () => {

        textInput.value = "";

        textInput.focus();

        showToast(
            "Text cleared."
        );

    };


/* =========================================================
   COPY TEXT
========================================================= */

copyText.onclick =
    async () => {

        if (
            !textInput.value
        ) {

            showToast(
                "There is no text to copy."
            );

            return;

        }


        try {

            await navigator.clipboard.writeText(
                textInput.value
            );

            showToast(
                "Text copied successfully."
            );

        } catch (error) {

            textInput.select();

            document.execCommand(
                "copy"
            );

            showToast(
                "Text copied successfully."
            );

        }

    };


/* =========================================================
   DOWNLOAD TEXT
========================================================= */

downloadText.onclick =
    () => {

        if (
            !textInput.value
        ) {

            showToast(
                "There is no text to download."
            );

            return;

        }


        const blob =
            new Blob(
                [
                    textInput.value
                ],
                {
                    type:
                        "text/plain"
                }
            );


        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                "a"
            );


        link.href =
            url;

        link.download =
            "virtual-keyboard-text.txt";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url
        );


        showToast(
            "Text downloaded."
        );

    };


/* =========================================================
   THEME
========================================================= */

function setTheme(theme) {

    if (
        theme === "light"
    ) {

        document.body.classList.add(
            "light-theme"
        );

        lightTheme.classList.add(
            "active"
        );

        darkTheme.classList.remove(
            "active"
        );

    } else {

        document.body.classList.remove(
            "light-theme"
        );

        darkTheme.classList.add(
            "active"
        );

        lightTheme.classList.remove(
            "active"
        );

    }


    localStorage.setItem(
        "virtualKeyboardTheme",
        theme
    );

}


lightTheme.onclick =
    () =>
        setTheme("light");


darkTheme.onclick =
    () =>
        setTheme("dark");


/* =========================================================
   FEATURE TOGGLES
========================================================= */

function updateToggle(
    button,
    enabled
) {

    button.textContent =
        enabled
            ? "ON"
            : "OFF";


    button.classList.toggle(
        "on",
        enabled
    );


    button.style.background =
        enabled
            ? "#32cf69"
            : "#6d7488";

}


/* SOUND */

soundToggle.onclick =
    () => {

        soundEnabled =
            !soundEnabled;

        updateToggle(
            soundToggle,
            soundEnabled
        );

    };


/* KEY PREVIEW */

previewToggle.onclick =
    () => {

        previewEnabled =
            !previewEnabled;

        updateToggle(
            previewToggle,
            previewEnabled
        );

    };


/* WORD SUGGESTION */

suggestionToggle.onclick =
    () => {

        suggestionEnabled =
            !suggestionEnabled;

        updateToggle(
            suggestionToggle,
            suggestionEnabled
        );


        if (
            !suggestionEnabled
        ) {

            suggestions.classList.add(
                "hidden"
            );

        }

    };


/* =========================================================
   WORD SUGGESTIONS
========================================================= */

const words = {

    jav: [
        "javascript",
        "java",
        "javascript developer"
    ],

    html: [
        "html",
        "html5",
        "html document"
    ],

    css: [
        "css",
        "css design",
        "css animation"
    ],

    web: [
        "website",
        "web development",
        "web design"
    ],

    vir: [
        "virtual",
        "virtual keyboard",
        "virtual machine"
    ],

    key: [
        "keyboard",
        "key",
        "key press"
    ],

    cod: [
        "code",
        "coding",
        "coder"
    ],

    pro: [
        "programming",
        "project",
        "professional"
    ],

    hel: [
        "hello",
        "help",
        "helpful"
    ]

};


function showSuggestions() {

    if (
        !suggestionEnabled
    ) {

        suggestions.classList.add(
            "hidden"
        );

        return;

    }


    const text =
        textInput.value.trim();


    const lastWord =
        text
            .split(/\s+/)
            .pop()
            .toLowerCase();


    if (
        lastWord.length < 2
    ) {

        suggestions.classList.add(
            "hidden"
        );

        return;

    }


    let matches =
        words[lastWord] || [];


    if (
        !matches.length
    ) {

        const key =
            Object.keys(words)
                .find(
                    item =>
                        item.startsWith(
                            lastWord
                        )
                );


        if (key) {

            matches =
                words[key];

        }

    }


    if (
        !matches.length
    ) {

        suggestions.classList.add(
            "hidden"
        );

        return;

    }


    suggestions.innerHTML =
        matches
            .map(
                word =>
                    `<button
                        class="suggestion"
                        data-suggestion="${word}"
                    >
                        ${word}
                    </button>`
            )
            .join("");


    suggestions.classList.remove(
        "hidden"
    );

}


/* =========================================================
   SUGGESTION CLICK
========================================================= */

suggestions.onclick =
    event => {

        const button =
            event.target.closest(
                "[data-suggestion]"
            );


        if (!button) {

            return;

        }


        const selected =
            button.dataset.suggestion;


        const value =
            textInput.value;


        const match =
            value.match(
                /(\S+)$/
            );


        if (match) {

            textInput.value =
                value.substring(
                    0,
                    match.index
                ) +
                selected;

        } else {

            textInput.value =
                selected;

        }


        textInput.focus();


        suggestions.classList.add(
            "hidden"
        );

    };


textInput.addEventListener(
    "input",
    showSuggestions
);


/* =========================================================
   NAVIGATION TABS
========================================================= */

const navTabs =
    document.querySelectorAll(
        ".nav-tab"
    );

const shortcutsPanel =
    document.getElementById(
        "shortcutsPanel"
    );

const settingsPanel =
    document.getElementById(
        "settingsPanel"
    );


navTabs.forEach(
    tab => {

        tab.addEventListener(
            "click",
            () => {

                navTabs.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                tab.classList.add(
                    "active"
                );


                const section =
                    tab.dataset.section;


                shortcutsPanel.classList.add(
                    "hidden"
                );

                settingsPanel.classList.add(
                    "hidden"
                );


                if (
                    section === "shortcuts"
                ) {

                    shortcutsPanel.classList.remove(
                        "hidden"
                    );

                    shortcutsPanel.scrollIntoView({
                        behavior: "smooth"
                    });

                }


                if (
                    section === "settings"
                ) {

                    settingsPanel.classList.remove(
                        "hidden"
                    );

                    settingsPanel.scrollIntoView({
                        behavior: "smooth"
                    });

                }


                if (
                    section === "keyboard"
                ) {

                    document
                        .querySelector(
                            ".typing-area"
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }

            }
        );

    }
);


/* =========================================================
   SETTINGS PANEL BUTTONS
========================================================= */

document
    .getElementById("settingsSound")
    .onclick =
    () => {

        soundToggle.click();

    };


document
    .getElementById("settingsPreview")
    .onclick =
    () => {

        previewToggle.click();

    };


document
    .getElementById("settingsSuggestion")
    .onclick =
    () => {

        suggestionToggle.click();

    };


/* =========================================================
   LOAD THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "virtualKeyboardTheme"
    );


if (
    savedTheme === "light"
) {

    setTheme("light");

} else {

    setTheme("dark");

}


/* =========================================================
   INITIAL FOCUS
========================================================= */

textInput.focus();