import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./sitebar.module.css'

const Sitebar = () => {
    return(
        <div className={s.Sitebar}>
            <ul className={s.nav}>
                <li><NavLink to="/home" activeClassName={s.active}>Главная</NavLink></li>
                <li><NavLink to="/content" activeClassName={s.active} >Ярлыки</NavLink></li>
                <li><NavLink to="/Instruction" activeClassName={s.active} >Инструкции</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active} >Диалоги</NavLink></li>
            </ul>
        </div>
    )
}

export default Sitebar;