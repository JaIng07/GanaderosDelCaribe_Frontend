import { useState, useEffect, useRef } from 'react';

function useDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useRef(null);
  const drawer = useRef(null);

  // Cierra la ventana cuando se da click en otro sitio
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!drawer.current) return;
      if (
        !drawerOpen ||
        drawer.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDrawerOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [drawerOpen]);

  // Cierra la ventana cuando se presiona la tecla esc
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!drawerOpen || keyCode !== 27) return;
      setDrawerOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [drawerOpen]);

  return { drawerOpen, setDrawerOpen, trigger, drawer };
}

export default useDrawer;
