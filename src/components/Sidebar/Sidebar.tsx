import React, { useState } from 'react';
import styles from './sidebar.module.scss';
import { TBlockProps } from './types';
import { Panels } from './Panels';
import { ReactComponent as Close } from 'assets/images/sidebar/close.svg';
import { ReactComponent as Hamburger } from 'assets/images/sidebar/hamburger.svg';
import { Object } from './ObjectType';
import classNames from 'classnames';
import { ECONOMIC, OBJECTS, PRODUCTION, REGIONS, TECHNICAL } from '../../data';
import { Indicator } from './Indicator';
import { Block } from './Block';

const BLOCKS: TBlockProps[] = [
	{
		id: 'panels',
		title: 'Панель выбора',
		items: [
			<Panels title="Выбор области" key={1} list={REGIONS} />,
			<Panels title="Выбор объекта" key={2} list={REGIONS} />,
			<Panels title="Выбор ПОН" key={3} list={REGIONS} />,
		],
	},
	{ id: 'objects', title: 'Тип объекта', items: OBJECTS.map((object, inx) => <Object {...object} key={inx} />) },
	{
		id: 'indicators',
		title: 'Показатели',
		items: [
			<Indicator title="Экономические" key={1} list={ECONOMIC} />,
			<Indicator title="Технические" key={2} list={TECHNICAL} />,
			<Indicator title="Производственные" key={3} list={PRODUCTION} />,
		],
	},
];

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div
			className={classNames(styles.sidebar, {
				[styles.sidebar_close]: !isOpen,
			})}
		>
			<div className={styles.sidebar_actions} onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <Close /> : <Hamburger />}
			</div>

			<div
				className={classNames(styles.sidebar_content, {
					[styles.sidebar_content__close]: !isOpen,
				})}
			>
				{BLOCKS.map((props, inx) => (
					<Block {...props} key={inx} />
				))}
			</div>
		</div>
	);
};
