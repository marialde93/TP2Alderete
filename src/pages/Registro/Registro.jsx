import { Layout } from "../../components/Layout/Layout";
import "./Registro.css";
const Registro = () => {
  return (
    <Layout>
      <h1>Registrate</h1>
      <form className="form-registro">
        <label>Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa tu nombre"
        />

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

        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirma tu contraseña"
        />

        <button type="submit">Registrarse</button>
      </form>
    </Layout>
  );
};

export { Registro };
