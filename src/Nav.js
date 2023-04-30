import React from "react";

export default function Nav() {
return(<nav>
    <ul>
     <li> <a href="#Home" onClick={"Home"}>HOME</a> </li>
      <li><a href="#About" onClick={"About"}>ABOUT</a> </li>
      <li><a href="#Menu" onClick={"Menu"}>MENU</a></li>
      <li><a href="#Reservations" onClick={"Reservations"}>RESERVATIONS</a></li>
      <li><a href="#Order-Online" onClick={"OrderOnline"}>ORDER ONLINE</a></li>
      <li><a href="#Login" onClick={"Login"}>LOGIN</a></li>
      </ul>
  </nav>)}