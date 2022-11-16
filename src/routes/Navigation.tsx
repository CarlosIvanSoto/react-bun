import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate} from 'react-router-dom'

import logo from '../logo.svg'

const Navigation = () => {
  const activeLink = ({isActive}:any) => isActive ? 'nav-active' : ''
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt='React Logo' />
                <ul>
                    <li>
                        <NavLink to="/home" className={activeLink}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={activeLink}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={activeLink}>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='about' element={<h1>About Page</h1>}/>
                <Route path='users' element={<h1>Users Page</h1>}/>
                <Route path='home' element={<h1>Home Page</h1>}/>
                <Route path='/*' element={<Navigate to='/home' replace />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Navigation