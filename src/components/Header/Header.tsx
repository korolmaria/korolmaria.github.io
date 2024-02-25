import React from 'react';
import styles from './header.module.scss';
import logo from 'assets/images/header/logo.png';
import logo2 from 'assets/images/header/logo2.svg';
import logo3 from 'assets/images/header/logo3.svg';
import logo4 from 'assets/images/header/icon_va.svg';

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header_actions}>
				<div className={styles.header_logos}>
					<div className={styles.logo}>
						<img src={logo} alt="логотип" />
					</div>

					<div className={styles.logo}>
						<img src={logo2} alt="логотип2" />
					</div>
				</div>

				<div className={styles.header_hide}>
					<div className={styles.header_text}>
						Показать
						<br />
						панель
					</div>
					<div className={styles.header_arrows}>
						<img src={logo4} alt="логотип4" />
					</div>
					<div className={styles.header_text}>
						Скрыть
						<br />
						панель
					</div>
				</div>
			</div>

			<div className={styles.header_open}>
				<img src={logo3} alt="логотип3" />
			</div>
		</div>
	);
};
