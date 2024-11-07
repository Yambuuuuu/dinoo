import React from 'react'
import "../css/App.css"
import picture1 from "../Images/bic1.png"

const Predlagaem = () => {
    return (
        <div className='together2'>
            <div className='ttt'>
                    <em  className='text21'>Что мы предлагаем</em>
                    <em className='text22'>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. 
                        Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  
                        Все работы выполняем качественно и с душой. </em>
            </div>
                        <div className='bics'>
                        <img src = {picture1}  className = "bic" alt ="Ошибка загрузки"></img>
                        </div>
        </div>
    )};

    export default Predlagaem;