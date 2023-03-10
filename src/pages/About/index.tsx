import { FooterContainer } from '../../components/FooterContainer'
import { HeaderMenu } from '../../components/HeaderMenu'
import { ReadyContainer } from '../../components/ReadyContainer'

import ImageEngee from '../../assets/image-about-engee.png'
import ImageGroup from '../../assets/group-image.png'

import Mobbly from '../../assets/mobbly.svg'
import Maxmi from '../../assets/maxmi.svg'
import ClickBus from '../../assets/clickbus.svg'
import Moto from '../../assets/motorola.svg'
import Levis from '../../assets/levis.svg'

import SilkLeft from '../../assets/silk-left.svg'
import SilkRight from '../../assets/silk-right.svg'

import HeartIcon from '../../assets/icons/heart-icon.svg'
import LeafIcon from '../../assets/icons/leaf-icon.svg'
import SecurityIcon from '../../assets/icons/security-2.svg'
import CofeeIcon from '../../assets/coffee.svg'


import './styles.scss'
import { AuthContext } from '../../module/hook'
import { useContext } from 'react'
import { BurgerMenu } from '../../components/BurgerMenu'
export function About() {

  const {isMobile} =  useContext(AuthContext);
  return (
    <div id="container-about">
      {isMobile ? <BurgerMenu /> :  <HeaderMenu />}

      <div className='container-sup'>
        <div className='content-about'>
          <h3 className='title-page'>Sobre Nós</h3>
          <h1>Conheça um pouco <span>sobre <br />nossa história</span></h1>

          <div className='know-more'>
            <a href="#" className='button-know-more'>Saiba mais</a> <a href="/contact" className='get-in-contact'>Entrar em contato ➜</a>
          </div>
        </div>

      </div>

      <div className='container-sup'>
        <img src={ImageEngee} alt="Imagem" />
      </div>

      <div className='container-sup'>
        <div className='content-base'>

          <div className='brands-about'>
            <img src={Mobbly} alt="" />
            <img src={Maxmi} alt="" />
            <img src={ClickBus} alt="" />
            <img src={Moto} alt="" />
            <img src={Levis} alt="" />
          </div>
          <div className='history'>
            <h1>Nossa história</h1>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and scrambled it to make a type
            </p>
          </div>
        </div>
      </div>

      <div className='container-sup'>
        <div className='content-base'>
          <div className='milestones'>
            <div className='header-milestones'>
              <h1>Marcos importantes</h1>
              <div className='silks'>
                <img src={SilkLeft} alt="" />
                <img src={SilkRight} alt="" />
              </div>
            </div>
            <ul>
              <li>
                <span>2020</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </li>
              <li>
                <span>2020</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </li>
              <li>
                <span>2020</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </li>
              <li>
                <span>2020</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div id='worth'>
        <img id="group-image" src={ImageGroup} alt="Imagem do grupo" />
        <div className="about-worth">
            <h1>Valores</h1>
            <div className='specific-worth'>
              <div className='item transparency'>
                <img src={HeartIcon} alt="" />
                <span>Transparência</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </div>
              <div className='item agility'>
                <img src={CofeeIcon} alt="" />
                <span>Agilidade</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </div>
              <div className='item security'>
                <img src={SecurityIcon} alt="" />
                <span>Segurança</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </div>
              <div className='item conforty'>
                <img src={LeafIcon} alt="" />
                <span>Conforto</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
              </div>
            </div>
        </div>
      </div>
      
      <ReadyContainer />
      
      <FooterContainer />

    </div>
  )
}