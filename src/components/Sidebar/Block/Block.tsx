import React, { FC } from 'react';
import styles from './block.module.scss';
import { TBlockProps } from '../types';
import classNames from 'classnames';

export const Block: FC<TBlockProps> = ({ title, items, id }) => {
	return (
		<div className={styles.block}>
			<div className={styles.block_title}>{title}</div>

			<div
				className={classNames(styles.block_content, {
					[styles[`block_content_${id}`]]: true,
				})}
			>
				{items.map((item) => item)}
			</div>
		</div>
	);
};
