import React from 'react';
import Modal from 'react-modal';
import PdfViewer from './PdfViewer';
import '../styles/StoryModal.css';

const customStyles = {
  content: {
    padding: '0',
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

const StoryModal = () => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div onClick={closeModal} className="modal-close-button">&times;</div>
        <PdfViewer />
      </Modal>
    </div>
  )
}

export default StoryModal;