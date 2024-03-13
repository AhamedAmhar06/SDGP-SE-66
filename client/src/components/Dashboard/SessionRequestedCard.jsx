import React from 'react'

function SessionRequestedCard() {
  return (
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
  )
}

export default SessionRequestedCard