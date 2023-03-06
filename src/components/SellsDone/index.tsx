import './styles.scss'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export function SellsDone(){
  const percentage = 90;
  return(
    <div id="block-sells">
      <div className="circle-progressive" >
        <CircularProgressbar 
        value={percentage} 
        text={`${percentage}%`}
         
        strokeWidth={10}
        styles={ buildStyles({
          pathColor: 'var(--orange-500)',
          textColor: 'black',
          textSize: "2.3rem",
          trailColor: 'white',
          backgroundColor: 'var(--orange-500)'
        })}
        />
        
      </div>
      <p>Vendas efetuadas</p>
    </div>
  )
}