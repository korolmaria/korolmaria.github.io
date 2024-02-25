import React, { FC, useState } from 'react';
import { Dropdown } from 'components/Dropdown';
import styles from './indicator.module.scss';
import { TButtonProps, TPanel } from '../types';
import { ReactComponent as Arrow } from 'assets/images/sidebar/arrow.svg';
import classNames from 'classnames';

const Button: FC<TButtonProps> = ({ title, onClick, isOpen }) => (
	<div className={styles.button} onClick={onClick}>
		<div className={styles.button_text}>{title}</div>

		<div
			className={classNames(styles.button_arrow, {
				[styles.button_arrow__opened]: isOpen,
			})}
		>
			<Arrow />
		</div>
	</div>
);

export const Indicator: FC<TPanel> = ({ title, list }) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClick = () => setIsOpen(!isOpen);

	return (
		<Dropdown button={<Button title={title} onClick={onClick} isOpen={isOpen} />} isOpen={isOpen}>
			<div className={styles.list}>
				{list.map(({ id, title }) => (
					<div className={styles.list_item} key={id}>
						{title}
					</div>
				))}
			</div>
		</Dropdown>
	);
};
