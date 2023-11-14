import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Nombre", "Cedula", "Rol", "Contraseña", "acciones"];

// eslint-disable-next-line react/prop-types
const MembersTable = ({ arrUsers = [] }) => {

  if (arrUsers.length === 0)
    return (
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch">
        <p className="text-center text-black text-xl font-montserrat font-normal">
          No hay empleados registrados
        </p>
      </div>
    );

  return (
    <Card className="mt-4 h-full w-full border border-fondo -z-10">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-blue-gray-100 bg-fondo p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arrUsers.map(
            ({ id, username, email, rol, identificationCard }) => {
              const isLast = id === arrUsers.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-fondo";

              return (
                <tr key={id} className="even:bg-fondo">
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={"https://static.thenounproject.com/png/1743561-200.png"} alt={username} size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {username}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {identificationCard}
                      </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={rol}
                        color="green"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                     *********
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <EllipsisVerticalIcon className="h-6 w-6" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </Card>
  );
}

export default MembersTable;