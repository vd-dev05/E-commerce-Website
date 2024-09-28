import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./components/dasboard/Signup"
import Signin from "./components/dasboard/Signin"
import HomeAccount from "./components/dasboard/HomeAccount"
import Header from "./components/Header"
function App() {
  return (

    <div className="w-[100%] h-[100%] font-be ">
   
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home />} /> 
        <Route path="/account" element={<HomeAccount/>}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>

      </Routes>
    </div>

  )
}

export default App
