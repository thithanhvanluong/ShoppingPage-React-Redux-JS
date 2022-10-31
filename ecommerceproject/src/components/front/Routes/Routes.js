import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Comment from "../Comment/Comment"
import Cart from "../Cart/Cart";
const Routes = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {

    return (
        <div>
            <Switch>

                <Route path="/comment" exact >
                    <Comment />
                </Route>

                <Route path="/cart" exact >
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />
                </Route>
                <Route path="/">
                    <Products productItems={productItems} handleAddProduct={handleAddProduct} />
                </Route>

            </Switch>

        </div>
    )
}
export default Routes;