import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function FooterItemsLogos({ socialNetworks = [] }) {
  return (
    <div className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
      {socialNetworks.map((socialNetwork) => (
        <Link
          to={socialNetwork.url}
          key={socialNetwork.id}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 p-2 hover:bg-white hover:rounded-md hover:text-primary"
        >
          <span className="sr-only">{socialNetwork.name}</span>
          {socialNetwork.icon}
        </Link>
      ))}
    </div>
  );
}

export default FooterItemsLogos;
