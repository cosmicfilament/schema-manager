/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import Container from '../../components/Container';
import Import from './HomePageContent/Import';
import Export from './HomePageContent/Export';

const HomePage = () => {
	return (
		<Container>
			<Import />
			<Export />
		</Container>
	);
};

export default memo(HomePage);
