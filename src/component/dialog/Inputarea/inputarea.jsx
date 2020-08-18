import React from 'react';
import s from './inputarea.module.css'

const MessageArea = (props) => {
    
    let newMessage = React.createRef();
    
    let addMessage =() =>{
        let text = newMessage.current.value;
        props.addMessage(text);
    }
    
    return (
        <div className={s.inputblock}>
            <div className={s.inputarea}>
                <textarea ref={newMessage} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={s.inputbtn}>
                <button onClick={addMessage}>Нажми меня</button>
            </div>
        </div>
    )
}

export default MessageArea;