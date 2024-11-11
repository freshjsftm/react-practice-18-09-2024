import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { ThemeContext } from './contexts';


function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <HomePage />
    </ThemeContext.Provider>
  );
}

export default App;
