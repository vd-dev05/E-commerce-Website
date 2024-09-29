// hooks/useAuthRedirect.js
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage'; 
import HomePage from '@/c';
// Đảm bảo đường dẫn đúng
import { useAppContext } from ''; // Đảm bảo đường dẫn đúng

const useAuthRedirect = () => {
    const nav = useNavigate();
    const { setActiveKey, setContent } = useAppContext();

    useEffect(() => {
        const auth = localStorage.getItem("auth");

        if (auth === "true") {
            toast.warning("Bạn đã đăng nhập");

            // Đặt timer để chuyển hướng sau 2 giây
            const timer = setTimeout(() => {
                setActiveKey("1");
                setContent(<HomePage />);
                nav('/');
            }, 2000);

            // Dọn dẹp timer khi component unmount
            return () => clearTimeout(timer); 
        }
    }, [nav, setActiveKey, setContent]);
};

export default useAuthRedirect;
