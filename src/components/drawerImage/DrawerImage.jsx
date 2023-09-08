import RandomMessage from "./RandomMessage";

// eslint-disable-next-line react/prop-types
function DrawerImage({ imgRoute = 'https://images.pexels.com/photos/448749/pexels-photo-448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }) {

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
