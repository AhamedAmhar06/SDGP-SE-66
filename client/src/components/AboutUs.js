import React from 'react'
import img from "../Assets/images/Asset 4.png";
import img1 from "../Assets/images/Asset 6.png";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from 'react-router-dom';
/* import Courses from "Courses"; */

/* import { Link } from "react-scroll"; */

function AboutUs() {
  return (
     <>
    <div className="flex flex-col-reverse items-center gap-5 mx-5 mt-auto  md:min-h-screen md:flex-row md:mx-32">
      <div className="w-full  md:w-2/4">
        <img src={img} alt="img" className="w-full md:w-auto md:h-auto md:max-w-full md:max-h-full"/>
      </div>

      <div className="w-full space-y-2 text-center md:w-2/4">
        <Heading title1 ="Build connection with your peers" />
        <p className=" text-NavBlue">
           and fellow graduates across the nation with undergrad uplift and start learning/tutoring
        </p>
        <Button title="Tutors" />   
      </div>
    </div>

    <div className="flex flex-col-reverse items-center gap-5 mx-5 mt-auto  md:min-h-screen md:flex-row md:mx-32">



  < div className="w-full space-y-2 text-center md:w-2/4">
        {/* Adjust content for the second section */}
        <Heading title1="AboutUs" />
        <p className=" text-NavBlue">
           At Campus Kuppi, we embrace collaborative learning through our unique tutoring approach. We pair students with similar academic levels to work together, fostering a supportive environment. 
        </p> <br/>
        <p>
        Our tutors provide explanations, feedback, and academic assistance, benefiting both parties. Tutors reinforce their knowledge and skills, while students gain a deeper understanding of the subject matte. 
        </p>
        <p>
        This personalized and effective learning strategy is particularly beneficial in small groups, catering to the unique preferences of each student.Read more...
        </p>
        <Button title="AboutUs" />   

      </div>
      <div className="w-full  md:w-2/4">
        {/* Replace 'img' with the image for your second section */}
        <img src={img1} alt="img" className="w-full md:w-auto md:h-auto md:max-w-full md:max-h-full"/>
      </div>
      

    </div>

   

   
     {/* <Courses /> */}
         
</>   
  )
}



export default AboutUs;
