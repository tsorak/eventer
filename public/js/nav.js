const btn = document.querySelector(".navToggle").querySelector("button");
const nav = document.querySelector("nav");

let navState = localStorage.getItem("navState") || "open";

btn.addEventListener("click", () => {
    navState = navState === "open" ? "closed" : "open";

    applyNavStyles();

    localStorage.setItem("navState", navState);
});

const applyNavStyles = () => {
    if (navState === "open") {
        nav.style.height = "auto";
        nav.style.borderBottom = "1px solid #ddd";
    } else {
        nav.style.height = 0;
        nav.style.borderBottom = "none";
    }
};

applyNavStyles();
