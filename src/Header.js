import Logo from "./images/Logo.png";

export default function Header(){
    return (
<header className="header">
<div className="headerNav">
    <a href="#Logo" className="logo">
<img src={Logo} alt="Logo"  height={60} />
</a>
<nav className="nav">
<i class="fas fa-bars toggle-menu" className="toggle-menu"></i>
            <ul  className="mainNav">
             <li> <a href="#Home" onClick={"Home"}>HOME</a> </li>
              <li><a href="#About" onClick={"About"}>ABOUT</a> </li>
              <li><a href="#Menu" onClick={"Menu"}>MENU</a></li>
              <li><a href="#Reservations" onClick={"Reservations"}>RESERVATIONS</a></li>
              <li><a href="#Order-Online" onClick={"OrderOnline"}>ORDER ONLINE</a></li>
              <li><a href="#Login" onClick={"Login"}>LOGIN</a></li>
              </ul>
              <div class="search">
                    <i class="fas fa-search"></i>
                </div>
          </nav>
          </div>
</header>
)}

