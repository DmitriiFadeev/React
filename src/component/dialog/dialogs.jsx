import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import s from './dialogs.module.css'

const DialogItem = (props) => {
    
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    
    let dialogsElements = props.Dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let MessagesElements = props.Messages.map( m =><MessageItem message={m.message}  /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;