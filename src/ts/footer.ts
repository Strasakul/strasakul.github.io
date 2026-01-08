export function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-status">
        <span class="status-indicator"></span>
        <span class="status-text">SYSTEM ONLINE</span>
      </div>
    
      <div class="footer-links">
        <a href="mailto:your@email.com" class="footer-icon-link" title="Email">
          <span class="icon">✉</span> Email
        </a>
        <a href="https://github.com/yourusername" class="footer-icon-link" title="GitHub">
          <span class="icon">⭠</span> GitHub
        </a>
        <a href="https://discord.com/invite/yourlink" class="footer-icon-link" title="Discord">
          <span class="icon">◓</span> Discord
        </a>
      </div>
    
      <div class="footer-copyright">
        &copy; 2026 // Felix Link
      </div>
    </div>
    `;
    document.body.appendChild(footer);
}