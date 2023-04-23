import ReactDOM from 'react-dom';
import React from 'react'
import { isServer } from '/lib/utils';

type ModalProps = {
  children: React.ReactElement | React.ReactElement[]
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {

  if (isServer) return null

  return ReactDOM.createPortal(props.children, document.body)
})

Modal.displayName = 'Modal'

export default Modal;
