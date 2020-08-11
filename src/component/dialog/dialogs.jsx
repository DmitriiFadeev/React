import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import s from './dialogs.module.css'
import DialogItem from './DialogItem/dialogItem'
import MessageItem from './MessageItem/MessageItem'

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