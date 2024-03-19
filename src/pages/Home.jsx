import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {

    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <h2>
            <h2>Home</h2>
            <button onClick={toggleTheme}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        </h2>
    </div>
  )
}

export default Home