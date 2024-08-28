import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Homepage from './pages/Homepage';
import Catgeorypage from './pages/Catgeorypage';
import Productpage from './pages/Productpage';
import Cartpage from './pages/Cartpage';
import { Toaster } from 'react-hot-toast';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Toaster position='top-right'/>
      <Header/>
      <Routes>   
        <Route path='/' Component={Homepage}/>
        <Route path='cartpage' Component={Cartpage}/>
        <Route path='catgeorypage/:id' Component={Catgeorypage}/>
        <Route path='product/:id' Component={Productpage}/>


          </Routes>
<Footer className="  mt-8" />
    </div>
  );
}

export default App;
