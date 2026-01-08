export interface Theme {
    name: string;
    id: string;
    variables: Record<string, string>;
}

export const themes: Theme[] = [
    {
        name: "Light",
        id: "light",
        variables: {
            "--bg-color": "#ffffff",
            "--text-color": "#1a1a1b",
            "--primary-color": "#0066ff",
            "--header-footer-bg": "#f5f7fa",
            "--link-color": "#0052cc",
            "--surface-color": "#f0f2f5",
            "--border-color": "#d1d5db",
            "--success": "#28a745",
            "--error": "#dc3545", 
            "--font-heading": "'Inter', sans-serif",
            "--font-body": "'Inter', sans-serif",
        }
    },
    {
        name: "Dark",
        id: "dark",
        variables: {
            "--bg-color": "#0b0e14",
            "--text-color": "#e2e8f0",
            "--primary-color": "#bb86fc",
            "--header-footer-bg": "#151921",
            "--link-color": "#03dac6",
            "--surface-color": "#1c222d",
            "--border-color": "#2d3748",
            "--success": "#4caf50",
            "--error": "#cf6679",
            "--font-body": "'JetBrains Mono', monospace",
        }
    },
    {
        name: "Cyber",
        id: "cyber",
        variables: {
            "--bg-color": "#050505",
            "--text-color": "#00f0ff",
            "--primary-color": "#fcee09",
            "--header-footer-bg": "#1a1a1a",
            "--link-color": "#ff00ff",
            "--surface-color": "#111111",
            "--border-color": "#333333",
            "--font-heading": "'Orbitron', sans-serif",
            "--font-body": "'JetBrains Mono', monospace",
        }
    },
    {
        name: "Fantasy",
        id: "fantasy",
        variables: {
            "--bg-color": "#f5f2e0",
            "--text-color": "#2d3a27",
            "--primary-color": "#00827f",
            "--header-footer-bg": "#e3ddba",
            "--link-color": "#b8860b",
            "--surface-color": "#ede8cc",
            "--border-color": "#c5bc8e",
            "--font-heading": "'Cinzel', serif",
            "--font-body": "'EB Garamond', serif",
        }

    },
    {
        name: "Retro",
        id: "retro",
        variables: {
            "--bg-color": "#0f0f0f",
            "--text-color": "#ffffff",
            "--primary-color": "#e01010", 
            "--header-footer-bg": "#222222",
            "--link-color": "#00ffff", 
            "--surface-color": "#1a1a1a",
            "--border-color": "#444444",
            "--font-heading": "'Press Start 2P', cursive",
            "--font-body": "'Press Start 2P', cursive",
            "font-size": "14px",
        }
    },
];