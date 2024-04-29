import { useState } from "react";
import { CInput } from "../../common/CInput/CInput";
import { CButton } from "../../common/CButton/CButton";
import { logMeIn } from "../../services/apiCalls";
import { Credentials, DataFetched } from "../../interfaces";
import "./Login.css";

export const Login: React.FC = () => {
  const [credenciales, setCredenciales] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [msgError, setMsgError] = useState<string>("");

  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const LogMe = async (): Promise<void> => {
    const fetched: DataFetched = await logMeIn(credenciales);
    if (!fetched.success) {
      setMsgError(fetched.message);
    } else {
      setMsgError("");
    }
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
      <CButton title={"Log me"} design={"button-design"} onClick={LogMe} />
      {msgError}
    </div>
  );
};
