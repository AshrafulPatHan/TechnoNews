import { useState } from "react";
import MainImg from "../../assets/image/photo/mounten.jpg";
import LoginNav from "../../components/navigation/loginNav";
import Switch from '@mui/material/Switch';
import { Link } from "react-router";
import LoginWith from "../../components/auth/log/LoginWith";


const Login = () => {
   // set the show password
    const [isChecked, setIsChecked] = useState(false);

   return (
      <div>
         <div className="relative">
            <div className="relative">
               <img src={MainImg} alt="main photo" className="h-[100vh] w-[100vw] object-cover " />
            </div>
            <div className="absolute top-[22%] mx-[40vw] bg-white rounded-[12px] w-[408px] h-[471px] flex flex-col justify-end p-[22px] ">
               <form className="flex flex-col gap-[14px] ">
                  <input type="email" name="email" id="email"  placeholder="Email"
                  className="border-[#E93B77] rounded-[8px] border-[1px] w-[361px] h-[42px] p-4 "/>
                  <input type="password" name="password" id="password" placeholder="Password" 
                  className="border-[#E93B77] rounded-[8px] border-[1px] w-[361px] h-[42px] p-4 "/>
                  <div className=" flex flex-row items-center mb-[28px] ">
                     <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                     <p>Remember me</p>
                  </div>
                  <button className="w-[361px] h-[40px] bg-[#E93B77] rounded-[8px] ">
                     Login
                  </button>
               </form>
               <div className="flex items-center mt-[31px] justify-center text-[14px] gap-2 ">
                  <p>Don't have an account ?</p>
                  <Link to='/registration' className="text-[#E93B77]" >Sign Up</Link>
               </div>
            </div>
            <div className="absolute top-[20%] mx-[40.8vw] ">
               <LoginWith/>
            </div>
            <div className="absolute top-[1%] left-[4%] ">
               <LoginNav/>
            </div>
         </div>
      </div>
   );
};

export default Login;

