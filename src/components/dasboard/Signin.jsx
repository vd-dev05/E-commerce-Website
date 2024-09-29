import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/icons/google";
import { useFormik } from "formik";
import { addUser } from "../../hooks/userService";
import { database } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from "../../context/AppContent";
import { userSchemaSignUp } from "../../validations/validationSchema";
import { useEffect } from "react";
import HomePage from "../../pages/HomePage";
const Signin = () => {
    const nav = useNavigate()
    const {setActiveKey,setContent } = useAppContext();
    useEffect(() => {
        const auth = localStorage.getItem("auth");

        if (auth === "true") {
            toast.warning("Bạn đã đăng nhập");

            // Đặt timer để chuyển hướng sau 3 giây
            const timer = setTimeout(() => {
                setActiveKey("1");
                setContent(<HomePage />);
                nav('/');
            }, 2000);

            // Dọn dẹp timer khi component unmount
            return () => clearTimeout(timer); 
        
        }
    }, [nav, setActiveKey, setContent]); 
  
    const formik = useFormik({
        initialValues: {
            name: '',
            password :'',
            contact: '',
        },
        onSubmit: async (value)  => {
          try {
            addUser(value)
            formik.resetForm()  
            nav('/account/signup')
            setActiveKey("4")
          

          } catch (error) {
            console.log(error);
            
          }
        },
        validationSchema:  userSchemaSignUp
    })
    return (
        <div className="flex flex-col ">
            {/* <div onClick={() => toast.success("Tai khoan co tren he thong")}>Click</div> */}
            <div className="mb-[48px]">
                <h1 className="font-medium text-[36px]">Create an account</h1>
                <p className="text-[16px] ">Enter your details below</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-y-[20px]">
                    <div className="flex ">
                        <input 
                        className="text-black w-full  outline-none  border-b-[1px] text-[16px] pb-2 border-divBtn "
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        />
                        {/* <label htmlFor="name">Name</label> */}
                    </div>
                    <div>
                        <input 
                        className="text-black w-full  outline-none border-b-[1px] pb-2 text-[16px] border-divBtn "
                        placeholder="Email or Phone Number"
                        id="contact"
                        name="contact"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        />
                        {/* <label htmlFor="contact">Email or Phone Number</label> */}
                    </div>
                    <div>
                        <input 
                        className="text-black w-full  outline-none  border-b-[1px] pb-2 text-[16px] mb-[40px]  border-divBtn"
                        placeholder="Password"
                        type="password"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        />
                        {/* <label htmlFor="password">Password</label> */}
                    </div>
                </div>
                <div className="flex flex-col w-full gap-y-[16px]">
                    <button
                    className="bg-buttonSubmit text-white rounded-md h-[56px]"
                    type="submit">Create Account</button>
                    <button
                    className="flex items-center gap-x-2 justify-center border-[1px] border-divBtn text-black  rounded-md h-[56px] mb-[32px]"
                    >
                        <span><Google /></span>
                        <span>Sign up with Google</span>
                    </button>
                </div>
                <div className=" flex justify-center gap-2">
                <p>Already have account?</p>
                <Link
                    to={'/account/signup'}
                >Log in</Link>
            </div>
            </form>

          
        <ToastContainer></ToastContainer>
        </div>
    );
}

export default Signin;