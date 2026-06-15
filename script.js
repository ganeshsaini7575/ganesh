// =========================
// ELEMENTS
// =========================

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

const pages = document.querySelectorAll(".page");
const menuItems = document.querySelectorAll(".menu-list li");

let progress = 0;

// =========================
// SIDEBAR
// =========================

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// =========================
// PAGE NAVIGATION
// =========================

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    updateProgress();
}

// =========================
// PROGRESS SYSTEM
// =========================

function updateProgress() {
    const progressBar =
        document.getElementById("progressBar");

    if (!progressBar) return;

    progress += 5;

    if (progress > 100) {
        progress = 100;
    }

    progressBar.style.width = progress + "%";
    progressBar.innerText = progress + "%";

    localStorage.setItem(
        "progressValue",
        progress
    );
}

window.addEventListener("load", () => {

    let savedProgress =
        localStorage.getItem("progressValue");

    if (savedProgress) {
        progress = parseInt(savedProgress);

        const progressBar =
            document.getElementById("progressBar");

        if (progressBar) {
            progressBar.style.width =
                progress + "%";

            progressBar.innerText =
                progress + "%";
        }
    }
});

// =========================
// DARK MODE
// =========================

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem(
            "theme",
            "dark"
        );
    }
    else {
        localStorage.setItem(
            "theme",
            "light"
        );
    }
});

window.addEventListener("load", () => {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

// =========================
// SEARCH
// =========================

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value =
        searchInput.value.toLowerCase();

    menuItems.forEach(item => {

        if (
            item.innerText
                .toLowerCase()
                .includes(value)
        ) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }

    });

});

// =========================
// OPEN EXAMPLE IN EDITOR
// =========================

function openEditor(codeId) {
    const source =
        document.getElementById(codeId);

    if (!source) return;

    let code =
        source.innerHTML;

    code = code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");

    document
        .getElementById("codeArea")
        .value = code;

    showPage("editor");

    runCode();
}

// =========================
// RUN CODE
// =========================

const runBtn =
    document.getElementById("runBtn");

runBtn.addEventListener("click", runCode);

function runCode() {
    const code =
        document.getElementById("codeArea")
            .value;

    document
        .getElementById("outputFrame")
        .srcdoc = code;
}

// =========================
// COPY CODE
// =========================

const copyBtn =
    document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

    const code =
        document.getElementById("codeArea");

    navigator.clipboard
        .writeText(code.value);

    alert("Code Copied");
});

// =========================
// SAVE CODE
// =========================

const saveBtn =
    document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

    const code =
        document.getElementById("codeArea")
            .value;

    localStorage.setItem(
        "savedCode",
        code
    );

    alert("Code Saved");
});

// =========================
// LOAD SAVED CODE
// =========================

window.addEventListener("load", () => {

    const savedCode =
        localStorage.getItem("savedCode");

    if (savedCode) {
        document
            .getElementById("codeArea")
            .value = savedCode;

        runCode();
    }
});

// =========================
// RESET CODE
// =========================

const resetBtn =
    document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

    document
        .getElementById("codeArea")
        .value = "";

    document
        .getElementById("outputFrame")
        .srcdoc = "";
});

// =========================
// QUIZ
// =========================

function checkQuiz(answer) {
    const result =
        document.getElementById(
            "quizResult"
        );

    if (answer === 1) {
        result.innerHTML =
            "✅ Correct Answer";

        result.style.color =
            "green";
    }
    else {
        result.innerHTML =
            "❌ Wrong Answer";

        result.style.color =
            "red";
    }
}

// =========================
// INITIAL PAGE
// =========================

showPage("home");
// =========================
// PREVIOUS / NEXT LESSON
// =========================

const lessonOrder = [
    "home",
    "intro",
    "basic",
    "elements",
    "attributes",
    "headings",
    "paragraphs",
    "styles",
    "links",
    "images",
    "lists",
    "tables",
    "forms",
    "quiz",
    "progress",
    "editor"
];

function nextPage(currentPage) {
    let index = lessonOrder.indexOf(currentPage);

    if (index < lessonOrder.length - 1) {
        showPage(lessonOrder[index + 1]);
    }
}

function previousPage(currentPage) {
    let index = lessonOrder.indexOf(currentPage);

    if (index > 0) {
        showPage(lessonOrder[index - 1]);
    }
}