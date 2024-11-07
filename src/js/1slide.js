import React from 'react'
import "../css/App.css"
import picture1 from "../Images/logo.png"
import picture2 from "../Images/din.png"

const Head1 = () => {
    return (
        <div className ="body1">
    <div className='header'>
    <p className='logotype'><img src = {picture1}  className = "logo" alt ="Ошибка загрузки"></img></p>
    <p>О нас</p>
    <p>Услуги</p>
    <p>Аренда</p>
    <button className='but1'>Связаться</button>
    </div>
    <div className = "together">
    <div className='text1'>
        <em className='zagolovok'>Веломастерская "Велозар"</em>
        <em className='samtext'>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. 
            Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</em>
        </div>
        <div className='dinobic'>
            <img src={picture2} alt="Ошибка" />
        </div>
    </div>

    </div>
)};


export default Head1;
