import React from 'react'
import accept from "../../Assets/images/accept.png";

function QuestionCards() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-5">
                        
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
                       
                          
  )
}

export default QuestionCards
