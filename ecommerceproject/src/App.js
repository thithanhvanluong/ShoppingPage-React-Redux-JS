import React, { useState } from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import {
  BrowserRouter as Router, Link, Switch, Route
} from 'react-router-dom';
import Routes from './components/front/Routes/Routes';

const App = () => {
  //https://stackoverflow.com/questions/51012674/reactjs-why-use-const-this-props-and-why-put-it-inside-the-render-function
  //get the value of props productItems
  const { productItems } = data;

  //https://techmaster.vn/posts/36322/su-dung-usestate-hook-trong-react-nhu-nao-cho-dung
  const [cartItems, setCartItems] = useState([]);

  ////Khởi tạo state có kiểu dữ liệu là string
  //FOX EX: const [website, setWebsite] = React.useState('freetuts.net');

  ////Kiểu dữ liệu là boolean
  //const [isLoading, setLoading] = React.useState(false);


  //add Product
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        //add one more item already in the cart >< display new item in the cart
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])


    }
  }

  //remove Product
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    //these items are already in the cart--> no need if (ProductExist) 
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));

    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity - 1 } : item));

    }

  }

  //clear Cart
  const handleCartClearance = () => {
    setCartItems([]);
  }



  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />
      </Router>

    </div>
  )
}
export default App;