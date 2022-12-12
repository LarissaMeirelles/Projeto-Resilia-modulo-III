import './Navbar.css';


function NavBar(){

    return(
        <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo"><img src="logo.png"/></label>
        <ul>
          <li><a class="active" href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Catálogo e Produtos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    )


}

export default NavBar