import { slide as Menu } from 'react-burger-menu'
import { GiHamburgerMenu  } from 'react-icons/gi';
import LoginIconWhite from '../../assets/icons/login-icon-white.svg'
import RightArrow from '../../assets/right-icon.svg'
import './styles.scss'
export function BurgerMenu(){
 
  return (

    <div className='header-menu-burger'>
    
         <Menu className={ "my-menu" } width={ '94%' } customBurgerIcon={ <GiHamburgerMenu color='white'/>}>
  
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="support" className="menu-item" href="/support">Suporte</a>
          <a id="contact" className="menu-item" href="/contact">Contato</a>
          <a id="term-us" className="menu-item" href="/term-us">Termo</a>
          <a id="politic" className="menu-item" href="/politic">Politica</a>
          <a id="ombudsman" className="menu-item" href="/ombudsman">Ouvidoria</a>
          <a id="about" className="menu-item" href="/about">Sobre</a>
          <a id="media" className="menu-item" href="/media">Media</a>
        </Menu>

        <div className='access'>
          <a href="/login" className='login'><img src={LoginIconWhite} alt="login" /> <span>Login</span> </a>
          <a href="/create-account" className='button-create-account'> <span>Criar Conta</span> <img src={RightArrow} alt="login" /></a>
        </div>
    </div>
   


  );

}