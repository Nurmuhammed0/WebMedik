import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbars1 from './WebMedik/Navbars1';
import 'bootstrap/dist/css/bootstrap.min.css';
import LargeCard from './WebMedik/menu/LargeCards/LargeCard'
import Futter from './WebMedik/Futter';
import Home1 from './WebMedik/Home1';


function App() {
  return(
    <div>
      <Router>
        <Navbars1/>
          <Routes>
            <Route path='/ab/:id' element={<Home1 />}/>
            <Route path='/large/:id' element={<LargeCard />}/>
            <Route path ='/' element={<Home1 />}/>
          </Routes>
          <Futter/>

      </Router>

    </div>
);
}


export default App;