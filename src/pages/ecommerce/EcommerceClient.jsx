import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import EcommerceGrid from '../../components/Ecommerce/EcommerceGrid'
import { getProducts } from '../../services/ecommerce.services'
import NavbarEcommerce from '../../components/Ecommerce/NavbarEcommerce'
import CartEcommerce from '../../components/Ecommerce/CartEcommerce'
import { addCartProducts } from '../../helpers/cart'

const EcommerceClient = () => {

  const [products, setProducts] = React.useState([]);
  const [prevProducts, setPrevProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      const { products } = await getProducts();
      setProducts(products);
      setPrevProducts(products);
    };
    loadData();
  }, []);

  console.log(cartProducts)


  const filterByWord = (word = '') => {
    if(word === '') { setProducts(prevProducts)}
    if(word !== '') {
      let filtered = prevProducts.filter((product) => product.productName.toLowerCase().includes(word.toLowerCase()))
      setProducts(filtered)
    }
  }

  const addCart = (product) => addCartProducts(product, cartProducts, setCartProducts)

  return (
    <>
    <Navbar/>

    <NavbarEcommerce filterByWord={filterByWord}>
      <CartEcommerce cartProducts={cartProducts} setCartProducts={setCartProducts}/>
    </NavbarEcommerce>

    <EcommerceGrid arrProducts={products} visitor="client" addCartProducts={addCart}/>


    <Footer/>
    </>
  )
}

export default EcommerceClient