import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardPage from './page/Dashboard';
import LoginPage from './page/Login';
import HeaderCompoenent from './component/Header';
import SideBar from './component/SideBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderCompoenent />
        <div className='main d-flex'>
          <div className='sidebarWrapper'>
            <SideBar />
          </div>
          <div className='content'>
             <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
          </div>
        </div>
       
      </BrowserRouter>
    </>


  );
}

export default App;
