import { Layout } from "../../components/Layout/Layout";
import "./Login.css";

const Login = () => {
  return (
    <Layout>
      <h1>Login</h1>

      <form className="form-login">
        <label>Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo"
        />

        <label>Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </Layout>
  );
};

export { Login };
