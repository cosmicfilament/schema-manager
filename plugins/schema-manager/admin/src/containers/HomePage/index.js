/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';

import Header from './Header';
import HomePageContent from './HomePageContent';
import FileDialog from './FileDialog';

import Container from '../../components/Container';

const HomePage = () => {
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ modalType, setModalType ] = useState('import'); // import or export

	const handleClickToggleModal = (_modalType = 'import') => {
		setIsModalOpen(prev => !prev);
		setModalType(_modalType);
	};

	const handleModalClose = () => {
		setModalType('import');
	};

	return (
		<Container>
			<Header onBtnClicked={handleClickToggleModal} />
			<HomePageContent />
			<FileDialog
				isOpen={isModalOpen}
				handleClosed={handleModalClose}
				handleToggle={handleClickToggleModal}
				modalType={modalType}
			/>
		</Container>
	);
};

export default memo(HomePage);
