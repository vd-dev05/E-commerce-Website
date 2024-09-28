import React from 'react';
import { Select, Space } from 'antd';

const TopHeader = () => {
    return (
        <div className='w-full text-white bg-black flex justify-between items-center text-xs px-[173px] py-2'>
            <div></div>
            <div className="flex gap-2">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <span className="font-bold">ShopNow</span>
            </div>
            <div>
               
                    <Select
                        
                        className="custom-select text-white"
                        defaultValue="English"
                        style={{
                            width: 90,
                            color:'white',
                            background:'none',
                        }}
                        // onChange={handleChange}
                        options={[
                            {
                                value: 'en',
                                label: 'English',
                            },
                            {
                                value: 'vn',
                                label: 'Viet Nam',
                            },              
                        ]}
                    />
               
            </div>

        </div>
    );
}

export default TopHeader;