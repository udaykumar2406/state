// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Routes } from 'react-router-dom';
import Data from './component/Data'


function App() {
  return (
    <div className="App">
      <Header/>
     
      <Data/>
      
      <Footer/>
    </div>
  );
}

export default App;
