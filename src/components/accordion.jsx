import React from 'react';
import { Collapse } from 'react-collapse';
import * as Ioicons from "react-icons/io";
import './accordion.css';

const Accordion = ({ toggle, open, question, answer,icon,index }) => {
  return (
    <div
      key={index}
      className=" flex flex-col  border-220  border-b-[1px] pt-5 transition ease-in-out duration-700 cursor-pointer w-full "
      onClick={toggle}
    >
      <div className="flex justify-between  ">
        <div className="flex justify-center items-center gap-3 text-[16px] md:text-[20px] text-gray-700  font-arialMedium  font-semibold">
          <div className='text-320'>{icon}</div>
          {question}
        </div>
        <div className="flex justify-center items-center text-320">
          {open ? <Ioicons.IoIosArrowUp /> : <Ioicons.IoIosArrowDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="py-2 text-[14px] md:text-[16px] text-gray-500 font-sanis text-justify  ">
          {answer}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;



