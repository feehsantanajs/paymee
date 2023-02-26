import './styles.scss'

import Mobbly from '../../assets/mobbly.svg'
import Maxmi from '../../assets/maxmi.svg'
import ClickBus from '../../assets/clickbus.svg'
import Moto from '../../assets/motorola.svg'
import Levis from '../../assets/levis.svg'

import Ellipse1 from '../../assets/ellipse-photo1.png'
import Ellipse2 from '../../assets/ellipse-photo2.png'
import Ellipse3 from '../../assets/ellipse-photo3.png'
import Coffee from '../../assets/coffee.svg'
import Security from '../../assets/security.svg'
import Simple from '../../assets/simple.svg'


import { HeaderMenu } from '../../components/HeaderMenu'
import { Smartphone } from '../../components/Smartphone'
import { ButtonCreateAccount } from '../../components/ButtonCreateAccount'


export function Home() {

  return (
    <div>
      <div id="background-top">
        <HeaderMenu />
        <main>
          <div id="top-header">
            <div className='base-title'>
              <div className='title-highlight'>
                <h5>VIVA O PAGAMENTO INSTANTÂNEO</h5>
                <h1>O melhor gateway de pagamentos <span>instantâneos</span> do Brasil</h1>
                <h5>Comece a vender na internet ou em seu ponto de venda com velocidade, segurança para você conseguir crescer seu negócio</h5>

              </div>

              <div className='about-acess'>
                <ButtonCreateAccount type="blue" />
              </div>

              <div className='info-accept-qty'>
                <div className='ellipses'>
                  <img src={Ellipse1} alt="" />
                  <img src={Ellipse2} alt="" />
                  <img src={Ellipse3} alt="" />
                </div>
                <span>+250.000 pessoas aprovam a PayMee</span>
              </div>

            </div>
            <div className="base-cell">
              <Smartphone />
            </div>
          </div>
          <div id='down-part'>
            <div id='stamp-container'>
              <img src={Mobbly} alt="" />
              <img src={Maxmi} alt="" />
              <img src={ClickBus} alt="" />
              <img src={Moto} alt="" />
              <img src={Levis} alt="" />
            </div>
            <div id='about-paymee'>
              <div className='description-about'>
                <h5>Porque a Paymee?</h5>
                <p>Faça parte da revolução dos pagamentos instantâneos.</p>
                <span>
                  Oferecemos soluções de pagamento instantâneas para você<br />
                  conseguir elevar seu negócio para outro patamar.
                </span>
              </div>
              <div className='info-relevant-blocks'>
                <div className="block simple">
                  <img src={Simple} alt="" />
                  <p><span> | </span> Simples</p>
                  <span>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor.

                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor 
                  </span>
                </div>
                <div className="block security">
                  <img src={Security} alt="" />
                  <p><span> | </span> Seguro</p>
                  <span>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor.

                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor 
                  </span>
                </div>
                <div className="block snapshot">
                  <img src={Coffee} alt="" />
                  <p><span> | </span>Instantâneo</p>
                  <span>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor.

                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor 
                  </span>
                </div>
                <div className="block security">
                  <img src={Security} alt="" />
                  <p><span> | </span> Seguro</p>
                  <span>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor.

                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor 
                  </span>
                </div>
              </div>


              
            </div>
          </div>


        </main>
      </div>
    </div>

  )
}