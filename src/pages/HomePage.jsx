import { useLocation } from "react-router-dom";

const HomePage = () => {
    const state= useLocation();
    const data = state.state || ' ';
    console.log(data);
    
    return ( 
        <div>
            Home Page
        </div>
     );
}
 
export default HomePage;