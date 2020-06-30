import React from 'react';
import {
	Modal,
	ModalFooter,
	PopUpWarning,
	useGlobalContext,
	auth,
	request
} from 'strapi-helper-plugin';

const FileDialog = ({ isOpen, handleClosed, handleToggle, modalType }) => {
	return (
    <>
      <Modal isOpen={isOpen} onToggle={handleToggle} onClosed={handleClosed} />
      <ModalFooter />
    </>
  );
};

export default FileDialog;
