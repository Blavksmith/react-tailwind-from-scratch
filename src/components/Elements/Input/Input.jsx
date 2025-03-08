import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {

    const {type, placeholder, name} = props;
    return(
        <input type={type} ref={ref} className='text-sm rounded border w-full py-2 px-3 text-slate-700 placeholder:opacity-60' placeholder={placeholder} name={name} id={name}/>
    );
})

export default Input;