import blogFetch from "./axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NovoFilme.module.css";

function NovoFilme() {
  const navigate = useNavigate();
  
  //variáveis que tão recebendo o valor dos input e funções que tão fazzendo isso
  const [imagem, setImagem] = useState();  
  const [nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [direcao, setDirecao] = useState();
  const [pais, setPais] = useState();
  const [distribuicao_producao, setDistribuicao] = useState();
  const [ano_de_lancamento, setLancamento] = useState();
  const [duracao_do_filme, setDuracao] = useState();
  const [sinopse, setSinopse] = useState();

  const novoFilme = async (e) => {
    e.preventDefault();

    //coloca todos os dados numa variável só, transformando eles num objeto
    const post = { 
        imagem,
        nome, 
        genero, 
        direcao, 
        pais, 
        distribuicao_producao, 
        ano_de_lancamento, 
        duracao_do_filme, 
        sinopse
    };

    //envia dos dados pro servidor
    await blogFetch.post("/filmes", post);

    //manda de volta pra página inicial
    navigate("/");
  };

  return (
    <>
    <div className={styles.bloco}>
      
      <form   onSubmit={(e) => novoFilme(e)}>
        <h1>cadastrar novo filme</h1>
        <div>
          <label htmlFor="nome">Nome:</label><br/>
          <input 
          type="text" 
          name="nome" 
          id="nome" 
          onChange={(e) => setNome(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="genero">Gênero:</label><br/>
          <input 
          type="text" 
          name="genero" 
          id="genero" 
          onChange={(e) => setGenero(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="direcao">Direção:</label><br/>
          <input 
          type="text" 
          name="direcao" 
          id="direcao" 
          onChange={(e) => setDirecao(e.target.value)}/>
        </div>
       
        <div>
          <label htmlFor="pais">País:</label><br/>
          <input 
          type="text" 
          name="pais" 
          id="pais" 
          onChange={(e) => setPais(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="distribuicao">Distribuição:</label><br/>
          <input 
          type="text" 
          name="distribuicao" 
          id="distribuicao" 
          onChange={(e) => setDistribuicao(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="lancamento">Ano de Lançamento:</label><br/>
          <input 
          type="text" 
          name="lancamento" 
          id="lancamento" 
          onChange={(e) => setLancamento(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="duracao">Duração:</label><br/>
          <input 
          type="text" 
          name="duracao" 
          id="duracao" 
          onChange={(e) => setDuracao(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="sinopse">Sinopse:</label><br/>
          <input 
          type="text" 
          name="sinopse" 
          id="sinopse" 
          onChange={(e) => setSinopse(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="imagem">URL Imagem:</label><br/>
          <input 
          type="text" 
          name="imagem" 
          id="imagem" 
          onChange={(e) => setImagem(e.target.value)}/>
        </div>

        <input type="submit" className={styles.botao} value="Submit"  />
 
      </form>
    </div>
    </>
  );
};

export default NovoFilme;