import React from 'react';
import s from './Myitem.module.css'

const Myitem = (props) => {
    return (
        <div className={s.item}>
            <img src="http://info.orenmfc.ru/wp-content/uploads/2020/05/logo-moodle.png" alt="" />
            {props.message}
            {props.image}
        </div>
    )
}

export default Myitem;