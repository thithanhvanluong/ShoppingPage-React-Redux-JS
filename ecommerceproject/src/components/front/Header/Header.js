import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";
import "./Header.css"
// ES6 arrow function, return 1 React element
const Header = ({ cartItems }) => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Shopee
                    </Link>
                </h1>

            </div>

            <div className="header-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="/comment">Customer Review</Link></li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i class="fa fa-cart-plus"></i>
                            <span className="cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>


        </header>




    )
}
export default Header;