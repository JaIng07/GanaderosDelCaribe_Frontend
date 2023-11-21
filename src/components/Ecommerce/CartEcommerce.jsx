import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ItemCart from "./ItemCart";
import { sendOrderCart } from "../../helpers/cart";

function CartEcommerce({ cartProducts = [], setCartProducts }) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div className="ml-auto flex gap-1 md:mr-4">
        <Badge content={cartProducts.length}>
        <IconButton variant="outlined" color="white" onClick={openDrawer}>
          <ShoppingCartIcon className="h-4 w-4" />
        </IconButton>
        </Badge>
      </div>
      <Drawer open={open} onClose={closeDrawer} className="p-4" size={350} disableBodyScroll>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Carrito de Compras
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <ItemCart cartProducts={cartProducts} setCartProducts={setCartProducts}/>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined" onClick={closeDrawer}>
            Continuar Comprando
          </Button>
          <Button size="sm" onClick={()=>sendOrderCart(cartProducts)}>Pagar</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default CartEcommerce;
