import Buttonz from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

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

return(
    <form onSubmit={handleLogin}>

    <InputForm type="email" placeholder="example@email.com" name="email">Email</InputForm>

    <InputForm type="password" placeholder="****" name="password">Password</InputForm>

    <Buttonz variant="font-bold bg-blue-600" onClick={handleLogin} type="submit">Submit</Buttonz>

  </form>
)
}

export default FormLogin;