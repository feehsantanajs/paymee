import './styles.scss'
import { HeaderMenu } from "../../components/HeaderMenu";
import { ReadyContainer } from '../../components/ReadyContainer';
import { FooterContainer } from '../../components/FooterContainer';
import { FormContact } from '../../components/FormContact';
import { useContext } from 'react';
import { AuthContext } from '../../module/hook';
import { BurgerMenu } from '../../components/BurgerMenu';

export function Ombudsman() {
  const {isMobile} =  useContext(AuthContext);
  return (
    <div id="container-ombusman">
      
      {isMobile ? <BurgerMenu /> :  <HeaderMenu />}

      <div className="container-sup">
        <div className="content-ombusman">
          <div className="about-ombusman">

            <h3 className="title-page">Ouvidoria</h3>
            <h1>Entre em contato conosco com nossa Ouvidoria</h1>

            <p className='text-page'>Se a sua reclamação foi tratada em nossos canais de atendimento, mas a resposta não atendeu sua expectativa, a Ouvidoria
              Paymee pode reavaliar seu pedido. Se preferir ligue para 0800 5700011, de segunda a sexta (dias úteis) das 9h às 18h.
            </p>
          </div>
        </div>
      </div>

      <div className='container-sup'>
        <div className='form-to-getin-contact'>
          <h3>Entre em contato conosco</h3>
          <FormContact />
        </div>
      </div>
      <FooterContainer />
    </div>

  )
}