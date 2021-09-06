import React from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

const Backdrop = (props) => {
    return <div className = {classes.backdrop} onClick = {props.onClose}/>
}

const Overlay = (props) => {
    return (<div className = {classes.modal}>
        <div className = {classes.content}>{props.children}</div>
    </div>)
}
const porTalElement = document.getElementById('overlay')
const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose ={props.onClose}/>,porTalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,porTalElement)}
        </React.Fragment>
    )
}

export default Modal ;