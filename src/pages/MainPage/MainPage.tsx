import React from 'react';
import { MainLayout } from 'layouts/Main';
import styles from './mainPage.module.scss';

export const MainPage = () => {
	return (
		<MainLayout>
			<div className={styles.main} />
		</MainLayout>
	);
};
