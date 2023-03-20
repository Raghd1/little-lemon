import greeksalad from "./images/greeksalad.jpg"
import lemondessert from "./images/lemondessert.jpg"
import restauranfood from "./images/restauranfood.jpg"
import bruchetta from "./images/bruchetta.jpg"
import salad from "./images/Salad.jpg"
import reviewer from "./images/reviewer.jpg"
import chefs from "./images/chefs.jpg"
export default function Main(){
return(
<main >
<div class="design">
        <div className="child">
            <img src={restauranfood} alt="food"className="image"/>
            <div className="text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="reserve">Reserve A Table</a>
            </div>
        </div>
    </div>
    <div className="specials">
            <div className="special-text">
            <h1>This Week Specials!</h1>
            </div>
        <div >
            <a href="#" className="onlineMenu">Online Menu</a>
            </div>
    </div>
    <div className="mainDivCont">
<div className="mainContent">
    <img src={greeksalad} alt="food" className="mainContentImg"/>
    <h2>Greek Salad</h2>
    <p className="price">$12.99</p>
    <p className="discription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
    <a href="#" className="order">Order a delivery</a>
</div>
<div className="mainContent">
    <img src={bruchetta} alt="food" className="mainContentImg"/>
    <h2>Bruchetta</h2>
    <p className="price">$12.99</p>
    <p className="discription">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Special kind of ours.</p>
    <a href="#" className="order">Order a delivery</a>
</div>
<div className="mainContent">
    <img src={lemondessert} alt="food" className="mainContentImg"/>
    <h2>Lemon Dessert</h2>
    <p className="price">$12.99</p>
    <p className="discription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
    <a href="#" className="order">Order a delivery</a>
</div>

<div className="mainContent">
    <img src={salad} alt="food" className="mainContentImg"/>
    <h2>Greek Salad</h2>
    <p className="price">$12.99</p>
    <p className="discription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
    <a href="#" className="order">Order a delivery</a>
</div>
</div>
<hr></hr>
<div className="testimonials">
<h2>Testimonials</h2>
    <div className="test-child">
        <div className="tests">
            <h3>Rating</h3>
            <img src={reviewer} alt="reviewer" className="reviewer"/>
            <h4>Name</h4>
            <p>Review Text</p>
        </div>
        <div className="tests">
            <h3>Rating</h3>
            <img src={reviewer} alt="reviewer" className="reviewer"/>
            <h4>Name</h4>
            <p>Review Text</p>
        </div>
        <div className="tests">
            <h3>Rating</h3>
            <img src={reviewer} alt="reviewer" className="reviewer"/>
            <h4>Name</h4>
            <p>Review Text</p>
        </div>
        <div className="tests">
            <h3>Rating</h3>
            <img src={reviewer} alt="reviewer" className="reviewer"/>
            <h4>Name</h4>
            <p>Review Text</p>
        </div>
    </div>
</div>
<hr></hr>
<div class="last-section">
        <div className="last-child">
            <img src={chefs} alt="food"className="last-image"/>
            <div className="last-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
        </div>
    </div>
    <hr></hr>
</main>
)};