/* ============================================================
   TYPING SPEED TEST
   Nune Venkata Yasasvi
   Task 9
============================================================ */


/* ============================================================
   ELEMENTS
============================================================ */

const themeToggle =
    document.getElementById("themeToggle");

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");

const difficultySlider =
    document.getElementById("difficultySlider");

const paragraphBox =
    document.getElementById("paragraphBox");

const typingInput =
    document.getElementById("typingInput");

const startBtn =
    document.getElementById("startBtn");

const restartBtn =
    document.getElementById("restartBtn");

const resetBtn =
    document.getElementById("resetBtn");

const viewResultBtn =
    document.getElementById("viewResultBtn");

const resultOverlay =
    document.getElementById("resultOverlay");

const closeResult =
    document.getElementById("closeResult");

const modalRestart =
    document.getElementById("modalRestart");

const confettiContainer =
    document.getElementById("confettiContainer");

const resultPanel =
    document.querySelector(".result-panel");


/* ============================================================
   STAT ELEMENTS
============================================================ */

const wpmElement =
    document.getElementById("wpm");

const accuracyElement =
    document.getElementById("accuracy");

const timeElement =
    document.getElementById("time");

const timeLabel =
    document.getElementById("timeLabel");

const charactersElement =
    document.getElementById("characters");

const progressBar =
    document.getElementById("progressBar");

const progressPercent =
    document.getElementById("progressPercent");


/* ============================================================
   RESULT ELEMENTS
============================================================ */

const resultMessage =
    document.getElementById("resultMessage");

const resultSubtitle =
    document.getElementById("resultSubtitle");

const resultWpm =
    document.getElementById("resultWpm");

const resultAccuracy =
    document.getElementById("resultAccuracy");

const resultTime =
    document.getElementById("resultTime");

const resultCorrect =
    document.getElementById("resultCorrect");

const resultIncorrect =
    document.getElementById("resultIncorrect");

const resultPerformance =
    document.getElementById("resultPerformance");


/* ============================================================
   MODAL RESULT ELEMENTS
============================================================ */

const modalWpm =
    document.getElementById("modalWpm");

const modalAccuracy =
    document.getElementById("modalAccuracy");

const modalTime =
    document.getElementById("modalTime");

const modalCorrect =
    document.getElementById("modalCorrect");

const modalIncorrect =
    document.getElementById("modalIncorrect");

const modalPerformance =
    document.getElementById("modalPerformance");


/* ============================================================
   PARAGRAPHS
============================================================ */

const paragraphs = {

    easy: [
        "The sun shines brightly every morning. A new day brings new opportunities to learn, grow, and become better. Keep practicing and never give up on your goals.",

        "Typing is an important skill for students and professionals. With regular practice, you can improve your speed, accuracy, and confidence while working on a computer."
    ],

    medium: [
        "The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle. Every day is a new opportunity to become better than yesterday. Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",

        "Success does not happen overnight. It requires patience, discipline, consistency, and the courage to continue even when things become difficult. Every small improvement brings you closer to your goal."
    ],

    hard: [
        "Technology continues to transform the way people communicate, learn, create, and solve complex problems. Developing strong technical skills requires continuous experimentation, logical thinking, adaptability, and a willingness to learn from mistakes.",

        "Artificial intelligence, machine learning, and modern software engineering are rapidly changing the digital world. Professionals must continuously develop their knowledge while maintaining accuracy, creativity, problem-solving ability, and responsible technological practices."
    ]

};


/* ============================================================
   SETTINGS
============================================================ */

const difficultySettings = {

    easy: {
        time: 60
    },

    medium: {
        time: 60
    },

    hard: {
        time: 45
    }

};


/* ============================================================
   VARIABLES
============================================================ */

let currentDifficulty =
    "medium";

let currentParagraph =
    "";

let timer =
    null;

let timeLimit =
    difficultySettings.medium.time;

let timeLeft =
    timeLimit;

let testStarted =
    false;

let testFinished =
    false;

let startTime =
    null;

let elapsedSeconds =
    0;


/* ============================================================
   THEME
============================================================ */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("typingTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.setAttribute(
            "aria-pressed",
            "true"
        );

    } else {

        document.body.classList.remove("dark-mode");

        themeToggle.setAttribute(
            "aria-pressed",
            "false"
        );

    }

}


loadTheme();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "typingTheme",
        isDark ? "dark" : "light"
    );

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );

});


