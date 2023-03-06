import './styles.scss'
import PixIcon from '../../assets/icons/pix-icon.svg';

export function PixBlock(){

  return(
    <div id="block-pix">
      <img src={PixIcon} alt="Pix" />
      <p>Pagar</p> 
    </div>
  )
}