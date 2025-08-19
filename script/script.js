const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

let isCollapsed = false;

toggleBtn.addEventListener("click", () => {
    isCollapsed = !isCollapsed;
    sidebar.classList.toggle("collapsed", isCollapsed);
});

sidebar.addEventListener("mouseenter", () => {
    if (isCollapsed) {
        sidebar.classList.remove("collapsed");
    }
});

sidebar.addEventListener("mouseleave", () => {
    if (isCollapsed) {
        sidebar.classList.add("collapsed");
    }
});