function getCurrentPage(): string {
    return window.location.pathname.split("/").pop() ?? "";
}

function createNav(){
    const navRoot = document.getElementById("nav-root");
    if(!navRoot) return;

    // Dropdown Menu
    navRoot.innerHTML = `
     <select id="pageSelect">
        <option value="">Got to...</option>
        <option value="index.html">Home</option>
        <option value="second.html">Second Page</option>
     </select>
    `;

    const pageSelect = document.getElementById("pageSelect") as HTMLSelectElement | null;
    const currentPage = getCurrentPage();

    if(pageSelect) {
        pageSelect.value = currentPage;

        pageSelect.addEventListener("change", () => {
            if(pageSelect.value) {
                window.location.href = pageSelect.value;
            }
        });
    }
}

createNav();
