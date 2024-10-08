import React, { useState } from "react";
import DepressionForm from "./DepressionForm";
import DiabetesForm from "./DiabetesForm";
import { diseases } from "../../Utils/constant";
import Hyper from './Hyper'
import Adhd from "./Adhd";

import { useSelector } from "react-redux";
import Bipolar from "./Bipolar";
// import LoginSimmer from "../ShimmerPage/LoginSimmer";

const Services = () => {
  
  const [disease_no, setDisease_No] = useState(0);

  const handleClick = (index) => {
    setDisease_No(index);
  };

  

  return (
    <div className=" body-bg pt-32 px-20 flex flex-col md:flex-row justify-between pb-20">
      <div className="w-full md:w-1/4 bg-white px-5 py-10 rounded-md mb-10 md:mb-0">
        <ul>
          {diseases.map((disease, index) => (
            <li
              key={index}
              className="mb-4 font-medium border border-black text-center px-5 py-3 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleClick(index)}
            >
              {disease}
            </li>
          ))}
        </ul>
      </div>
      {disease_no === 0 && <DepressionForm />}
      {disease_no === 1 && <DiabetesForm />}
      {disease_no === 2 && <Hyper />}
      {disease_no === 3 && <Adhd />}
      {disease_no === 4 && <Bipolar />}
      
    </div>
  );
};

export default Services;
