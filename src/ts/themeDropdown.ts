import { themes } from "./themes.js";

export function initThemeDropdown() {
    // Set saved theme
    const saveTheme = localStorage.getItem("theme");
    if(saveTheme) {
        const theme = themes.find(t => t.id == saveTheme);
        if(theme) setTheme(theme.id, theme.variables);
    }

    const themeSelect = document.getElementById("themeSelect");
    if(!themeSelect) return;

    // Clear existing items
    themeSelect.innerHTML = "";

    // Add themes to dropdown list
    themes.forEach(theme => {
        const a = document.createElement("a");
        a.classList.add("dropdown-item", "theme-item");
        a.textContent = theme.name;
        a.setAttribute("data-theme", theme.id);

        // Apply preview style
        Object.entries(theme.variables).forEach(([key, value]) => {
            a.style.setProperty(key, value);
        });

        // Set click handler
        a.addEventListener("click", () => {
            setTheme(theme.id, theme.variables);
        });

        themeSelect.appendChild(a);
    });
}

function setTheme(themeId: string, variables: Record<string, string>) {
    document.documentElement.setAttribute("data-theme", themeId);
    // Apply CSS variables Globaly
    Object.entries(variables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
    localStorage.setItem("theme", themeId);
}