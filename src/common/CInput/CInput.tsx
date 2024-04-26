import { CustomInput } from "../../interfaces"
import "./CInput.css"
export const CInput: React.FC<CustomInput> = ({name, type, design, placeholder, value, onChange}) => {

    return (
        <input 
            className={design}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => onChange(e)}   
        />
    )
}