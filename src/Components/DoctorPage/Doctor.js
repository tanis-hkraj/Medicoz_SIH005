import React, { useState } from "react";
import DoctorList from "./DoctorList";
import { disease } from "../../Utils/constant";
const Doctor = () => {
  const [description1, setdescription1] = useState("type=doctor");
  const [description2, setdescription2] = useState("type=hospital");
  const handleClick = async (description1, description2) => {
    setdescription1(description1);
    setdescription2(description2);
  };
  return (
    <div className="h-screen body-bg pt-32 px-20 flex gap-10">
      <div className="w-1/4">
        {/* <p className="bg-white text-center py-2 rounded-md font-medium cursor-pointer">
          Select the doctor related to disease
        </p> */}
        <div className="bg-white rounded-md  -mt-1 pb-5 px-2 h-full">
          <p className="pt-5 pb-1  text-center font-medium">Select the doctor related to disease</p>
          <hr className="mb-5 border-b-[1px] border-gray-400"></hr>
          <ul className="flex flex-col items-center">
            {disease.map((disease, index) => (
              <li
                key={index}
                className={`w-[85%] text-center font-medium p-2 text-lg border border-black ${
                  index === disease.length - 1 ? "border-b-0" : ""
                } cursor-pointer hover:bg-gray-200 rounded-md mb-4`}
                onClick={() =>
                  handleClick(disease.description1, disease.description2)
                }
              >
                {disease.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <DoctorList description1={description1} description2={description2} />
    </div>
  );
};

export default Doctor;
