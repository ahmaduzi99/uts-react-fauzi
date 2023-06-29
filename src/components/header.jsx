import React from 'react'
import { FaReact } from 'react-icons/fa'
import './header.css'
import { NavLink } from 'react-router-dom'


export default function Header () {
  return (
    <header> 
         <nav className='wrapper-nav'>
            <ul className='list-nav'>
                <li className='nav-item'>
                    
                    <NavLink to={'/'} >Dashboard</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to={'/contack'}>Contack</NavLink>
                </li>
                <li className='nav-item'> 
                    <NavLink to={'/about'} >About</NavLink>
                </li>
            </ul>
        </nav>
            <h2 className='textnav'>TOKO VAPESTORE JURAGAN UZI 2023</h2>
            <img src="https://yt3.ggpht.com/a/AGF-l790M53dEh9qhBnZoCvX_S9h6Fx15S8pUu72CQ=s900-mo-c-c0xffffffff-rj-k-no" className='logoToko' alt="LogoVapeZoo" />
            <FaReact/>
    </header>
    
  )
}
