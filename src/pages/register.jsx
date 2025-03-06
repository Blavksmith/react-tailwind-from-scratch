import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import FormRegister from "../components/Fragments/FormRegister.jsx";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register Page" type="register">
            <FormRegister></FormRegister>

            {/* <p className="text-sm mt-2 text-center">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p> */}
        </AuthLayout>
    )
}

export default RegisterPage;