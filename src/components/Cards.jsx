import React from 'react'
import '../components/card.css'

const Cards = ({ datalist, selecteCard, i }) => {

    return (
        <div onClick={() => (
            selecteCard(i))}
            className={`Card-container-di card-${datalist?.status}`}
        // style={{ background: `${datalist?.bg} ` }}
        >
            {
                datalist?.status !== 'down' && (
                    <i className={`${datalist?.name}`}></i>
                )
            }
        </div>
    )
}

export default Cards