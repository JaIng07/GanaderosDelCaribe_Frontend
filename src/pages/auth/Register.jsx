import FooterAuth from "../../components/footerAuth/FooterAuth";
import AuthLayout from "../../layout/AuthLayout";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <AuthLayout title="¡Forma parte de nuestra familia!">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">
            Correo Electronico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="usuario@correo.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-primary  focus:ring-primary  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="pt-5">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-primary  focus:ring-primary  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="pt-5">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">
            Repite la Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-primary  focus:ring-primary  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary/80 focus:outline-none">
            Crear Cuenta
          </button>
        </div>
      </form>

      <FooterAuth
        text="Ya tienes cuenta?"
        wordlink="Inicia Sesión"
        path="/auth/login"
      />
    </AuthLayout>
  );
}

export default Register;
