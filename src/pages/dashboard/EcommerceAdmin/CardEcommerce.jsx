import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const CardEcommerce = ({
  visitor = "client",
  setIdToDelete,
  setProductSelected,
  ...rest
}) => {
  return (
    <Card className="w-[300px] font-montserrat">
      <CardHeader shadow={false} floated={false} className="h-32 w-50">
        <img
          src={rest.img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold">
            {rest.productName}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $ {rest.price} Cop
          </Typography>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <Typography variant="small" color="gray">
            Disponible: {rest.stock} {rest.unit}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="text-justify mt-2 mb-4"
        >
          {rest.description}
        </Typography>
        <hr />
        <Typography variant="small" color="gray">
          {rest.date}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {visitor === "admin" ? (
          <FooterAdmin setIdToDelete={setIdToDelete} product={rest} setProductSelected={setProductSelected}/>
        ) : (
          <FooterClient/>
        )}
      </CardFooter>
    </Card>
  );
};

const FooterAdmin = ({ setIdToDelete, setProductSelected,  product}) => {
  return (
    <div className="flex gap-2">
      <Button
        ripple={false}
        fullWidth={true}
        onClick={() => setProductSelected(product)}
        className="bg-secondary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
        Editar
      </Button>
      <Button
        ripple={false}
        fullWidth={true}
        onClick={() => setIdToDelete(product.id)}
        className="bg-red-500  text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
        Eliminar
      </Button>
    </div>
  );
};

const FooterClient = () => {
  return (
    <Button
      ripple={false}
      fullWidth={true}
      className="bg-primary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
    >
      Buy
    </Button>
  );
};

export default CardEcommerce;
