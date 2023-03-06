import './styles.scss'
import { HeaderMenu } from "../../components/HeaderMenu";
import PaymeeLogo from '../../assets/logo/logo-paymee.svg'

export function CreateAccount(){
  return(
    <div id="container-create-account">
      <HeaderMenu />

      <div className="content-create-account">
        <div className="form-create-account-getin">
          <h1>Que prazer te ter aqui :) </h1>

          <form action="" name="form-login">
          <label htmlFor="email">Nome completo</label>
            <input type="text" name="name" placeholder='Seu nome completo' className='input-login'/>
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" name="cnpj" placeholder='CNPJ' className='input-login'/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='Seu melhor email' className='input-login'/>
            <label htmlFor="cel">Celular</label>
            <input type="text" name="cel" placeholder='(43) 9 9997.8980' className='input-login'/>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='Coloque seu email' className='input-login'/>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" placeholder='Coloque sua senha' className='input-login'/>
            <label htmlFor="confirm-pass">Confirmar senha</label>
            <input type="password" name="confirm-pass" placeholder='Repita a senha criada' className='input-login'/>

            <button className='register'>Continuar cadastro ➜</button>
          </form>
          <p>Já tem uma conta? <a href="/login"> Acessar conta </a></p>
        </div>  
        <div className="about-create-account">
         
        </div>
      </div>
    </div>
    


  )
}