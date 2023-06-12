import React from 'react';
import './cards.css';
//import CardItem from './carditem';


function Cards() {
  return (
  <div className='cards-container' style={{backgroundColor:'#efefef'}}>
    <center><h1>Our Services</h1></center>
       <div className='row'>
          <div className='col-md-4 col-sm-8'>
                <div className='card mb-7 rounded fluid' >
                    <span className='icon'> <i aria-hidden="true" class="fas fa-pills"></i> </span><br></br>
                    <h4>Complete Online Consultation</h4><br></br>
                    <p>With innovation and tech, we offer convenient online consultations. What's more, there is no prescription charge.Tell us your health history, choose a delivery option, and make payment. This takes around 5 minutes</p>               
                </div>
          </div>
          <div className='col-md-4 col-sm-8'>
                <div className='card mb-7 rounded fluid'  >
                <span className='icon'> <i aria-hidden="true" class="fas fa-user-md"></i> </span><br></br>
                    <h4>Clinical Assistant</h4><br></br>
                    <p>We’ll review everything and prescribe treatment if appropriate. We’ll message or call you if we have any follow-up questions.We offer a range of treatments at the lowest possible prices, supplied by our UK Registered Pharmacy. You can rest assured that our medications are authentic and safe.</p>                
                </div>
          </div>
          <div className='col-md-4 col-sm-8'>
                <div className='card mb-7 rounded fluid'  >
                <span className='icon'> <i aria-hidden="true" class="fas fa-shuttle-van"></i> </span><br></br>
                    <h4>Choose Treatment and We Deliver</h4><br></br>
                    <p>Instructions how to take your treatment are provided, and we will follow up with advice and support on how to manage your weight.We aim to dispatch most orders by the end of the next working day.</p>               
                </div>
          </div>
      </div>
  </div>
          
   
  );
}

export default Cards;