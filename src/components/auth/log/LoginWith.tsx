import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const LoginWith = () => {
   return (
      <div className="flex flex-col items-center bg-[#E93B77] w-[377px] h-[147px] rounded-[8px] gap-[26px] ">
         <p className="text-[22px] font-bold text-white mt-6 ">Login With</p>
         <div className="flex items-center gap-[47px] text-[24px] text-white ">
            <FaFacebook className="cursor-pointer hover:text-blue-300"/>
            <FaGithub className="cursor-pointer hover:text-blue-300"/>
            <FaGoogle className="cursor-pointer hover:text-blue-300"/>
         </div>
      </div>
   );
};

export default LoginWith;