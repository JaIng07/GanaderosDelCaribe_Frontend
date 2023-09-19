import FooterItemsLogos from "./FooterItemsLogos";
import { socialNetworksFooter } from "../../data/socialNetworksFooter";

function Footer() {
  return (
    <footer className="bg-primary rounded-lg shadow m-4 mt-20 text-white">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-smsm:text-center ">
          © {new Date().getFullYear()}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Ganaderos Del Caribe
          </a>
          . All Rights Reserved.
        </span>
        <FooterItemsLogos socialNetworks={socialNetworksFooter} />
      </div>
    </footer>
  );
}

export default Footer;
