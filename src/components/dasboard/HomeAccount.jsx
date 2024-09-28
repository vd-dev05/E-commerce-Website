import { useLocation, Link } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Header from '../Header';

const HomeAccount = () => {
    const location = useLocation();
    const isSignup = location.pathname === '/account/signup';
    const isSignin = location.pathname === '/account/signin';
    const isHome = location.pathname === '/account';

    return (
        <div>
            <div className="flex">
                <div>
                    <img src="/src/assets/images/SignUpbaner.png" alt="Signup Banner" />
                </div>
                <div>
                    {isSignin && <Signin />}
                    {isSignup && <Signup />}
                    {!isSignin && !isSignup && (
                        <div>
                            <Link to="/account/signup" className="text-inherit">Sign Up</Link>
                            <Link to="/account/signin" className="text-inherit">Sign In</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeAccount;
