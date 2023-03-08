import { FooterContainer } from "../../components/FooterContainer";
import { HeaderMenu } from "../../components/HeaderMenu";
import { News } from "../../components/News";
import { ReadyContainer } from "../../components/ReadyContainer";
import './styles.scss'
export function MediaPaymee(){
  return(
    <div id="container-media">
      <HeaderMenu />

      <div className="container-sup">
        <div className="content-base">
          <div className="about-media">
            <h3 className="title-page">Imprensa</h3>
            <h1>Confira a PayMee <br />na mídia</h1>
            <p className="text-page">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.
              Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of<br /> type and scrambled it to make a type 
            </p>
          </div>
        </div>
      </div>

      <div className="container-sup">
        <div className="content-base">
          <div className="menu-media">
            <ul>
              <li><a href="" className="active">Mais Recentes</a> </li>
              <li><a href="">Mais lidos</a></li>
              <li><a href="">Todos</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>

         
        </div>
      </div>
      <div className="container-sup">
        <div className="content-base">
         
          <News />
        </div>
      </div>

     
      <ReadyContainer />
      <FooterContainer />
        
    </div>
  )
}