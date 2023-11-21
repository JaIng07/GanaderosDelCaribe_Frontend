export function calculateCartTotal(cartProducts) {
  return cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
}


const isProductInCart = (productId, cartProducts) => {
  return cartProducts.some((product) => product.id === productId);
};

const updateCartItemQuantity = (cartProducts, productId, quantityChange) => {
  return cartProducts.map((product) =>
    product.id === productId ? { ...product, quantity: calculateNewQuantity(product.quantity, quantityChange, product.stock) } : product
  );
};

const addProductToCart = (cartProducts, product) => {
  return [...cartProducts, { ...product, quantity: 1 }];
};

export const addCartProducts = (product, cartProducts, setCartProducts) => {
  const isProductAlreadyInCart = isProductInCart(product.id, cartProducts);

  if (isProductAlreadyInCart) {
    const updatedCart = updateCartItemQuantity(cartProducts, product.id, 1);
    setCartProducts(updatedCart);
  } else {
    const newCart = addProductToCart(cartProducts, product);
    setCartProducts(newCart);
  }
};

const calculateNewQuantity = (currentQuantity, change, stock) => {
  const newQuantity = currentQuantity + change;
  return Math.max(0, Math.min(stock, newQuantity));
};

const updateProductById = (product, productId, change, stock) => {
  if (product.id === productId) {
    return { ...product, quantity: calculateNewQuantity(product.quantity, change, stock) };
  }
  return product;
};

export const handleProductQuantityChange = (setCartProducts, productId, stock, change) => {
  setCartProducts((prevCart) =>
    prevCart.map((product) => updateProductById(product, productId, change, stock))
  );
};


export const sendOrderCart = (cartProducts) => {
  const phoneNumber = '+573228199152';
  const message = generateOrderMessage(cartProducts);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
};

export const generateOrderMessage = (cartProducts) => {
  const orderMessage = cartProducts.reduce((acc, product) => {
    const productInfo = `*${product.productName}*\nCantidad: ${product.quantity}\nPrecio unitario: $${product.price}\nSubtotal: $${product.price * product.quantity}\n\n`;
    return acc + productInfo;
  }, '¡Hola! Quiero realizar un pedido:\n\n');

  const total = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);

  const orderSummary = `*Total del pedido: $${total}*`;

  return orderMessage + orderSummary;
};