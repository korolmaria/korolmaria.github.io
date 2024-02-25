import React, { FC } from 'react';
import styles from './type.module.scss';
import { TObjectType } from '../../../types';

export const Type: FC<TObjectType> = ({ icon, title }) => {
	return (
		<div className={styles.object}>
			<div className={styles.object_icon}>
				<img src={icon} alt={title} />
			</div>

			<div className={styles.object_title}>{title}</div>
		</div>
	);
};
