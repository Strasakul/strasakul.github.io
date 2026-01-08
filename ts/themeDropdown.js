import { themes } from "./themes.js";
export function initThemeDropdown() {
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
        const theme = themes.find(t => t.id == saveTheme);
        if (theme)
            setTheme(theme.id, theme.variables);
    }
    const themeSelect = document.getElementById("themeSelect");
    if (!themeSelect)
        return;
    themeSelect.innerHTML = "";
    themes.forEach(theme => {
        const a = document.createElement("a");
        a.classList.add("dropdown-item", "theme-item");
        a.textContent = theme.name;
        a.setAttribute("data-theme", theme.id);
        Object.entries(theme.variables).forEach(([key, value]) => {
            a.style.setProperty(key, value);
        });
        a.addEventListener("click", () => {
            setTheme(theme.id, theme.variables);
        });
        themeSelect.appendChild(a);
    });
}
function setTheme(themeId, variables) {
    document.documentElement.setAttribute("data-theme", themeId);
    Object.entries(variables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
    localStorage.setItem("theme", themeId);
}
//# sourceMappingURL=themeDropdown.js.map