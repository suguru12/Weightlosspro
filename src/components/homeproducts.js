import React from 'react';
import './cards.css';
import'./homepro.css';
import'./But.css';
//import CardItem from './carditem';
import saxenda from'../images/saxenda.webp';
import orlistat from'../images/orlistat.webp';

function Products() {
  return (
  <div className='cards__container' style={{backgroundColor:'#efefef'}}>
    <center><h1>Weight Loss Products</h1></center>
       <div className='row'>
          <div className='col-md-4 col-sm-6'>
                <div className='card mb-7 rounded fluid' >
                    <img src={saxenda} alt="med" style={{width:'300px'}}></img>
                    <h4>Saxenda</h4>
                    <p>Saxenda has been tested for promotion of weight loss in several clinical trials.</p>               
                     <button className='btn--primary'>Show More</button>
                </div>
          </div>
          <div className='col-md-4 col-sm-6'>
                <div className='card mb-7 rounded fluid' >
                <img src={orlistat} alt="med" style={{width:'300px',height:'300px'}}></img>
                    <h4>Orlistat</h4><br></br>
                    <p>Orlistat is the generic version of Xenical. It is a medicine used to treat obesity</p>                
                    <button className='btn--primary'>Show More</button>
                </div>
          </div>
          <div className='col-md-4 col-sm-6'>
                <div className='card mb-7 rounded fluid'  >
                <img src={saxenda} alt="med" style={{width:'300px'}}></img>
                    <h4>Saxenda</h4><br></br>
                    <p>Saxenda has been tested for promotion of weight loss in several clinical trials.</p>               
                    <button className='btn--primary'>Show More</button>
                </div>
          </div>
      </div>
      {/* <div>
      <div className='row'>
        <div className='col-md-4 col-sm-6'>
          <div className='card'>
            <div className='card-inner'>
              <div className='card-front'>
                <img src={saxenda} alt='doctor' className='card-image' />
                <div className='card-content'>
                  <h1 className='card-title'>Bentley Idefiora-Ezike</h1>
                  <p className='card-subtitle'>Clinician, Weight Loss Coach</p>
                </div>
              </div>
              <div className='card-back'>
                <div className='card-content'>
                  <p>This is the back content of the card.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more flip cards here 

      </div></div> */}
  </div>
          
   
  );
}

export default Products;