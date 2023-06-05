import React, { useState } from "react";
import saxenda from "../images/saxenda.webp";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import * as BsIcons from "react-icons/bs";
import Accordion from "./accordion";
// import { Routes,Route} from 'react-router-dom';


       
const Saxenda = ({ handleSideBar, handleRightSideBar, size, handleBuyNow }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const toggle = (index) => {
    if (openAccordion === index) {
      return setOpenAccordion(null);
    }
    setOpenAccordion(index);
  };
  const data = [
    {
      question: "Eligibility",
      icon: <BsIcons.BsCheckCircle />,
      answer:
        "You have to be above 18 years of age and your BMI will need to be 27+ (with a co-morbidity) or 30+ without a co-morbidity. A co-morbidity is an additional health condition related to, and made worse by being overweight, such as back or knee pain, having high cholesterol or high blood pressure etc.Please Note:If this is the first time you are using saxenda, you need to purchase at least 3 pens (=1 month treatment)We cannot accept returns and refunds on this item if you miss your delivery. Delivery is made via fast 24hr services in England only and we use temperature controlled packaging that are guaranteed for 48hrs. All new and unused Saxenda pens should be stored in a refrigerator between 2°C and 8°C. After first use, store in a refrigerator or at room temperature between 15°C and 30°C. Pens in use should be thrown away after 30 days even if they still have Saxenda left in them. Do not freeze Saxenda.",
    },
    {
      question: "Effectiveness",
      icon: <BsIcons.BsCheckCircle />,
      answer:
        "Saxenda has been tested for promotion of weight loss in several clinical trials. The SCALE Obesity and Pre-Diabetes phase 3a trial showed that the 3,731 participants lost an average of 8% of their body weight over a 56 week trial. In evidence presented to The American Society for Metabolic and Bariatic Surgery, the same study showed that 92% of patients lost weight, when 3mg liraglutide was used in conjunction with diet and exercise modifications.",
    },
    {
      question: "What time of day should I use Saxenda",
      icon: <BsIcons.BsCheckCircle />,
      answer:
        "You can inject Saxenda at any time of the day at a time that is convenient for you. For the best results stick to the same time each day.",
    },
    {
      question: "How to take Saxenda",
      icon: <BsIcons.BsCheckCircle />,
      answer:
        "Saxenda is administered as a daily injection.Initially 0.6mg once daily, then increased in steps of 0.6mg, dose to be increased at intervals of at least 1 week; consider discontinuation if escalation to the next dose is not tolerated for 2 consecutive weeks. Discontinue if at least 5% of initial body-weight has not been lost after 12 weeks at maximum dose; maximum 3mg per day.",
    },
    {
      question: "Who is eligible?",
      icon: <BsIcons.BsCheckCircle />,
      answer:
        "These medications are only suitable for patients with a BMI >30 or with BMI >27 with certain health conditions (e.g., high blood pressure). To find out if you are eligible, take our questionnaire.",
    },
  ];
  return (
      <main>
         <div className='container'>
          <div className='row'>
             <div className='col cols-md-4'>
                  <img src={saxenda} alt='bod' width={400} height={400} />
             </div>
          <div className='col cols-md-4'>
           <div className='hero-container'>
             <p>weight loss products</p>
             <h1>saxenda</h1>
             <p >Saxenda has been tested for promotion of weight loss in several clinical trials. The SCALE Obesity and Pre-Diabetes phase 3a trial showed that the 3,731 participants lost an average of 8% of their body weight over a 56 week trial.
              <br></br><strong>$ 199.00</strong>
             </p>
             <button type="button" class="btn--primary btn--medium btn--outline">Buy Now
             </button>
            
               </div>
             </div>
           </div>
 
        <div className="max-w-6xl mx-5 xl:mx-auto">
          <h1 className="text-3xl text-200 font-bold font-arialBold py-5">
            Description
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 justify-start items-start ">
              <div className="pt-1 text-320">
                <BsFillArrowRightSquareFill size={20} />
              </div>
              <p className="text-[18px] font-arialBold text-gray-500  ">
                Saxenda is a prescription only, once daily injection used to
                promote weight loss in patients who are either obese, or who are
                overweight (with a Body Mass Index of 28 or more) and have
                additional health risk factors. It contains the active
                ingredient liraglutide, which was originally developed to treat
                diabetes.
              </p>
            </div>
            <div className="flex gap-4 justify-start items-start ">
              <div className="pt-1 text-320">
                <BsFillArrowRightSquareFill size={20} />
              </div>
              <p className="text-[18px] font-arialBold text-gray-500  ">
                Saxenda is a prescription only, once daily injection used to
                promote weight loss in patients who are either obese, or who are
                overweight (with a Body Mass Index of 28 or more) and have
                additional health risk factors. It contains the active
                ingredient liraglutide, which was originally developed to treat
                diabetes.
              </p>
            </div>
            <div className="flex gap-4 justify-start items-start ">
              <div className="pt-1 text-320">
                <BsFillArrowRightSquareFill size={20} />
              </div>
              <p className="text-[18px] font-arialBold text-gray-500  ">
                Saxenda is a prescription only, once daily injection used to
                promote weight loss in patients who are either obese, or who are
                overweight (with a Body Mass Index of 28 or more)
              </p>
            </div>
            <div className="flex gap-4 justify-start items-start ">
              <div className="pt-1 text-320">
                <BsFillArrowRightSquareFill size={20} />
              </div>
              <p className="text-[18px] font-arialBold text-gray-500  ">
                Saxenda is a prescription only, once daily injection used to
                promote weight loss in patients
              </p>
            </div>
          </div>
        </div>
      
      <section className="max-w-6xl mx-5 lg:mx-auto py-20">
        <h1 className="text-3xl font-arialBold py-5">
          Frequently Asked Question
        </h1>

        <div className="flex justify-center items-center pb-14 flex-col">
          {data.map((val, index) => {
            return (
              <Accordion
                key={index}
                index={index}
                question={val.question}
                answer={val.answer}
                icon={val.icon}
                open={openAccordion === index}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
    </section>
    </div>
    
    
    
       </main>
    );
};

export default Saxenda;

