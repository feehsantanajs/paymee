import { slide as Menu } from 'react-burger-menu'

import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

import LoginIconWhite from '../../assets/icons/login-icon-white.svg'
import RightArrow from '../../assets/right-icon.svg'
import './styles.scss'

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMode = () =>{
    setIsOpen(!isOpen);
  }
  return (

    <div id='header-menu-burger'>
       <div onClick={toogleMode} className='button-bg'>
        {isOpen ? <CgClose size={20} /> : <GiHamburgerMenu size={20}  />}
      </div>
      <div className={isOpen ? 'container-burger' : 'container-burger isDesactive' } >
        <ul>
          <li><a id="home" className="menu-item" href="/">Home</a></li>
          <li><a id="support" className="menu-item" href="/support">Suporte</a></li>
          <li><a id="contact" className="menu-item" href="/contact">Contato</a></li>
          <li><a id="term-us" className="menu-item" href="/term-us">Termo</a></li>
          <li><a id="politic" className="menu-item" href="/politic">Politica</a></li>
          <li><a id="ombudsman" className="menu-item" href="/ombudsman">Ouvidoria</a></li>
          <li><a id="about" className="menu-item" href="/about">Sobre</a></li>
          <li><a id="media" className="menu-item" href="/media">Media</a></li>
        </ul>
      </div>
      <div className='access'>
        <a href="/login" className='login'><img src={LoginIconWhite} alt="login" /> <span>Login</span> </a>
        <a href="/create-account" className='button-create-account'> <span>Criar Conta</span> <img src={RightArrow} alt="login" /></a>
      </div>
    </div>



  );

}