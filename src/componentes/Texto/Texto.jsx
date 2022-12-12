import React from "react";
import './Texto.css'

function Texto(){

    return(
                <div className="container-text">
                    <div className="text">
                        <h2>Olá,</h2>
                        <h1>Nós somos<span> Panoramic Pet Cineworld.</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisci elit,<br/>
                        sed eiusmod tempor incidunt ut labore et dolore magna aliqua. <br/>
                        Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis <br/>
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. <br/>
                        Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu <br/>
                        fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, <br/>
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                


                        <a href="sobremim.html"></a>
                        <button className="btn">Compre seu ingresso</button>
                    

                        <h1><span> Conheça os cinemas participantes!</span></h1>
                    </div>
                </div> 
        )
}

export default Texto