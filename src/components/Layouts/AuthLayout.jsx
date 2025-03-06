// import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayout = props => {
    const { children, title, type } = props

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs p-8 border rounded-xl ring-slate-800">
                <h1 className="text-blue-700 text-3xl font-bold text-left mb-2">{title}</h1>
                <p className="font-md text-slate-600 mb-2 text-left">Welcome, please enter your name!</p>

                {/* <FormLogin></FormLogin> */}
                {children}

                <Navigation type={type}></Navigation>

                {/* <p className="text-sm mt-2 text-center"> {type === "login" ? "Dont have any account? " : "Already have an account? "} */}


                    {/* Konsep && di react apabila {cond1 = true && maka ini akan di render} */}
                    {/* kalau mau pake konsep && boolean harus pakai if */}
                    {/* {type === "login" &&
                        <Link to="/register" className="text-blue-600 underline">Register</Link>
                    }

                    {type === "register" &&
                        <Link to="/login" className="text-blue-600 underline">Login</Link>
                    } */}

                {/* </p> */}
            </div>
        </div>
    )
}

// Bikin komponen pake if else
// dia harus menggunakan { } untuk props karena yg diambil adalah "type" saja dalam object props, jdi harus di destructuring  
const Navigation = ({type}) => { 
    if (type === 'login') {
        return (
            <p className="text-sm mt-2 text-center"> Dont have any account? {" "}
                <Link to="/register" className="text-blue-600 underline">Register</Link>
            </p>
        )
    }else{
        return (
            <p className="text-sm mt-2 text-center"> Already have an account? {" "}
            <Link to="/login" className="text-blue-600 underline">Login</Link>
        </p>
        )
    }
}

export default AuthLayout;