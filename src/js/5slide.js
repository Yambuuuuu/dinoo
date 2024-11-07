import React from 'react'
import "../css/App.css"
import picturee from "../Images/lastpict.png"

const Last = () => {
    return (
        <div className='together5'>
            <ul className='list5'>
            <li><img src = {picturee}  className = "bic" alt ="Ошибка загрузки"></img></li>
                <div className='sl5'>
                <li>Прокат велосипедов</li>
                <li>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке! </li>
                </div>
            </ul>
        </div>
    )};

    export default Last;