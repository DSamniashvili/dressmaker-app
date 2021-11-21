import React from 'react';
import {ThemeContext} from '../../app/context/theme';
import styles from '../../UI/AppButton/AppButton.module.scss';


interface DarkModeTogglerProps {
	handleDarkModeToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const DarkModeToggler = ({handleDarkModeToggle}: DarkModeTogglerProps) => {
	const { darkMode } = React.useContext(ThemeContext);
	
	return (
	  <>
		<h1>{darkMode ? "🌙" : "🌞"}</h1>
		<button className={styles.button} onClick={handleDarkModeToggle}>Toggle dark mode</button>
	  </>
	);
  };