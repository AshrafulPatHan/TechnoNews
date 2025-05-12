import { Link } from "react-router";


const LoginNav = () => {
   return (
      <div className="flex flex-row items-center justify-between px-[24px] py-[11px] bg-white w-[90vw] rounded-[8px] ">
         <div>
            <Link to='/'>Techno News BD</Link>
         </div>
         <div className="flex items-center gap-6">
            <Link to='/'>lorem</Link>
            <Link to='/'>lorem</Link>
            <Link to='/'>lorem</Link>
         </div>
         <div>
            <Link to='/registration' className="px-[11px] py-2 bg-[#E91F63] rounded-[5px] text-white font-bold ">
               lorem
            </Link>
         </div>
      </div>
   );
};

export default LoginNav;