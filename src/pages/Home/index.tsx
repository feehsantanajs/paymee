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
import CodeImg from '../../assets/code.png'
import RightArrow from '../../assets/right-icon.svg'
import BoxIcon from '../../assets/icons/box-icon.svg'
import ChainIcon from '../../assets/icons/chain-icon.svg'
import PhoneIcon from '../../assets/icons/phone-icon.svg'
import SquadIcon from '../../assets/icons/squad-deshed-icon.svg'

import ApencartLogo from '../../assets/logo/apencart-logo.svg'
import BraspagLogo from '../../assets/logo/braspag-logo.svg'
import MagentoLogo from '../../assets/logo/magento-logo.svg'
import VtexLogo from '../../assets/logo/vtex-logo.svg'
import WooLogo from '../../assets/logo/woo-logo.svg'
import YepLogo from '../../assets/logo/yep-logo.svg'


import { HeaderMenu } from '../../components/HeaderMenu'
import { Smartphone } from '../../components/Smartphone'
import { ButtonCreateAccount } from '../../components/ButtonCreateAccount'
import { RecommendationBlock } from '../../components/RecommendationBlock'
import { PaymentBlock } from '../../components/PaymentBlock'


export function Home() {

  return (
    <div id='container'>

      <div id="background-top">
        <div className='content-top'>
          <HeaderMenu />
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
        </div>
      </div>
      <main>
        <div id='down-part'>
          <div className='stamp-container'>
            <div className='content-stamp-img'>
              <img src={Mobbly} alt="" />
              <img src={Maxmi} alt="" />
              <img src={ClickBus} alt="" />
              <img src={Moto} alt="" />
              <img src={Levis} alt="" />
            </div>

          </div>
          <div id='about-paymee'>
            <div className='content-about-paymee'>
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
          <div id="how-it-works">
            <div className='content'>
              <img src={CodeImg} alt="imagem do codigo" />
              <div className='description-how-it-works'>
                <h5>COMO FUNCIONA</h5>
                <h1>
                  API poderosa para você <br />
                  expandir e aprimorar <br />
                  seu negócio
                </h1>
                <p>
                  Oferecemos soluções de pagamento instantâneas para<br /> você conseguir elevar seu negócio para outro
                </p>
                <ButtonCreateAccount type='orange' />
                <span>Desenvolvedores ➜</span>
              </div>
            </div>
          </div>

          <div id="about-way-payment">
            <div className='content-way-payemnt'>
              <div className='solutions'>
                <h5>Soluções</h5>
                <h1>A maneira mais fácil de  <br />receber pagamentos online.</h1>
                <p>Oferecemos soluções de pagamento instantâneas para você conseguir elevar seu negócio para outro</p>
                <ButtonCreateAccount type='orange' />
              </div>
              <div className="options-way-payment">
                <div className="scrap">
                  <div className="block link">
                    <img src={ChainIcon} alt="Corrente Icone" />
                    <p> Link de pagamento</p>
                    <span>
                      Oferecemos soluções de pagamento instantâneas para você conseguir elevar seu negócio para outro
                    </span>
                  </div>
                  <div className="block app">
                    <img src={PhoneIcon} alt="Celular icone" />
                    <p> APP da PayMee</p>
                    <span>
                      Oferecemos soluções de pagamento instantâneas para você conseguir elevar seu negócio para outro
                    </span>
                  </div>
                </div>
                <div className="scrap">
                  <div className="block pix">
                    <img src={SquadIcon} alt="Quadrado Icone" />
                    <p> Simples</p>
                    <span>
                    Oferecemos soluções de pagamento instantâneas para você conseguir elevar seu negócio para outro
                    </span>
                  </div>
                  <div className="block eccomerce">
                    <img src={BoxIcon} alt="Caixa Icone" />
                    <p>Simples</p>
                    <span>
                    Oferecemos soluções de pagamento instantâneas para você conseguir elevar seu negócio para outro
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div id="integrations-apps">
            <div className="content-integrations-apps">
              <div className="brands">
                <img src={VtexLogo} alt="Logo Vtex" />
                <img src={WooLogo} alt="Logo woo" />
                <img src={MagentoLogo} alt="" />
                <img src={ApencartLogo} alt="" />
                <img src={YepLogo} alt="" />
                <img src={BraspagLogo} alt="" />
              </div>
              <div className="description about-integrations">
                <h1>Integrações com as principais plataformas</h1>
                <p>
                  Integre-se a diferentes plataformas de ecommerce
                  para aprimorar e melhorar seu negócio
                </p>
                <div className='interations'>
                  <ButtonCreateAccount type='orange' />
                  <span>Desenvolvedores ➜</span>
                </div>
                
                <span className='whatplus'>E muito mais</span>
              </div>
            </div>
            
          </div>

          <div id='cases-who-use-recommend'>

            <div className='content-cases-who-use-recommend'>
              <div className='container-recommendation'>
                <h5>CASES</h5>
                <h1>Quem usa <span>recomenda</span></h1>
                <div className='messages-blocks'>
                  <RecommendationBlock />
                  <RecommendationBlock />
                  <RecommendationBlock />
                </div>
              </div>
              <div className='polygon-blue-dark'>
                <div className='polygon-content'>
                  <div className='ep-pilote'>
                    <div className='polygon-ep'>
                   
                    </div>
                    
                    <div className='content-ep'>
                      <div className='ellipses'>
                        <img src={Ellipse1} alt="" />
                        <img src={Ellipse2} alt="" />
                      </div>
                      <h3>Episódio Piloto</h3>
                      <p>Preparando a próxima era da <br />economia da internet</p>
                      <button>Assistir ao vivo</button>
                    </div>
                  </div>
                  <div className='about-event'>
                    <h5>Evento virtual</h5>
                    <h1>Assista tudo sobre o futuro da economia da internet.</h1>
                    <p>
                      A Paymee Sessions, nossa conferência anual, já está disponível para você assistir online. 
                      Saiba mais sobre o futuro da economia da internet e conheça os novos produtos da Paymee.
                    </p>

                    <a href="#">Inscrever-se ➜</a>

                    <span>Mais Informações ➜</span>
                  </div>
                </div>
              </div>

              <div className='container-type-payment'>
                <div className='content-type-payment'>
                  <PaymentBlock />
                  <PaymentBlock />
                  <PaymentBlock />
                </div>
              </div>
              <div className='info-plus'>
                teste
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  )
}