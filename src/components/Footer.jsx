import Fb from "../assets/icons/fb";
import Ig from "../assets/icons/ig";
import Ld from "../assets/icons/ld";
import Send from "../assets/icons/Send";
import Tw from "../assets/icons/tw";

const Footer = () => {
    return (
        <footer>
            <div className="w-full bg-black text-white" >
                <div className="flex gap-[87px] p-20 text-[16px]">
                    <div>
                        <h3>Exclusive</h3>
                        <p>Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <div>
                            <input
                                placeholder="Enter your email"
                            >
                            </input>
                            <span><Send /></span>
                        </div>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p>dbui0025@gmail.com</p>
                        <span>+88015-88888-9999</span>
                    </div>
                    <div>
                        <h3>Account</h3>
                        <p>My Account</p>
                        <p className="text-nowrap">Login / Registerm</p>
                        <span>Cart</span>
                        <span>Wishlist</span>
                        <span>Shop</span>
                    </div>
                    <div>
                        <h3>Quick Link</h3>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <span>FAQ</span>
                        <span>Contact</span>
                    </div>
                    <div>
                        <h3>Download App</h3>
                        <p className="text-nowrap text-[12px]">Save $3 with App New User Only</p>
                        <div>
                            <div>
                                <img src="/src/assets/images/Qr Code.png" alt="" />

                            </div>
                            <div>
                                <div>
                                    <img src="/src/assets/images/GooglePlay.png" alt="" />
                                </div>
                                <div>
                                    <img src="/src/assets/images/download-appstore.png" alt="" />
                                </div>
                            </div>
                            <div className="icon flex ">
                                <div><Fb></Fb></div>
                                <div><Tw></Tw></div>
                                <div><Ig></Ig></div>
                                <div><Ld></Ld></div>
                            
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className=" border-t-[1px] border-footer"> </div>
                <p className="text-neutral-500">Copyright Rimel 2022. All right reserved</p>
            </div>
      
        </footer>
    );
}

export default Footer;