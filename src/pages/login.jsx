import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";

const LoginPage = () => {
    return (
        <AuthLayout title="Login Page" type="login">
            <FormLogin></FormLogin>
            {/* <p className="text-sm mt-2 text-center">Dont have any account? <Link to="/register" className="text-blue-600 underline">Register</Link></p> */}
        </AuthLayout>
    )
}

export default LoginPage