/* ============================================================
   DIFFICULTY
============================================================ */

function updateDifficultySlider(level) {

    difficultySlider.classList.remove(
        "medium",
        "hard"
    );


    if (level === "medium") {

        difficultySlider.classList.add(
            "medium"
        );

    }


    if (level === "hard") {

        difficultySlider.classList.add(
            "hard"
        );

    }

}


difficultyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const level =
            button.dataset.level;


        /*
           If the user changes difficulty,
           completely stop the current test.
        */

        clearInterval(timer);

        timer = null;

        currentDifficulty =
            level;


        difficultyButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        updateDifficultySlider(level);


        timeLimit =
            difficultySettings[level].time;


        loadParagraph();

    });

});


/* ============================================================
   LOAD RANDOM PARAGRAPH
============================================================ */

function loadParagraph() {

    const list =
        paragraphs[currentDifficulty];


    const randomIndex =
        Math.floor(
            Math.random() * list.length
        );


    currentParagraph =
        list[randomIndex];


    renderParagraph();


    resetTestState();

}


/* ============================================================
   RENDER PARAGRAPH
============================================================ */

function renderParagraph() {

    paragraphBox.innerHTML =
        "";


    [...currentParagraph].forEach(
        (character, index) => {

            const span =
                document.createElement("span");


            span.textContent =
                character;


            span.dataset.index =
                index;


            paragraphBox.appendChild(
                span
            );

        }
    );

}


/* ============================================================
   RESET TEST STATE
============================================================ */

function resetTestState() {

    clearInterval(timer);

    timer =
        null;


    timeLeft =
        timeLimit;


    elapsedSeconds =
        0;


    testStarted =
        false;


    testFinished =
        false;


    startTime =
        null;


    typingInput.value =
        "";


    typingInput.disabled =
        false;


    typingInput.removeAttribute(
        "readonly"
    );


    resultPanel.classList.remove(
        "win"
    );


    resultOverlay.classList.remove(
        "active"
    );


    if (confettiContainer) {

        confettiContainer.classList.remove(
            "active"
        );

        confettiContainer.innerHTML =
            "";

    }


    updateTimeDisplay();

    updateStats();

    updateProgress();


    resultMessage.textContent =
        "🎯 Ready?";


    resultSubtitle.textContent =
        "Start typing to see your result.";


    resultPerformance.textContent =
        "-";


    resultWpm.textContent =
        "0";


    resultAccuracy.textContent =
        "100%";


    resultTime.textContent =
        "00:00";


    resultCorrect.textContent =
        "0";


    resultIncorrect.textContent =
        "0";


    modalWpm.textContent =
        "0";


    modalAccuracy.textContent =
        "100%";


    modalTime.textContent =
        "00:00";


    modalCorrect.textContent =
        "0";


    modalIncorrect.textContent =
        "0";


    modalPerformance.textContent =
        "-";


    /*
       Clear character highlighting.
    */

    const characters =
        paragraphBox.querySelectorAll(
            "span"
        );


    characters.forEach(span => {

        span.classList.remove(
            "correct",
            "incorrect",
            "current"
        );

    });


    /*
       Put the cursor indicator
       on the first character.
    */

    if (characters.length > 0) {

        characters[0].classList.add(
            "current"
        );

    }

}


/* ============================================================
   TIME FORMAT
============================================================ */

function formatTime(seconds) {

    const safeSeconds =
        Math.max(
            0,
            Math.floor(seconds)
        );


    const minutes =
        Math.floor(
            safeSeconds / 60
        );


    const remainingSeconds =
        safeSeconds % 60;


    return (
        String(minutes).padStart(2, "0")
        +
        ":"
        +
        String(remainingSeconds).padStart(2, "0")
    );

}


/* ============================================================
   TIME DISPLAY
============================================================ */

function updateTimeDisplay() {

    timeLabel.textContent =
        "TIME LEFT";


    timeElement.textContent =
        formatTime(timeLeft);

}


/* ============================================================
   START TEST
============================================================ */

