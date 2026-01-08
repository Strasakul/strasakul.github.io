export function createHeader(){
    const header = document.createElement("header");
    header.id = "site-header";
    header.innerHTML = `
    <nav>
      <div class="logo">GAMER_OS</div>
      <div class="menu">
        <div class="dropdown">
          <button class="btn">Select Theme</button>
          <div class="dropdown-content" id="themeSelect">
            <a class="theme-item" data-theme="cyber">Cyber</a>
            <a class="theme-item" data-theme="fantasy">Fantasy</a>
            <a class="theme-item" data-theme="retro">Retro</a>
          </div>
        </div>
      </div>
    </nav>
    `;
    document.body.prepend(header);
}