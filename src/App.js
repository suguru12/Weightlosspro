import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import { Routes,Route} from 'react-router-dom';
import Full from './components/full';
import Login from './components/login';
// import Products from './components/homeproducts';
// import Saxenda from './components/Saxenda';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SignUp from './components/signup';
import Productpage from './components/productpage';



function App() {

  return (
    <>
    
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<Full/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/signup'  element={<SignUp/>}/>
      <Route path='/productpage'  element={<Productpage/>}/>
      </Routes>
      <Footer/>
      </Router>
</>
  );
}

export default App;
