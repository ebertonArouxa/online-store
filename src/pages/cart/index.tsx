import { useState } from "react"

const Cart = () => {
  const [cart, setCart] = useState([]);
  return (
      cart.length === 0 && (
        <h2 data-testid="shopping-cart-empty-message" >Seu carrinho está vazio</h2>
      )
  )
}

export default Cart