function startTest() {

    /*
       Do not start again if already running
       or already completed.
    */

    if (
        testStarted ||
        testFinished
    ) {

        return;

    }


    /*
       Safety check.
    */

    if (
        !currentParagraph ||
        currentParagraph.length === 0
    ) {

        return;

    }


    testStarted =
        true;


    testFinished =
        false;


    startTime =
        Date.now();


    elapsedSeconds =
        0;


    typingInput.disabled =
        false;


    typingInput.focus();


    clearInterval(timer);


    timer =
        setInterval(() => {

            /*
               Calculate exact elapsed time
               rather than depending only on
               interval execution.
            */

            const elapsed =
                (Date.now() - startTime) / 1000;


            elapsedSeconds =
                Math.min(
                    timeLimit,
                    elapsed
                );


            timeLeft =
                Math.max(
                    0,
                    Math.ceil(
                        timeLimit -
                        elapsedSeconds
                    )
                );


            updateTimeDisplay();

            updateStats();


            if (
                elapsedSeconds >=
                timeLimit
            ) {

                finishTest();

            }

        }, 250);

}


/* ============================================================
   START BUTTON
============================================================ */

startBtn.addEventListener(
    "click",
    startTest
);


/* ============================================================
   TYPING INPUT
============================================================ */

typingInput.addEventListener(
    "input",
    () => {

        if (testFinished) {

            return;

        }


        /*
           Automatically start when user
           begins typing.
        */

        if (!testStarted) {

            startTest();

        }


        const typedText =
            typingInput.value;


        /*
           Do not allow typing beyond
           paragraph length.
        */

        if (
            typedText.length >
            currentParagraph.length
        ) {

            typingInput.value =
                typedText.substring(
                    0,
                    currentParagraph.length
                );

        }


        const finalTypedText =
            typingInput.value;


        updateCharacterHighlight(
            finalTypedText
        );


        updateStats();


        updateProgress();


        /*
           Finish immediately when the
           entire paragraph is typed.
        */

        if (
            finalTypedText.length >=
            currentParagraph.length
        ) {

            finishTest();

        }

    }
);


/* ============================================================
   CHARACTER HIGHLIGHT
============================================================ */

function updateCharacterHighlight(
    typedText
) {

    const characters =
        paragraphBox.querySelectorAll(
            "span"
        );


    characters.forEach(
        (span, index) => {

            span.classList.remove(
                "correct",
                "incorrect",
                "current"
            );


            /*
               Typed characters.
            */

            if (
                index <
                typedText.length
            ) {

                if (
                    typedText[index] ===
                    currentParagraph[index]
                ) {

                    span.classList.add(
                        "correct"
                    );

                } else {

                    span.classList.add(
                        "incorrect"
                    );

                }

            }


            /*
               Current character.
            */

            if (
                index ===
                typedText.length
            ) {

                span.classList.add(
                    "current"
                );

            }

        }
    );

}


/* ============================================================
   CALCULATE STATS
============================================================ */

function calculateStats() {

    const typedText =
        typingInput.value;


    let correct =
        0;


    let incorrect =
        0;


    for (
        let i = 0;
        i < typedText.length;
        i++
    ) {

        if (
            typedText[i] ===
            currentParagraph[i]
        ) {

            correct++;

        } else {

            incorrect++;

        }

    }


    const totalTyped =
        typedText.length;


    const accuracy =
        totalTyped === 0
            ? 100
            : Math.round(
                (correct /
                    totalTyped) *
                100
            );


    /*
       Determine elapsed time.
    */

    let elapsed =
        elapsedSeconds;


    if (
        testStarted &&
        startTime &&
        !testFinished
    ) {

        elapsed =
            Math.max(
                0.1,
                (Date.now() -
                    startTime) /
                1000
            );

    }


    /*
       WPM:
       Standard calculation:
       correct characters / 5 / minutes
    */

    let wpm =
        0;


    if (
        elapsed > 0 &&
        correct > 0
    ) {

        wpm =
            Math.round(
                (correct / 5) /
                (elapsed / 60)
            );

    }


    return {

        correct,

        incorrect,

        accuracy,

        wpm,

        elapsed,

        totalTyped

    };

}


/* ============================================================
   UPDATE STATS
============================================================ */

function updateStats() {

    const stats =
        calculateStats();


    wpmElement.textContent =
        stats.wpm;


    accuracyElement.textContent =
        `${stats.accuracy}%`;


    charactersElement.textContent =
        `${stats.totalTyped}/${currentParagraph.length}`;

}


/* ============================================================
   UPDATE PROGRESS
============================================================ */

