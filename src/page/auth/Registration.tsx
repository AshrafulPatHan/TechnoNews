import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Illustration from '../../assets/image/photo/regis.png';


const Registration = () => {
   // set the show password
   const [isChecked, setIsChecked] = useState(false);

   return (
      <>
         <div className=' '>
            <div>
               <div>
                  <img src={Illustration} alt="illustrated" className='w-[50vw] h-[100vh] object-cover ' />
               </div>
               <div>
                  <div>
                     <h3>Create a Account</h3>
                     <p>Enter your email and create a strong password</p>
                  </div>
                  <form className="flex flex-col gap-[14px] ">
                     {/* input name */}
                     <input type="text" name="name" id="name"  placeholder="Name"
                     className="border-[#E93B77] rounded-[8px] border-[1px] w-[361px] h-[42px] p-4 "/>
                     {/* input email */}
                     <input type="email" name="email" id="email"  placeholder="Email"
                     className="border-[#E93B77] rounded-[8px] border-[1px] w-[361px] h-[42px] p-4 "/>
                     {/* input image */}
                     <div className='flex flex-col justify-center '>
                        <input className=" w-[230px] h-[42px] border-[#964a4a] border rounded-md py-[7px] px-[16px] bg-black text-white  " 
                         id="file_input" type="file"/>
                     </div>
                     {/* input password */}
                     <input type="password" name="password" id="password" placeholder="Password" 
                     className="border-[#E93B77] rounded-[8px] border-[1px] w-[361px] h-[42px] p-4  "/>
                     {/* submit button */}
                     <div className=" flex flex-row items-center mb-[28px] ">
                        <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <p>Remember me</p>
                     </div>
                     <button className="w-[361px] h-[40px] bg-[#E93B77] rounded-[8px] ">
                        Login
                     </button>
                  </form>
               </div>
            </div>
            <div></div>
         </div>
      </>
   );
};

export default Registration;