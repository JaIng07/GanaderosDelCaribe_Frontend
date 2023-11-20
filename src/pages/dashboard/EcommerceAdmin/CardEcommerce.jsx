import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const CardEcommerce = ({
  productName,
  img,
  price,
  description,
  stock,
  unit,
  date,
  visitor = "client",
}) => {
  return (
    <Card className="w-[300px] font-montserrat">
      <CardHeader shadow={false} floated={false} className="h-32 w-50">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold">
            {productName}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $ {price} Cop
          </Typography>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <Typography variant="small" color="gray">
            Disponible: {stock} {unit}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="text-justify mt-2 mb-4"
        >
          {description}
        </Typography>
        <hr />
        <Typography variant="small" color="gray">
          {date}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {visitor === "admin" ? <FooterAdmin /> : <FooterClient />}
      </CardFooter>
    </Card>
  );
};

const FooterAdmin = () => {
  return (
    <div className="flex gap-2">
      <Button
        ripple={false}
        fullWidth={true}
        className="bg-secondary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
        Editar
      </Button>
      <Button
        ripple={false}
        fullWidth={true}
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
