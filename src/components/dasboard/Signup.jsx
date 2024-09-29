import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContent";
import HomePage from "../../pages/HomePage";
import { useFormik } from "formik";
import { userSchemaSignUpLogin } from "../../validations/validationSchema";
import { loginUser } from "../../hooks/userService";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const { activeKey, setActiveKey, setContent } = useAppContext();
    const nav = useNavigate()
    if (localStorage.getItem("auth",true) == true) {
        nav('/')
    }
    const formik = useFormik({
        initialValues: {
            password: '',
            contact: '',
        },
        onSubmit: async (values) => {
            // console.log(values);
            
            try {
                const success = await loginUser(values.contact, values.password);
                // console.log(success);
                
                if (success) {

                    setContent(<HomePage />);
                    setActiveKey("1");
                    localStorage.setItem('auth' , true)
                    nav('/');
                } else {
                    toast.error("Login failed. Please check your credentials.", {
                    });
                }
            } catch (error) {
                toast.error("An error occurred during login.");
                console.error("Login error: ", error);
            }
        },
        validationSchema: userSchemaSignUpLogin
    })
    // const handleLogin = () => {
    //     setTimeout(() => {
    //         setContent(<HomePage />)
    //         setActiveKey("1")
    //         nav('/', { state: "true" })
    //     }, 1200);
    // }
    return (
        <div>

            <div className="mb-[48px]">
                <h1 className="text-[36px] font-medium">Log in to Exclusive</h1>
                <p>Enter your details below</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="gap-[40px] flex flex-col">
                    <div className="flex flex-col">
                        <input
                            className="text-black w-full  outline-none  border-b-[1px] text-[16px] pb-2 border-divBtn "
                            placeholder="Email or Phone Number"
                            id="contact"
                            name="contact"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                        />
                           <div className="text-left  w-[350px] overflow-hidden text-xs">
                        {formik.errors.contact && (
                           <p className={`error-message ${formik.errors.contact ? 'show' : ''} text-red-600 whitespace-nowrap`}>
                            {formik.errors.contact}
                            </p>
                        )}
                    </div>
                    </div>
                 
                    <div className="flex flex-col mb-[40px]">
                        <input
                            className="text-black w-full  outline-none  border-b-[1px] pb-2 text-[16px]  border-divBtn"
                            placeholder="Password"
                            type="password"
                            id='password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <div className="text-left  w-[350px] overflow-hidden text-xs">
                            {formik.errors.password && (
                                <p className={`error-message ${formik.errors.password ? 'show' : ''} text-red-600 whitespace-nowrap`}>
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>
                    </div>

                </div>
                <div className="flex justify-between w-full gap-x-[50px]">
                    <button
                        type="submit"
                        className="bg-buttonSubmit text-white rounded-md h-[56px] text-[16px] font-medium w-full"
                    >Log In</button>
                    <button className="w-full text-nowrap">Forget Password?</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Signup;