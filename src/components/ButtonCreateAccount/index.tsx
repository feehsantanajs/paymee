
import './styles.scss'

interface ButtonCreateAccountProps{
  type:string;
}

export function ButtonCreateAccount({type}:ButtonCreateAccountProps){

  
  let color = type === "orange" ? "#FF481C" : "#1E1F35";
  
  return(
    <a href="/create-account" className='button-create-account' style={{background:color}}> <span>Criar Conta</span> ➜</a>
  )
}