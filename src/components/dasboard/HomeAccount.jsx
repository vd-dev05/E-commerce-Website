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
            <div className='w-full'>
                <div className="flex items-center">
                    <div className='h-[781px]'>

                    <img 
                    className='-translate-x-[121px] '
                    src="/src/assets/images/SignUpbaner.png" alt="Signup Banner" />
                    </div>
                <div>
                    {/* {isSignin && <Signin />} */}
                    {isSignup && <Signup />}
                    {!isSignin && !isSignup && (
                        <div>
                            <Signin />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAccount;
