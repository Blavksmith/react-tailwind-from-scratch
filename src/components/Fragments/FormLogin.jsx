import Buttonz from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";
import { useRef, useEffect } from "react";

const FormLogin = () => {
const handleLogin = (event) => {
  event.preventDefault();

  // Ini bukan praktek yg benar, hanya sekilas pengenalan aja. Karena seharusnya masuk ke DB
  localStorage.setItem("email", event.target.email.value);
  localStorage.setItem("password", event.target.password.value);
  // console.log(event.target.email.value);
  // console.log(event.target.password.value);
  window.location.href = "/product";
}
const emailRef = useRef(null);

useEffect(() => {
  emailRef.current.focus();
}, []);

return(
    <form onSubmit={handleLogin}>

    <InputForm type="email" ref={emailRef} placeholder="example@email.com" name="email">Email</InputForm>

    <InputForm type="password" placeholder="****" name="password">Password</InputForm>

    <Buttonz variant="font-bold bg-blue-600" onClick={handleLogin} type="submit">Submit</Buttonz>

  </form>
)
}

export default FormLogin;