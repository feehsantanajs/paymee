import './styles.scss';
import LogoPaymeeWhite from '../../assets/logo/logo-paymee-white.svg'
import LogoPaymee from '../../assets/logo/logo-paymee.svg'
import LogoPaymeeSupport from '../../assets/logo/support-logo.svg'

import LoginIconWhite from '../../assets/icons/login-icon-white.svg'
import LoginIcon from '../../assets/icons/login-icon.svg'
import RightArrow from '../../assets/right-icon.svg'
import { useLocation } from 'react-router-dom'
import { ButtonCreateAccount } from '../ButtonCreateAccount';



export function HeaderMenu() {

  const {pathname} = useLocation();
  

  return (
    <header>
      {pathname === '/'
        ?<div className='menu home'>
            <img src={LogoPaymeeWhite} alt="" id="logo-image" />

            <ul>
              <li><a href='#'>Soluções</a></li>
              <li><a href='#'>Preços</a></li>
              <li><a href='/support'>Suporte</a></li>
              <li><a href='/contact'>Contato</a></li>
            </ul>

            <div className='access'>

              <a href="/login" className='login'><img src={LoginIconWhite} alt="login" /> <span>Login</span> </a>
              <a href="/create-account" className='button-create-account'> <span>Criar Conta</span> <img src={RightArrow} alt="login" /></a>

            </div>
          </div>

        : pathname === '/support' 
        ? <div className='menu support'>
            <div className='logo'>
              <a href="/"><img src={LogoPaymee} alt="" id="logo-image"/></a>
              <img src={LogoPaymeeSupport} alt="" />
            </div>
            <div className='access'>
              <a href="/login" className='login'><img src={LoginIcon} alt="login" /> <span>Login</span> </a>
              <ButtonCreateAccount type='orange'/>
            </div>
          </div>

        : pathname === '/login' || pathname === '/create-account'
        
        ? <div className='menu user'>
            <div className='logo'>
              <a href="/"><img src={LogoPaymee} alt="Paymee"  id="logo-image"/></a>
            </div>
          </div>

        : <div className='menu base'>
            <a href="/"><img src={LogoPaymee} alt="Paymee"  id="logo-image"/></a>

            <ul>
              <li><a href='#'>Soluções</a></li>
              <li><a href='#'>Preços</a></li>
              <li><a href='/support'>Suporte</a></li>
              <li><a href='/contact'>Contato</a></li>
            </ul>
            <div className='access'>
              <a href="/login" className='login'><img src={LoginIcon} alt="login" /> <span>Login</span> </a>
               <ButtonCreateAccount type='orange'/>
            </div>
          </div>

      }

    </header>
  )
}