import React from 'react';
import styles from './error.module.scss';
import ErrorPNG from 'assets/images/404.png';
import { Link } from 'react-router-dom';
import { MainLayout } from 'layouts/Main';

export const ErrorPage = () => {
	return (
		<MainLayout>
			<div className={styles.error}>
				<div className={styles.error_image}>
					<img src={ErrorPNG} width={440} height={440} alt="Страница не найдена" />
				</div>
				<div className={styles.error_actions}>
					<div className={styles.error_text}>Страница не найдена</div>
					<div className={styles.error_link}>
						<Link to={'/'}>На главную</Link>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
