// Verifica si hay una preferencia guardada
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

function toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    }
}
