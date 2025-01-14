
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navba';
import './index.css';
import Create from './Create';
import BLogDetails from './Blogdetail';
import NotFound from './notFound';


function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <div className="content">
          
            <Routes>
                <Route path="/" element={<Home />}>
                  
                </Route>
                <Route path="/Create" element={<Create />}>
                  
                  </Route>
                  <Route path="/blogs/:id" element={<BLogDetails />}>
                  
                  </Route>
                  <Route path="*" element={<NotFound />}>
                  
                  </Route>
                </Routes>
        </div>
    </div>
 </Router>
  );
}

export default App;
