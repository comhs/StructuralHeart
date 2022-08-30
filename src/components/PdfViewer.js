import React from 'react';
import '../styles/StoryModal.css';

const PdfViewer = ({ link }) => {
  return (
    <object data={link} type="application/pdf">
      <iframe title="Article" src={`https://docs.google.com/viewer?url=${link}&embedded=true`}></iframe>
    </object>

  )
}

export default PdfViewer