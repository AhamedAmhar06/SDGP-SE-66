import React from 'react';
import Yashmitha from "../Assets/images/yashmitha.jpeg";
import Sudarshana from "../Assets/images/sudarshana.jpeg";
import Kavin from "../Assets/images/kavin.jpeg";
import Ahamed from "../Assets/images/ahamed.jpeg";
import Asini from "../Assets/images/asini.png";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const data = [
    {
        name: "Yashmitha Dilshan",
        desc: "Yashmitha played a significant role in shaping Undergraduplift's backend development, contributing to the platform's functionality and performance",
        styles: "z-10 lg:-mr-24", // Adjusted z-index value
        image: Yashmitha,
        git: "https://github.com/YashmithaDilshan27",
        linkdn: " https://www.linkedin.com/in/yashmitha-dilshan-428b03212/",
        web: "",
    },
    {
        name: "Sudarshana Weerakkodi",
        desc: "Sudarshana's blend of passion and technical prowess shines in backend development, underlining his pivotal role in the project's success.",
        styles: "z-20 lg:-mr-24", // Adjusted z-index value
        image: Sudarshana,
        git: "https://github.com/DWS-21",
        linkdn: "https://www.linkedin.com/in/sudarshana-weerakkodi/",
        web: "",
    },
    {
        name: "Ahamed Amhar",
        desc: "The team was guided to success by Ahmed's creative leadership, whose passion fueled the idea and oversaw backend development.",
        styles: "z-30", // Adjusted z-index value
        image: Ahamed,
        git: "https://github.com/AhamedAmhar06",
        linkdn: "https://www.linkedin.com/in/ahamed-amhar/",
        web: "https://ahamedamhar.com/",
    },
    {
        name: "Kavin Sugara",
        desc: "Kavin played a crucial role in shaping Undergraduplift's frontend, utilizing his expertise to breathe life into its user-friendly interface ",
        styles: "z-20 lg:-ml-24", // Adjusted z-index value
        image: Kavin,
        git: "https://github.com/Kavin-Sugara",
        linkdn: "https://www.linkedin.com/in/kavin-athanayake-070a53288/",
        web: "",
    },
    {
        name: "Asini Perera",
        desc: "Asini was pivotal in the creation of Undergraduplift's frontend, applying her expertise to bring this application's user-friendly design to life.",
        styles: "z-10 lg:-ml-24", // Adjusted z-index value
        image: Asini,
        git: "https://github.com/Asini-Perera",
        linkdn: "https://www.linkedin.com/in/asini-perera-33226225a/",
        web: "",
    },
];

function Team() {
    return (
        <div
            id="aboutus"
            className="min-h-screen py-10 text-white px-10 bg-[#001840] text-center flex flex-col items-center justify-center"
        >
            <h1 className="text-5xl font-bold">Meet Our Team</h1>

            <p className="mt-5 opacity-55 font-thin italic w-[80%]">
                We're a dedicated team of innovators committed to revolutionizing the academic journey for undergraduates. Picture us as pioneers, 
                reshaping traditional learning paradigms into dynamic,
                interactive experiences. Our platform addresses the challenges faced by undergraduates, 
                fostering a supportive environment for academic growth and success.
            </p>
            <div className="lg:flex relative mt-8 lg:w-[85%]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.styles} flex flex-col mb-10 lg:mb-0 items-center justify-center`}
                    >
                        <img
                            src={item.image}
                            className="w-[250px] h-[250px] bg-[#090E34] p-2 rounded-full"
                        />

                        <div className="w-[60%] space-y-4 mt-4">
                            <p>{item.name}</p>

                            <p className="text-[12px] ">{item.desc}</p>

                            <div className="flex items-center justify-center">
                                <a href={item.git} className="mr-4 text-xl text-white">
                                    <FaGithub />
                                </a>
                                 <a href={item.linkdn} className="mr-4 text-xl text-white">
                                    <FaLinkedin />
                                </a>
                                  <a href={item.web} className="mr-4 text-xl text-white">
                                    <TbWorld />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
