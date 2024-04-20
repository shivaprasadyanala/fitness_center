import React, { createContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './Components/MyRoutes/MyRoutes';
const CartContext = createContext([])
function App() {
  const [cartItems, setCartItems] = useState(['letter', 'book'])

  return (

    <Router>

      <MyRoutes />

    </Router>
  );
}

export default App;
