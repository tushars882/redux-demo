import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import  Details  from './pages/Details';

function App() {
  return (
    <div className="container">
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/:id' element={<Details/>}/>
    </Routes>
   </Router>
    </div>
  )
}

export default App;
