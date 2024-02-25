import SHN from '../assets/images/types/shn.svg';
import AZS from '../assets/images/types/azs.svg';
import EZS from '../assets/images/types/ezs.svg';
import SHP from '../assets/images/types/shp.svg';

export const REGIONS = [
	{ id: '1', title: 'Гомельская' },
	{ id: '2', title: 'Минская' },
	{ id: '3', title: 'Брестская' },
	{ id: '4', title: 'Могилевская' },
	{ id: '5', title: 'Гродненская' },
	{ id: '6', title: 'Витебская' },
];

export const OBJECTS = [
	{ id: '1', title: 'АЗС' },
	{ id: '2', title: 'ЭЗС' },
	{ id: '3', title: 'СХП' },
];

export const PONS = [
	{ id: '1', title: 'ПОН1' },
	{ id: '2', title: 'ПОН2' },
	{ id: '3', title: 'ПОН3' },
];

export const PANELS = [
	{ id: '1', title: 'Выбор области', list: REGIONS },
	{ id: '2', title: 'Выбор объекта', list: OBJECTS },
	{ id: '3', title: 'Выбор ПОН', list: PONS },
];

export const TYPES = [
	{ id: '1', title: 'СХН', icon: SHN },
	{ id: '2', title: 'АЗС', icon: AZS },
	{ id: '3', title: 'ЭЗС', icon: EZS },
	{ id: '4', title: 'СХП', icon: SHP },
];
export const ECONOMIC = [
	{ id: '1', title: 'Рентабельность' },
	{ id: '2', title: 'Прибыль' },
	{ id: '3', title: 'Валовый доход' },
];

export const TECHNICAL = [
	{ id: '1', title: 'Сумма амортизации' },
	{ id: '2', title: 'Срок службы' },
	{ id: '3', title: 'Остаточная стоимость' },
];

export const PRODUCTION = [
	{ id: '1', title: 'План реализации' },
	{ id: '2', title: 'План ТНП' },
	{ id: '3', title: 'Процент оснащения' },
];

export const INDICATORS = [
	{ id: '1', title: 'Экономические', list: ECONOMIC },
	{ id: '2', title: 'Технические', list: TECHNICAL },
	{ id: '3', title: 'Производственные', list: PRODUCTION },
];
