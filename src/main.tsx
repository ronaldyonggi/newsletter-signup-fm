import './styles/reset.css';
import './styles/fonts.css';
import './styles/global.css';

import { createRoot } from 'react-dom/client';
import Button from './components/Button/Button';

export function App() {
  return <main>
    <Button text='Subscribe to monthly newsletter' />
  </main>;
}

createRoot(document.getElementById('root')!).render(<App />);
