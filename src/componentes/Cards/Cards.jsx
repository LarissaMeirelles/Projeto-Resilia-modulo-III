import React from "react";
import './Cards.css';

import Cinema1 from './cinema1_park_shopping.jpeg';
import Cinema2 from './cinema2_espaco_itau.jpg';
import Cinema3 from './cinema3_cine_marquise.jpg';
import Cinema4 from './cinema4_reserva_cultural.jpg';
import Cinema5 from './cinema5_leblon.jpeg';
import Cinema6 from './cinema6_botafogo_praia_shop.jpg';
import Cinema7 from './cinema7_kinoplex_west_shopping.jpg';
import Cinema8 from './cinema8_cinemark_cidade_jardim.jpg';



function Cards() {

  return (

    <div className="box">


      <div className="card card-cor">


        <div className="card-header">
          <img src={Cinema1} />
        </div>



        <div className="card-body">
          <h3 className="card-local">Rio de Janeiro</h3>
          <h2 className="card-titulo">Park Shopping Campo Grande</h2>
          <p className="card-texto">
            Localizado na zona Oeste da cidade do Rio de Janeiro, Park Shopping Campo Grande alcança milhares de pessoas da região e traz muita alegria com suas salas de cinema UCI.
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Park+Shopping+Campo+Grande/@-22.9280262,-43.5740948,15z/data=!4m5!3m4!1s0x0:0xbab42fc3859bfdbf!8m2!3d-22.9280262!4d-43.5740948" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>


      <div className="card card-cor">


        <div className="card-header">
          <img src={Cinema2} />
        </div>



        <div className="card-body">
          <h3 className="card-local">São Paulo</h3>
          <h2 className="card-titulo">Espaço Itaú de Cinema</h2>
          <p className="card-texto">
            O Espaço Itaú de Cinema conta com 10 salas tradicionais e uma exclusiva para IMAX, além de quiosques e um café.
            Localizado no Bourbon Shopping São Paulo.
          </p>
        </div>


        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Espa%C3%A7o+Ita%C3%BA+de+Cinema+-+Pompeia/@-23.5265591,-46.6803763,15z/data=!4m5!3m4!1s0x0:0xb4fa384f004d9940!8m2!3d-23.5265591!4d-46.6803763" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>



      <div className="card card-cor">


        <div className="card-header">
          <img src={Cinema3} />
        </div>



        <div className="card-body">
          <h3 className="card-local">São Paulo</h3>
          <h2 className="card-titulo">Cine Marquise</h2>
          <p className="card-texto">
            Um novo cinema equipado com o som de última geração DOLBY ATMOS, o Cine Marquise está localizado no coração da Av. Paulista!
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Cine+Marquise/@-23.5595426,-46.6601893,15z/data=!4m5!3m4!1s0x0:0xc2bd8424e3df701c!8m2!3d-23.5595426!4d-46.6601893" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>



      <div className="card card-cor">


        <div className="card-header">
        <img src={Cinema4} />
        </div>



        <div className="card-body">
          <h3 className="card-local">São Paulo</h3>
          <h2 className="card-titulo">Cinema Reserva Cultural</h2>
          <p className="card-texto">
            Espaço elegante e aconchegante que reúne quatro salas de cinema, bistrô com pratos rápidos e pequena livraria.
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Reserva+Cultural/@-23.5655068,-46.651246,15z/data=!4m5!3m4!1s0x0:0xd50eab4c6b2373a4!8m2!3d-23.5655119!4d-46.6512551" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>



      <div className="card card-cor">


        <div className="card-header">
        <img src={Cinema5} />
        </div>



        <div className="card-body">
          <h3 className="card-local">Rio de Janeiro</h3>
          <h2 className="card-titulo">Kinoplex Shopping Leblon</h2>
          <p className="card-texto">
            Localizado no shopping Leblon, no Rio de Janeiro, o espaço conta com sala stadium e VIP de poltronas reclináveis e numeradas.
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Kinoplex+Shopping+Leblon/@-22.9820906,-43.2172502,15z/data=!4m5!3m4!1s0x0:0x18015842d0e9619d!8m2!3d-22.9820906!4d-43.2172502" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>


      <div className="card card-cor">


        <div className="card-header">
        <img src={Cinema6} />
        </div>



        <div className="card-body">
          <h3 className="card-local">Rio de Janeiro</h3>
          <h2 className="card-titulo">Botafogo Praia Shopping</h2>
          <p className="card-texto">
            O cinema Botafogo Praia Shopping é da rede Cinemark, pioneira em inovação e que exibe seus filmes em salas tecnológicas e extremamente confortáveis!
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Cinema+Cinemark/@-22.9473825,-43.1834561,15z/data=!4m5!3m4!1s0x0:0x36f9a6009362b5d4!8m2!3d-22.9473825!4d-43.1834561" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>


      <div className="card card-cor">


        <div className="card-header">
        <img src={Cinema7} />
        </div>



        <div className="card-body">
          <h3 className="card-local">Rio de Janeiro</h3>
          <h2 className="card-titulo">Kinoplex West Shopping</h2>
          <p className="card-texto">
            O Kinoplex West Shopping, é uma ótima opção para quem mora nas redondezas,
            pois conta com com salas equipadas para proporcionar uma experiência encantadora!
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/West+Shopping/@-22.8844836,-43.5576059,15z/data=!4m5!3m4!1s0x0:0x37af24e9e756f5cf!8m2!3d-22.8844836!4d-43.5576059" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>


      <div className="card card-cor">


        <div className="card-header">
        <img src={Cinema8} />
        </div>



        <div className="card-body">
          <h3 className="card-local">São Paulo</h3>
          <h2 className="card-titulo">Shopping Cidade Jardim</h2>
          <p className="card-texto">
            Além de toda o conforto e tecnologia das salas Cinemark,
            o cinema do Shopping Cidade Jardim oferece canais de autoatendimento para facilitar ainda mais suas compras.
          </p>
        </div>



        <div className="card-rodape">
          <a href="https://www.google.com/maps/place/Cinema+Cinemark/@-23.5989908,-46.6976424,15z/data=!4m2!3m1!1s0x0:0x2c2896081f200352?sa=X&ved=2ahUKEwijpdDt2t77AhW8rpUCHV5ZB8gQ_BJ6BQiAARAI" target="_blank" rel="noopener noreferrer">Confira o endereço!</a>
        </div>

      </div>

    </div>

  )

}

export default Cards