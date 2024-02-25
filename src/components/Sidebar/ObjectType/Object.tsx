import React, { FC } from 'react';
import styles from './object.module.scss';
import { TObjectType } from '../types';

export const Object: FC<TObjectType> = ({ icon, title }) => {
	return (
		<div className={styles.object}>
			<div className={styles.object_icon}>
				<img src={icon} alt="" />
			</div>

			<div className={styles.object_title}>{title}</div>
		</div>
	);
};
