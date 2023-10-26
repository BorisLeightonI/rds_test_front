import React from 'react'
// import './index.scss';

function Card({url, title, description, status}) {
  return (
    <div className='card_container'>
        <div className="img_container">
            {/* <img src={url} alt="imagen" width={'200px'} height={'200px'}/> */}
        </div>
        <div className="card_content">
            <h3>Probando</h3>
            {console.log('CARD:', description)}
            <h3>{title}</h3>
            <p>{description}</p>
            <p>status: {status}</p>
        </div>
    </div>
  )
}

export default Card