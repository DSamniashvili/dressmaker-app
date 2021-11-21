import React from 'react';
import { AppButtonProps } from './AppButton.types';
import styles from './AppButton.module.scss';

export const AppButton: React.FC<AppButtonProps> = ({
	label,
	onClick,
}: AppButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{label}
		</button>
	);
};
