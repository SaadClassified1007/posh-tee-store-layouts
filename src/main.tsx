
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register the fonts
document.head.innerHTML += `
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap">
`;

createRoot(document.getElementById("root")!).render(<App />);
