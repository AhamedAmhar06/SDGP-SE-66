
import { useContext, useState, useEffect } from "react";
import { UndergradContext } from "../../context/undergradContext";
import { Link } from "react-router-dom";
import axios from "axios";
import profileImage from "../../Assets/images/Mask group.png";
import { GiTeacher } from "react-icons/gi";
import payments from "../../Assets/images/analysis 1.png";
import { FaCalendarAlt } from "react-icons/fa";
import SheduledSessionCards from'../../components/Dashboard/SheduledSessionCards';
import PastSessionRecordCard from'../../components/Dashboard/PastSessionRecordCard';
import SessionRequestedCard from "../../components/Dashboard/SessionRequestedCard";
import QuestionCards from "../../components/Dashboard/QuestionCards";

export default function TutorDashboard() {
  const { undergrad } = useContext(UndergradContext);
  const [ undergradLoaded, setUndergradLoaded ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ tutor, setTutor ] = useState([]);;
  const [ requests, setRequests ] = useState([]);

  useEffect(() => {
    const fetchUndergrad = async () => {
        try {
            if(undergrad){
              const email = undergrad.email;
              const response = await axios.post('/tutorDetailsByEmail', { email });
              setTutor(response.data);
              // const requests = await axios.post('/fetchRequests', { email });
              // setRequests(requests.data);
              setUndergradLoaded(true);
            }
            
        } catch (error) {
            console.error(error);
        }
    };
        fetchUndergrad();
  });

  // useEffect(() => {
  //   const fetchRequests = async () => {
  //       try {
  //         if(undergrad){
  //           const email = undergrad.email;
  //           const requests = await axios.post('/fetchRequests', { email });
  //           setRequests(requests.data);
  //           // console.log(response.data);
  //         }
  //       } catch (error) {
  //           console.error(error);
  //       }
  //   };
  //   fetchRequests();
  // });

  return (
    <div>
      {undergradLoaded ? (
        <div className="flex flex-col items-center justify-start w-full pt-[70px] bg-gray-50">
          <div className="flex flex-row justify-center w-full max-w-[1269px]">
            <div className="flex flex-col w-full gap-[43px] md:flex-row">
              <div className="flex flex-col items-center justify-start w-full md:w-[30%] gap-[41px]">
                {/* Profile Section */}
                <div className="flex flex-col items-center justify-start p-[45px] border-NavBlue border border-solid bg-gray-100 rounded-[36px]">
                  <GiTeacher   className="h-[100px] w-[100px] ml-2.5 rounded-[20%] hover:scale-110 duration-300 mb-4"  />
                  {!!undergrad && <h2 className="text-xl font-bold text-center text-NavBlue">Hi {tutor.fName}!</h2>}
                  <p className="mt-4 font-bold text-center text-s text-NavBlue">Tutor</p>
                  <p className="mt-2 font-bold text-center text-s text-NavBlue">{tutor.university}</p>
                  <p className="mt-2 font-bold text-center text-s text-NavBlue">{tutor.bio}</p>
                  <div className="flex flex-col items-center justify-start w-full mt-[72px]">
                    <div className="w-full sm:w-[100%] md:w-[100%] lg:w-[100%]">
                      <Link to="/createCourse">
                      <button className="w-full px-5 py-3 mt-0 mb-2 duration-300 bg-white border rounded-xl hover:scale-110">Create Course</button>
                      </Link>
                      <Link to='/editProfile'>
                        <button className="w-full px-5 py-3 mt-0 mb-2 duration-300 bg-white border rounded-xl hover:scale-110">Edit Profile</button>
                      </Link>
                      <button className="w-full px-5 py-3 mt-0 mb-2 duration-300 bg-white border rounded-xl hover:scale-110">Settings</button>
                    </div>
                  </div>
                </div>
                {/* Payments & Analytics Section */}
                <div className="flex flex-row justify-center items-center w-full gap-[17px] p-[30px] mb-7 border-NavBlue border border-solid rounded-[34px]">
                  <h2 className="w-[55%]">
                    <span className="text-2xl font-normal text-NavBlue font-helveticalight">Payments &<br /></span>
                    <span className="text-NavBlue uppercase text-[28px]">analytics</span>
                  </h2>
                  <img src={payments} alt="Payment" className="w-[64px] md:w-[84px] md:mr-[19px] object-cover" />
                </div>
              </div>
              {/* Scheduled Sessions Section */}
              <div className="flex flex-col items-center justify-start w-full gap-[30px] md:w-[36%]">
                {/* Session Card Example */}
                {/* You can map through your scheduled sessions here */}
                <div className="flex flex-col items-center justify-start w-[99%] p-[31px] bg-NavBlue rounded-[34px]">
                  {/* Session Heading */}
                  <div className="flex flex-row justify-between items-start w-[93%]">
                    <div className="h-[70px] w-[69%] relative">
                      <h3 className="text-3xl font-bold justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-white !leading-[35px] absolute">
                        Scheduled<br />Sessions
                      </h3>
                      <p className="absolute h-5 bottom-[8%] right-[32%] m-auto !text-white">(3)</p>
                    </div>
                    <FaCalendarAlt className="mt-1 text-6xl text-white ml-14" />
                  </div>
                
                  <div className="grid w-full grid-cols-1 gap-y-4">
                    
                    <SheduledSessionCards/>
                    <SheduledSessionCards/>
                    <SheduledSessionCards/>

                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[34px] md:w-[100%]">
                      <div className="flex flex-col items-center justify-start w-full p-[29px] border-NavBlue border border-solid rounded-[34px]">
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
                            
                            <PastSessionRecordCard/>
                            <PastSessionRecordCard/>

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
                </div>
              </div>
              {/* Past Sessions & Reviews Section */}
              <div className="flex flex-col items-center justify-start w-full gap-[34px] md:w-[28%]">
                <div className="flex flex-col items-center justify-start w-full p-[31px] border-NavBlue border border-solid rounded-[34px]">
                    <div className="flex flex-row justify-start items-center w-[97%] mb-[11px] gap-[21px]">
                      <div className="flex flex-col items-center justify-start w-[92%]">
                        <Link className="w-[97%] !leading-[35px]" to={`/viewRequestsTut/${tutor._id}`}>
                          <span className="text-NavBlue text-[26px] font-normal">View </span> <br />
                          <span className="text-4xl font-bold text-NavBlue">Session Requests</span>
                          <span className="font-normal text-NavBlue"></span>
                        </Link>

                                <SessionRequestedCard/>
                                <div className="flex flex-row justify-center w-[99%] mt-1 p-[5px] bg-gray-300 rounded-[10px]">
                                  <div className="flex flex-col items-start justify-start w-[52%] gap-px">
                                <p className="ml-px text-sm ">Figma Basics</p>
                            
                                </div>
                                </div>
                                <div className="flex flex-row justify-center w-[99%] mt-1 p-[5px] bg-gray-300 rounded-[10px]">
                                  <div className="flex flex-col items-start justify-start w-[52%] gap-px">
                                <p className="ml-px text-sm ">Figma Basics</p>
                                </div>
                                </div>
                                
                        </div></div>
                        </div>
              
                <div className="flex flex-col items-center justify-start w-full p-[31px] border-NavBlue border border-solid rounded-[31px]">
                  
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
                            <button className="font-helvetica font-bold min-w-[55px] bg-gray-100 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">  Figma</button>
                            <button className="font-helvetica font-bold min-w-[53px] bg-gray-100 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">   CSS</button>
                            <button className="font-helvetica font-bold min-w-[131px] bg-gray-100 rounded-[6px] text-sm hover:scale-110  px-[5px] py-[3px]">   machine learning</button>
                          </div>
                            <div className="flex flex-row justify-start mt-[5px] gap-1.5">
                            <button className="font-helvetica font-bold min-w-[60px] bg-gray-100 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">  Python</button>
                            <button className="font-helvetica font-bold min-w-[82px] bg-gray-100 rounded-[6px] text-sm hover:scale-110 px-[5px] py-[3px] ">   JavaScript{" "}</button>
                            <button className="font-bold border border-black border-solid rounded-md hover:scale-110 px-[5px] py-[1px]">+</button>
                            </div>
                          
                          </div>
                          <button className="uppercase min-w-[252px] rounded-[18px] bg-gray-400 text-sm hover:scale-110 px-[5px] py-[3px] ">  try a new quizz{" "}</button>
                        <div className="flex flex-col items-center justify-start w-full gap-5">
                          {/* <QuestionCards/> */}


                        </div>
                            
    
                          
                          
                          </div>
                        
                          </div></div>
                            
          
              </div>
            </div>
          </div>
        </div>
      ) : (null)}
    </div>
  );
}

