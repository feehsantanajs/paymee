import RightArrow from '../../assets/right-icon.svg'
import './styles.scss'

interface ButtonCreateAccountProps{
  type:string;
}

export function ButtonCreateAccount({type}:ButtonCreateAccountProps){

  
  let color = type === "orange" ? "#FF481C" : "#1E1F35";
  
  return(
    <a href="/create" className='button-create-account' style={{background:color}}> <span>Criar Conta</span> <img src={RightArrow} alt="login" /></a>
  )
}