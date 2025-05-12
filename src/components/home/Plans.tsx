

const Plans = () => {
   return (
      <div className="flex flex-col items-center bg-[#be9c9c] py-[40px] ">
         <div className="flex flex-row items-center ">
            <div className="border-2 border-[#fff] rounded-[10px] p-4 w-[350px] h-[500px] 
            flex flex-col justify-between">
               <div>
                  <button className="bg-[#8dda28] p-[7px] rounded-sm cursor-text ">
                     Free For 1 Year
                  </button>
                  <div className="flex flex-row justify-between mb-[20px] mt-[20px] ">
                     <h3>
                        Premium Individual
                     </h3>
                     <div>
                        <p>Free</p>
                        <p>For 1 Year</p>
                     </div>
                  </div>
                  <div>
                     <ul className="list-disc ml-4">
                        <li>1 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>7 hour/month of listening time from our audiobooks subscriber catalog</li>
                     </ul>
                  </div>
               </div>
               <div>
                  <button className="py-[9px] bg-[#e6d1d1] w-[90%] rounded-[32px]  ">Try free for 1 year・</button>
                  <p>Free for 1 year after that he account data is delete unless you move to pro account</p>
               </div>
            </div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default Plans;