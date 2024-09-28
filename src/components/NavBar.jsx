import React, { useState } from 'react';
import HomePage from '../pages/HomePage';
// import { useAppContext } from './AppContext';
import Contact from'./blog/Contact'
import About from './blog/About';
import HomeAccount from './dasboard/HomeAccount';
import { useAppContext } from '../context/AppContent';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { setContent,activeKey,setActiveKey } = useAppContext();
   
    const items = [
        {
          key: '1',
          label: 'Home',
          children: <HomePage/>,
          path:"/"
        },
        {
          key: '2',
          label: 'Contact',
          children: <Contact/>,
          path:'/contact'
        },
        {
          key: '3',
          label: 'About',
          children: <About/>,
          path:"/about"
        },
        {
          key: '4',
          label: 'Sign up',
          children: <HomeAccount/>,
           path:"/account"
        },
      ];
    return (
        <div>
           <div className="flex gap-[48px]">
                {items.map(item => (
                    <div
                        
                        key={item.key}
                        className={`cursor-pointer ${activeKey === item.key ? 'border-b-[2px] border-gray-500' : 'hover:text-Neutral-300'}`}
                        onClick={() => {
                          setContent(item.children)
                          setActiveKey(item.key);
                        }}
                    >
                       <Link
                       to={item.path}
                       className='text-inherit'
                       >
                       {item.label}
                       </Link> 
                    </div>
                ))}
            </div>
            {/* <div className="tab-content">
                {items.find(item => item.key === activeKey)?.children}
            </div> */}
         
        </div>
      );
}
 
export default NavBar;