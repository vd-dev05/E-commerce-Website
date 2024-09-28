import React, { useState } from 'react';
import NavBar from './NavBar';
import TopHeader from './TopHeader';
import { Input } from "antd";
import Search from '../assets/icons/Search';
import Love from '../assets/icons/Love';
import BuyCart from '../assets/icons/BuyCart';
const Header = () => {
    const [item, setItem] = useState(0)
    return (
        <div >
            <TopHeader />
            <header className="px-[173px] py-10">
                <div className="flex items-center justify-between gap-20">
                    <div>
                        <h1 className='font-bold text-[24px] cursor-pointer'>Exclusive</h1>
                    </div>
                    <div className="text-nowrap">
                        <NavBar />
                    </div>
                    <div className=" flex gap-5 items-center ">
                        <div className='flex relative cursor-pointer'>

                            <input
                                className="w-[243px] outline-none bg-inputSearch text-Neutral-500 rounded text-xs py-[10px] pl-[20px] pr-[12px]"
                                placeholder="What are you looking for?"
                            />
                            <span className='absolute right-2 top-2'>  <Search></Search></span>

                        </div>
                        <div className='flex gap-[16px] items-center'>
                            <div className='relative flex cursor-pointer'>
                                <Love />
                                {item === 0 ? '' : (
                                    <sup
                                        className='bg-sub text-white flex w-[16px] h-[16px] justify-center items-center rounded-full absolute -top-1 -right-2'
                                        style={{ fontSize: `${Math.min(12, 20 / (item.toString().length + 1))}px` }}
                                    >
                                        {item}
                                    </sup>
                                )}
                            </div>
                            <div className='relative flex cursor-pointer'>
                                <BuyCart></BuyCart>
                                {item == 0 ? '' : <sup
                                   className='bg-sub text-white flex w-[16px] h-[16px] justify-center items-center rounded-full absolute -top-1 -right-2'
                                    style={{ fontSize: `${Math.min(12, 20 / (item.toString().length + 1))}px` }}
                                >{item}</sup>}
                            </div>
                        </div>
                       
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;
