import EngeeImage from '../../assets/image-about-engee.png'
import './styles.scss'

export function News() {

  const result = () => {
   
  }
return (
  <div id="content-about-news">
    { 
      Array.from(Array(9), (e, i) => {
        return (
          <div className="news-block">
            <img src={EngeeImage} alt="Mulher Imagem" />

            <div className="subject">
              <span>Mais Recentes</span>
              <h1 className="title">Qual é o posicionamento do mercado em ecommerce</h1>

              <a href=""> Ver Matéria ➜</a>
            </div>
           
          </div>
        )
      })
    }
  </div>
)
}