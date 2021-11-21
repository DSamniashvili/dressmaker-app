import React, {useContext} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { DarkModeToggler } from './components/DarkModeToggler';
import { ThemeContext } from './app/context/theme';
import './styles/theme.scss';


const App: React.FC = () => {
	const {darkMode, toggleDarkMode} = useContext(ThemeContext);

	const handleDarkModeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if(toggleDarkMode){
			toggleDarkMode();
		}
	  };

  return (
	<div className={`App ${darkMode === true ? 'dark' : 'light'}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
		<DarkModeToggler handleDarkModeToggle={handleDarkModeToggle} />
      </header>
    </div>
  );
}

export default App;
