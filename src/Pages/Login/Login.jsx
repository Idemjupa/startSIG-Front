import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logoStartSIG.png";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAutenticacion";
import { Autenticacion } from "../../Services/Login/Autenticacion";

const Login = () => {
  const { setAuth, isAuth } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "", image: "" });
  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setForm({ ...form, [name]: value });
  };

  const handLogin = async (e) => {
    e.preventDefault();
    const data = await Autenticacion({
      username: form.username,
      password: form.password,
    });
    setAuth(data);
    setForm({ username: "", password: "" });
    navigate("/swm-dashboard");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/swm-dashboard");
    }
  }, []);

  return (
    <section className="border rounded-xl max-w-sm	 max-h-none flex flex-col items-center mx-auto mt-20 py-9">
      <div className="bg-white ">
        <div>
          <Link to="/">
            <img src={imgLogo} alt="" width="300" />
          </Link>
        </div>
        <h2 className="mt-5">Acceder</h2>
        <div className="flex flex-col gap-5 mt-4">
          <input
            className="drop-shadow-md p-2 border"
            type="text"
            placeholder="Correo Electronico"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            className="drop-shadow-md p-2 border"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <span className="text-xs text-left mt-1">
            {/* ¿Ovidaste tu Contraseña? */}
          </span>
          <input
            type="submit"
            className="mt-2 bg-[#5e9efc] text-white w-none p-2 drop-shadow-md"
            onClick={handLogin}
            value="Iniciar"
          />
        </div>
        <h5 className="text-xs text-left mt-5">
          <Link to="/presupuesto"> Solicitar Software de mejora Continua</Link>
        </h5>
      </div>
    </section>
  );
};

export default Login;
