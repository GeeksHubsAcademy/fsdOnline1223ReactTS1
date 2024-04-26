import "./CButton.css";
import { CustomButton } from "../../interfaces";

//NO olvidemos que las funciones que reciben props tienen que setear éstas mismas, es decir,
//primero seteamos el componente funcional como que es de tipo React.FC y posteriormente las props como que forman parte de una interfaz
//global llamada CustomButton
export const CButton: React.FC<CustomButton> = ({ title, design, onClick }) => {
  return (
    <div className={design} onClick={() => onClick()}>
      {title}
    </div>
  );
};
