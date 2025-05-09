import Logo from "../../assets/image/icon/technobloger.png";
import MyPhoto from "../../assets/image/photo/Hitler.jpg";

const Navbar = () => {
   return (
      <div>
         <div className="flex flex-row items-center justify-between px-6 py-2 bg-amber-200">
            <div className="flex flex-row items-center">
               <img src={Logo} alt="logo" width={30} />
               <p>TechnoNews</p>
            </div>
            <div className="flex flex-row items-center gap-4 ">
               <p>Home</p>
               <p>Add Articles</p>
               <p>All Articles</p>
               <p>Subscription</p>
               <p>Dashboard </p>
               <p>My Articles</p>
               <p>Premium Articles</p>
            </div>
            <div className="flex flex-row items-center">
               <img src={MyPhoto} alt="user" width={50} className="h-[50px] rounded-full bg-white object-cover" />
            </div>
         </div>
      </div>
   );
};

export default Navbar;