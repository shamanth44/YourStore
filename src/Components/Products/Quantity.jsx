import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Quantity = ({quantity, setDecrement, setIncrement}) => {
  return (
    <>
           <div className="quantity">
          <button
          onClick={() => setDecrement()}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p>{quantity}</p>
          <button
           onClick={() => setIncrement()}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
    </>
  )
}

export default Quantity
