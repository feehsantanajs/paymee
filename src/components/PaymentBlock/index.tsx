import './styles.scss'

interface PaymentBlockProps{
  title:string;
  info_one:string;
  info_two:string;
  info_three:string;
  transfer_value:string;
}
export function PaymentBlock({title, info_one, info_two, info_three, transfer_value}:PaymentBlockProps){
  return (
    <div className='block-payment'>
      <h1>{title}</h1>
      <ul>
        <li>{info_one}</li>
        <li>{info_two}</li>
        <li>{info_three}</li>
      </ul>

      <div className='rest-block'>
        <span>{transfer_value}</span>

        <a href="#">Saber mais</a>
      </div>
    </div>
    
  )
}