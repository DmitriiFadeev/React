import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Instruction.module.css';
const Instruction = (props) => {
    return (
        <div className={s.instruction}>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/Instruction/1">Инструкция 1</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Instruction/2">Инструкция 2</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Instruction/3">Инструкция 3</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Instruction/4">Инструкция 4</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Instruction/5">Инструкция 5</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Instruction/6">Инструкция 6</NavLink>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.header}>
                    Инструкция 1
                </div>
                <div className={s.content}>
                    <div className={s.block}>
                        <div className={s.text}>
                            Пункт 1
                        </div>
                        <div className={s.image}>

                        </div>
                    </div>
                    <div className={s.block}>
                        <div className={s.text}>
                            Пункт 1
                        </div>
                        <div className={s.image}>

                        </div>
                    </div>
                    <div className={s.block}>
                        <div className={s.text}>
                            Пункт 1
                        </div>
                        <div className={s.image}>

                        </div>
                    </div>
                    <div className={s.block}>
                        <div className={s.text}>
                            Пункт 1
                        </div>
                        <div className={s.image}>
                            123
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instruction;