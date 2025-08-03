import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal';
import { SoundProvider } from './SoundContext'; // Assuming you save the above code in SoundContext.js
Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SoundProvider>
      <App />
    </SoundProvider>
  </StrictMode>,
)
