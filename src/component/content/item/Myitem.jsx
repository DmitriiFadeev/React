import React from 'react';
import s from './Myitem.module.css'

const Myitem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemImg}>
                <a href={props.href} target="_blank" rel="noopener noreferrer"><img src={props.img} alt="" /></a>
            </div>
            <div className={s.name}>
                <a href={props.href} target="_blank" rel="noopener noreferrer">{props.descr}</a>
            </div>
        </div>
    )
}

export default Myitem;