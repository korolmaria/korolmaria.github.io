import React, { FC, memo } from 'react';
import { Header } from 'components/Header';
import styles from './main.module.scss';
import { Sidebar } from 'components/Sidebar';

interface Props {
	children: React.ReactNode;
}

export const MainLayout: FC<Props> = memo(({ children }: Props) => {
	return (
		<div className={styles.main}>
			<Header />

			<div className={styles.main_content}>
				<Sidebar />

				{children}
			</div>
		</div>
	);
});
