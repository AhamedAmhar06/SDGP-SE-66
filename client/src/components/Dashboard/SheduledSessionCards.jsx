import React from 'react'


function SheduledSessionCards() {
  return (
    <div className="bg-gray-50 p-4 rounded-[21px] mt-3">
                  <div className="flex flex-col items-center justify-start w-[96%] mt-1">
                        <div className="h-[35px] w-[99%] z-[1] relative">
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
                          <p className="bottom-0 left-0 m-auto !text-gray-600 absolute text-xs ">Tutor :</p>
                        </div>
                        <div className="flex flex-row justify-between items-start w-full mt-[-1px]">
                          <h4 className="mt-px !text-black text-center text-xs font-bold"> Ahamed Amhar</h4>
                          <button className="px-2 py-1 mt-2 mb-1 text-xs font-bold text-white duration-300 border ml-7 bg-NavBlue rounded-xl hover:scale-110" >Join the session</button>
                        </div>

                        </div>
                        
                </div>
  )
}

export default SheduledSessionCards