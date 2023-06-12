import React from 'react';
import'./Productpage.css';
import'./But.css';
import saxenda from'../images/saxenda.webp';
import orlistat from'../images/orlistat.webp';
import { Link } from 'react-router-dom';

function Productpage() {
     return (
      
     <div className='card-container' style={{ background: 'linear-gradient(to top, #44677b, #dcdcdc, #dcdcdc)'}}>
       <center><h1>Weight Loss Products</h1></center>
          <div className='row'>
             <div className='col-md-4 col-sm-6'>
               <Link to='/Saxenda' target={'_blank'}>
                   <div className='card mb-7 rounded fluid' >
                   <div className='card-inner'>
                    <div className='card-front'>
                       <img src={saxenda} alt="med" style={{width:'300px',height:'325px'}}></img>
                    </div>
                    <div className='card-back'>
                       <h4>Saxenda</h4>
                       <p>Saxenda has been tested for promotion of weight loss in several clinical trials.</p>             
                        <button className='btn--primary'>Show More</button>
                   </div>
                   </div>
                   </div>
               </Link>
             </div>
             <div className='col-md-4 col-sm-6'>
                   <div className='card mb-7 rounded fluid' >
                   <div className='card-inner'>
                    <div className='card-front'>
                   <img src={orlistat} alt="med" style={{width:'300px',height:'300px'}}></img>
                   </div>
                   <div className='card-back'>
                       <h4>Orlistat</h4><br></br>
                       <p>Orlistat is the generic version of Xenical. It is a medicine used to treat obesity</p>                
                       <button className='btn--primary'>Show More</button>
                   </div>
                   </div></div>
             </div>
             <div className='col-md-4 col-sm-6'>
                   <div className='card mb-7 rounded fluid'  >
                   <div className='card-inner'>
                    <div className='card-front'>
                   <img src={saxenda} alt="med" style={{width:'300px'}}></img>
                   </div>
                   <div className='card-back'>
                       <h4>Saxenda</h4><br></br>
                       <p>Saxenda has been tested for promotion of weight loss in several clinical trials.</p>               
                       <button className='btn--primary'>Show More</button>
                   </div>
                   </div>
                   </div>
             </div>
         </div>
         
         
     </div>
           
     );
   }
   
   export default Productpage;