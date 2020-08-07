import React from 'react';
import './content.css';
import Myitem from './item/Myitem';

const Content = () => {
    return (
        <div className="content">
            <div className="content__list">
                <Myitem />
                <Myitem />
                <Myitem />
                <Myitem />
                <Myitem />
                <Myitem />
                <Myitem />
                <Myitem />
                <Myitem />
            </div>
        </div>
    )
}

export default Content;