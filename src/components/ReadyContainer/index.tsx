import { ButtonCreateAccount } from '../ButtonCreateAccount';
import './styles.scss';
export function ReadyContainer(){
  return(
    <div className='container-ready'>
      <h1>
        Pronto para encarar essa <span>nova<br /> jornada de crescimento?</span>
      </h1>
      <ButtonCreateAccount type='blue'/>
    </div>
  )
}