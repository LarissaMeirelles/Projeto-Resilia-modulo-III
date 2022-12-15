import blogFetch from "./axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditarFilme.module.css"

const EditarFilme = () => {
  const navigate = useNavigate();

  const [imagem, setImagem] = useState();  
  const [nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [direcao, setDirecao] = useState();
  const [pais, setPais] = useState();
  const [distribuicao_producao, setDistribuicao] = useState();
  const [ano_de_lancamento, setLancamento] = useState();
  const [duracao_do_filme, setDuracao] = useState();
  const [sinopse, setSinopse] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/filmes/${id}`);

      const data = response.data;

      setImagem(data.imagem);
      setNome(data.nome);
      setGenero(data.genero);
      setDirecao(data.direcao);
      setPais(data.pais);
      setDirecao(data.distribuicao_producao);
      setLancamento(data.ano_de_lancamento);
      setDuracao(data.duracao_do_filme);
      setSinopse(data.sinopse);
    } catch (error) {
      console.log(error);
    }
  };

  const editarFilme = async (e) => {
    e.preventDefault();

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

    await blogFetch.put(`/filmes/${id}`, post);

    navigate("/");
  };

    
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className={styles.bloco}>
      
      <form onSubmit={(e) => editarFilme(e)}>
               <h1>editando: {nome}</h1>
               <div>
                 <label htmlFor="nome">Nome:</label>
                 <input 
                 type="text" 
                 name="nome" 
                 id="nome" 
                 onChange={(e) => setNome(e.target.value)}
                 value={nome || ""}
                 />
               
               </div>
       
               <div>
                 <label htmlFor="genero">Gênero:</label>
                 <input 
                 type="text" 
                 name="genero" 
                 id="genero" 
                 onChange={(e) => setGenero(e.target.value)}
                 value={genero || ""}
                 />
              
               </div>
       
               <div>
                 <label htmlFor="direcao">Direção:</label>
                 <input 
                 type="text" 
                 name="direcao" 
                 id="direcao" 
                 onChange={(e) => setDirecao(e.target.value)}
                 value={direcao || ""}
                 />
              
               </div>
              
               <div>
                 <label htmlFor="pais">País:</label>
                 <input 
                 type="text" 
                 name="pais" 
                 id="pais" 
                 onChange={(e) => setPais(e.target.value)}
                 value={pais || ""}
                 />
               
               </div>
       
               <div>
                 <label htmlFor="distribuicao">Distribuição:</label>
                 <input 
                 type="text" 
                 name="distribuicao" 
                 id="distribuicao" 
                 onChange={(e) => setDistribuicao(e.target.value)}
                 value={distribuicao_producao || ""}
                 />
               
               </div>
       
               <div>
                 <label htmlFor="lancamento">Ano de Lançamento:</label>
                 <input 
                 type="text" 
                 name="lancamento" 
                 id="lancamento" 
                 onChange={(e) => setLancamento(e.target.value)}
                 value={ano_de_lancamento || ""}
                 />
               
               </div>
       
               <div>
                 <label htmlFor="duracao">Duração:</label>
                 <input 
                 type="text" 
                 name="duracao" 
                 id="duracao" 
                 onChange={(e) => setDuracao(e.target.value)}
                 value={duracao_do_filme || ""}
                 />
               
               </div>
       
               <div>
                 <label htmlFor="sinopse">Sinopse:</label>
                 <input 
                 type="text" 
                 name="sinopse" 
                 id="sinopse" 
                 onChange={(e) => setSinopse(e.target.value)}
                 value={sinopse || ""}
                 />
               
               </div>
       
               <div>
                 <label htmlFor="imagem">URL Imagem:</label>
                 <input 
                 type="text" 
                 name="imagem" 
                 id="imagem" 
                 onChange={(e) => setImagem(e.target.value)}
                 value={imagem || ""}
                 />
               
               </div>
       
               <input type="submit" value="Submit" className={styles.botao}  />
        
             </form>
    </div>
  );
};

export default EditarFilme;