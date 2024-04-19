import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active' : ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Edwin <small>&</small> Cecy
            </span>
            <h6>06.07.2024</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Pareja</a>
            </li>
            <li>
              <a href='#story'>Nuestra Historia</a>
            </li>
            <li>
              <a href='#organization'>Organizacion</a>
            </li>
            <li>
              <a href='#gallery'>Galeria</a>
            </li>
            <li>
              <a href='#whenwhere'>Donde y Cuando</a>
            </li>

          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Edwin & Cecy
            <br />
            06 Julio 2024
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
