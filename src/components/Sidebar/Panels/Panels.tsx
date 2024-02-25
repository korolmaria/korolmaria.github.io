import React, { FC, useState } from 'react';
import { Dropdown } from 'components/Dropdown';
import styles from './panels.module.scss';
import { TButtonProps, TPanel } from '../types';

const Button: FC<TButtonProps> = ({ title, onClick }) => {
	return (
		<div className={styles.button} onClick={onClick}>
			{title}
		</div>
	);
};

export const Panels: FC<TPanel> = ({ title, list }) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClick = () => setIsOpen(!isOpen);

	return (
		<Dropdown button={<Button title={title} onClick={onClick} />} isOpen={isOpen}>
			<div className={styles.panels}>
				{list.map(({ id, title }) => (
					<div className={styles.panel} key={id}>
						{title}
					</div>
				))}
			</div>
		</Dropdown>
	);
};
