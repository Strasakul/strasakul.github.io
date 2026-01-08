function getCurrentPage() {
    var _a;
    return (_a = window.location.pathname.split("/").pop()) !== null && _a !== void 0 ? _a : "";
}
function createNav() {
    var navRoot = document.getElementById("nav-root");
    if (!navRoot)
        return;
    navRoot.innerHTML = "\n     <select id=\"pageSelect\">\n        <option value=\"\">Got to...</option>\n        <option value=\"index.html\">Home</option>\n        <option value=\"second.html\">Second Page</option>\n     </select>\n    ";
    var pageSelect = document.getElementById("pageSelect");
    var currentPage = getCurrentPage();
    if (pageSelect) {
        pageSelect.value = currentPage;
        pageSelect.addEventListener("change", function () {
            if (pageSelect.value) {
                window.location.href = pageSelect.value;
            }
        });
    }
}
createNav();
//# sourceMappingURL=main.js.map