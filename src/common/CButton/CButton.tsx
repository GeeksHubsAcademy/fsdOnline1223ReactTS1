import "./CButton.css";
import { CustomButton } from "../../interfaces";

export const CButton: React.FC<CustomButton> = ({ title, design, onClick }) => {
  return (
    <div className={design} onClick={() => onClick()}>
      {title}
    </div>
  );
};
