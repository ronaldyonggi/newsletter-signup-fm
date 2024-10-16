import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';

import { createRoot } from 'react-dom/client';
import MainForm from './components/MainForm/MainForm';

export function App() {
  return (
    <main>
      <MainForm />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