function updateProgress() {

    const typedLength =
        typingInput.value.length;


    const progress =
        currentParagraph.length === 0
            ? 0
            : Math.min(
                100,
                Math.round(
                    (
                        typedLength /
                        currentParagraph.length
                    ) *
                    100
                )
            );


    progressBar.style.width =
        `${progress}%`;


    progressPercent.textContent =
        `${progress}%`;

}


/* ============================================================
   PERFORMANCE
============================================================ */

function getPerformance(
    wpm,
    accuracy
) {

    if (
        accuracy >= 95 &&
        wpm >= 60
    ) {

        return "Excellent";

    }


    if (
        accuracy >= 90 &&
        wpm >= 45
    ) {

        return "Great";

    }


    if (
        accuracy >= 80 &&
        wpm >= 30
    ) {

        return "Good";

    }


    if (
        accuracy >= 70
    ) {

        return "Keep Practicing";

    }


    return "Needs Improvement";

}


/* ============================================================
   WIN CONFETTI
============================================================ */

function createWinBlast() {

    if (
        !confettiContainer
    ) {

        return;

    }


    /*
       Completely clean previous animation.
    */

    confettiContainer.classList.remove(
        "active"
    );


    confettiContainer.innerHTML =
        "";


    /*
       Force browser reflow so a new
       animation can always start.
    */

    void confettiContainer.offsetWidth;


    confettiContainer.classList.add(
        "active"
    );


    const pieces =
        55;


    for (
        let i = 0;
        i < pieces;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        const isStar =
            i % 7 === 0;


        piece.className =
            isStar
                ? "confetti star"
                : "confetti";


        /*
           Random direction.
        */

        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            180 +
            Math.random() *
            420;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        const rotation =
            Math.random() *
            1080 -
            540;


        const delay =
            Math.random() *
            0.15;


        const size =
            6 +
            Math.random() *
            8;


        const hue =
            Math.floor(
                Math.random() *
                360
            );


        /*
           Position.
        */

        piece.style.setProperty(
            "--x",
            `${x}px`
        );


        piece.style.setProperty(
            "--y",
            `${y}px`
        );


        piece.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );


        piece.style.animationDelay =
            `${delay}s`;


        /*
           Normal confetti.
        */

        if (!isStar) {

            piece.style.width =
                `${size}px`;


            piece.style.height =
                `${size * 1.5}px`;


            piece.style.background =
                `hsl(${hue}, 80%, 60%)`;


            piece.style.borderRadius =
                "2px";

        }


        /*
           Star confetti.
        */

        if (isStar) {

            piece.innerHTML =
                '<i class="fa-solid fa-star"></i>';


            piece.style.color =
                `hsl(${hue}, 85%, 60%)`;

        }


        confettiContainer.appendChild(
            piece
        );

    }


    /*
       Remove animation completely after
       it finishes.
    */

    setTimeout(() => {

        confettiContainer.classList.remove(
            "active"
        );


        confettiContainer.innerHTML =
            "";

    }, 2300);

}


/* ============================================================
   FINISH TEST
============================================================ */

function finishTest() {

    /*
       Prevent double finish.
    */

    if (
        testFinished
    ) {

        return;

    }


    /*
       Stop timer immediately.
    */

    clearInterval(timer);

    timer =
        null;


    /*
       Capture exact elapsed time
       BEFORE changing state.
    */

    if (
        startTime
    ) {

        elapsedSeconds =
            Math.min(
                timeLimit,
                Math.max(
                    0.1,
                    (
                        Date.now() -
                        startTime
                    ) / 1000
                )
            );

    } else {

        elapsedSeconds =
            0;

    }


    /*
       Set final state.
    */

    testFinished =
        true;


    testStarted =
        false;


    typingInput.disabled =
        true;


    /*
       Calculate remaining time.
    */

    timeLeft =
        Math.max(
            0,
            Math.ceil(
                timeLimit -
                elapsedSeconds
            )
        );


    updateTimeDisplay();


    /*
       Final stats.
    */

    const stats =
        calculateStats();


    const performance =
        getPerformance(
            stats.wpm,
            stats.accuracy
        );


    /* ==========================================
       WIN / LOSE
    ========================================== */

    let won =
        false;


    if (
        stats.accuracy >= 80 &&
        stats.wpm >= 30
    ) {

        won =
            true;

    }


    if (won) {

        resultPanel.classList.add(
            "win"
        );


        resultMessage.textContent =
            "🎉 Congratulations!";


        resultSubtitle.textContent =
            "Excellent work! You completed the test with great performance.";


        /*
           WIN BLAST.
        */

        createWinBlast();

    } else {

        resultPanel.classList.remove(
            "win"
        );


        resultMessage.textContent =
            "💪 Keep Going!";


        resultSubtitle.textContent =
            "Every test makes you better. Practice again and improve your score.";

    }


    /* ==========================================
       RESULT
    ========================================== */

    resultWpm.textContent =
        stats.wpm;


    resultAccuracy.textContent =
        `${stats.accuracy}%`;


    resultTime.textContent =
        formatTime(
            stats.elapsed
        );


    resultCorrect.textContent =
        stats.correct;


    resultIncorrect.textContent =
        stats.incorrect;


    resultPerformance.textContent =
        performance;


    /* ==========================================
       MODAL
    ========================================== */

    modalWpm.textContent =
        stats.wpm;


    modalAccuracy.textContent =
        `${stats.accuracy}%`;


    modalTime.textContent =
        formatTime(
            stats.elapsed
        );


    modalCorrect.textContent =
        stats.correct;


    modalIncorrect.textContent =
        stats.incorrect;


    modalPerformance.textContent =
        performance;


    /* ==========================================
       SAVE PROGRESS
    ========================================== */

    saveProgress(
        stats
    );

}


