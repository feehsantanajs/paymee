import './styles.scss'
import { HeaderMenu } from "../../components/HeaderMenu";
import PaymeeLogo from '../../assets/logo/logo-paymee.svg'

export function Login(){
  return(
    <div id="container-login">
      <HeaderMenu />

      <div className="content-login">
        <div className="form-login-getin">
          
          <img src={PaymeeLogo} alt="" />
          <h1>Bem vindo de volta!</h1>
          <span>Faça seu login</span>

          <form action="" name="form-login">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='Coloque seu email' className='input-login'/>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" placeholder='Coloque sua senha' className='input-login'/>

            <div className='conection'>
              <input type="checkbox" id="chackbox-connect" name="mantain-connect" value="connect" />
              <label htmlFor="mantain-connect"> Manter conectado</label>

              <a href="#">Esqueceu a senha?</a>
            </div>

            <button className='logar'>Login ➜</button>
          </form>
          <p>Você ainda não tem conta? <a href="/create-account"> Criar Conta </a></p>
        </div>  
        <div className="about-login">
         
        </div>
      </div>
    </div>
    


  )
}