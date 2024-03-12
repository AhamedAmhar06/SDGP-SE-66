import { useContext } from "react";
import { UndergradContext } from "../context/undergradContext";
import profileImage from "../Assets/images/Mask group.png";
import payments from "../Assets/images/analysis 1.png";
import accept from "../Assets/images/accept.png";
import { FaCalendarAlt } from "react-icons/fa";



export default function Dashboard() {
  const { undergrad } = useContext(UndergradContext);
    
  return (
    <div className="flex flex-col items-center justify-start w-full pt-[70px] bg-white-A700">
    <div className="flex flex-row justify-center w-full mt-[40px] max-w-[1269px]">
      
      <div className="flex flex-row justify-start w-full gap-[43px]">
       
        <div className="flex flex-col items-center justify-start w-[30%] gap-[41px]">
        <div className="flex flex-col items-center justify-start w-full p-[45px] border-NavBlue border border-solid bg-gray-100 rounded-[36px]">
        <div className="flex flex-col items-center justify-start w-[88%] mt-[18px]">
           <img src={profileImage} alt="Profile" className="h-[225px] w-[225px] ml-2.5 rounded-[50%] hover:scale-110 duration-300 " />
           <div className="flex flex-col items-center  mt-8 ml-[20px] gap-[7px]">
                 {!!undergrad && (<h2 className="text-xl font-bold text-center text-NavBlue">Hi {undergrad.fName}!</h2>)}
        <p className="mt-4 font-bold text-center text-s text-NavBlue"> Student</p>
        <p className="mt-2 font-bold text-center text-s text-NavBlue"> University of Westminster</p>    
       <div className="flex flex-col items-center justify-start w-full mt-[72px] ">
          <div className="h-[80px] w-[99%] relative">
            <button className="px-5 py-3 mt-0 ml-[50px] mb-2 duration-300 bg-white border rounded-xl hover:scale-110">  edit profile </button>
              <button className="px-5 py-3 mt-0  ml-[58px] mb-2 duration-300 bg-white border rounded-xl hover:scale-110">  Settings </button>
             
          </div>
        </div>
         </div>
        </div>
      </div>
          <div className="flex flex-row justify-center items-center w-full gap-[17px] p-[30px] mb-7 border-NavBlue border border-solid rounded-[34px]">
            <h2 className= "w-[55%] ml-[21px]" >
              <span className="text-2xl font-normal text-NavBlue font-helveticalight ">
                    Payments &<br />
              </span>
              <span className="text-NavBlue uppercase text-[28px]">analytics</span>
              <span className="text-NavBlue"></span>
              </h2>
               <img src={payments} alt="Payment" className="w-[84px] mr-[19px] object-cover" />
          </div>
        </div>
         <div className="flex flex-col items-center justify-start w-[36%] gap-[30px]">
          <div className="flex flex-col items-center justify-center w-[99%] p-[31px] bg-NavBlue rounded-[34px]">
                <div className="flex flex-col items-center justify-start w-full mb-[3px] gap-[49px]">
                  <div className="flex flex-row justify-between items-start w-[93%]">
                    <div className="h-[70px] w-[69%] relative">
                      <h3 className=" text-3xl font-bold justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-white !leading-[35px] absolute">
                        Scheduled
                        <br />
                        Sessions{" "}
                      </h3>
                      <p className="h-5 bottom-[8%] right-[32%] m-auto !text-white absolute" >(3)</p>
                    </div>
                    < FaCalendarAlt  className="mt-1 text-6xl text-white ml-14 " />

                  </div>
                  <div className="flex flex-col w-full ">
                    <div className="flex flex-row justify-end w-full p-[5px] bg-gray-50 rounded-[21px] mt-[-18px]">
                      <div className="flex flex-col items-center justify-start w-[96%] mt-1">
                        <div className="h-[46px] w-[99%] z-[1] relative">
                          <p className="w-[41%] right-0 top-[9%] m-auto text-right !leading-[17px] absolute">
                              <span className="text-xs text-black">
                              4.00 pm - 6.00 pm
                              <br />
                            </span>
                            <span className="text-base font-bold text-black font-helvetica">Saturday 25th </span>
                          </p>
                          <div className="flex flex-col items-end justify-start w-[74%] left-0 top-0 m-auto absolute">
                            <p className="mr-[50px] z-[1] text-xs">10 days more</p>
                            <p className="mt-[-16px] text-l">Figma Basics .................................</p>
                          </div>
                          <p className="bottom-0 left-0 m-auto !text-gray-600 absolute text-xs">Tutor :</p>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full mt-[-1px]">
                          <h4 className="mt-px !text-black text-center text-xs font-bold"> Ahamed Amhar</h4>
                          <button className="px-2 py-1 mt-2 mb-1 text-xs font-bold text-white duration-300 border ml-7 bg-NavBlue rounded-xl hover:scale-110" >Join the session</button>
                        </div>

                        </div>
                        </div> 
                        </div>

                      <div className="flex flex-row justify-end w-full p-[5px] bg-gray-50 rounded-[21px] mt-[-18px]">
                      <div className="flex flex-col items-center justify-start w-[96%] mt-1">
                        <div className="h-[46px] w-[99%] z-[1] relative">
                          <p className="w-[41%] right-0 top-[9%] m-auto text-right !leading-[17px] absolute">
                              <span className="text-xs text-black">
                              4.00 pm - 6.00 pm
                              <br />
                            </span>
                            <span className="text-base font-bold text-black font-helvetica">Saturday 25th </span>
                          </p>
                          <div className="flex flex-col items-end justify-start w-[74%] left-0 top-0 m-auto absolute">
                            <p className="mr-[50px] z-[1] text-xs">10 days more</p>
                            <p className="mt-[-16px] text-l">Figma Basics .................................</p>
                          </div>
                          <p className="bottom-0 left-0 m-auto !text-gray-600 absolute text-xs">Tutor :</p>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full mt-[-1px]">
                          <h4 className="mt-px !text-black text-center text-xs font-bold"> Ahamed Amhar</h4>
                          <button className="px-2 py-1 mt-2 mb-1 text-xs font-bold text-white duration-300 border ml-7 bg-NavBlue rounded-xl hover:scale-110" >Join the session</button>
                        </div>

                        </div>
                        </div> 
                        
                        <div className="flex flex-row justify-end w-full p-[5px] bg-gray-50 rounded-[21px] mt-[-18px]">
                        <div className="flex flex-col items-center justify-start w-[96%] mt-1">
                        <div className="h-[46px] w-[99%] z-[1] relative">
                          <p className="w-[41%] right-0 top-[9%] m-auto text-right !leading-[17px] absolute">
                              <span className="text-xs text-black">
                              4.00 pm - 6.00 pm
                              <br />
                            </span>
                            <span className="text-base font-bold text-black font-helvetica">Saturday 25th </span>
                          </p>
                          <div className="flex flex-col items-end justify-start w-[74%] left-0 top-0 m-auto absolute">
                            <p className="mr-[50px] z-[1] text-xs">10 days more</p>
                            <p className="mt-[-16px] text-l">Figma Basics .................................</p>
                          </div>
                          <p className="bottom-0 left-0 m-auto !text-gray-600 absolute text-xs">Tutor :</p>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full mt-[-1px]">
                          <h4 className="mt-px !text-black text-center text-xs font-bold"> Ahamed Amhar</h4>
                          <button className="px-2 py-1 mt-2 mb-1 text-xs font-bold text-white duration-300 border ml-7 bg-NavBlue rounded-xl hover:scale-110" >Join the session</button>
                        </div>

                        </div>
                        </div> 
                        


                  </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                <div className="flex flex-row justify-end w-full p-[29px] border-NavBlue border border-solid rounded-[34px]">
                  <div className="flex flex-col items-start justify-start w-[96%] mt-1 gap-2.5">
                    <h1 className="w-[58%] !leading-[39px]">
                        <span className="text-NavBlue font-helveticalight text-[23px] font-normal">Past session</span>
                      <span className="text-xl font-normal text-NavBlue font-helveticalight">
                        <br />
                      </span>
                      <span className="text-3xl font-bold uppercase text-NavBlue">records </span>
                    </h1>

                    <div className="flex flex-row justify-start items-center w-full gap-[29px]">
                      <div className="flex flex-col w-[92%] mt-[3px] gap-3.5 ">
                        
                        <div className="flex flex-row justify-center w-full p-[15px] bg-gray-50 rounded-[10px]">
                          <div className="flex flex-col items-start justify-start w-[98%] mt-1 ml-[5px] gap-[3px]">
                            <div className="flex flex-row justify-between items-start w-full gap-[119px]">
                              <div className="flex flex-col items-start justify-start gap-2">
                                  <p className="text-xs">Figma Basics</p>
                                  <p className="!text-grey text-xs">Participants :</p>
                              </div>
                              <p className="w-[34%] text-right">
                                <span className="text-xs text-black-900">
                                  4.00 pm - 6.00 pm
                                  <br />
                                </span>
                                <span className="text-xs font-bold text-black-900 font-helvetica">Saturday 25th </span>
                              </p>
                            </div>
                                 <p className="!text-grey text-xs">
                              @name one / @name two / name three
                            </p>

                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full p-[15px] bg-gray-50 rounded-[10px]">
                          <div className="flex flex-col items-start justify-start w-[98%] mt-1 ml-[5px] gap-[3px]">
                            <div className="flex flex-row justify-between items-start w-full gap-[119px]">
                              <div className="flex flex-col items-start justify-start gap-2">
                                  <p className="text-xs">Figma Basics</p>
                                  <p className="!text-grey text-xs">Participants :</p>
                              </div>
                              <p className="w-[34%] text-right">
                                <span className="text-xs text-black-900">
                                  4.00 pm - 6.00 pm
                                  <br />
                                </span>
                                <span className="text-xs font-bold text-black-900 font-helvetica">Saturday 25th </span>
                              </p>
                            </div>
                                 <p className="!text-grey text-xs">
                              @name one / @name two / name three
                            </p>

                          </div>
                        </div>

                        <div className="flex flex-row justify-center w-full p-[15px] bg-gray-50 rounded-[10px]">
                          <div className="flex flex-col items-start justify-start w-[98%] mt-1 ml-[5px] gap-[3px]">
                            <div className="flex flex-row justify-between items-start w-full gap-[119px]">
                              <div className="flex flex-col items-start justify-start gap-2">
                                  <p className="text-xs">Figma Basics</p>
                                  <p className="!text-grey text-xs">Participants :</p>
                              </div>
                              <p className="w-[34%] text-right">
                                <span className="text-xs text-black-900">
                                  4.00 pm - 6.00 pm
                                  <br />
                                </span>
                                <span className="text-xs font-bold text-black-900 font-helvetica">Saturday 25th </span>
                              </p>
                            </div>
                                 <p className="!text-grey text-xs">
                              @name one / @name two / name three
                            </p>

                          </div>
                           
                        </div>
                      
                       
                     </div>

                       <div className="flex flex-col items-center justify-start w-[2%]">
                        <div className="flex flex-row items-start justify-center w-full">
                          
                          <div className="h-[203px] w-1 bg-gray-300 rounded-[50%]" />
                          <div className="h-[52px] w-1 mt-[7px] ml-[-4px] bg-NavBlue rounded-[50%]" />
                          
                        </div>
                      </div>
                    

                      
                 
                    </div>
                    
                    
                     
                  </div>
                  
                  
        
                </div>
                 <div className="flex flex-row justify-center w-full pt-[31px] px-[31px] border-NavBlue border border-solid rounded-[34px]">
                 <div className="flex flex-row justify-start items-center w-[99%] mt-[5px] ml-[5px] gap-7">
                    <div className="flex flex-col items-start justify-start w-[92%]">
                    <h1 className="w-[62%] uppercase !leading-8">
                      <span className="text-3xl font-bold text-NavBlue">
                          Reviews
                          <br />
                        </span>
                        <span className="text-NavBlue font-helveticalight capitalize text-[23px] font-normal">
                          (posted){" "}
                        </span>
                    </h1>
                    <div className="flex flex-row justify-start w-full mt-[3px] pb-[21px] px-[21px] rounded-tl-[18px] rounded-tr-[18px]  bg-gray-50 ">
                        <div className="flex flex-row justify-start w-[87%] ml-[13px] ">
                          <p className="text-xs">Lorem ipsum dolor sit amet, consectetur{" "} </p>
                          </div>
                          </div>
                        <div className="flex flex-row justify-start w-full mt-3.5 p-4 rounded-tl-[18px] rounded-tr-[18px] bg-gray-50">
                        <div className="flex flex-row justify-start items-center w-[94%] mt-[5px] ml-[7px] gap-[21px]">
                            <img src={profileImage} alt="Profile" className="h-[42px] w-[42px] rounded-[50%]" />
                            <div className="flex flex-col items-start justify-start w-4/5 gap-[3px]">
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className="!text-black font-bold"> Amali Perera{" "}</p>
                                <p className="!text-black text-xs"> 05/01/2024</p>

                              </div>
                              <p className="!text-black text-xs text-center">  University of Westminster</p>
                              </div>



                          </div>
                          </div>

                  </div>
                  <div className="flex flex-col items-center justify-start w-[2%]">
                      <div className="flex flex-row items-start justify-center w-full">
                        <div className="h-[102px] w-1 bg-gray-300 rounded-[50%]" />
                        <div className="h-[11px] w-full mt-[38px] ml-[-4px] bg-NavBlue rounded-[50%]" />
                      </div>
                    </div>
                  

                  </div>
                  </div>
                
          
          

               
                
          </div>
        
          
          




         </div>
            <div className="flex flex-col items-center justify-start w-[28%] gap-[34px]">
              <div className="flex flex-col items-center justify-start w-full p-[31px] border-NavBlue border border-solid rounded-[34px]">
                <div className="flex flex-row justify-start items-center w-[97%] mb-[11px] gap-[21px]">
                  <div className="flex flex-col items-center justify-start w-[92%]">
                    <h1 className="w-[97%] !leading-[35px]">
                       <span className="text-NavBlue text-[26px] font-normal">Session </span> <br />
                      <span className="text-4xl font-bold text-NavBlue">Requested</span>
                      <span className="font-normal text-NavBlue"></span>
                    </h1>
                    <div className="flex flex-row justify-center w-[99%] mt-1 p-[5px] bg-gray-300 rounded-[10px]">
                      <div className="flex flex-col items-center justify-start w-full mt-[13px] gap-[17px]">
                        <div className="flex flex-row justify-center items-center w-[89%]">
                          <div className="flex flex-col items-start justify-start w-[52%] gap-px">
                            <p className="ml-px text-sm">Figma Basics</p>
                            <p className="!text-grey text-xs !font-helvetica"> Tutor: Ahamed Amhar</p>
                            
                            </div>
                            <p className="w-[49%] ml-[-1px] text-right leading-4">
                               <span className="text-xs text-black-900">
                              4.00 pm - 6.00 pm
                              <br />
                            </span>
                            <span className="text-xs font-bold text-black-900 font-helvetica">Saturday 25th </span>
                            </p>
                            </div>
                            <button className="flex justify-center items-center w-[242px] h-[19px] px-[35px] py-[3px] !text-white bg-NavBlue rounded-[9px] text-xs hover:scale-110">Do the payment{" "}</button>
                            
                            </div></div>
                            <div className="flex flex-row justify-center w-[99%] mt-1 p-[5px] bg-gray-300 rounded-[10px]">
                               <div className="flex flex-col items-start justify-start w-[52%] gap-px">
                            <p className="ml-px text-sm ">Figma Basics</p>
                        
                            
                            </div>
                            </div>






                    
                    </div></div>
                     
                    
                    </div>
                    <div className="flex flex-col items-center justify-start w-full pt-[31px] px-[31px] border-NavBlue border border-solid rounded-[31px]">
                    <div className="flex flex-row justify-start items-center w-[99%] mt-[5px] gap-6">
                    <div className="flex flex-col items-center justify-start w-[91%] gap-[19px]">
                    <div className="flex flex-col items-start justify-start w-[97%]">
                      <h1 className="w-[69%]">
                        <span className="text-NavBlue font-helveticalight text-[38px] font-normal">
                          Question
                          <br />
                        </span>
                        <span className="text-NavBlue uppercase text-[32px] font-bold">bank</span>
                        <span className="text-NavBlue"></span>
                      </h1>
                      <div className="flex flex-row justify-start mt-[18px] gap-[5px]">
                        <button className="font-helvetica font-bold min-w-[55px] bg-gray-50 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">  Figma</button>
                        <button className="font-helvetica font-bold min-w-[53px] bg-NavBlue rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">   CSS</button>
                        <button className="font-helvetica font-bold min-w-[131px] bg-gray-50 rounded-[6px] text-sm hover:scale-110  px-[5px] py-[3px]">   machine learning</button>
                      </div>
                        <div className="flex flex-row justify-start mt-[5px] gap-1.5">
                        <button className="font-helvetica font-bold min-w-[60px] bg-gray-50 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">  Python</button>
                        <button className="font-helvetica font-bold min-w-[82px] bg-gray-50 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">   JavaScript{" "}</button>
                        <button className="font-bold border border-black border-solid rounded-md hover:scale-110 px-[5px] py-[1px]">+</button>
                        </div>
                      
                      </div>
                       <div className="flex flex-col items-center justify-start w-full gap-5">
                        <button className="uppercase min-w-[252px] rounded-[18px] bg-gray-50 text-sm hover:scale-110 px-[5px] py-[3px] ">  try a new quizz{" "}</button>
                        <div className="h-[412px] w-full relative">
                        <div className="flex flex-col items-center justify-center w-max h-full left-0 bottom-0 right-0 top-0 p-[10px] m-auto  bg-gray-300 absolute rounded-[18px]">
                          <div className="flex flex-col items-start justify-start w-[93%] mb-[36px]">
                            <div className="flex flex-row items-center justify-start">
                              <p  className="!text-black text-s font-bold">CSS | Q13 </p>
                              <p  className="ml-5 !text-gray-500 text-sm">  05/01/2024</p>
                               <img src={accept} alt="accept" className="w-[23px] ml-[39px] object-cover" />
                              
                              </div>
                              <p className="w-[91%] mt-[12px] ml-[2px] text-xs "> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                              <div className="h-[17px] w-[17px] mt-5 ml-[13px] border-black border border-solid rounded-[5px]" />
                              <div className="h-[17px] w-[17px] mt-12 ml-[13px] border-black border border-solid rounded-[5px]" />
                                <div className="h-[17px] w-[17px] mt-12 ml-[13px] border-black border border-solid rounded-[5px]" />
                              <div className="h-[17px] w-[17px] mt-12 ml-[13px] border-black border border-solid rounded-[5px]" />
                                
                              
                              </div>
                             
                              
                          </div>
                            <div className="flex flex-col items-center justify-start w-[72%] gap-6 bottom-[7%] right-0 m-auto absolute">
                            <p className="text-xs ">
                               background-color: #007bff;
                            <br /> color: #fff;
                            <br /> padding: 10px;

                            </p>

                            <p className="text-xs">
                               background-color: #007bff;
                            <br /> color: #fff;
                            <br /> padding: 10px;

                            </p>
                            <p className="text-xs">
                               background-color: #007bff;
                            <br /> color: #fff;
                            <br /> padding: 10px;

                            </p>
                            <p className="text-xs">
                               background-color: #007bff;
                            <br /> color: #fff;
                            <br /> padding: 10px;

                            </p>

                          </div>
                         
                         
                   
                          </div>
                       </div>
                       
                       

                      
                      
                      </div></div></div>
                    
                  






                    </div>
                   

         
         

         








        </div>
       
    
        
            
       </div>

          
     
        
      
      </div>
      
      

  );
}

