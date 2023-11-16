import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { authenticate } from "../../services/auth.services";

function Login() {

  const navigate = useNavigate();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  })


  const handleSubmit = async(e) => {
    e.preventDefault();

    if(email === "" || password === "")return

    const res = await authenticate({email,password})
    if(res.ok){
      onResetForm()
      localStorage.setItem("ganadero-token",res.token)
      navigate("/dashboard/animal-registration")
    }
  };

  return (
    <AuthLayout title="Inicia sesión para acceder a tu cuenta">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600 ">
            Correo Electronico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
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
            value={password}
            onChange={onInputChange}
            placeholder="********"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-primary  focus:ring-primary  focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary/80 focus:outline-none">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
