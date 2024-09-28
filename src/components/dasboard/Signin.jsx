import { Link } from "react-router-dom";

const Signin = () => {
    return ( 
        <div>
            <Link
                to="/account/signin"
                className="text-inherit"
            >
            Signin
            </Link>

        </div>
     );
}
 
export default Signin;