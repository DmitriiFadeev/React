import React from 'react';
import s from './dialogs.module.css'
import DialogItem from './DialogItem/dialogItem'
import MessageItem from './MessageItem/MessageItem'
import style from './Inputarea/inputarea.module.css'

const Dialogs = (props) => {
    let dialogsElements = props.Dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessagesElements = props.Messages.map(m => <MessageItem message={m.message} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
        newMessage.current.value ='';
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}

                <div className={style.inputblock}>
                    <div className={style.inputarea}>
                        <textarea ref={newMessage} onChange={onMessageChange} ></textarea>
                    </div>
                    <div className={style.inputbtn}>
                        <button onClick={addMessage}>Нажми меня</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;