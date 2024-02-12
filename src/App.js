import './App.css';
import Home from './Components/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import UserDetailspage from './Components/Homepage/UserDetailspage';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/user/:userId" element={<UserDetailspage />} />
      </Routes>
    </div>
  );
}

export default App;
