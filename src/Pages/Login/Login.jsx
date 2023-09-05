import imgLogo from "../../assets/logoStartSIG.png";
import React from 'react'

const Login = () => {
  return (
    <div>
        <img src={imgLogo} alt="" />
        <input type="text" />
        <input type="text" />
        <button>Iniciar</button>

    </div>
  )
}

export default Login