/* =========================================================
   ONLINE EXAMINATION SYSTEM
   FINAL - FIXED JAVASCRIPT
========================================================= */


/* =========================================================
   WAIT FOR HTML TO LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       EXAM DATABASE
    ===================================================== */

    const exams = {

        html: {

            title: "HTML Basics Test",

            questions: [

                {
                    q: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Tech Modern Language",
                        "Hyperlinks and Text Markup Language",
                        "Home Tool Markup Language"
                    ],
                    answer: 0
                },

                {
                    q: "Which tag is used to create a hyperlink?",
                    options: [
                        "<link>",
                        "<a>",
                        "<href>",
                        "<url>"
                    ],
                    answer: 1
                },

                {
                    q: "Which tag is used for the largest heading?",
                    options: [
                        "<h6>",
                        "<heading>",
                        "<h1>",
                        "<head>"
                    ],
                    answer: 2
                },

                {
                    q: "Which HTML element is used to display an image?",
                    options: [
                        "<image>",
                        "<img>",
                        "<picture>",
                        "<src>"
                    ],
                    answer: 1
                },

                {
                    q: "Which attribute specifies an image path?",
                    options: [
                        "href",
                        "link",
                        "src",
                        "path"
                    ],
                    answer: 2
                },

                {
                    q: "Which tag creates an unordered list?",
                    options: [
                        "<ol>",
                        "<ul>",
                        "<list>",
                        "<li>"
                    ],
                    answer: 1
                },

                {
                    q: "Which tag represents a paragraph?",
                    options: [
                        "<p>",
                        "<para>",
                        "<text>",
                        "<paragraph>"
                    ],
                    answer: 0
                },

                {
                    q: "Which HTML tag is used to create a button?",
                    options: [
                        "<click>",
                        "<input>",
                        "<button>",
                        "<btn>"
                    ],
                    answer: 2
                },

                {
                    q: "Which tag is used for a table row?",
                    options: [
                        "<td>",
                        "<tr>",
                        "<table-row>",
                        "<row>"
                    ],
                    answer: 1
                },

                {
                    q: "HTML is primarily used to create what?",
                    options: [
                        "Database systems",
                        "Web page structure",
                        "Operating systems",
                        "Computer networks"
                    ],
                    answer: 1
                }

            ]

        },


        css: {

            title: "CSS Fundamentals",

            questions: [

                {
                    q: "What does CSS stand for?",
                    options: [
                        "Creative Style Sheets",
                        "Cascading Style Sheets",
                        "Computer Style System",
                        "Colorful Style Sheets"
                    ],
                    answer: 1
                },

                {
                    q: "Which property changes text color?",
                    options: [
                        "font-color",
                        "text-color",
                        "color",
                        "foreground"
                    ],
                    answer: 2
                },

                {
                    q: "Which property changes the background color?",
                    options: [
                        "background-color",
                        "bgcolor",
                        "background",
                        "color-background"
                    ],
                    answer: 0
                },

                {
                    q: "Which property is used to make text bold?",
                    options: [
                        "font-style",
                        "font-weight",
                        "text-bold",
                        "bold"
                    ],
                    answer: 1
                },

                {
                    q: "Which CSS property controls the space inside an element?",
                    options: [
                        "margin",
                        "padding",
                        "spacing",
                        "border"
                    ],
                    answer: 1
                },

                {
                    q: "Which CSS property controls the space outside an element?",
                    options: [
                        "padding",
                        "margin",
                        "space",
                        "outside"
                    ],
                    answer: 1
                },

                {
                    q: "Which value makes an element a flex container?",
                    options: [
                        "display: block",
                        "display: flex",
                        "position: flex",
                        "flex: display"
                    ],
                    answer: 1
                },

                {
                    q: "Which property rounds the corners of an element?",
                    options: [
                        "corner-radius",
                        "border-radius",
                        "radius",
                        "round-border"
                    ],
                    answer: 1
                },

                {
                    q: "Which unit is relative to the root font size?",
                    options: [
                        "px",
                        "em",
                        "rem",
                        "cm"
                    ],
                    answer: 2
                },

                {
                    q: "Which CSS feature is used for responsive layouts?",
                    options: [
                        "Media queries",
                        "Selectors",
                        "Variables",
                        "Animations"
                    ],
                    answer: 0
                }

            ]

        },


        javascript: {

            title: "JavaScript Basics",

            questions: [

                {
                    q: "JavaScript is mainly used to add what to websites?",
                    options: [
                        "Structure",
                        "Interactivity",
                        "Database tables",
                        "Server hardware"
                    ],
                    answer: 1
                },

                {
                    q: "Which keyword declares a variable?",
                    options: [
                        "var",
                        "variable",
                        "define",
                        "value"
                    ],
                    answer: 0
                },

                {
                    q: "Which symbol is used for strict equality?",
                    options: [
                        "=",
                        "==",
                        "===",
                        "!="
                    ],
                    answer: 2
                },

                {
                    q: "Which method selects an element by ID?",
                    options: [
                        "getElementById",
                        "selectId",
                        "getId",
                        "queryId"
                    ],
                    answer: 0
                },

                {
                    q: "Which method adds an event listener?",
                    options: [
                        "addEvent",
                        "addEventListener",
                        "eventAdd",
                        "listenEvent"
                    ],
                    answer: 1
                },

                {
                    q: "Which data type represents true or false?",
                    options: [
                        "String",
                        "Number",
                        "Boolean",
                        "Object"
                    ],
                    answer: 2
                },

                {
                    q: "Which method converts JSON text into an object?",
                    options: [
                        "JSON.parse",
                        "JSON.convert",
                        "JSON.object",
                        "JSON.read"
                    ],
                    answer: 0
                },

                {
                    q: "Which keyword creates a constant?",
                    options: [
                        "constant",
                        "fixed",
                        "const",
                        "static"
                    ],
                    answer: 2
                },

                {
                    q: "Which method adds an item to the end of an array?",
                    options: [
                        "push",
                        "add",
                        "append",
                        "insert"
                    ],
                    answer: 0
                },

                {
                    q: "Which command prints information to the browser console?",
                    options: [
                        "print()",
                        "console.log()",
                        "display()",
                        "write.console()"
                    ],
                    answer: 1
                }

            ]

        },


        web: {

            title: "Web Development MCQ",

            questions: [

                {
                    q: "Which language structures a web page?",
                    options: [
                        "HTML",
                        "CSS",
                        "SQL",
                        "Python"
                    ],
                    answer: 0
                },

                {
                    q: "Which language styles a web page?",
                    options: [
                        "HTML",
                        "CSS",
                        "Java",
                        "SQL"
                    ],
                    answer: 1
                },

                {
                    q: "Which language provides browser interactivity?",
                    options: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "XML"
                    ],
                    answer: 2
                },

                {
                    q: "What does URL stand for?",
                    options: [
                        "Uniform Resource Locator",
                        "Universal Resource Link",
                        "User Resource Location",
                        "Uniform Reference Link"
                    ],
                    answer: 0
                },

                {
                    q: "Which protocol is commonly used for secure websites?",
                    options: [
                        "HTTP",
                        "FTP",
                        "HTTPS",
                        "SMTP"
                    ],
                    answer: 2
                },

                {
                    q: "Which HTML tag contains page metadata?",
                    options: [
                        "<body>",
                        "<meta>",
                        "<footer>",
                        "<section>"
                    ],
                    answer: 1
                },

                {
                    q: "Which technology is used for storing structured browser data?",
                    options: [
                        "localStorage",
                        "CSS",
                        "HTML",
                        "Font Awesome"
                    ],
                    answer: 0
                },

                {
                    q: "What does responsive design mean?",
                    options: [
                        "Fast loading only",
                        "Works on different screen sizes",
                        "Uses only mobile devices",
                        "Uses no CSS"
                    ],
                    answer: 1
                },

                {
                    q: "Which tool is commonly used to inspect webpage errors?",
                    options: [
                        "Browser DevTools",
                        "Calculator",
                        "File Explorer",
                        "Paint"
                    ],
                    answer: 0
                },

                {
                    q: "Which technology is commonly used to manage version control?",
                    options: [
                        "Git",
                        "HTML",
                        "CSS",
                        "JSON"
                    ],
                    answer: 0
                }

            ]

        },


        computer: {

            title: "Computer Knowledge",

            questions: [

                {
                    q: "What is the brain of a computer?",
                    options: [
                        "RAM",
                        "CPU",
                        "Monitor",
                        "Keyboard"
                    ],
                    answer: 1
                },

                {
                    q: "Which memory is temporary?",
                    options: [
                        "ROM",
                        "RAM",
                        "Hard disk",
                        "SSD"
                    ],
                    answer: 1
                },

                {
                    q: "What does CPU stand for?",
                    options: [
                        "Central Processing Unit",
                        "Computer Personal Unit",
                        "Central Program Utility",
                        "Computer Processing User"
                    ],
                    answer: 0
                },

                {
                    q: "Which device is used to enter text?",
                    options: [
                        "Monitor",
                        "Printer",
                        "Keyboard",
                        "Speaker"
                    ],
                    answer: 2
                },

                {
                    q: "Which device displays visual output?",
                    options: [
                        "Keyboard",
                        "Monitor",
                        "Mouse",
                        "Scanner"
                    ],
                    answer: 1
                },

                {
                    q: "Which storage device generally has no moving parts?",
                    options: [
                        "SSD",
                        "DVD",
                        "Floppy disk",
                        "Tape"
                    ],
                    answer: 0
                },

                {
                    q: "What does OS stand for?",
                    options: [
                        "Open Software",
                        "Operating System",
                        "Online Service",
                        "Output System"
                    ],
                    answer: 1
                },

                {
                    q: "Which is an operating system?",
                    options: [
                        "Windows",
                        "HTML",
                        "CSS",
                        "HTTP"
                    ],
                    answer: 0
                },

                {
                    q: "Which device connects computers to a network?",
                    options: [
                        "Router",
                        "Monitor",
                        "Printer",
                        "Keyboard"
                    ],
                    answer: 0
                },

                {
                    q: "What is a collection of connected computers called?",
                    options: [
                        "Network",
                        "Program",
                        "Folder",
                        "Document"
                    ],
                    answer: 0
                }

            ]

        }

    };


    /* =====================================================
       STATE
    ===================================================== */

    let currentExam = null;
    let currentExamId = null;
    let currentQuestion = 0;
    let answers = [];
    let timeLeft = 600;
    let timer = null;
    let examStarted = false;


    /* =====================================================
       ELEMENT HELPER
    ===================================================== */

    const $ = id =>
        document.getElementById(id);


    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const topTimer = $("topTimer");
    const mobileTimer = $("mobileTimer");
    const questionContent = $("questionContent");
    const questionNumber = $("questionNumber");
    const examTitle = $("examTitle");
    const progressBar = $("progressBar");
    const questionGrid = $("questionGrid");
    const previousBtn = $("previousBtn");
    const nextBtn = $("nextBtn");
    const resultSection = $("results");
    const toast = $("toast");


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(window.examToastTimer);

        window.examToastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

    }


    /* =====================================================
       TIMER FORMAT
    ===================================================== */

    function formatTime(seconds) {

        const minutes =
            Math.floor(seconds / 60);

        const remaining =
            seconds % 60;

        return (
            String(minutes).padStart(2, "0") +
            ":" +
            String(remaining).padStart(2, "0")
        );

    }


    /* =====================================================
       UPDATE TIMER
    ===================================================== */

    function updateTimer() {

        if (!topTimer || !mobileTimer) {
            return;
        }

        const value =
            formatTime(timeLeft);

        topTimer.textContent = value;
        mobileTimer.textContent = value;

        if (timeLeft <= 60) {

            topTimer.style.color = "#e53935";
            mobileTimer.style.color = "#e53935";

        } else {

            topTimer.style.color = "";
            mobileTimer.style.color = "";

        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            showToast(
                "Time is up. Your exam has been submitted."
            );

            submitExam();

            return;

        }

        timeLeft--;

    }


    /* =====================================================
       START TIMER
    ===================================================== */

    function startTimer() {

        clearInterval(timer);

        timeLeft = 600;

        if (topTimer) {
            topTimer.style.color = "";
        }

        if (mobileTimer) {
            mobileTimer.style.color = "";
        }

        updateTimer();

        timer = setInterval(
            updateTimer,
            1000
        );

    }


    /* =====================================================
       START EXAM
    ===================================================== */

    function startExam(examId) {

        if (!exams[examId]) {

            showToast("Exam not found.");

            return;

        }

        currentExamId = examId;
        currentExam = exams[examId];

        currentQuestion = 0;

        answers =
            new Array(
                currentExam.questions.length
            ).fill(null);

        examStarted = true;

        if (examTitle) {
            examTitle.textContent =
                currentExam.title;
        }

        if (resultSection) {
            resultSection.classList.add("hidden");
        }

        startTimer();

        buildPalette();

        renderQuestion();

        document
            .querySelectorAll(".exam-card")
            .forEach(card => {

                card.classList.remove(
                    "active-exam"
                );

            });

        const active =
            document.querySelector(
                `[data-exam="${examId}"]`
            );

        if (active) {

            active.classList.add(
                "active-exam"
            );

        }

        showToast(
            `${currentExam.title} started.`
        );

    }


    /* =====================================================
       RENDER QUESTION
    ===================================================== */

    function renderQuestion() {

        if (!currentExam || !questionContent) {
            return;
        }

        const question =
            currentExam.questions[
                currentQuestion
            ];

        const total =
            currentExam.questions.length;

        if (questionNumber) {

            questionNumber.textContent =
                `Question ${
                    currentQuestion + 1
                } of ${total}`;

        }

        if (progressBar) {

            progressBar.style.width =
                `${
                    (
                        (currentQuestion + 1) /
                        total
                    ) * 100
                }%`;

        }

        questionContent.innerHTML = `

            <div class="question-text">

                ${currentQuestion + 1}.
                ${escapeHTML(question.q)}

            </div>

            <div class="options-list">

                ${question.options
                    .map((option, index) => `

                        <button
                            type="button"
                            class="option ${
                                answers[currentQuestion] === index
                                    ? "selected"
                                    : ""
                            }"
                            data-option="${index}"
                        >

                            <span class="option-circle"></span>

                            <span>
                                ${String.fromCharCode(65 + index)}.
                                ${escapeHTML(option)}
                            </span>

                        </button>

                    `)
                    .join("")}

            </div>

        `;


        if (previousBtn) {

            previousBtn.disabled =
                currentQuestion === 0;

        }


        if (nextBtn) {

            nextBtn.disabled =
                answers[currentQuestion] === null;

            if (
                currentQuestion === total - 1
            ) {

                nextBtn.innerHTML = `
                    Submit Exam
                    <i class="fa-solid fa-paper-plane"></i>
                `;

            } else {

                nextBtn.innerHTML = `
                    Next
                    <i class="fa-solid fa-arrow-right"></i>
                `;

            }

        }

        updatePalette();

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       OPTION CLICK
    ===================================================== */

    if (questionContent) {

        questionContent.addEventListener(
            "click",
            event => {

                const option =
                    event.target.closest(
                        "[data-option]"
                    );

                if (!option) {
                    return;
                }

                if (!examStarted) {
                    return;
                }

                const index =
                    Number(
                        option.dataset.option
                    );

                answers[currentQuestion] =
                    index;

                renderQuestion();

            }
        );

    }


    /* =====================================================
       BUILD QUESTION PALETTE
    ===================================================== */

    function buildPalette() {

        if (!questionGrid || !currentExam) {
            return;
        }

        questionGrid.innerHTML =
            currentExam.questions
                .map(
                    (question, index) => `

                        <button
                            type="button"
                            class="question-number"
                            data-question="${index}"
                        >
                            ${index + 1}
                        </button>

                    `
                )
                .join("");

    }


    /* =====================================================
       UPDATE QUESTION PALETTE
    ===================================================== */

    function updatePalette() {

        if (!questionGrid) {
            return;
        }

        questionGrid
            .querySelectorAll(
                ".question-number"
            )
            .forEach(button => {

                const index =
                    Number(
                        button.dataset.question
                    );

                button.classList.toggle(
                    "current",
                    index === currentQuestion
                );

                button.classList.toggle(
                    "answered",
                    answers[index] !== null
                );

            });

    }


    /* =====================================================
       QUESTION PALETTE CLICK
    ===================================================== */

    if (questionGrid) {

        questionGrid.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "[data-question]"
                    );

                if (!button || !examStarted) {
                    return;
                }

                currentQuestion =
                    Number(
                        button.dataset.question
                    );

                renderQuestion();

            }
        );

    }


    /* =====================================================
       NEXT BUTTON
    ===================================================== */

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            () => {

                if (!examStarted || !currentExam) {
                    return;
                }

                if (
                    answers[currentQuestion] === null
                ) {

                    showToast(
                        "Please select an answer first."
                    );

                    return;

                }

                if (
                    currentQuestion ===
                    currentExam.questions.length - 1
                ) {

                    submitExam();

                    return;

                }

                currentQuestion++;

                renderQuestion();

            }
        );

    }


    /* =====================================================
       PREVIOUS BUTTON
    ===================================================== */

    if (previousBtn) {

        previousBtn.addEventListener(
            "click",
            () => {

                if (!examStarted) {
                    return;
                }

                if (currentQuestion > 0) {

                    currentQuestion--;

                    renderQuestion();

                }

            }
        );

    }


    /* =====================================================
       CREATE ANSWER REVIEW
    ===================================================== */

    function createAnswerReview() {

        if (!currentExam || !resultSection) {
            return;
        }

        const oldReview =
            document.getElementById("answerReview");

        if (oldReview) {
            oldReview.remove();
        }

        const review =
            document.createElement("div");

        review.id = "answerReview";

        review.style.marginTop = "28px";
        review.style.textAlign = "left";
        review.style.borderTop = "1px solid #dfe7f1";
        review.style.paddingTop = "22px";

        const heading =
            document.createElement("h3");

        heading.textContent =
            "Answer Review";

        heading.style.marginBottom = "16px";
        heading.style.fontSize = "20px";

        review.appendChild(heading);


        let wrongCount = 0;


        currentExam.questions.forEach(
            (question, index) => {

                const userAnswer =
                    answers[index];

                const correctAnswer =
                    question.answer;

                if (userAnswer !== correctAnswer) {

                    wrongCount++;

                    const item =
                        document.createElement("div");

                    item.style.marginBottom = "14px";
                    item.style.padding = "15px";
                    item.style.border = "1px solid #e1e7ef";
                    item.style.borderRadius = "10px";
                    item.style.background =
                        document.body.classList.contains("dark-theme")
                            ? "#13243a"
                            : "#f8fafc";


                    const questionTitle =
                        document.createElement("strong");

                    questionTitle.textContent =
                        `Question ${index + 1}: ${question.q}`;

                    questionTitle.style.display = "block";
                    questionTitle.style.marginBottom = "9px";


                    const yourAnswer =
                        document.createElement("div");

                    if (userAnswer === null) {

                        yourAnswer.textContent =
                            "Your Answer: Not Answered";

                    } else {

                        yourAnswer.textContent =
                            `Your Answer: ${question.options[userAnswer]}`;

                    }

                    yourAnswer.style.marginBottom = "5px";
                    yourAnswer.style.color = "#d9534f";


                    const correctAnswerText =
                        document.createElement("div");

                    correctAnswerText.textContent =
                        `Correct Answer: ${question.options[correctAnswer]}`;

                    correctAnswerText.style.color = "#20aa61";
                    correctAnswerText.style.fontWeight = "600";


                    item.appendChild(questionTitle);
                    item.appendChild(yourAnswer);
                    item.appendChild(correctAnswerText);

                    review.appendChild(item);

                }

            }
        );


        if (wrongCount === 0) {

            const perfect =
                document.createElement("div");

            perfect.textContent =
                "🎉 Perfect! All answers are correct.";

            perfect.style.padding = "15px";
            perfect.style.borderRadius = "10px";
            perfect.style.background = "#e8f8ee";
            perfect.style.color = "#16834a";
            perfect.style.fontWeight = "700";
            perfect.style.textAlign = "center";

            review.appendChild(perfect);

        }


        resultSection
            .querySelector(".result-card")
            .appendChild(review);

    }


    /* =====================================================
       SUBMIT EXAM
    ===================================================== */

    function submitExam() {

        if (!currentExam) {
            return;
        }

        clearInterval(timer);

        let correct = 0;

        currentExam.questions.forEach(
            (question, index) => {

                if (
                    answers[index] ===
                    question.answer
                ) {

                    correct++;

                }

            }
        );


        const total =
            currentExam.questions.length;

        const wrong =
            total - correct;

        const percentage =
            Math.round(
                (correct / total) * 100
            );


        const resultScore =
            $("resultScore");

        const correctAnswers =
            $("correctAnswers");

        const wrongAnswers =
            $("wrongAnswers");

        const totalAnswers =
            $("totalAnswers");

        const resultMessage =
            $("resultMessage");


        if (resultScore) {

            resultScore.textContent =
                `${percentage}%`;

        }


        if (correctAnswers) {

            correctAnswers.textContent =
                correct;

        }


        if (wrongAnswers) {

            wrongAnswers.textContent =
                wrong;

        }


        if (totalAnswers) {

            totalAnswers.textContent =
                total;

        }


        if (resultMessage) {

            if (percentage >= 80) {

                resultMessage.textContent =
                    "Excellent work! You have performed very well.";

            } else if (percentage >= 50) {

                resultMessage.textContent =
                    "Good effort! Keep practicing to improve your score.";

            } else {

                resultMessage.textContent =
                    "Keep learning and try the exam again.";

            }

        }


        /* =================================================
           SHOW WRONG ANSWERS / ANSWER REVIEW
        ================================================= */

        createAnswerReview();


        if (resultSection) {

            resultSection.classList.remove(
                "hidden"
            );

        }


        /* =================================================
           SAVE COMPLETED EXAM COUNT
        ================================================= */

        const completed =
            Number(
                localStorage.getItem(
                    "examCompleted"
                ) || 0
            );

        localStorage.setItem(
            "examCompleted",
            completed + 1
        );


        /* =================================================
           SAVE BEST SCORE
        ================================================= */

        const best =
            Number(
                localStorage.getItem(
                    "examBestScore"
                ) || 0
            );


        if (percentage > best) {

            localStorage.setItem(
                "examBestScore",
                percentage
            );

        }


        examStarted = false;

        updateStats();

        showToast(
            `Exam submitted. Your score is ${percentage}%.`
        );


        if (resultSection) {

            resultSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }


    /* =====================================================
       STATISTICS
    ===================================================== */

    function updateStats() {

        const completed =
            localStorage.getItem(
                "examCompleted"
            ) || 0;

        const best =
            localStorage.getItem(
                "examBestScore"
            ) || 0;


        const completedCount =
            $("completedCount");

        const bestScore =
            $("bestScore");


        if (completedCount) {

            completedCount.textContent =
                completed;

        }


        if (bestScore) {

            bestScore.textContent =
                `${best}%`;

        }

    }


    /* =====================================================
       START EXAM BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".start-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    const card =
                        event.target.closest(
                            ".exam-card"
                        );

                    if (!card) {
                        return;
                    }

                    const examId =
                        card.dataset.exam;

                    startExam(examId);


                    const questionPanel =
                        document.querySelector(
                            ".question-panel"
                        );

                    if (questionPanel) {

                        questionPanel.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


    /* =====================================================
       RETAKE BUTTON
    ===================================================== */

    const retakeBtn =
        $("retakeBtn");

    if (retakeBtn) {

        retakeBtn.addEventListener(
            "click",
            () => {

                if (!currentExamId) {

                    showToast(
                        "Please select an exam first."
                    );

                    return;

                }

                startExam(
                    currentExamId
                );


                const questionPanel =
                    document.querySelector(
                        ".question-panel"
                    );

                if (questionPanel) {

                    questionPanel.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menu =
        $("menu");

    const nav =
        $("nav");

    if (menu && nav) {

        menu.addEventListener(
            "click",
            () => {

                nav.classList.toggle(
                    "show"
                );

            }
        );

    }


    /* =====================================================
       NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(
            ".navbar nav a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".navbar nav a"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    link.classList.add(
                        "active"
                    );


                    if (nav) {

                        nav.classList.remove(
                            "show"
                        );

                    }

                }
            );

        });


    /* =====================================================
       DARK / LIGHT THEME
    ===================================================== */

    const themeToggle =
        $("themeToggle");

    const themeIcon =
        $("themeIcon");


    function updateThemeIcon() {

        if (!themeIcon) {
            return;
        }

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
                "examTheme"
            );


        if (theme === "dark") {

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


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "dark-theme"
                );


                const dark =
                    document.body.classList.contains(
                        "dark-theme"
                    );


                localStorage.setItem(
                    "examTheme",
                    dark
                        ? "dark"
                        : "light"
                );


                updateThemeIcon();

            }
        );

    }


    /* =====================================================
       KEYBOARD SUPPORT
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (!examStarted) {
                return;
            }


            if (
                event.key === "ArrowRight"
            ) {

                if (nextBtn) {
                    nextBtn.click();
                }

            }


            if (
                event.key === "ArrowLeft"
            ) {

                if (previousBtn) {
                    previousBtn.click();
                }

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    /*
       IMPORTANT:
       Do NOT remove exam statistics on page refresh.

       The old code had:

       localStorage.removeItem("examCompleted");
       localStorage.removeItem("examBestScore");

       Those lines were deleting the saved marks.
    */

    // loadTheme();

    // updateStats();



/* =====================================================
   INITIALIZE
===================================================== */

// Reset exam statistics whenever the page is refreshed
localStorage.removeItem("examCompleted");
localStorage.removeItem("examBestScore");

loadTheme();

updateStats();

});