// Función auxiliar para calcular el total del carrito

import { calculateCartTotal, handleProductQuantityChange } from "../../helpers/cart";

function ItemCart({ cartProducts, setCartProducts }) {
  return (
    <div className="text-black font-montserrat">
      {cartProducts.map((product) => (
        <div key={product.id} className="pb-5 flex items-center">
          <img src={product.img} alt={product.productName} className="mr-4 w-16 h-16" />
          <div>
            <h3 className="font-bold">{product.productName}</h3>
            <p>Precio: $ {product.price}</p>
            <p>
              Cantidad:
              <button className="px-2 py-1 mx-2 border" onClick={()=>handleProductQuantityChange(setCartProducts, product.id, product.stock, -1)}>
                -
              </button>
              {product.quantity}
              <button className="px-2 py-1 mx-2 border" onClick={()=>handleProductQuantityChange(setCartProducts, product.id,  product.stock,  1)}>
                +
              </button>
            </p>
            <p>Subtotal: $ {product.price * product.quantity}</p>
          </div>
          <hr />
        </div>
      ))}
      <h4 className="py-4">Total del Carrito: ${calculateCartTotal(cartProducts)}</h4>
    </div>
  );
}

export default ItemCart;