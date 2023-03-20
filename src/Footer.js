import chef from "./images/chef.jpg"

export default function Footer(){
    return(
        <footer className="footerNav">
            <div className="footerDiv">
            <img src={chef} alt="chef" className="footerImg"/>
            <ul>
                <p>Doormat Navigation</p>
             <li> <a href="#Home" onClick={"Home"}>HOME</a> </li>
              <li><a href="#About" onClick={"About"}>ABOUT</a> </li>
              <li><a href="#Menu" onClick={"Menu"}>MENU</a></li>
              <li><a href="#Reservations" onClick={"Reservations"}>RESERVATIONS</a></li>
              <li><a href="#Order-Online" onClick={"OrderOnline"}>ORDER ONLINE</a></li>
              <li><a href="#Login" onClick={"Login"}>LOGIN</a></li>
              </ul>
              <ul>
                <p>Contact</p>
             <li> <a href="#Adreess" onClick={"Adreess"}>Adreess</a> </li>
              <li><a href="#Phone-Number" onClick={"PhoneNumber"}>Phone Number</a> </li>
              <li><a href="#Email" onClick={"Email"}>Email</a></li>
              </ul>
              <ul>
              <p>Socail Media Links</p>
             <li> <a href="#Adreess" onClick={"Adreess"}>Adreess</a> </li>
              <li><a href="#Phone-Number" onClick={"PhoneNumber"}>Phone Number</a> </li>
              <li><a href="#Email" onClick={"Email"}>Email</a></li>
              </ul>
              </div>
        </footer>
    )};