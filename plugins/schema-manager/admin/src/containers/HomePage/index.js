/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';

import Header from './Header';
import HomePageContent from './HomePageContent';

import Container from '../../components/Container';

const HomePage = () => {
	const btnClickedHandler = (btn = 'import') => {
		console.log('btn clicked: ', btn);
	};

	return (
		<Container>
			<Header handleBtnClicked={btnClickedHandler} />
			<HomePageContent />
		</Container>
	);
};

export default memo(HomePage);
