import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/FirstBar';
import Homescreen from './components/homepage/MainHome';
import {Route,Routes} from 'react-router-dom';
import Cart from './Cart';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route  path = "/" element={<Homescreen/>}/>
          <Route path = "cart" element = {<Cart/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
