import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <header className='limit-content'>
            <h1>React Blog <small>con ♥ por Thiago</small></h1>

            <ul className='navlist'>
                <li className='navlist__item'>
                    <Link className='link' to="/">Inicio</Link>
                </li>
                <li className='navlist__item'>
                    <a className='link' href="https://twitter.com/home">Twitter</a>
                </li>
                <li className='navlist__item'>
                    <a className='link' href="https://github.com/granatathiago">Github</a>
                </li>
                <li className='navlist__item'>
                    <a className='link' href="mailto:granatathiago@gmail.com">Contacto</a>
                </li>
            </ul>
        </header>
    )
}
