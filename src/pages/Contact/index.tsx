import { FooterContainer } from '../../components/FooterContainer'
import { FormContact } from '../../components/FormContact'
import { HeaderMenu } from '../../components/HeaderMenu'
import { ReadyContainer } from '../../components/ReadyContainer'
import './styles.scss'

export function Contact() {
  return (
    <div id="container-contact">
      <HeaderMenu />

      <div className='container-sup'>
        <div className='content-contact'>
          <div className='description-about'>
            <h1>Entre em contato conosco</h1>
            <p>Nós sabemos que a PayMee é um sistema repleto de funcionalidades e que dúvidas podem surgir.
              Se o nosso FAQ não esclareceu suas dúvidas entre em contato conosco! </p>
          </div>
          <div className='form-to-getin-contact'>
            <h3>Entre em contato conosco</h3>
            <FormContact />
          </div>

        </div>

        
        <ReadyContainer />
        <FooterContainer />
      </div>

    </div>
  )
}