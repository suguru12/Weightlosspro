import React from 'react';
import bod from '../images/bod.avif';
import { Button } from './Button';

const mystyle={
    marginTop:'15%',
    marginLeft:'10%',
    
}

function Body() {

        return (
        <div className='container'>
         <div className='row'>
            <div className='col cols-md-4'>
            <h3 style={mystyle}>STOP WISHING..START DOING</h3>
            <ul>
            <li style={{marginTop:'50px',listStyleType:'none',marginLeft:'10%',}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>&nbsp;&nbsp;Sciencebacked Approach
                </li><li style={{marginTop:'30px',listStyleType:'none',marginLeft:'10%',}}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>&nbsp;&nbsp;Breakthrough Medication
                </li><li style={{marginTop:'30px',listStyleType:'none',marginLeft:'10%',}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 2L11 13"></path><path d="M22 2l-4 20-6-9-9-4z"></path></svg>&nbsp;&nbsp;1:1 Coaching And Support
                </li></ul>
                <br></br><br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button 
                     className='btns'
                     buttonStyle='btn--primary'
                     buttonSize='btn--large'
                     onClick={console.log('hey')}
                     
                 >
                 START ASSESSMENT
                 </Button>
            </div>
         <div className='col cols-md-4'>
          <div className='hero-container'>
           <img src={bod} alt='bod' width={500} height={500} /> 
           
            
              </div>
            </div>
          </div>
          </div>
        );
      }
      


export default Body
