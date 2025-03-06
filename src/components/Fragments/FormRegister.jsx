import Buttonz from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";

const FormRegister = () => {
return(
    <form action="">

    <InputForm type="text" placeholder="Insert Your Name" name="fullname">Full Name</InputForm>
    <InputForm type="email" placeholder="example@email.com" name="Email">Email</InputForm>
    <InputForm type="password" placeholder="****" name="password">Password</InputForm>
    <InputForm type="password" placeholder="****" name="confirmPassword">Confirm Password</InputForm>

    <Buttonz variant="font-bold bg-blue-600 w-full">Register</Buttonz>

  </form>
)
}

export default FormRegister;