/* ============================================================
   SAVE PROGRESS
============================================================ */

function saveProgress(
    stats
) {

    let oldData = [];


    try {

        oldData =
            JSON.parse(
                localStorage.getItem(
                    "typingProgress"
                )
            ) || [];

    } catch (error) {

        oldData = [];

    }


    oldData.push({

        date:
            new Date().toLocaleString(),

        difficulty:
            currentDifficulty,

        wpm:
            stats.wpm,

        accuracy:
            stats.accuracy,

        correct:
            stats.correct,

        incorrect:
            stats.incorrect,

        time:
            stats.elapsed

    });


    /*
       Keep latest 20 tests.
    */

    if (
        oldData.length > 20
    ) {

        oldData =
            oldData.slice(
                -20
            );

    }


    localStorage.setItem(
        "typingProgress",
        JSON.stringify(
            oldData
        )
    );

}


/* ============================================================
   RESTART
============================================================ */

restartBtn.addEventListener(
    "click",
    () => {

        /*
           Close result modal.
        */

        resultOverlay.classList.remove(
            "active"
        );


        /*
           Load a fresh paragraph.
        */

        loadParagraph();


        /*
           Focus input.
        */

        typingInput.focus();

    }
);


/* ============================================================
   RESET
============================================================ */

resetBtn.addEventListener(
    "click",
    () => {

        /*
           Reset the current test
           and load a fresh paragraph.
        */

        loadParagraph();

    }
);


/* ============================================================
   VIEW RESULT
============================================================ */

viewResultBtn.addEventListener(
    "click",
    () => {

        if (
            !testFinished
        ) {

            alert(
                "Complete the typing test first to view your final result."
            );


            return;

        }


        resultOverlay.classList.add(
            "active"
        );

    }
);


/* ============================================================
   CLOSE RESULT
============================================================ */

closeResult.addEventListener(
    "click",
    () => {

        resultOverlay.classList.remove(
            "active"
        );

    }
);


/* ============================================================
   CLICK OUTSIDE MODAL
============================================================ */

resultOverlay.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            resultOverlay
        ) {

            resultOverlay.classList.remove(
                "active"
            );

        }

    }
);


/* ============================================================
   MODAL RESTART
============================================================ */

modalRestart.addEventListener(
    "click",
    () => {

        resultOverlay.classList.remove(
            "active"
        );


        loadParagraph();


        typingInput.focus();

    }
);


/* ============================================================
   KEYBOARD SHORTCUT
============================================================ */

document.addEventListener(
    "keydown",
    (event) => {

        /*
           Ctrl + Enter = Start
        */

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();


            if (
                !testStarted &&
                !testFinished
            ) {

                startTest();

            }

        }


        /*
           Escape = Close result
        */

        if (
            event.key === "Escape"
        ) {

            resultOverlay.classList.remove(
                "active"
            );

        }

    }
);


/* ============================================================
   INITIALIZE
============================================================ */

loadParagraph();


updateDifficultySlider(
    "medium"
);


