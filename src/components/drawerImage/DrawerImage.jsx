import RandomMessage from "./RandomMessage";
import cowLogin from '../../assets/cowLogin.jpeg'

// eslint-disable-next-line react/prop-types
function DrawerImage({ imgRoute = cowLogin }) {

  return (
    <div
      className="hidden bg-cover md:block lg:w-2/3"
      style={{
        backgroundImage:
          `url(${imgRoute})`,
      }}
    >
     <RandomMessage />
    </div>
  );
}

export default DrawerImage;
