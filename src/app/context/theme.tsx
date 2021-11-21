import React from 'react';
import { IThemeContext } from './theme.types';

const defaultState = {
	darkMode: true,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

const ThemeProvider: React.FC = ({ children }) => {
	const [darkMode, setDarkMode] = React.useState(defaultState.darkMode);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeContext.Provider
			value={{
				darkMode,
				toggleDarkMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;