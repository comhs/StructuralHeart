import React from 'react';
import Modal from 'react-modal';
import PdfViewer from './PdfViewer';
import '../styles/Cards.css';
const json = require('../api/cards.json');

const customStyles = {
  content: {
    padding: '0',
  },
};

function Cards() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [pdfLink, setPdfLink] = React.useState(null);

  function openModal() {
    setIsOpen(true);
    // setPdfLink({link});
  }

  function afterOpenModal() {
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="cards">
      {json.cards.map(card => (

        card.hide === "false" ?

          <div className={
            card.textTheme === "dark" ? (card.bgImg !== "" ? "card darkText bgImg" : "card darkText")
              : (card.textTheme === "light" ? (card.bgImg !== "" ? "card lightText bgImg" : "card lightText")
                : "card")
          }

            style={
              card.bgImg !== "" && card.textTheme === "light" ? { backgroundImage: `linear-gradient(#0000,#0006), url(${card.bgImg})` }
                : card.bgImg !== "" && card.textTheme === "dark" ? { backgroundImage: `linear-gradient(#FFF0,#FFF7), url(${card.bgImg})` }
                  : {}
            }
          >
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
            <div className="card-cta">
              {card.url === "" && card.CTA !== "" ?
                <div className="card-button" id={card.id}>{card.CTA}</div> :
                <div><a href="javascript:void(0)" id={card.id} onClick={openModal}>{card.CTA}</a>
                  <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles}>
                    <div onClick={closeModal} className="modal-close-button">&times;</div>
                    <PdfViewer link={card.url} />
                    {/* <object data={pdfLink} type="application/pdf">
                      <iframe title="Article" src={`https://docs.google.com/viewer?url=${pdfLink}&embedded=true`}></iframe>
                    </object> */}
                  </Modal>
                </div>
              }

            </div>
          </div> :
          null
      ))}

    </div>
  )
}

export default Cards