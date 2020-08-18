import React from 'react';
import './content.css';
import Myitem from './item/Myitem';
import helpdesk from './../../img/helpdesk.png'
import rchat from './../../img/rchat.png'
import gosuslugi from './../../img/gosuslugi.jpg'
import MFC from './../../img/MFC.png'
import ElecQueue from './../../img/ElecQueue.png'
import SiteMfc from './../../img/sitemfc.jpg'
import moodle from './../../img/moodle.png'
import buisnessnavig from './../../img/buisnessnavig.png'
import rosreestr from './../../img/rosreestr.jpg'

const Content = () => {
    return (
        <div className="content">
            <div className="content__list">
                <Myitem img={helpdesk} descr={'HelpDesk'} href={'http://help.orenmfc.ru/'}/>
                <Myitem img={rchat} descr={'Чат'} href={'https://rchat.orenmfc.ru/'}/>
                <Myitem img={gosuslugi} descr={'Госуслуги'} href={'https://www.gosuslugi.ru/'}/>
                <Myitem img={MFC} descr={'Эволента'} href={'http://172.29.14.123/login'}/>
                <Myitem img={ElecQueue} descr={'Электронная очередь'} href={'http://172.29.14.21/iris_mo/equeue_ui/login.php'}/>
                <Myitem img={SiteMfc} descr={'Сайт МФЦ'} href={'http://www.orenmfc.ru/'}/>
                <Myitem img={moodle} descr={'Тестирование'} href={'moodle.orenmfc.ru'}/>
                <Myitem img={buisnessnavig} descr={'Бизнеснавигатор'} href={'https://smbn.ru/'}/>
                <Myitem img={rosreestr} descr={'Росреестр'} href={'https://rosreestr.ru/site/'}/>
            </div>
        </div>
    )
}

export default Content;