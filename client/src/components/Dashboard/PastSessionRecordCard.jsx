import React from 'react'

function PastSessionRecordCard() {
  return (
    <div className="flex flex-row justify-center w-full p-[15px] bg-gray-100 rounded-[10px]">
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
  )
}

export default PastSessionRecordCard
