import blogFetch from "./axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function App() {
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/filmes");

      const data = response.data;

      setPosts(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="tudo">
      
      {posts.length === 0 ? (
        <p>Carregando...</p>
        ) : (
        posts.map((post) => (

        <div key={post.id}>
          <img src={post.imagem}/>
          <div className="info">
          <Link to={`/editar/${post.id}`}>
          <p>{post.nome}</p>
          </Link>
          <p>{post.genero}</p>
          <p>{post.direcao}</p>
          <p>{post.pais}</p>
          <p>{post.distribuicao_producao}</p>
          <p>{post.ano_de_lancamento}</p>
          <p>{post.duracao_do_filme}</p>
          <p>{post.sinopse}</p>
          
        </div>
        </div>
      ))
    )}
  </div>
   
  )
}

export default App