import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImg from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        //fetch part
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    //calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    //handle quantity increase 
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);

        //update local storage withnew cart items
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);
            //update local storage withnew cart items
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    };

    //handle item remove
    const handleRemove = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

        //update new Cart
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    //order total 
    const orderTotal = (cartSubtotal);
    return (
        <div>

            <PageHeader title={"Shop Cart"} currPage={"Cart Page"} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}

                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                {/* table body */}
                                <tbody>
                                    {
                                        cartItems.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop">
                                                            <img src={item.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">
                                                            {item.name}
                                                        </Link>
                                                    </div>
                                                </td>

                                                <td className='cat-price'>
                                                    ${item.price}
                                                </td>

                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name="qtybutton" value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>
                                                    ${calculateTotalPrice(item)}
                                                </td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemove(item)}>
                                                        <img src={delImg} alt="" />
                                                    </a>
                                                </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* cart top ends here */}
                        {/* cart bottom */}
                        <div className="cart-bottom">
                            {/* checkout-box */}
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input type="text" className='cart-page-input-text' name="coupon" id="coupon" placeholder='Coupon code...' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/* checkout ends here */}

                            {/* shopping box */}
                            <div className="shiping-box">
                                <div className="row gap-1">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="in">India</option>
                                                    <option value="us">United States</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shiping-select">
                                                <select>
                                                    <option value="mb">Mumbai</option>
                                                    <option value="up">Uttar Pradesh</option>
                                                    <option value="de">Delhi</option>
                                                    <option value="mp">Madhya Pradesh</option>
                                                    <option value="uk">Uttrakhand</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' placeholder='Postcode/zip' id="postalCde" className='cart-page-input-text'  />
                                            <button type='submit'>Update Adress</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;