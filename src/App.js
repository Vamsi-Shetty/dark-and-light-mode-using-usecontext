import './App.css';
import Home from './pages/Home';
import { ThemeContext } from './context/ThemeContext';
import {useState} from 'react'


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "Dark" : "Light"}>
      <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        <Home/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
