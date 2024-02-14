import { useState } from "react";
import registerperson from "../Assets/registerperson.png";

function Register() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    university: "",
    levelOfStudy: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Register container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img className="rounded-2xl border border-NavBlue border-4" src={registerperson} alt="Register Person" />
        </div>

        {/* Form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-NavBlue">Register</h2>
          <p className="text-xs mt-4 text-NavBlue">Registered already? </p>
          {/* Login Button */}
          <button className="text-NavBlue" onClick={() => console.log("Navigate to login page")}>
            Login
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border"
              type="text"
              id="fName"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              id="lName"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="text"
              id="levelOfStudy"
              name="levelOfStudy"
              value={formData.levelOfStudy}
              onChange={handleChange}
              placeholder="Level of Study"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          
           {/* Register Button */}
           <button className="bg-NavBlue rounded-xl text-white py-2 hover:scale-105 duration-300">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;