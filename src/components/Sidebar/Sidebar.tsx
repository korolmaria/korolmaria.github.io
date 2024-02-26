import React, { useState, CSSProperties, useLayoutEffect } from 'react';
import styles from './sidebar.module.scss';
import { ReactComponent as Close } from 'assets/images/sidebar/close.svg';
import { ReactComponent as Hamburger } from 'assets/images/sidebar/hamburger.svg';
import classNames from 'classnames';
import { Block, Indicator, Panel, Type } from 'components/Blocks';
import { INDICATORS, PANELS, TYPES } from 'components/data';
import { TBlockProps } from '../../types';

const BLOCKS: TBlockProps[] = [
	{ id: 'panels', title: 'Панель выбора', items: PANELS.map((item, i) => <Panel {...item} key={i} />) },
	{ id: 'objects', title: 'Тип объекта', items: TYPES.map((item, i) => <Type {...item} key={i} />) },
	{ id: 'indicators', title: 'Показатели', items: INDICATORS.map((item, i) => <Indicator {...item} key={i} />) },
];

const getStyle = (isTransition: boolean): CSSProperties => {
	const normal = { opacity: 1, transform: 'translateX(0px)' };
	const transform = { opacity: 0, transform: 'translateX(-250px)' };

	return isTransition ? normal : transform;
};

export const Sidebar = () => {
	const [opened, setIsOpen] = useState(true);
	const [isTransition, setTransition] = useState(opened);
	const [isVisible, setIsVisible] = useState(opened);

	useLayoutEffect(() => {
		if (opened) {
			setIsVisible(true);

			setTimeout(() => setTransition(true));
		}

		if (!opened) setTransition(false);
	}, [opened]);

	const endTransition = () => {
		if (!opened) setIsVisible(false);
	};

	return (
		<div
			className={classNames(styles.sidebar, {
				[styles.sidebar_close]: !opened,
			})}
		>
			<div className={styles.sidebar_actions} onClick={() => setIsOpen(!opened)}>
				{opened ? <Close /> : <Hamburger />}
			</div>

			<div className={styles.sidebar_content} onTransitionEnd={endTransition} style={getStyle(isTransition)}>
				{isVisible && BLOCKS.map((props, inx) => <Block {...props} key={inx} />)}
			</div>
		</div>
	);
};
