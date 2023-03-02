import './styles.scss'
import LogoPaymee from '../../assets/logo/logo-paymee.svg'
import AirPlaneIcon from '../../assets/icons/airplane-input.svg'
import YouTubeNetwork from '../../assets/logo/youtube-network.svg'
import LinkedinNetwork from '../../assets/logo/linkedin-network.svg'
import InstaNetwork from '../../assets/logo/insta-network.svg'

import BG from '../../assets/BG.svg'
export function FooterContainer() {
  return (
    <footer>
      <div className='contaner-footer'>
        <div className='top'>
          <div className='menu-block'>
            <img src={LogoPaymee} alt="Logo Paymee" />
            <ul>
              <li>Menu Principal</li>
              <li>Sobre Nós</li>
              <li>Contato</li>
              <li>Sobre Nós</li>

            </ul>
            <ul>
              <li>Para Compradores</li>
              <li>Central de Ajuda</li>
              <li>Canais de atendimento</li>
              <li>Ouvidoria</li>

            </ul>
            <ul>
              <li>Para seu negócio</li>
              <li>Preços</li>
              <li>Termo de adesão</li>
            </ul>
            <div className='stay-in'>
              <h2>Fique sempre por dentro.</h2>
              <div className='input-email-stayin'>
                <input type='text' placeholder='Seu melhor email' />
                <img src={AirPlaneIcon} alt="Airplane Icon" />
              </div>
            </div>
          </div>
          <div className='social-network'>
            <div className='content-social-network'>
              <h2>Redes Socias</h2>
              <div className='links'>
                <img src={InstaNetwork} alt="Instagram" />
                <img src={YouTubeNetwork} alt="Youtube" />
                <img src={LinkedinNetwork} alt="Likedin" />
              </div>

            </div>

          </div>
        </div>
        <div className="bottom">
          <div className='politics'>
            <p>
              PayMee Brasil Instituição de Pagamento SA./ CNPJ 28.682.893/0001-91 / Alameda Rio Claro, 241 - 12º andar - Bela Vista - São Paulo/SP, 01332010 (“Addi”).
              A PayMee não é instituição financeira, nós atuamos como correspondente bancário na realização de operações de crédito nos termos da Resolução 3.954/11 do Banco Central do Brasil. Prestamos serviços de correspondente bancário para o BANCO XXX S.A., banco múltiplo, inscrito no CNPJ nº xxx, com sede na rua 18 de Novembro nº 273, conj. 801, bairro Navegantes, Porto Alegre/RS, CEP 90240-040, cuja Ouvidoria atende de segunda a sexta, das 9:00h às 12:00h e das 14:00h às 17:30h, pelos telefones 4002-4466, para Capitais e Regiões Metropolitanas e 0800.642.8282,
              para outras localidades ou ainda, através do e-mail ouvidoria@xxxxx.com.br
            </p>
            <ul>
              <li><a href='#'>Política de privacidade</a></li>
              <li><a href='#'>Estrutura de risco</a></li>
              <li><a href='#'>Termos de uso</a></li>
              <li><a href='#'>Canal de denúncia</a></li>
              <li><a href='#'>Código de ética</a></li>
              <li><a href='#'>Política de segurança cibernética</a></li>
            </ul>
          </div>
        </div>

      </div>


    </footer>
  )
}