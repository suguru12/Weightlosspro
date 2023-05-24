import React from 'react';
import './cards.css';
//import CardItem from './carditem';


function Cards() {
  return (
  <div className='cards__container' style={{backgroundColor:'#efefef'}}>
    <center><h1>Our Services</h1></center>
       <div className='row'>
          <div className='col-md-4 col-sm-6'>
                <div className='card mb-7 rounded fluid' >
                    <span className='icon'> <i aria-hidden="true" class="fas fa-pills"></i> </span><br></br>
                    <h4>Choose Treatment</h4><br></br>
                    <p>We offer a range of treatments at the lowest possible prices, supplied by our UK Registered Pharmacy. You can rest assured that our medications are authentic and safe.&nbsp;&nbsp;&nbsp;</p>               
                </div>
          </div>
          <div className='col-md-4 col-sm-6'>
                <div className='card mb-7 rounded fluid'  >
                <span className='icon'> <i aria-hidden="true" class="fas fa-user-md"></i> </span><br></br>
                    <h4>Online Consultation</h4><br></br>
                    <p>Combining medical innovation and tech, we offer convenient online consultations. So no more queueing at GP surgeries. What's more, there is no prescription charge.</p>                
                </div>
          </div>
          <div className='col-md-4 col-sm-6'>
                <div className='card mb-7 rounded fluid'  >
                <span className='icon'> <i aria-hidden="true" class="fas fa-shuttle-van"></i> </span><br></br>
                    <h4>Express Delivery</h4><br></br>
                    <p>Fast delivery UK wide to an address of your choice from our London based pharmacy using discreet packaging. We aim to dispatch most orders on the same day.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>               
                </div>
          </div>
      </div>
  </div>
          
   
  );
}

export default Cards;