import './styles.scss'
import LeftArrow from '../../assets/arrow-left-2.svg'
import ImageCell from '../../assets/image-smartphone.png'
import Add from '../../assets/add.svg'

import Map from '../../assets/map.svg'
import TruckTime from '../../assets/truck-time.svg'

export function Smartphone(){
  return(
    <div id='cell'>
      <div className='header-smartphone'>
        <img src={LeftArrow} alt="Flecha Esquerda" width="8px"/> 
        <span>Check Out</span>
      </div>
     <div className='menu-smartphone'> 
        <ul>
          <li>Produtos</li>
          <li>Carrinho</li>
        </ul>
     </div>
    <div className='main-content'>
      <img src={ImageCell} alt="Image Cell" />

      <div className='add-cart'>
        <img src={Add} alt="" />
        Adicionar no Carrinho
      </div>

      <div className='delivery-smartphone'>

        <div className='point-info'>
          <div className='block address'><img src={Map} alt="" /></div>
          <span>10506 - 4904 Deans Lane - Bedford Village	- New York - US</span>
        </div>
        
        <div className='point-info'>
          <div className='block date'><img src={TruckTime} alt="" /></div>
          <span>Quinta-feira - 13:00</span>
        </div>
        
      </div>
    </div>

    </div>
  )
}