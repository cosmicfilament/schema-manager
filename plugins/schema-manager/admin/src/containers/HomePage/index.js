/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { Header } from '@buffetjs/custom';
import {
  PopUpWarning,
  LoadingIndicator,
  useGlobalContext,
  generateFiltersFromSearch,
  generateSearchFromFilters,
  request,
  useQuery,
} from 'strapi-helper-plugin';
import { getTrad } from '../../utils';

// import PropTypes from 'prop-types';
import Container from '../../components/Container';
import Import from './HomePageContent/Import';
import Export from './HomePageContent/Export';


const HomePage = () => {
	const { formatMessage, plugins } = useGlobalContext();

	const pluginName = formatMessage({ id: getTrad('plugin.name') });
	const pluginDescription = formatMessage({ id: getTrad('plugin.description') });
	
	const headerProps = {
    title: {
      label: pluginName,
    },
    content: pluginDescription
	};
	
	return (
		<Container>
			<Header {...headerProps} isLoading={false} />
			<>
				<Import />
				<Export />
			</>
		</Container>
	);
};

export default memo(HomePage);
