import React from 'react';
import wo from '../images/wo.jpg';
import FAQAccordion from './Faq';
import FAQItems from './Faq';
//import { Button } from './Button';



function Section() {

        return (
        <div className='container'>
         <div className='row'>
            <div className='col cols-md-4'>
                <div className='hero-container'>
                <img src={wo} alt='bod' width={400} height={400} /> 
            
            
                </div>   
            </div>
            <div className='col cols-md-4'>
            <FAQAccordion items={FAQItems} />
        
         
            </div>
         </div>
       </div>
        );
      }
      


export default Section;
