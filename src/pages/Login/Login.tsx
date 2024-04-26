import { useState } from "react";
import { Credentials } from "../../interfaces";
import "./Login.css";
import { CInput } from "../../common/CInput/CInput";

export const Login: React.FC = () => {
  const [credenciales, setCredenciales] = useState<Credentials>({
    email: "",
    password: "",
  });

  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-view-design">
      <pre>{JSON.stringify(credenciales, null, 2)}</pre>
      <CInput
        type="email"
        name="email"
        design={"input-design"}
        placeholder="email...."
        value={credenciales.email || ""}
        onChange={InputHandler}
      />
      <CInput
        type="password"
        name="password"
        design={"input-design"}
        placeholder="contraseña!"
        value={credenciales.password || ""}
        onChange={InputHandler}
      />
    </div>
  );
};
