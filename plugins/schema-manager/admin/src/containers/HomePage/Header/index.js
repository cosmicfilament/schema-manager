import React from 'react';
import { Header as CustomHeader } from '@buffetjs/custom';
import { Import, Export } from '@styled-icons/boxicons-regular';
import { useGlobalContext } from 'strapi-helper-plugin';
import { getTrad } from '../../../utils';

const Header = ({ handleBtnClicked }) => {
	const { formatMessage } = useGlobalContext();

	const importBtnLabel = formatMessage({ id: getTrad('header.button.import') });
	const importBtnProps = {
		label: importBtnLabel,
		onClick: () => handleBtnClicked('import'),
		color: 'primary',
		type: 'button',
		icon: <Import style={{ color: 'secondary', height: '16px' }} />
	};

	const exportBtnLabel = formatMessage({ id: getTrad('header.button.export') });
	const exportBtnProps = {
		label: exportBtnLabel,
		onClick: () => handleBtnClicked('export'),
		color: 'secondary',
		type: 'button',
		icon: <Export style={{ color: 'primary', height: '16px' }} />
	};

	const actions = [
		{
			...importBtnProps,
			style: {
				height: 35
			}
		},
		{
			...exportBtnProps,
			style: {
				height: 35
			}
		}
	];

	const pluginName = formatMessage({ id: getTrad('plugin.name') });
	const pluginDescription = formatMessage({
		id: getTrad('plugin.description')
	});

	const headerProps = {
		title: {
			label: pluginName
		},
		content: pluginDescription,
		actions
	};

	return <CustomHeader {...headerProps} />;
};

export default Header;
