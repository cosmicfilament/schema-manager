/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Header } from '@buffetjs/custom';
import { Import, Export } from '@styled-icons/boxicons-regular';
import {
	PopUpWarning,
	LoadingIndicator,
	useGlobalContext
} from 'strapi-helper-plugin';
import { getTrad } from '../../utils';

import Container from '../../components/Container';

const HomePage = () => {
	const { formatMessage } = useGlobalContext();
	const { push } = useHistory();
	const { pathname } = useLocation();

	const importBtnLabel = formatMessage({ id: getTrad('header.button.import') });

	const importBtnProps = {
		label: importBtnLabel,
		onClick: () => handleGoTo('import'),
		color: 'primary',
		type: 'button',
		icon: <Import width='11px' height='11px' />
	};

	const exportBtnLabel = formatMessage({ id: getTrad('header.button.export') });

	const exportBtnProps = {
		label: exportBtnLabel,
		onClick: () => handleGoTo('export'),
		color: 'primary',
		type: 'button',
		icon: <Export width='11px' height='11px' />
	};

	const actions = [
		{
			...importBtnProps,
			icon: true,
			style: {
				paddingLeft: 15,
				paddingRight: 15
			}
		},
		{
			...exportBtnProps,
			icon: true,
			style: {
				paddingLeft: 15,
				paddingRight: 15
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

	const handleGoTo = to => {
		console.log(`handleGoTo: ${pathname}/${to}`);
		push(`${pathname}/${to}`);
	};

	return (
		<Container>
			<Header {...headerProps} isLoading={false} />
		</Container>
	);
};

export default memo(HomePage);
