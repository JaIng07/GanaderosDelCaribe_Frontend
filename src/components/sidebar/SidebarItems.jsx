import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SidebarItems = ({ items = [] }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <ul className="mb-6 flex flex-col gap-1.5 ">
      {items.map((item) => (
        <li key={item.title} className="pb-1">
          <NavLink
            to={item.path}
            className={`group relative flex items-center gap-2.5 pr-20 rounded-lg py-2 px-4 font-medium duration-300 ease-in-out  ${
              pathname.includes(item.active) && "bg-primary/30 text-white"
            }`}
          >
            <item.icon className="h-6 w-6" />
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarItems;
