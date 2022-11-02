//close the details element if the user no longer has their mouse over it
document.querySelectorAll(".event-card").forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
        elem.children[1].querySelector("details").open = false;
    });
});
