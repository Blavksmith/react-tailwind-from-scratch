import Label from "./Label.jsx"
import Input from "./Input.jsx";

const InputForm = (props) => {
    const {children, name, type, placeholder} = props
    
    return(
        <div className="mb-6">
            <Label htmlFor={name}>{children}</Label>
            <Input type={type} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm;