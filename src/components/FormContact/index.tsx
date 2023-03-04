import './styles.scss';

export function FormContact(){
  return(
   <form action="" className='form-contact'>
      
      <input type="text" placeholder="Seu Nome Completo"/>
      <input type="text" placeholder="Seu Melhor Email ;)"/>
      <input type="text" placeholder="Telefone"/>
      <textarea id="textarea-contact" placeholder="Mensagem"></textarea>
      <button>Enviar</button>
   </form>
  )
}