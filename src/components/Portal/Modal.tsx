import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

interface Props {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal = ({ isOpen = false, onClose, children }: Props) => {
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div className="modal-container">
          {children}
          <button onClick={onClose}>Close x</button>
        </div>
      )}
    </>,
    document.getElementById("body")!
  )
}

export default Modal
