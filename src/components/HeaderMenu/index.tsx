import './styles.scss';
import LogoPaymeeWhite from '../../assets/logo/logo-paymee-white.svg'
import LoginIcon from '../../assets/login-icon.svg'
import RightArrow from '../../assets/right-icon.svg'


export function HeaderMenu(){
  return(
    <header>
      <div className='menu-infos'>
        <img src={LogoPaymeeWhite} alt="" />

        <ul>
          <li><a href='#'>Soluções</a></li>
          <li><a href='#'>Preços</a></li>
          <li><a href='#'>Suporte</a></li>
          <li><a href='#'>Contato</a></li>
        </ul>
      </div>
      <div className='access'>
         
        <a href="/login" className='login'><img src={LoginIcon} alt="login" /> <span>Login</span> </a>
        <a href="/create" className='button-create-account'> <span>Criar Conta</span> <img src={RightArrow} alt="login" /></a>
          
      </div>
    </header>
  )
}