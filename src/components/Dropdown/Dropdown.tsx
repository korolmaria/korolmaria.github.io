import React from 'react';
import styles from './dropdown.module.scss';
import classNames from 'classnames';

interface IDropdownProps {
	button: React.ReactNode;
	children: React.ReactNode;
	isOpen: boolean;
	onClick?: (value: boolean) => void;
	onClose?: () => void;
}

export const Dropdown = ({ button, children, isOpen }: IDropdownProps) => {
	return (
		<div className={styles.container}>
			<div className={classNames(styles.dropdown, { [styles.dropdown__active]: isOpen })}>{button}</div>

			<div
				className={classNames(styles.listContainer, {
					[styles.listContainer__opened]: isOpen,
				})}
			>
				<div className={styles.list}>{children}</div>
			</div>
		</div>
	);
};
