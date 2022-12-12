import React from "react";
import "./views"
import './Slide.css'

function Slide(){
    return(

 <section className="containerproje">
      <div className="slide-container active">
          <div className="slide">
           <div className="contentproje">
             <h3>Panoramic Pet Cineworld</h3>
             <p>Panoramic Pet Cineworld, ou PPC, é um projeto inspirador que visa ajudar ONGs que resgatam e cuidam de animais de rua. Um jeito divertido e fácil de ajudar os animais!</p>
             <a href="" className="bntproj">Mais informações</a>
           </div>
          </div>
      </div>

      <div className="slide-container">
          <div className="slide">
           <div className="contentproje">
             <h3>Redes Sociais</h3>
             <p>Faça parte de nossas redes sociais, curta, dê a sua opinião e nos ajude compartilhando com os amigos!</p>
             <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="bntproj">Saiba mais</a>
           </div>
          </div>
      </div>
      
      <div className="slide-container">
          <div className="slide">
           <div className="contentproje">
             <h3>Conheça nossos produtos</h3>
             <p>Clique no botão abaixo para conferir os nossos produtos, todo o dinheiro arrecadado vai para as ONGs!</p>
             <a href="" className="bntproj">Eu quero ajudar!</a>
           </div>
          </div>
      </div>

      
      <div id="prev" onClick="prev()">   </div>
      <div id="next" onClick="next()">   </div>
</section>

    )
}

export default Slide