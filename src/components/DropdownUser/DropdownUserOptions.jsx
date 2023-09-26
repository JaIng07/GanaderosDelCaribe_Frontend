import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DropdownUserOptions = ({ userOptions = [] }) => {
  return (
    <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-4">
      {userOptions.map((opt, i) => (
        <li key={i}>
          <Link
            to={opt.path}
            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <opt.icon className="h-6 w-6" />
            <p className="font-montserrat font-normal">
            {opt.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownUserOptions;
