import '../styles/Cards.css';
const json = require('../api/cards.json');

function Cards() {
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
              card.bgImg !== "" && card.textTheme === "light" ? { backgroundImage: `linear-gradient(#0003,#0007), url(${card.bgImg})` }
                : card.bgImg !== "" && card.textTheme === "dark" ? { backgroundImage: `linear-gradient(#FFF6,#FFFC), url(${card.bgImg})` }
                  : {}
            }
          >
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
            <div className="card-cta">
              {card.url === "" && card.CTA !== "" ?
                <div className="card-button" id={card.id}>{card.CTA}</div> :
                <a href={card.url} id={card.id}>{card.CTA}</a>
              }

            </div>
          </div> :
          null
      ))}

    </div>
  )
}

export default Cards