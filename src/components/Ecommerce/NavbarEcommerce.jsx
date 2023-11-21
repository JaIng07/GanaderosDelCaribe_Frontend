import {
  Typography,
  Input,
} from "@material-tailwind/react";
import React, { useEffect } from "react";

const NavbarEcommerce = ({ filterByWord, children }) =>{

  const [word, setWord] = React.useState('')


  useEffect(() => {
    filterByWord(word);
    console.log("se ha llamado el filtro");
  }, [word]);

  return (
    <section
      className="mx-4 md:mx-auto content-center max-w-screen-lg px-4 py-3 bg-primary mt-10 font-montserrat rounded-lg"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          className="mr-4 ml-2 text-xl font-bold py-1.5"
        >
          Tienda Virtual
        </Typography>
        {children}
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            color="white"
            label="Buscar.."
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="pr-20"
          />

        </div>
      </div>
    </section>
  );
}

export default NavbarEcommerce;