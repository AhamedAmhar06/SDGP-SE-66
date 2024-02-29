import { useContext } from "react";
import { UndergradContext } from "../context/undergradContext";
import profileImage from "../Assets/images/Mask group.png";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidVideoRecording } from "react-icons/bi";

export default function Dashboard() {
  const { undergrad } = useContext(UndergradContext);
    
  return (
    <div className="flex items-center max-w-screen-xl px-12 py-8 mx-auto">
      {/* Profile container */}
      <div className="flex flex-col items-center w-1/3 p-6 ml-8 mr-8 rounded-2xl" style={{ height: '900px',borderRadius: '36px', border: '1px '  }}>
       
        <div className="flex flex-col items-center max-w-3xl p-3 shadow-lg h-1/2 bg-gray-50 rounded-2xl" style={{ width: '260px',  borderRadius: '36px', border: '1px ' }}>
        <img src={profileImage} alt="Profile" className="w-20 h-20 mt-5 mb-4 duration-300 rounded-full hover:scale-110" />
        {!!undergrad && (<h2 className="text-xl font-bold text-center text-NavBlue">Hi {undergrad.fName}!</h2>)}
        <p className="mt-4 font-bold text-center text-s text-NavBlue"> Student</p>
        <p className="mt-2 font-bold text-center text-s text-NavBlue"> University of Westminster</p>
        <div className="flex flex-col justify-center">
        <button className="px-5 py-2 mt-10 mb-2 duration-300 bg-white border rounded-xl hover:scale-110" >Edit Profile</button>
        <button className="py-2 duration-300 bg-white border px-7 rounded-xl hover:scale-110" >Settings</button>
        </div>
        

       </div>

       <div className="flex flex-col items-center max-w-3xl p-3 mt-5 shadow-lg h-1/2 bg-gray-50 rounded-2xl" style={{ width: '260px',  borderRadius: '36px', border: '1px ' }}></div>


      </div>

      {/*  container 2*/}
      <div className="flex flex-col w-1/3 p-6 ml-8 mr-8 rounded-2xl" style={{ height: '900px', borderRadius: '36px', border: '1px ' }}>
       
      <div className="flex flex-col p-2 shadow-lg items-left h-1/3 bg-NavBlue rounded-2xl " style={{  width: '325px',borderRadius: '36px', border: '1px '  }}>

    <div className="flex items-center">
       {/* Adjust margin-top to move the icon up */}
      <div>
        <h1 className="mt-3 ml-8 text-2xl text-white">Scheduled</h1>
        <h1 className="ml-8 text-3xl font-semibold text-white">Sessions</h1>
      </div>

      < FaCalendarAlt  className="mt-1 text-5xl text-white ml-14 " />

      </div>
                <div className="flex flex-col p-3 mt-5 ml-4 shadow-lg items-justify h-1/4 bg-gray-50 rounded-xl" style={{  width: '280px',borderRadius: '20px', border: '1px '  }}>
                  <div > 
                    <p className="ml-4 text-xs">Figma Basics.............. 4.00pm-6.00pm</p>
                   
                    <div>
                       <p className="ml-4 text-xs ">Tutor :</p>
                       <p className="ml-4 text-xs font-bold ">Ahamed Amhar</p>
                    </div>
                   
                  </div>
                </div>

                <div className="flex flex-col p-3 mt-5 ml-4 shadow-lg items-justify h-1/4 bg-gray-50 rounded-xl" style={{  width: '280px',borderRadius: '20px', border: '1px '  }}>
                  <div > 
                    <p className="ml-4 text-xs">Figma Basics.............. 4.00pm-6.00pm</p>
                   
                    <div>
                       <p className="ml-4 text-xs ">Tutor :</p>
                       <p className="ml-4 text-xs font-bold ">Ahamed Amhar</p>
                    </div>
                   
                  </div>
                </div>

            
    
    </div> 

       
     <div className="flex flex-col p-2 mt-5 shadow-lg h-1/3 bg-gray-50 rounded-2xl" style={{  width: '325px',borderRadius: '36px', border: '1px '  }}>
      <div className="flex items-center">
       {/* Adjust margin-top to move the icon up */}
      <div>
        <h1 className="mt-3 text-2xl ml-7 text-NavBlue">Past Session</h1>
        <h1 className="text-3xl font-semibold ml-7 text-NavBlue">RECORDS</h1>
      </div>

      < BiSolidVideoRecording  className="mt-1 text-6xl mr-9 ml-9 text-NavBlue " />

      </div>
                <div className="flex flex-col p-3 mt-3 ml-3 mr-3 shadow-lg items-justify h-1/4 bg-background rounded-xl" style={{  width: '270px',borderRadius: '10px', border: '1px '  }}>
                  <div > 
                    <p className="ml-4 text-xs">Figma Basics.............. 4.00pm-6.00pm</p>
                   
                    <div>
                       <p className="mt-1 ml-4 text-xs ">Participants</p>
                       <p className="mb-1 ml-4 text-xs font-bold">Ahamed Amhar</p>
                    </div>
                   
                  </div>
                </div>

                <div className="flex flex-col p-3 mt-5 ml-3 mr-3 shadow-lg items-justify h-1/4 bg-background rounded-xl" style={{  width: '270px',borderRadius: '10px', border: '1px '  }}>
                  <div > 
                    <p className="ml-4 text-xs">Figma Basics.............. 4.00pm-6.00pm</p>
                   
                    <div>
                       <p className="mt-1 ml-4 text-xs">Tutor :</p>
                       <p className="ml-4 text-xs font-bold ">Ahamed Amhar</p>
                    </div>
                   
                  </div>
                </div>

            
    
    
     </div>
        




     <div className="flex flex-col p-3 mt-5 shadow-lg h-1/3 bg-gray-50 rounded-2xl" style={{  width: '325px',borderRadius: '36px', border: '1px '  }}>
      <div className="flex items-center">
       {/* Adjust margin-top to move the icon up */}
      <div>
        <h1 className="mt-3 text-2xl ml-7 text-NavBlue">Reviews</h1>
        <h1 className="text-3xl font-semibold ml-7 text-NavBlue">(Posted)</h1>
      </div>

     {/*  < BiSolidVideoRecording  className="mt-1 text-6xl mr-9 ml-9 text-NavBlue " /> */}

      </div>
                <div className="flex flex-col p-3 mt-3 ml-3 mr-3 shadow-lg items-justify h-1/3 bg-background rounded-xl" style={{  width: '270px',borderRadius: '10px', border: '1px '  }}>
                  <img src={profileImage} alt="Profile" className="w-10 h-10 mt-2 mb-4 duration-300 rounded-full hover:scale-110" />
                  {/* <h1 className="text-s">Asini perera</h1> */}
                </div>

                
     </div>


      </div>

      {/* Session requested container */}
      <div className="flex flex-col w-1/3 p-6 ml-8 mr-8 rounded-2xl" style={{ height: '900px', borderRadius: '36px', border: '1px ' }}>
        <div className="flex flex-col p-2 shadow-lg bg-gray-50 rounded-2xl" style={{  width: '300px',height: '380px',borderRadius: '36px', border: '1px '  }}>
      <div className="flex items-start ml-5 ">
       
      <div>
        <h1 className="mt-3 ml-2 text-2xl text-NavBlue">Session</h1>
        <h1 className="ml-2 text-3xl font-semibold text-NavBlue">Requested</h1>
      </div>


      </div>
                <div className="flex flex-col p-3 mt-3 ml-4 mr-3 shadow-lg items-justify bg-background rounded-xl" style={{  width: '250px',height: '120px',borderRadius: '10px', border: '1px '  }}>
                  <div > 
                    <p className="ml-4 text-xs">Figma Basics ........4.00pm-6.00pm</p>
                   
                    <div>
                       <p className="mt-1 ml-4 text-xs ">Tutor :</p>
                       <p className="mb-1 ml-4 text-xs font-bold">Ahamed Amhar</p>
                        <button className="px-4 py-1 mt-2 mb-3 ml-8 font-bold text-white duration-300 border bg-NavBlue rounded-xl hover:scale-110" >Do the payment</button>
                    </div>
                   
                  </div>
                </div>

                <div className="flex flex-col p-3 mt-3 ml-4 mr-3 shadow-lg items-left bg-background rounded-xl" style={{ width: '250px', height: '45px', borderRadius: '10px', border: '1px ' }}> 
                  <div > 
                      <p className="ml-4 text-s" >Figma Basics</p>
                  </div>
                </div>
                <div className="flex flex-col p-3 mt-3 ml-4 mr-3 shadow-lg items-left bg-background rounded-xl" style={{ width: '250px', height: '45px', borderRadius: '10px', border: '1px ' }}> 
                  <div > 
                      <p className="ml-4 text-s" >Figma Basics</p>
                  </div>
                </div>
                
            
          </div>






          <div className="flex flex-col items-center p-2 mt-5 shadow-lg bg-gray-50 rounded-2xl" style={{  width: '300px',height: '520px',borderRadius: '36px', border: '1px '  }}></div>

      </div>
    </div>

  );
}
