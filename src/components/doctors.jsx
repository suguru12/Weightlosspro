import React from 'react';
import person1 from '../images/person1.webp';
import person2 from '../images/person2.webp';
import person3 from '../images/person3.webp';

function Doctors() {
  return (
    <div className='cards__container' style={{backgroundColor:'#efefef'}}>
    <div className='row' >
          <div class="pt-28 pb-10 flex justify-center items-center">
            <div class="text-center space-y-3">
                <h1 class="text-[28px] md:text-[40px] text-200 font-arialBold"style={{marginTop:'30px'}}>Meet our weight loss experts</h1>
                <div>
                    <p class="text-[18px] text-200 font-sans" style={{marginLeft:'20%'}}>Our team of leading doctors and coaches have helped to shape and inform our weight loss plans</p>
                    <p class="text-[18px] text-210 font-sans" style={{marginLeft:'20%'}}>Meet our team.</p>
                </div>
            </div></div></div>
       <div className='row'>
       <div className='col-md-4 col-sm-6'>
            <div class="space-y-8">
            <img src={person1} alt="doctor" className="w-50 h-50 object-cover"  style={{marginLeft:'20%'}}/>
              <div>
                <h3 class="text-[18px] text-200 font-arialMedium " style={{marginLeft:'20%'}}>Bentley Idefiora-Ezike</h3>
                <p class="text-[#000000] text-[16px] font-arialRegular"style={{marginLeft:'20%'}}>Clinician, Weight Loss Coach</p>
              </div>
        </div>
        </div>

          
          <div className='col-md-4 col-sm-6'>
          <div class=" flex flex-wrap justify-center items-center pb-32 gap-6">
             <div class="space-y-8">
                <img src={person2} alt="doctor" className="w-50 h-50 object-cover" style={{marginLeft:'20%'}}/>
                    <div>
                        <h3 class="text-[18px] text-200 font-arialMedium"style={{marginLeft:'20%'}}>Earim Chaudry, MD</h3>
                        <p class="text-[#000000] text-[16px] font-arialRegular"style={{marginLeft:'20%'}}>Medical Director</p>
                    </div>
             </div>
            
          </div></div>
          <div className='col-md-4 col-sm-6'>
          <div class="space-y-8">
            <img src={person3} alt="doctor" className="w-50 h-50 object-cover"  style={{marginLeft:'20%'}}/>
            <div>
                <h3 class="text-[18px] text-200 font-arialMedium"style={{marginLeft:'20%'}}>Eve Agwuncha</h3>
                <p class="text-[#00000] text-[16px] font-arialRegular"style={{marginLeft:'20%'}}>Clinician, Weight Loss Coach</p>
            </div>
        </div>

          </div>
      </div> 
    </div>

   
  );
}

export default Doctors;