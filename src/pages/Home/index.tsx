import './styles.scss'

import Mobbly from '../../assets/mobbly.svg'
import Maxmi from '../../assets/maxmi.svg'
import ClickBus from '../../assets/clickbus.svg'
import Moto from '../../assets/motorola.svg'
import Levis from '../../assets/levis.svg'

import { HeaderMenu } from '../../components/HeaderMenu'
import { Smartphone } from '../../components/Smartphone'
import { ButtonCreateAccount } from '../../components/ButtonCreateAccount'


export function Home(){

  return(
    <div>
      <div id="background-top">
        <HeaderMenu />

        <main>
          <div className='base-title'>
            <div className='title-highlight'>
              <h5>VIVA O PAGAMENTO INSTANTÂNEO</h5>
              <h1>O melhor gateway de pagamentos <span>instantâneos</span> do Brasil</h1>
              <h5>Comece a vender na internet ou em seu ponto de venda com velocidade, segurança para você conseguir crescer seu negócio</h5>

            </div>

            <div className='about-acess'>
              <ButtonCreateAccount type="blue"/>
            </div>

            <div className='info-accept-qty'>
              Teste
            </div>
            
          </div>
          <div className="base-cell">
            <Smartphone />
          </div>
        </main>
        <div id='stamp-container'>
          <img src={Mobbly} alt="" />              
          <img src={Maxmi} alt="" />
          <img src={ClickBus} alt="" />
          <img src={Moto} alt="" />
          <img src={Levis} alt="" />
        </div>
        
      </div>
    </div>
    
  )
}