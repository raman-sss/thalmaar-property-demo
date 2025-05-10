import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/page';
import Home from './pages/home/page';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div class="row">
          <div className="col-sm-12">
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </div>
        </div>


      </div>
    </Router>
  );
}

export default App;
