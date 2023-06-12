import React, { useState } from 'react';
//import { BsDisplay } from 'react-icons/bs';
import loss1 from '../images/loss.jpg';
import doc from '../images/doc.jpg';
import './aboutus.css';
function AboutUs() {

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  }; 

  return (
    <>
    <div class="col-md-12 text-center">
        <h2 class="section-title" style={{marginTop:'30px'}}>ABOUTUS</h2>
    </div> 
    <div className="about-us-container">
      <div className="left-section">
        <h2 style={{fontSize:'3rem'}}>"Unlock Your Weight Loss Potential: Embrace Convenience with Our Online Prescription Service!"</h2>
        <p>We believe that your weight loss journey should be empowering, convenient, and tailored to your unique needs. That's why we've established an innovative online prescription service designed to make achieving your goals easier than ever before.</p>
      </div>
      <div className="right-section">
       <img src={loss1} alt="loss" />
      </div>
      
    
      <div className="left-sections">
        <ul>
          <li onClick={() => handleItemClick(0)} className={activeItem === 0 ? 'active' : ''}>
            Accessibility at Your Fingertips
          </li>
          <li onClick={() => handleItemClick(1)} className={activeItem === 1 ? 'active' : ''}>
            Expert Guidance Every Step of the Way
          </li>
          <li onClick={() => handleItemClick(2)} className={activeItem === 2 ? 'active' : ''}>
            Customized Solutions for Your Success
          </li>
          <li onClick={() => handleItemClick(3)} className={activeItem === 3 ? 'active' : ''}>
            Time-Saving Convenience
          </li>
          <li onClick={() => handleItemClick(4)} className={activeItem === 4 ? 'active' : ''}>
            Privacy and Confidentiality
          </li>
        </ul>
      </div>
      <div className="right-sections">
        {activeItem === 0 && (
          <p>
            Say goodbye to long waiting times and endless paperwork. Our online prescription service brings the convenience of weight loss support directly to your screen. With just a few clicks, you can access qualified healthcare professionals, personalized consultations, and prescription medications from the comfort of your own home.
          </p>
        )}
        {activeItem === 1 && (
          <p>
            We understand that weight loss can be a challenging endeavor, which is why our service provides you with access to experienced healthcare professionals who specialize in weight management. Our dedicated team will guide you through your journey, offering personalized advice, tailored treatment plans, and continuous support to ensure you stay motivated and on track.
          </p>
        )}
        {activeItem === 2 && (
          <p>
            No two individuals are the same, and neither should be their weight loss approach. Our online prescription service offers a comprehensive assessment of your health, lifestyle, and goals. By considering these factors, we develop personalized treatment plans and prescribe MHRA approved medications when appropriate, optimizing your chances of achieving sustainable and long-lasting results.
          </p>
        )}
        {activeItem === 3 && (
          <p>
            We understand the demands of daily life, making it challenging to prioritize your well-being. With our online prescription service, you can skip the hassle of scheduling appointments and waiting in crowded waiting rooms. Our digital platform allows you to access expert guidance, refill prescriptions, and track your progress at a time that suits you best.
          </p>
        )}
        {activeItem === 4 && (
          <p>
            We value your privacy and understand that weight loss can be a sensitive subject. Our online prescription service ensures that your personal information is kept strictly confidential. Feel empowered to take control of your weight loss journey in a secure and discreet environment.
          </p>
        )}
      </div>
    </div>
      <div className="Center-section">
        <p>Embrace the modern era of weight loss and unlock your full potential with our online prescription service. Together, we can make your weight loss journey efficient, convenient, and successful. Start your transformation today, because you deserve a healthier, happier you!</p>
        <button className='btn--primary btn--large' style={{position:'absolute'}}>Start Assessment</button>
      </div>
      

      <section class="section-white">
         <div class="container">
               <div class="row">
                    <div class="col-md-12 text-center" >
                          <h2 class="section-title">Our Clinical Team</h2>
                    </div> 
            <div class="col-sm-4 col-md-4">
                  <div class="team-item">
                       <img src={doc} class="team-img" alt="pic" />                   
                      <h3>Medical director</h3>  <br></br>          
                      <div class="team-info"><p>Dr Lavan Baskaran GMC: 6164156</p></div>
                      <ul class="team-icon">
                          <li><a href="twitter" class="twitter">
                            <i class="fa fa-twitter"></i>
                        </a></li>
                          
                          <li><a href="pinterest" class="pinterest">
                            <i class="fa fa-pinterest"></i>
                        </a></li>
                          
                          <li><a href="facebook" class="facebook">
                            <i class="fa fa-facebook"></i>
                        </a></li>
                          
                          <li><a href="dribble" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-4 col-md-4">

                  <div class="team-item">
                  
                      <img src={doc} class="team-img" alt="pic" />
                     
                      <h3>Pharmacist Independent Prescriber</h3>
                      
                      <div class="team-info"><p>Mohammed Jawahir GPhC 2071589</p></div>                  
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/i/flow/login" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="https://twitter.com/i/flow/login" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="https://twitter.com/i/flow/login" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="https://twitter.com/i/flow/login" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>
                  </div>
                  <div class="col-sm-4 col-md-4">

                  <div class="team-item">
                  
                      {/* <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" /> */}
                     
                      <h3>Pharmacy</h3><br></br>
                      
                      <div class="team-info">
                        <address>Prescription Counter <br></br>Grosvenor House 160 Gillett Road Thornton Heath CR7 8SN Phone: 020 36593149 GPhC no. 9010322</address>
                        <address>Ritesh Appadoo <br></br>Superintendent Pharmacist GPhC :2070941</address>
                      </div>                  
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/i/flow/login" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="https://twitter.com/i/flow/login" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="https://twitter.com/i/flow/login" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="https://twitter.com/i/flow/login" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            
        
        </div> 
    
    </div> 
    

    </section>

 
 
  </>
  );
}
export default AboutUs;