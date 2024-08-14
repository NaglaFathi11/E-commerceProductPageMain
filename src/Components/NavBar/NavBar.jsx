import "./NavBar.css";
import CartIcon from "../../../public/images/icon-cart.svg";
import userImage from "../../../public/images/image-avatar.png";
import xClose from "../../../public/images/icon-close.svg";
import MenueIcon from "../../../public/images/icon-menu.svg";
import DeleteIcon from "../../../public/images/icon-delete.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/image-product-1-thumbnail.jpg";

export default function NavBar(props) {
  // console.log(props)

  const [isNavVisible, setIsNavVisible] = useState(false);

  function toggleNav() {
    setIsNavVisible(!isNavVisible);
  }

  function hideToggleNav() {
    setIsNavVisible(false);
  }

  const [isCartVisible, setIsCartVisible] = useState(false);

  function handleVisibleCart() {
    setIsCartVisible(!isCartVisible);
  }

  // Delete product
  function handleDeleteProducts() {
    props.setAnotherCount(props.anotherCount - 1);
  }

  return (
    <header>
      <nav>
        <div id="logo-navItems">
          {/* Toggle Button ا*/}
          <button className="nav-toggle" onClick={toggleNav}>
            <img src={MenueIcon} alt="" />
          </button>

          {/* logo */}
          <Link to="/" id="logo-name">
            sneakers
          </Link>
          {/* logo */}

          {/* navItems */}
          <div className={isNavVisible ? "ul-wrapper" : null}>
            <ul className={isNavVisible ? "nav-items active" : "nav-items"}>
              <img
                src={xClose}
                alt="no-found"
                id="close"
                onClick={hideToggleNav}
              />
              <li>
                <Link to="/collections" className="link">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/men" className="link">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="link">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* navItems */}
        </div>

        {/* cart & userProfile */}
        <div id="userProfile">
          {props.anotherCount != 0 ? (
            <span id="popupCount">{props.anotherCount}</span>
          ) : null}

          <img
            src={CartIcon}
            alt="not-found"
            id="cart"
            onClick={handleVisibleCart}
          />
          {isCartVisible ? (
            <div id="cartBox">
              {/* Box 1 */}
              {props.anotherCount == 0 ? (
                <div>
                  <h4>Cart</h4> <hr></hr>
                  <label>Your cart is empty.</label>
                </div>
              ) : (
                <div id="cartBoxDetails">
                  {/* Box 2 */}
                  <h4>Cart</h4> <hr></hr>
                  <div id="cartContent">
                    <img src={img} alt="" id="cartBoxImage" />
                    <div id="totalPrice">
                      <p>Fall Limited Edition Sneakers</p>
                      <div id="mergeDeleteIcon">
                        <div id="allPriceInfo">
                          <span id="calcPrice">{`$125 x ${props.anotherCount}`}</span>
                          <span id="totalPrice">{`$${
                            125 * props.anotherCount
                          }`}</span>
                        </div>
                        <button id="deleteIcon" onClick={handleDeleteProducts}>
                          <img src={DeleteIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button id="checkOutBTn">Checkout</button>
                </div>
              )}
            </div>
          ) : null}

          <img src={userImage} alt="not-found" id="userImage" />
        </div>
        {/* cart & userProfile */}
      </nav>
      <span id="line-under-navBar"></span>
    </header>
  );
}
