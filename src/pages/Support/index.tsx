
import './styles.scss'

import SearchIcon from '../../assets/icons/search-icon.svg'
import EmailIcon from '../../assets/icons/email-icon.svg'

import { FooterContainer } from '../../components/FooterContainer'
import { HeaderMenu } from '../../components/HeaderMenu'
import { ReadyContainer } from '../../components/ReadyContainer'
import { AuthContext } from '../../module/hook'
import { useContext } from 'react'
import { BurgerMenu } from '../../components/BurgerMenu'

export function Support() {
  const {isMobile} =  useContext(AuthContext);
  return (
    <div id='container-support'>
      {isMobile ? <BurgerMenu /> :  <HeaderMenu />}
      <div className='questions-support'>
        <div className='content-quertions-support'>
          <h2>Suporte</h2>
          <h1>Perguntas Frequentes</h1>
          <p>Nós sabemos que o PayMee é um sistema repleto de funcionalidades e que<br /> dúvidas vão surgir. Pensando em você,  criamos um FAQ completo para te ajudar!</p>
          <div className='input-search'>
            <img src={SearchIcon} alt="Pesquisar" />
            <input type="text" placeholder='Procurar' />
          </div>
          <div className='email-support'>
            <span>Não encontrou sua dúvida? </span>
            <span><img src={EmailIcon} alt="email" /> suporte@paymee.com.br</span>
          </div>
        </div>
      </div>
      <div id='verifications'>
        <div className='content-verification'>

          <div className='part-one'>
            <div className='verification first'>
              <h2>Verificação</h2>
              <ul>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
              </ul>
            </div>

            <div className='verification two'>
              <h2>Verificação</h2>
              <ul>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
              </ul>
            </div>
          </div>

          <div className='part-two'>
            <div className='verification three'>
              <h2>Verificação</h2>
              <ul>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
              </ul>
            </div>

            <div className='verification four'>
              <h2>Verificação</h2>
              <ul>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      
      <ReadyContainer />
      <FooterContainer />
    </div>

  )
}