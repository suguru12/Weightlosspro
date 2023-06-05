
import Footer from './footer';
import Body from './body';
import Cards from './card';
import Section from './section1';
//import Carousel from './testimonial';
//import Doctors from './doctors';
import Productpage from './productpage';

function Full() {
    return (
      <div>
        <Body/><br></br>
        <Cards/><br></br>
        {/* <Doctors/> */}
        <Productpage/>
        <Section/>
        {/* <Carousel/> */}
        <Footer/>  
  </div>
    )
  }
  
  export default Full;
  